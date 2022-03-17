// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11013 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11014 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11014);

try{var G__11015 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__11016 = container;
var G__11017 = (function (){
var _STAR_always_update_STAR__orig_val__11018 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11019 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11019);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11018);
}});
return reagent.dom.global$module$react_dom.render(G__11015,G__11016,G__11017);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11013);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11021 = arguments.length;
switch (G__11021) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11023_11027 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__11024_11028 = null;
var count__11025_11029 = (0);
var i__11026_11030 = (0);
while(true){
if((i__11026_11030 < count__11025_11029)){
var v_11031 = chunk__11024_11028.cljs$core$IIndexed$_nth$arity$2(null,i__11026_11030);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_11031);


var G__11032 = seq__11023_11027;
var G__11033 = chunk__11024_11028;
var G__11034 = count__11025_11029;
var G__11035 = (i__11026_11030 + (1));
seq__11023_11027 = G__11032;
chunk__11024_11028 = G__11033;
count__11025_11029 = G__11034;
i__11026_11030 = G__11035;
continue;
} else {
var temp__5720__auto___11036 = cljs.core.seq(seq__11023_11027);
if(temp__5720__auto___11036){
var seq__11023_11037__$1 = temp__5720__auto___11036;
if(cljs.core.chunked_seq_QMARK_(seq__11023_11037__$1)){
var c__4556__auto___11038 = cljs.core.chunk_first(seq__11023_11037__$1);
var G__11039 = cljs.core.chunk_rest(seq__11023_11037__$1);
var G__11040 = c__4556__auto___11038;
var G__11041 = cljs.core.count(c__4556__auto___11038);
var G__11042 = (0);
seq__11023_11027 = G__11039;
chunk__11024_11028 = G__11040;
count__11025_11029 = G__11041;
i__11026_11030 = G__11042;
continue;
} else {
var v_11043 = cljs.core.first(seq__11023_11037__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_11043);


var G__11044 = cljs.core.next(seq__11023_11037__$1);
var G__11045 = null;
var G__11046 = (0);
var G__11047 = (0);
seq__11023_11027 = G__11044;
chunk__11024_11028 = G__11045;
count__11025_11029 = G__11046;
i__11026_11030 = G__11047;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
