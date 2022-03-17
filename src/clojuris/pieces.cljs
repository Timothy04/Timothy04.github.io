(ns clojuris.pieces)

; piece {:name :T :rotation :up}

(def rotations [:up :right :down :left])

(def pieces {:O [:yellow [[0 0] [0 1] [1 0] [1 1]]]
             :I [:cyan [[0 -1] [0 0] [0 1] [0 2]]]
             :T [:purple [[-1 0] [0 0] [1 0] [0 1]]]
             :S [:green [[0 0] [1 0] [-1 1] [0 1]]]
             :Z [:red [[-1 0] [0 0] [0 1] [1 1]]]
             :J [:blue [[0 0] [1 0] [0 1] [0 2]]]
             :L [:orange [[-1 0] [0 0] [0 1] [0 2]]]})

(defn random-piece []
  {:name (rand-nth (keys pieces))
   :rotation (rand-nth rotations)})

(defn piece-config [piece]
  ((:name piece) pieces))

(defn color [piece]
  (first (piece-config piece)))

(defn base-offsets [piece]
  (second (piece-config piece)))

(defn next-rotation [rotation]
  (->> (cycle rotations)
       (drop-while #(not= % rotation))
       second))

(defn rotate [piece]
  (assoc piece :rotation (next-rotation (:rotation piece))))

(defn rotate-offset [[x y]]
  [y (- x)])

(defn rotate-once [offsets]
  (mapv rotate-offset offsets))

(defn offsets-for-rotation [offsets rotation]
  (->> (iterate rotate-once offsets)
       (map vector rotations)
       (drop-while #(not= rotation (first %)))
       first
       second))

(defn offsets [piece]
  (offsets-for-rotation (base-offsets piece) (:rotation piece)))

(defn positions-at [piece [x y]]
  (mapv #(vector (+ x (first %)) (+ y (second %))) (offsets piece)))
