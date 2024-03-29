// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10356__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10357__i = 0, G__10357__a = new Array(arguments.length -  0);
while (G__10357__i < G__10357__a.length) {G__10357__a[G__10357__i] = arguments[G__10357__i + 0]; ++G__10357__i;}
  args = new cljs.core.IndexedSeq(G__10357__a,0,null);
} 
return G__10356__delegate.call(this,args);};
G__10356.cljs$lang$maxFixedArity = 0;
G__10356.cljs$lang$applyTo = (function (arglist__10358){
var args = cljs.core.seq(arglist__10358);
return G__10356__delegate(args);
});
G__10356.cljs$core$IFn$_invoke$arity$variadic = G__10356__delegate;
return G__10356;
})()
);

(o.error = (function() { 
var G__10359__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10360__i = 0, G__10360__a = new Array(arguments.length -  0);
while (G__10360__i < G__10360__a.length) {G__10360__a[G__10360__i] = arguments[G__10360__i + 0]; ++G__10360__i;}
  args = new cljs.core.IndexedSeq(G__10360__a,0,null);
} 
return G__10359__delegate.call(this,args);};
G__10359.cljs$lang$maxFixedArity = 0;
G__10359.cljs$lang$applyTo = (function (arglist__10361){
var args = cljs.core.seq(arglist__10361);
return G__10359__delegate(args);
});
G__10359.cljs$core$IFn$_invoke$arity$variadic = G__10359__delegate;
return G__10359;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
