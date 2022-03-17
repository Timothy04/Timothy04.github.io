// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('clojuris.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojuris.pieces');
clojuris.core.initial_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null);
clojuris.core.empty_board = (function clojuris$core$empty_board(){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((24),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),cljs.core.cst$kw$empty))));
});
if((typeof clojuris !== 'undefined') && (typeof clojuris.core !== 'undefined') && (typeof clojuris.core.app_state !== 'undefined')){
} else {
clojuris.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$board,clojuris.core.empty_board(),cljs.core.cst$kw$piece,null,cljs.core.cst$kw$position,clojuris.core.initial_pos,cljs.core.cst$kw$game_DASH_over,true], null));
}
clojuris.core.pos_out_of_bounds_QMARK_ = (function clojuris$core$pos_out_of_bounds_QMARK_(board,p__11229){
var vec__11230 = p__11229;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11230,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11230,(1),null);
return (((x < (0))) || ((y < (0))) || ((x >= cljs.core.count(board))) || ((y >= cljs.core.count(cljs.core.first(board)))));
});
clojuris.core.out_of_bounds_QMARK_ = (function clojuris$core$out_of_bounds_QMARK_(board,positions){
return cljs.core.some((function (p1__11233_SHARP_){
return clojuris.core.pos_out_of_bounds_QMARK_(board,p1__11233_SHARP_);
}),positions);
});
clojuris.core.already_present_QMARK_ = (function clojuris$core$already_present_QMARK_(board,pos){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$empty,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,pos));
});
clojuris.core.piece_collision_QMARK_ = (function clojuris$core$piece_collision_QMARK_(board,positions,new_positions){
var to_check = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_positions),cljs.core.set(positions));
return cljs.core.some((function (p1__11234_SHARP_){
return clojuris.core.already_present_QMARK_(board,p1__11234_SHARP_);
}),to_check);
});
clojuris.core.collision_QMARK_ = (function clojuris$core$collision_QMARK_(board,positions,new_positions){
var or__4126__auto__ = clojuris.core.out_of_bounds_QMARK_(board,new_positions);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojuris.core.piece_collision_QMARK_(board,positions,new_positions);
}
});
clojuris.core.new_board = (function clojuris$core$new_board(board,positions,color){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11235_SHARP_,p2__11236_SHARP_){
return cljs.core.assoc_in(p1__11235_SHARP_,p2__11236_SHARP_,color);
}),board,positions);
});
clojuris.core.full_row_QMARK_ = (function clojuris$core$full_row_QMARK_(row){
return cljs.core.every_QMARK_((function (p1__11237_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$empty,p1__11237_SHARP_);
}),row);
});
clojuris.core.check_full_rows = (function clojuris$core$check_full_rows(){
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state));
var board_rest = cljs.core.filterv((function (p1__11238_SHARP_){
return (!(clojuris.core.full_row_QMARK_(p1__11238_SHARP_)));
}),board);
var removed = (cljs.core.count(board) - cljs.core.count(board_rest));
var blank_rows = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(removed,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),cljs.core.cst$kw$empty))));
var new_board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(blank_rows,board_rest);
if((removed > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clojuris.core.app_state,cljs.core.assoc,cljs.core.cst$kw$board,new_board);
} else {
return null;
}
});
clojuris.core.spawn_piece = (function clojuris$core$spawn_piece(){
var piece = clojuris.pieces.random_piece();
var positions = clojuris.pieces.positions_at(piece,clojuris.core.initial_pos);
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state));
var new_board = clojuris.core.new_board(board,positions,clojuris.pieces.color(piece));
var game_over = clojuris.core.piece_collision_QMARK_(board,cljs.core.PersistentVector.EMPTY,positions);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clojuris.core.app_state,cljs.core.assoc,cljs.core.cst$kw$position,clojuris.core.initial_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$piece,piece,cljs.core.cst$kw$board,new_board,cljs.core.cst$kw$game_DASH_over,game_over], 0));
});
clojuris.core.move_piece = (function clojuris$core$move_piece(new_piece_f,new_position_f){
if(cljs.core.not(cljs.core.cst$kw$game_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)))){
var map__11239 = cljs.core.deref(clojuris.core.app_state);
var map__11239__$1 = (((((!((map__11239 == null))))?(((((map__11239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11239):map__11239);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$board);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$piece);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,cljs.core.cst$kw$position);
var new_piece = (new_piece_f.cljs$core$IFn$_invoke$arity$1 ? new_piece_f.cljs$core$IFn$_invoke$arity$1(piece) : new_piece_f.call(null,piece));
var new_color = clojuris.pieces.color(new_piece);
var new_position = (new_position_f.cljs$core$IFn$_invoke$arity$1 ? new_position_f.cljs$core$IFn$_invoke$arity$1(position) : new_position_f.call(null,position));
var positions = clojuris.pieces.positions_at(piece,position);
var new_positions = clojuris.pieces.positions_at(new_piece,new_position);
if(cljs.core.truth_(clojuris.core.collision_QMARK_(board,positions,new_positions))){
return false;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clojuris.core.app_state,cljs.core.assoc,cljs.core.cst$kw$piece,new_piece,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,new_position,cljs.core.cst$kw$board,clojuris.core.new_board(clojuris.core.new_board(board,positions,cljs.core.cst$kw$empty),new_positions,new_color)], 0));
}
} else {
return null;
}
});
clojuris.core.rotate_piece = (function clojuris$core$rotate_piece(){
return clojuris.core.move_piece(clojuris.pieces.rotate,cljs.core.identity);
});
clojuris.core.pos_down = (function clojuris$core$pos_down(p__11241){
var vec__11242 = p__11241;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11242,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11242,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
});
clojuris.core.move_piece_down = (function clojuris$core$move_piece_down(){
if(cljs.core.not(clojuris.core.move_piece(cljs.core.identity,clojuris.core.pos_down))){
clojuris.core.check_full_rows();

return clojuris.core.spawn_piece();
} else {
return null;
}
});
clojuris.core.move_piece_right = (function clojuris$core$move_piece_right(){
return clojuris.core.move_piece(cljs.core.identity,(function (p1__11245_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__11245_SHARP_),(cljs.core.second(p1__11245_SHARP_) + (1))],null));
}));
});
clojuris.core.move_piece_left = (function clojuris$core$move_piece_left(){
return clojuris.core.move_piece(cljs.core.identity,(function (p1__11246_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__11246_SHARP_),(cljs.core.second(p1__11246_SHARP_) - (1))],null));
}));
});
clojuris.core.will_collide_QMARK_ = (function clojuris$core$will_collide_QMARK_(board,piece,pos,new_pos){
return clojuris.core.collision_QMARK_(board,clojuris.pieces.positions_at(piece,pos),clojuris.pieces.positions_at(piece,new_pos));
});
clojuris.core.get_drop_pos = (function clojuris$core$get_drop_pos(board,piece,position){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11247_SHARP_){
return cljs.core.not(clojuris.core.will_collide_QMARK_(board,piece,position,p1__11247_SHARP_));
}),cljs.core.iterate(clojuris.core.pos_down,position)));
});
clojuris.core.drop_piece = (function clojuris$core$drop_piece(){
var map__11249 = cljs.core.deref(clojuris.core.app_state);
var map__11249__$1 = (((((!((map__11249 == null))))?(((((map__11249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11249):map__11249);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11249__$1,cljs.core.cst$kw$board);
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11249__$1,cljs.core.cst$kw$piece);
clojuris.core.move_piece(cljs.core.identity,(function (p1__11248_SHARP_){
return clojuris.core.get_drop_pos(board,piece,p1__11248_SHARP_);
}));

clojuris.core.check_full_rows();

return clojuris.core.spawn_piece();
});
clojuris.core.board_borders = (function clojuris$core$board_borders(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,cljs.core.cst$kw$blue,cljs.core.cst$kw$stroke_DASH_width,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,-0.5,cljs.core.cst$kw$y1,-0.5,cljs.core.cst$kw$x2,10.5,cljs.core.cst$kw$y2,-0.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,-0.5,cljs.core.cst$kw$y1,24.5,cljs.core.cst$kw$x2,10.5,cljs.core.cst$kw$y2,24.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,-0.5,cljs.core.cst$kw$y1,-0.5,cljs.core.cst$kw$x2,-0.5,cljs.core.cst$kw$y2,24.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,10.5,cljs.core.cst$kw$y1,-0.5,cljs.core.cst$kw$x2,10.5,cljs.core.cst$kw$y2,24.5], null)], null)], null);
});
clojuris.core.draw_shadow = (function clojuris$core$draw_shadow(board,piece,position){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,cljs.core.cst$kw$black,cljs.core.cst$kw$stroke_DASH_width,0.1], null),(function (){var iter__4529__auto__ = (function clojuris$core$draw_shadow_$_iter__11251(s__11252){
return (new cljs.core.LazySeq(null,(function (){
var s__11252__$1 = s__11252;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11252__$1);
if(temp__5720__auto__){
var s__11252__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11252__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__11252__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__11254 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__11253 = (0);
while(true){
if((i__11253 < size__4528__auto__)){
var vec__11255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__11253);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11255,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11255,(1),null);
cljs.core.chunk_append(b__11254,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$fill,cljs.core.cst$kw$gray,cljs.core.cst$kw$opacity,0.2,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$rx,0.1,cljs.core.cst$kw$ry,(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)));

var G__11261 = (i__11253 + (1));
i__11253 = G__11261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11254),clojuris$core$draw_shadow_$_iter__11251(cljs.core.chunk_rest(s__11252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11254),null);
}
} else {
var vec__11258 = cljs.core.first(s__11252__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11258,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11258,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$fill,cljs.core.cst$kw$gray,cljs.core.cst$kw$opacity,0.2,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$rx,0.1,cljs.core.cst$kw$ry,(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)),clojuris$core$draw_shadow_$_iter__11251(cljs.core.rest(s__11252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clojuris.pieces.positions_at(piece,clojuris.core.get_drop_pos(board,piece,position)));
})()], null);
});
clojuris.core.draw_pieces = (function clojuris$core$draw_pieces(board){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,cljs.core.cst$kw$black,cljs.core.cst$kw$stroke_DASH_width,0.1], null),(function (){var iter__4529__auto__ = (function clojuris$core$draw_pieces_$_iter__11262(s__11263){
return (new cljs.core.LazySeq(null,(function (){
var s__11263__$1 = s__11263;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11263__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__11263__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function clojuris$core$draw_pieces_$_iter__11262_$_iter__11264(s__11265){
return (new cljs.core.LazySeq(null,((function (s__11263__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__11265__$1 = s__11265;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__11265__$1);
if(temp__5720__auto____$1){
var s__11265__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11265__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__11265__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__11267 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__11266 = (0);
while(true){
if((i__11266 < size__4528__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__11266);
var color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$empty,color)){
cljs.core.chunk_append(b__11267,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fill,color,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$rx,0.1,cljs.core.cst$kw$ry,(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)));

var G__11268 = (i__11266 + (1));
i__11266 = G__11268;
continue;
} else {
var G__11269 = (i__11266 + (1));
i__11266 = G__11269;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11267),clojuris$core$draw_pieces_$_iter__11262_$_iter__11264(cljs.core.chunk_rest(s__11265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11267),null);
}
} else {
var y = cljs.core.first(s__11265__$2);
var color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$empty,color)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fill,color,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$rx,0.1,cljs.core.cst$kw$ry,(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)),clojuris$core$draw_pieces_$_iter__11262_$_iter__11264(cljs.core.rest(s__11265__$2)));
} else {
var G__11270 = cljs.core.rest(s__11265__$2);
s__11265__$1 = G__11270;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__11263__$1,x,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__11263__$1,x,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((24))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,clojuris$core$draw_pieces_$_iter__11262(cljs.core.rest(s__11263__$1)));
} else {
var G__11271 = cljs.core.rest(s__11263__$1);
s__11263__$1 = G__11271;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()], null);
});
clojuris.core.draw_game_over = (function clojuris$core$draw_game_over(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fill,cljs.core.cst$kw$white,cljs.core.cst$kw$x,1.5,cljs.core.cst$kw$y,(11),cljs.core.cst$kw$width,(7),cljs.core.cst$kw$height,1.3], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,(1),cljs.core.cst$kw$x,(2),cljs.core.cst$kw$y,(12)], null),"GAME OVER"], null)], null);
});
clojuris.core.draw_game = (function clojuris$core$draw_game(board,piece,position,game_over){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,"-0.5 -0.5 11 25",cljs.core.cst$kw$width,(220),cljs.core.cst$kw$height,(500)], null),clojuris.core.board_borders(),(cljs.core.truth_(piece)?clojuris.core.draw_shadow(board,piece,position):null),clojuris.core.draw_pieces(board),(cljs.core.truth_(game_over)?clojuris.core.draw_game_over():null)], null)], null);
});
clojuris.core.game = (function clojuris$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojuris.core.draw_game,cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)),cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)),cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)),cljs.core.cst$kw$game_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state))], null);
});
clojuris.core.new_game = (function clojuris$core$new_game(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clojuris.core.app_state,cljs.core.assoc,cljs.core.cst$kw$board,clojuris.core.empty_board(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$piece,null,cljs.core.cst$kw$position,clojuris.core.initial_pos,cljs.core.cst$kw$game_DASH_over,false], 0));

