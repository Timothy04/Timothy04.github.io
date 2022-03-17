// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__18442_SHARP_){
var k = f.call(null,p1__18442_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18443){
var vec__18444 = p__18443;
var k = cljs.core.nth.call(null,vec__18444,(0),null);
var v = cljs.core.nth.call(null,vec__18444,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18448 = arguments.length;
var i__4737__auto___18449 = (0);
while(true){
if((i__4737__auto___18449 < len__4736__auto___18448)){
args__4742__auto__.push((arguments[i__4737__auto___18449]));

var G__18450 = (i__4737__auto___18449 + (1));
i__4737__auto___18449 = G__18450;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq18447){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18447));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__18453){
var map__18454 = p__18453;
var map__18454__$1 = (((((!((map__18454 == null))))?(((((map__18454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18454):map__18454);
var message = cljs.core.get.call(null,map__18454__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__18454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__18452_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18452_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__18451_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__18451_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__18457){
var map__18458 = p__18457;
var map__18458__$1 = (((((!((map__18458 == null))))?(((((map__18458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18458):map__18458);
var message_data = map__18458__$1;
var message = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__18460 = file_excerpt;
var map__18460__$1 = (((((!((map__18460 == null))))?(((((map__18460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18460):map__18460);
var start_line = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__18461 = cljs.core.split_with.call(null,(function (p1__18456_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__18456_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__18461,(0),null);
var end = cljs.core.nth.call(null,vec__18461,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__18465){
var map__18466 = p__18465;
var map__18466__$1 = (((((!((map__18466 == null))))?(((((map__18466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18466):map__18466);
var file = cljs.core.get.call(null,map__18466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__18468 = "";
var G__18468__$1 = (cljs.core.truth_(file)?[G__18468,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__18468);
var G__18468__$2 = (cljs.core.truth_(line)?[G__18468__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__18468__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__18468__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__18468__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_18523 = (new goog.debug.Console());
var G__18475_18524 = c_18523.getFormatter();
goog.object.set(G__18475_18524,"showAbsoluteTime",false);

goog.object.set(G__18475_18524,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_18523);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__18476 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__18476,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__18476;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_18525 = cljs.core.atom.call(null,(0));
var promise_chain_18526 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_18525) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_18525,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_18526.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__18477 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__18478 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__18478);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__18479 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__18480 = null;
var count__18481 = (0);
var i__18482 = (0);
while(true){
if((i__18482 < count__18481)){
var w = cljs.core._nth.call(null,chunk__18480,i__18482);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__18527 = seq__18479;
var G__18528 = chunk__18480;
var G__18529 = count__18481;
var G__18530 = (i__18482 + (1));
seq__18479 = G__18527;
chunk__18480 = G__18528;
count__18481 = G__18529;
i__18482 = G__18530;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18479);
if(temp__5720__auto__){
var seq__18479__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18479__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18479__$1);
var G__18531 = cljs.core.chunk_rest.call(null,seq__18479__$1);
var G__18532 = c__4556__auto__;
var G__18533 = cljs.core.count.call(null,c__4556__auto__);
var G__18534 = (0);
seq__18479 = G__18531;
chunk__18480 = G__18532;
count__18481 = G__18533;
i__18482 = G__18534;
continue;
} else {
var w = cljs.core.first.call(null,seq__18479__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__18535 = cljs.core.next.call(null,seq__18479__$1);
var G__18536 = null;
var G__18537 = (0);
var G__18538 = (0);
seq__18479 = G__18535;
chunk__18480 = G__18536;
count__18481 = G__18537;
i__18482 = G__18538;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__18477);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_18526.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__18483 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__18484 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__18484);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__18483);
}}));
} else {
return promise_chain_18526.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18539 = arguments.length;
var i__4737__auto___18540 = (0);
while(true){
if((i__4737__auto___18540 < len__4736__auto___18539)){
args__4742__auto__.push((arguments[i__4737__auto___18540]));

var G__18541 = (i__4737__auto___18540 + (1));
i__4737__auto___18540 = G__18541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__18487){
var vec__18488 = p__18487;
var n = cljs.core.nth.call(null,vec__18488,(0),null);
var mdata = cljs.core.nth.call(null,vec__18488,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__18491 = cljs.core.seq.call(null,hooks);
var chunk__18492 = null;
var count__18493 = (0);
var i__18494 = (0);
while(true){
if((i__18494 < count__18493)){
var vec__18501 = cljs.core._nth.call(null,chunk__18492,i__18494);
var n = cljs.core.nth.call(null,vec__18501,(0),null);
var f = cljs.core.nth.call(null,vec__18501,(1),null);
var temp__5718__auto___18542 = cljs.core.reduce.call(null,((function (seq__18491,chunk__18492,count__18493,i__18494,vec__18501,n,f,hooks){
return (function (p1__18469_SHARP_,p2__18470_SHARP_){
if(cljs.core.truth_(p1__18469_SHARP_)){
return goog.object.get(p1__18469_SHARP_,p2__18470_SHARP_);
} else {
return null;
}
});})(seq__18491,chunk__18492,count__18493,i__18494,vec__18501,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___18542)){
var hook_18543 = temp__5718__auto___18542;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_18543,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__18544 = seq__18491;
var G__18545 = chunk__18492;
var G__18546 = count__18493;
var G__18547 = (i__18494 + (1));
seq__18491 = G__18544;
chunk__18492 = G__18545;
count__18493 = G__18546;
i__18494 = G__18547;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18491);
if(temp__5720__auto__){
var seq__18491__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18491__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18491__$1);
var G__18548 = cljs.core.chunk_rest.call(null,seq__18491__$1);
var G__18549 = c__4556__auto__;
var G__18550 = cljs.core.count.call(null,c__4556__auto__);
var G__18551 = (0);
seq__18491 = G__18548;
chunk__18492 = G__18549;
count__18493 = G__18550;
i__18494 = G__18551;
continue;
} else {
var vec__18504 = cljs.core.first.call(null,seq__18491__$1);
var n = cljs.core.nth.call(null,vec__18504,(0),null);
var f = cljs.core.nth.call(null,vec__18504,(1),null);
var temp__5718__auto___18552 = cljs.core.reduce.call(null,((function (seq__18491,chunk__18492,count__18493,i__18494,vec__18504,n,f,seq__18491__$1,temp__5720__auto__,hooks){
return (function (p1__18469_SHARP_,p2__18470_SHARP_){
if(cljs.core.truth_(p1__18469_SHARP_)){
return goog.object.get(p1__18469_SHARP_,p2__18470_SHARP_);
} else {
return null;
}
});})(seq__18491,chunk__18492,count__18493,i__18494,vec__18504,n,f,seq__18491__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___18552)){
var hook_18553 = temp__5718__auto___18552;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_18553,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__18554 = cljs.core.next.call(null,seq__18491__$1);
var G__18555 = null;
var G__18556 = (0);
var G__18557 = (0);
seq__18491 = G__18554;
chunk__18492 = G__18555;
count__18493 = G__18556;
i__18494 = G__18557;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq18485){
var G__18486 = cljs.core.first.call(null,seq18485);
var seq18485__$1 = cljs.core.next.call(null,seq18485);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18486,seq18485__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18507){
var vec__18508 = p__18507;
var k = cljs.core.nth.call(null,vec__18508,(0),null);
var v = cljs.core.nth.call(null,vec__18508,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__18471_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__18471_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__18471_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__18472_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__18472_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__18473_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__18473_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__18511_18558 = cljs.core.seq.call(null,to_reload);
var chunk__18512_18559 = null;
var count__18513_18560 = (0);
var i__18514_18561 = (0);
while(true){
if((i__18514_18561 < count__18513_18560)){
var ns_18562 = cljs.core._nth.call(null,chunk__18512_18559,i__18514_18561);
goog.require(cljs.core.name.call(null,ns_18562),true);


var G__18563 = seq__18511_18558;
var G__18564 = chunk__18512_18559;
var G__18565 = count__18513_18560;
var G__18566 = (i__18514_18561 + (1));
seq__18511_18558 = G__18563;
chunk__18512_18559 = G__18564;
count__18513_18560 = G__18565;
i__18514_18561 = G__18566;
continue;
} else {
var temp__5720__auto___18567 = cljs.core.seq.call(null,seq__18511_18558);
if(temp__5720__auto___18567){
var seq__18511_18568__$1 = temp__5720__auto___18567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18511_18568__$1)){
var c__4556__auto___18569 = cljs.core.chunk_first.call(null,seq__18511_18568__$1);
var G__18570 = cljs.core.chunk_rest.call(null,seq__18511_18568__$1);
var G__18571 = c__4556__auto___18569;
var G__18572 = cljs.core.count.call(null,c__4556__auto___18569);
var G__18573 = (0);
seq__18511_18558 = G__18570;
chunk__18512_18559 = G__18571;
count__18513_18560 = G__18572;
i__18514_18561 = G__18573;
continue;
} else {
var ns_18574 = cljs.core.first.call(null,seq__18511_18568__$1);
goog.require(cljs.core.name.call(null,ns_18574),true);


var G__18575 = cljs.core.next.call(null,seq__18511_18568__$1);
var G__18576 = null;
var G__18577 = (0);
var G__18578 = (0);
seq__18511_18558 = G__18575;
chunk__18512_18559 = G__18576;
count__18513_18560 = G__18577;
i__18514_18561 = G__18578;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_18579 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_18579);
} else {
setTimeout(after_reload_fn_18579,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__18515 = cljs.core.seq.call(null,warnings);
var chunk__18516 = null;
var count__18517 = (0);
var i__18518 = (0);
while(true){
if((i__18518 < count__18517)){
var warning = cljs.core._nth.call(null,chunk__18516,i__18518);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__18580 = seq__18515;
var G__18581 = chunk__18516;
var G__18582 = count__18517;
var G__18583 = (i__18518 + (1));
seq__18515 = G__18580;
chunk__18516 = G__18581;
count__18517 = G__18582;
i__18518 = G__18583;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18515);
if(temp__5720__auto__){
var seq__18515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18515__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18515__$1);
var G__18584 = cljs.core.chunk_rest.call(null,seq__18515__$1);
var G__18585 = c__4556__auto__;
var G__18586 = cljs.core.count.call(null,c__4556__auto__);
var G__18587 = (0);
seq__18515 = G__18584;
chunk__18516 = G__18585;
count__18517 = G__18586;
i__18518 = G__18587;
continue;
} else {
var warning = cljs.core.first.call(null,seq__18515__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__18588 = cljs.core.next.call(null,seq__18515__$1);
var G__18589 = null;
var G__18590 = (0);
var G__18591 = (0);
seq__18515 = G__18588;
chunk__18516 = G__18589;
count__18517 = G__18590;
i__18518 = G__18591;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__18519){
var map__18520 = p__18519;
var map__18520__$1 = (((((!((map__18520 == null))))?(((((map__18520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18520):map__18520);
var exception_data = map__18520__$1;
var file = cljs.core.get.call(null,map__18520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__18520__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__18474_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__18474_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__18522 = "Compile Exception - ";
var G__18522__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__18522,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__18522);
if(cljs.core.truth_(file)){
return [G__18522__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__18522__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
