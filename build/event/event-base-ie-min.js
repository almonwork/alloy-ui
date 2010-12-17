/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
(function(){var stateChangeListener,GLOBAL_ENV=YUI.Env,config=YUI.config,doc=config.doc,docElement=doc&&doc.documentElement,EVENT_NAME="onreadystatechange",pollInterval=config.pollInterval||40;if(!GLOBAL_ENV._ieready){GLOBAL_ENV._ieready=function(){GLOBAL_ENV._ready();};
/* DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller/Diego Perini */
if(self!==self.top){stateChangeListener=function(){if(doc.readyState=="complete"){GLOBAL_ENV.remove(doc,EVENT_NAME,stateChangeListener);GLOBAL_ENV.ieready();}};GLOBAL_ENV.add(doc,EVENT_NAME,stateChangeListener);}else{GLOBAL_ENV._dri=setInterval(function(){try{docElement.doScroll("left");clearInterval(GLOBAL_ENV._dri);GLOBAL_ENV._dri=null;GLOBAL_ENV._ieready();}catch(domNotReady){}},pollInterval);}}})();YUI.add("event-base-ie",function(B){var A=function(){B.DOM2EventFacade.apply(this,arguments);};B.extend(A,B.DOM2EventFacade,{init:function(){A.superclass.init.apply(this,arguments);var G=this._event,F=B.DOM2EventFacade.resolve,D,J,H,C,I,E;this.target=F(G.srcElement);if(("clientX" in G)&&(!D)&&(0!==D)){D=G.clientX;J=G.clientY;H=B.config.doc;C=H.body;I=H.documentElement;D+=(I.scrollLeft||(C&&C.scrollLeft)||0);J+=(I.scrollTop||(C&&C.scrollTop)||0);this.pageX=D;this.pageY=J;}if(G.type=="mouseout"){E=G.toElement;}else{if(G.type=="mouseover"){E=G.fromElement;}}this.relatedTarget=F(E);switch(G.button){case 2:this.which=3;break;case 4:this.which=2;break;default:this.which=G.button;}this.button=this.which;},stopPropagation:function(){var C=this._event;C.cancelBubble=true;this._wrapper.stopped=1;this.stopped=1;},stopImmediatePropagation:function(){this.stopPropagation();this._wrapper.stopped=2;this.stopped=2;},preventDefault:function(C){this._event.returnValue=C||false;this._wrapper.prevented=1;this.prevented=1;}});B.DOMEventFacade=A;},"3.2.0");