return clojuris.core.spawn_piece();
});
clojuris.core.app = (function clojuris$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Clojuris"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,clojuris.core.new_game,cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$game_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)))], null),"New game !"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojuris.core.game], null)], null);
});
clojuris.core.tick = (function clojuris$core$tick(){
if(cljs.core.not(cljs.core.cst$kw$game_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clojuris.core.app_state)))){
return clojuris.core.move_piece_down();
} else {
return null;
}
});
if((typeof clojuris !== 'undefined') && (typeof clojuris.core !== 'undefined') && (typeof clojuris.core.tick_update !== 'undefined')){
} else {
clojuris.core.tick_update = setInterval(clojuris.core.tick,(1000));
}
clojuris.core.mount_app = (function clojuris$core$mount_app(){
var temp__5720__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojuris.core.app], null),el);
} else {
return null;
}
});
clojuris.core.mount_app();
clojuris.core.key_names = new cljs.core.PersistentArrayMap(null, 5, [(37),cljs.core.cst$kw$left,(38),cljs.core.cst$kw$up,(39),cljs.core.cst$kw$right,(40),cljs.core.cst$kw$down,(32),cljs.core.cst$kw$space], null);
clojuris.core.key_name = (function clojuris$core$key_name(e){
var G__11272 = e.keyCode;
return (clojuris.core.key_names.cljs$core$IFn$_invoke$arity$1 ? clojuris.core.key_names.cljs$core$IFn$_invoke$arity$1(G__11272) : clojuris.core.key_names.call(null,G__11272));
});
clojuris.core.key_down = (function clojuris$core$key_down(e){
var G__11273 = clojuris.core.key_name(e);
var G__11273__$1 = (((G__11273 instanceof cljs.core.Keyword))?G__11273.fqn:null);
switch (G__11273__$1) {
case "left":
clojuris.core.move_piece_left();

return e.preventDefault();

break;
case "right":
clojuris.core.move_piece_right();

return e.preventDefault();

break;
case "up":
clojuris.core.rotate_piece();

return e.preventDefault();

break;
case "down":
clojuris.core.move_piece_down();

return e.preventDefault();

break;
case "space":
clojuris.core.drop_piece();

return e.preventDefault();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11273__$1)].join('')));

}
});
window.addEventListener("keydown",clojuris.core.key_down);
clojuris.core.on_reload = (function clojuris$core$on_reload(){
return clojuris.core.mount_app();
});
