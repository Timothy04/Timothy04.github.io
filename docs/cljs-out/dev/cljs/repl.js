// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19884){
var map__19885 = p__19884;
var map__19885__$1 = (((((!((map__19885 == null))))?(((((map__19885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19885):map__19885);
var m = map__19885__$1;
var n = cljs.core.get.call(null,map__19885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19887_19919 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19888_19920 = null;
var count__19889_19921 = (0);
var i__19890_19922 = (0);
while(true){
if((i__19890_19922 < count__19889_19921)){
var f_19923 = cljs.core._nth.call(null,chunk__19888_19920,i__19890_19922);
cljs.core.println.call(null,"  ",f_19923);


var G__19924 = seq__19887_19919;
var G__19925 = chunk__19888_19920;
var G__19926 = count__19889_19921;
var G__19927 = (i__19890_19922 + (1));
seq__19887_19919 = G__19924;
chunk__19888_19920 = G__19925;
count__19889_19921 = G__19926;
i__19890_19922 = G__19927;
continue;
} else {
var temp__5720__auto___19928 = cljs.core.seq.call(null,seq__19887_19919);
if(temp__5720__auto___19928){
var seq__19887_19929__$1 = temp__5720__auto___19928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19887_19929__$1)){
var c__4556__auto___19930 = cljs.core.chunk_first.call(null,seq__19887_19929__$1);
var G__19931 = cljs.core.chunk_rest.call(null,seq__19887_19929__$1);
var G__19932 = c__4556__auto___19930;
var G__19933 = cljs.core.count.call(null,c__4556__auto___19930);
var G__19934 = (0);
seq__19887_19919 = G__19931;
chunk__19888_19920 = G__19932;
count__19889_19921 = G__19933;
i__19890_19922 = G__19934;
continue;
} else {
var f_19935 = cljs.core.first.call(null,seq__19887_19929__$1);
cljs.core.println.call(null,"  ",f_19935);


var G__19936 = cljs.core.next.call(null,seq__19887_19929__$1);
var G__19937 = null;
var G__19938 = (0);
var G__19939 = (0);
seq__19887_19919 = G__19936;
chunk__19888_19920 = G__19937;
count__19889_19921 = G__19938;
i__19890_19922 = G__19939;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19940 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19940);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19940)))?cljs.core.second.call(null,arglists_19940):arglists_19940));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19891_19941 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19892_19942 = null;
var count__19893_19943 = (0);
var i__19894_19944 = (0);
while(true){
if((i__19894_19944 < count__19893_19943)){
var vec__19905_19945 = cljs.core._nth.call(null,chunk__19892_19942,i__19894_19944);
var name_19946 = cljs.core.nth.call(null,vec__19905_19945,(0),null);
var map__19908_19947 = cljs.core.nth.call(null,vec__19905_19945,(1),null);
var map__19908_19948__$1 = (((((!((map__19908_19947 == null))))?(((((map__19908_19947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19908_19947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19908_19947):map__19908_19947);
var doc_19949 = cljs.core.get.call(null,map__19908_19948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19950 = cljs.core.get.call(null,map__19908_19948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19946);

cljs.core.println.call(null," ",arglists_19950);

if(cljs.core.truth_(doc_19949)){
cljs.core.println.call(null," ",doc_19949);
} else {
}


var G__19951 = seq__19891_19941;
var G__19952 = chunk__19892_19942;
var G__19953 = count__19893_19943;
var G__19954 = (i__19894_19944 + (1));
seq__19891_19941 = G__19951;
chunk__19892_19942 = G__19952;
count__19893_19943 = G__19953;
i__19894_19944 = G__19954;
continue;
} else {
var temp__5720__auto___19955 = cljs.core.seq.call(null,seq__19891_19941);
if(temp__5720__auto___19955){
var seq__19891_19956__$1 = temp__5720__auto___19955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19891_19956__$1)){
var c__4556__auto___19957 = cljs.core.chunk_first.call(null,seq__19891_19956__$1);
var G__19958 = cljs.core.chunk_rest.call(null,seq__19891_19956__$1);
var G__19959 = c__4556__auto___19957;
var G__19960 = cljs.core.count.call(null,c__4556__auto___19957);
var G__19961 = (0);
seq__19891_19941 = G__19958;
chunk__19892_19942 = G__19959;
count__19893_19943 = G__19960;
i__19894_19944 = G__19961;
continue;
} else {
var vec__19910_19962 = cljs.core.first.call(null,seq__19891_19956__$1);
var name_19963 = cljs.core.nth.call(null,vec__19910_19962,(0),null);
var map__19913_19964 = cljs.core.nth.call(null,vec__19910_19962,(1),null);
var map__19913_19965__$1 = (((((!((map__19913_19964 == null))))?(((((map__19913_19964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19913_19964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19913_19964):map__19913_19964);
var doc_19966 = cljs.core.get.call(null,map__19913_19965__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19967 = cljs.core.get.call(null,map__19913_19965__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19963);

cljs.core.println.call(null," ",arglists_19967);

if(cljs.core.truth_(doc_19966)){
cljs.core.println.call(null," ",doc_19966);
} else {
}


var G__19968 = cljs.core.next.call(null,seq__19891_19956__$1);
var G__19969 = null;
var G__19970 = (0);
var G__19971 = (0);
seq__19891_19941 = G__19968;
chunk__19892_19942 = G__19969;
count__19893_19943 = G__19970;
i__19894_19944 = G__19971;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__19915 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19916 = null;
var count__19917 = (0);
var i__19918 = (0);
while(true){
if((i__19918 < count__19917)){
var role = cljs.core._nth.call(null,chunk__19916,i__19918);
var temp__5720__auto___19972__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19972__$1)){
var spec_19973 = temp__5720__auto___19972__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19973));
} else {
}


var G__19974 = seq__19915;
var G__19975 = chunk__19916;
var G__19976 = count__19917;
var G__19977 = (i__19918 + (1));
seq__19915 = G__19974;
chunk__19916 = G__19975;
count__19917 = G__19976;
i__19918 = G__19977;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__19915);
if(temp__5720__auto____$1){
var seq__19915__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19915__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19915__$1);
var G__19978 = cljs.core.chunk_rest.call(null,seq__19915__$1);
var G__19979 = c__4556__auto__;
var G__19980 = cljs.core.count.call(null,c__4556__auto__);
var G__19981 = (0);
seq__19915 = G__19978;
chunk__19916 = G__19979;
count__19917 = G__19980;
i__19918 = G__19981;
continue;
} else {
var role = cljs.core.first.call(null,seq__19915__$1);
var temp__5720__auto___19982__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19982__$2)){
var spec_19983 = temp__5720__auto___19982__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19983));
} else {
}


var G__19984 = cljs.core.next.call(null,seq__19915__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19915 = G__19984;
chunk__19916 = G__19985;
count__19917 = G__19986;
i__19918 = G__19987;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19988 = cljs.core.conj.call(null,via,t);
var G__19989 = cljs.core.ex_cause.call(null,t);
via = G__19988;
t = G__19989;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19992 = datafied_throwable;
var map__19992__$1 = (((((!((map__19992 == null))))?(((((map__19992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19992):map__19992);
var via = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19993 = cljs.core.last.call(null,via);
var map__19993__$1 = (((((!((map__19993 == null))))?(((((map__19993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19993):map__19993);
var type = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19993__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19994 = data;
var map__19994__$1 = (((((!((map__19994 == null))))?(((((map__19994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19994):map__19994);
var problems = cljs.core.get.call(null,map__19994__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19994__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19994__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19995 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19995__$1 = (((((!((map__19995 == null))))?(((((map__19995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19995):map__19995);
var top_data = map__19995__$1;
var source = cljs.core.get.call(null,map__19995__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20000 = phase;
var G__20000__$1 = (((G__20000 instanceof cljs.core.Keyword))?G__20000.fqn:null);
switch (G__20000__$1) {
case "read-source":
var map__20001 = data;
var map__20001__$1 = (((((!((map__20001 == null))))?(((((map__20001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20001):map__20001);
var line = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20003 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20003__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20003,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20003);
var G__20003__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20003__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20003__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20003__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20003__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20004 = top_data;
var G__20004__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20004,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20004);
var G__20004__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20004__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20004__$1);
var G__20004__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20004__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20004__$2);
var G__20004__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20004__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20004__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20004__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20004__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20005 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20005,(0),null);
var method = cljs.core.nth.call(null,vec__20005,(1),null);
var file = cljs.core.nth.call(null,vec__20005,(2),null);
var line = cljs.core.nth.call(null,vec__20005,(3),null);
var G__20008 = top_data;
var G__20008__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20008,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20008);
var G__20008__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20008__$1);
var G__20008__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20008__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20008__$2);
var G__20008__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20008__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20008__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20008__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20008__$4;
}

break;
case "execution":
var vec__20009 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20009,(0),null);
var method = cljs.core.nth.call(null,vec__20009,(1),null);
var file = cljs.core.nth.call(null,vec__20009,(2),null);
var line = cljs.core.nth.call(null,vec__20009,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19991_SHARP_){
var or__4126__auto__ = (p1__19991_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19991_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20012 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20012__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20012,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20012);
var G__20012__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20012__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20012__$1);
var G__20012__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20012__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20012__$2);
var G__20012__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20012__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20012__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20012__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20012__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20000__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20016){
var map__20017 = p__20016;
var map__20017__$1 = (((((!((map__20017 == null))))?(((((map__20017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20017):map__20017);
var triage_data = map__20017__$1;
var phase = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20017__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20019 = phase;
var G__20019__$1 = (((G__20019 instanceof cljs.core.Keyword))?G__20019.fqn:null);
switch (G__20019__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20020_20029 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20021_20030 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20022_20031 = true;
var _STAR_print_fn_STAR__temp_val__20023_20032 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20022_20031);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20023_20032);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20014_SHARP_){
return cljs.core.dissoc.call(null,p1__20014_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20021_20030);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20020_20029);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20024_20033 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20025_20034 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20026_20035 = true;
var _STAR_print_fn_STAR__temp_val__20027_20036 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20026_20035);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20027_20036);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20015_SHARP_){
return cljs.core.dissoc.call(null,p1__20015_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20025_20034);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20024_20033);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20019__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
