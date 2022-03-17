(ns ^:figwheel-hooks clojuris.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]
    [clojuris.pieces :as piece]))

;; Defaults

(def initial-pos [2 4])

(defn empty-board []
  (vec (repeat 24 (vec (repeat 10 :empty)))))

(defonce app-state (atom {:board     (empty-board)
                          :piece     nil
                          :position  initial-pos
                          :game-over true}))

;; Collision detection

(defn pos-out-of-bounds? [board [x y]]
  (or (neg? x)
    (neg? y)
    (>= x (count board))
    (>= y (count (first board)))))

(defn out-of-bounds? [board positions]
  (some #(pos-out-of-bounds? board %) positions))

(defn already-present? [board pos]
  (not= :empty (get-in board pos)))

(defn piece-collision? [board positions new-positions]
  (let [to-check (clojure.set/difference (set new-positions) (set positions))]
    (some #(already-present? board %) to-check)))

(defn collision? [board positions new-positions]
  (or (out-of-bounds? board new-positions)
    (piece-collision? board positions new-positions)))

;; Controls

(defn new-board [board positions color]
  (reduce #(assoc-in %1 %2 color) board positions))

(defn full-row? [row]
  (every? #(not= :empty %) row))

(defn check-full-rows []
  (let [board      (:board @app-state)
        board-rest (filterv #(not (full-row? %)) board)
        removed    (- (count board) (count board-rest))
        blank-rows (vec (repeat removed (vec (repeat 10 :empty))))
        new-board  (into blank-rows board-rest)]
    (if (pos? removed)
      (swap! app-state assoc :board new-board))))

(defn spawn-piece []
  (let [piece     (piece/random-piece)
        positions (piece/positions-at piece initial-pos)
        board     (:board @app-state)
        new-board (new-board board positions (piece/color piece))
        game-over (piece-collision? board [] positions)]
    (swap! app-state assoc :position initial-pos
      :piece piece
      :board new-board
      :game-over game-over)))

(defn move-piece [new-piece-f new-position-f]
  (if (not (:game-over @app-state))
    (let [{board    :board
           piece    :piece
           position :position} @app-state
          new-piece     (new-piece-f piece)
          new-color     (piece/color new-piece)
          new-position  (new-position-f position)
          positions     (piece/positions-at piece position)
          new-positions (piece/positions-at new-piece new-position)]
      (if (collision? board positions new-positions)
        false
        (swap! app-state assoc
          :piece new-piece
          :position new-position
          :board (-> board
                   (new-board positions :empty)
                   (new-board new-positions new-color)))))))

(defn rotate-piece []
  (move-piece piece/rotate identity))

(defn pos-down [[x y]]
  [(inc x) y])

(defn move-piece-down []
  (if (not (move-piece identity pos-down))
    (do
      (check-full-rows)
      (spawn-piece))))

(defn move-piece-right []
  (move-piece identity #(vector (first %) (inc (second %)))))

(defn move-piece-left []
  (move-piece identity #(vector (first %) (dec (second %)))))

(defn will-collide? [board piece pos new-pos]
  (collision? board
    (piece/positions-at piece pos)
    (piece/positions-at piece new-pos)))

(defn get-drop-pos [board piece position]
  (->> (iterate pos-down position)
    (take-while #(not (will-collide? board piece position %)))
    last))

(defn drop-piece []
  (let [{board :board
         piece :piece} @app-state]
    (move-piece identity #(get-drop-pos board piece %))
    (check-full-rows)
    (spawn-piece)))

;; Graphics

(defn board-borders []
  [:g {:stroke       :blue
       :stroke-width 1}
   [:line {:x1 -0.5 :y1 -0.5 :x2 10.5 :y2 -0.5}]
   [:line {:x1 -0.5 :y1 24.5 :x2 10.5 :y2 24.5}]
   [:line {:x1 -0.5 :y1 -0.5 :x2 -0.5 :y2 24.5}]
   [:line {:x1 10.5 :y1 -0.5 :x2 10.5 :y2 24.5}]])

(defn draw-shadow [board piece position]
  [:g {:stroke       :black
       :stroke-width 0.1}
   (for [[y x] (piece/positions-at piece (get-drop-pos board piece position))]
     ^{:key (str x y)}
     [:rect {:fill   :gray
             :opacity 0.2
             :x      x
             :y      y
             :width  1
             :height 1
             :rx     0.1
             :ry     1}])])

(defn draw-pieces [board]
  [:g {:stroke       :black
       :stroke-width 0.1}
   (for [x (range 10)
         y (range 24)
         :let [color (get-in board [y x])]
         :when (not= :empty color)]
     ^{:key (str x y)}
     [:rect {:fill   color
             :x      x
             :y      y
             :width  1
             :height 1
             :rx     0.1
             :ry     1}])])

(defn draw-game-over []
  [:g
   [:rect {:fill   :white
           :x      1.5
           :y      11
           :width  7
           :height 1.3}]
   [:text {:font-size 1
           :x         2
           :y         12}
    "GAME OVER"]])

(defn draw-game [board piece position game-over]
  [:div
   [:svg {:view-box "-0.5 -0.5 11 25"
          :width    220
          :height   500}
    (board-borders)
    (if piece (draw-shadow board piece position))
    (draw-pieces board)
    (if game-over (draw-game-over))]])

;; App definition

(defn game []
  [draw-game
   (:board @app-state)
   (:piece @app-state)
   (:position @app-state)
   (:game-over @app-state)])

(defn new-game []
  (swap! app-state assoc :board (empty-board)
    :piece nil
    :position initial-pos
    :game-over false)
  (spawn-piece))

(defn app []
  [:div
   [:h1 "Clojuris"]
   [:button {:on-click new-game
             :disabled (not (:game-over @app-state))}
    "New game !"]
   [:br]
   [:br]
   [game]])

(defn tick []
  (if (not (:game-over @app-state))
    (move-piece-down)))

(defonce tick-update (js/setInterval tick 1000))

;; React

(defn mount-app []
  (when-let [el (gdom/getElement "app")]
    (rdom/render [app] el)))

(mount-app)

;; Handle key presses

(def key-names
  {37 :left
   38 :up
   39 :right
   40 :down
   32 :space})

(defn key-name [e]
  (-> e .-keyCode key-names))

(defn key-down [e]
  (case (key-name e)
    :left (do (move-piece-left)
              (.preventDefault e))
    :right (do (move-piece-right)
               (.preventDefault e))
    :up (do (rotate-piece)
            (.preventDefault e))
    :down (do (move-piece-down)
              (.preventDefault e))
    :space (do (drop-piece)
               (.preventDefault e))))

(.addEventListener js/window "keydown" key-down)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

; TODO: show next piece
