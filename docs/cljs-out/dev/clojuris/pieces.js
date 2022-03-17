// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('clojuris.pieces');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojuris.pieces.rotations = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up,cljs.core.cst$kw$right,cljs.core.cst$kw$down,cljs.core.cst$kw$left], null);
clojuris.pieces.pieces = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$O,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$yellow,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.cst$kw$I,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cyan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null),cljs.core.cst$kw$T,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$purple,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),cljs.core.cst$kw$S,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),cljs.core.cst$kw$Z,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.cst$kw$J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blue,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null),cljs.core.cst$kw$L,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$orange,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)], null);
clojuris.pieces.random_piece = (function clojuris$pieces$random_piece(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.rand_nth(cljs.core.keys(clojuris.pieces.pieces)),cljs.core.cst$kw$rotation,cljs.core.rand_nth(clojuris.pieces.rotations)], null);
});
clojuris.pieces.piece_config = (function clojuris$pieces$piece_config(piece){
var fexpr__11215 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(piece);
return (fexpr__11215.cljs$core$IFn$_invoke$arity$1 ? fexpr__11215.cljs$core$IFn$_invoke$arity$1(clojuris.pieces.pieces) : fexpr__11215.call(null,clojuris.pieces.pieces));
});
clojuris.pieces.color = (function clojuris$pieces$color(piece){
return cljs.core.first(clojuris.pieces.piece_config(piece));
});
clojuris.pieces.base_offsets = (function clojuris$pieces$base_offsets(piece){
return cljs.core.second(clojuris.pieces.piece_config(piece));
});
clojuris.pieces.next_rotation = (function clojuris$pieces$next_rotation(rotation){
return cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11216_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__11216_SHARP_,rotation);
}),cljs.core.cycle(clojuris.pieces.rotations)));
});
clojuris.pieces.rotate = (function clojuris$pieces$rotate(piece){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,cljs.core.cst$kw$rotation,clojuris.pieces.next_rotation(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(piece)));
});
clojuris.pieces.rotate_offset = (function clojuris$pieces$rotate_offset(p__11217){
var vec__11218 = p__11217;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11218,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11218,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(- x)], null);
});
clojuris.pieces.rotate_once = (function clojuris$pieces$rotate_once(offsets){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojuris.pieces.rotate_offset,offsets);
});
clojuris.pieces.offsets_for_rotation = (function clojuris$pieces$offsets_for_rotation(offsets,rotation){
return cljs.core.second(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11221_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rotation,cljs.core.first(p1__11221_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,clojuris.pieces.rotations,cljs.core.iterate(clojuris.pieces.rotate_once,offsets)))));
});
clojuris.pieces.offsets = (function clojuris$pieces$offsets(piece){
return clojuris.pieces.offsets_for_rotation(clojuris.pieces.base_offsets(piece),cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(piece));
});
clojuris.pieces.positions_at = (function clojuris$pieces$positions_at(piece,p__11223){
var vec__11224 = p__11223;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11224,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11224,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11222_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(x + cljs.core.first(p1__11222_SHARP_)),(y + cljs.core.second(p1__11222_SHARP_))],null));
}),clojuris.pieces.offsets(piece));
});
