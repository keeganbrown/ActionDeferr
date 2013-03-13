function ActionDeferr (_allowDebug) {
	
	var actionQueue = [];
	var actionDeferr = null;
	var elementWatchList = "html,body,div,span,li,a";
	var allowDebug = _allowDebug;
	
	function DefferedAction ( args, callback ) {
		this.args = args;
		this.callback = callback;
		DefferedAction.prototype.execute = function () {
			if ( !!this.callback && !!this.callback.apply ) {
				this.callback.apply( window, this.args );
				!!allowDebug && !!window.console && console.log("deferred: " + callback + " -- " + this.args.join("|") );
			}
		}
	}
	function isAnythingAnimating () {
		var v = false;
		//CHECK FOR ANIMATING JQUERY ELEMENTS
		if ( !!jQuery && jQuery(elementWatchList).is(":animated") ) {
			v = true;
			return v;
		}
		//CHECK FOR ANIMATING TWEENLITE/TWEENMAX ELEMENTS
		var GS = null;
		if ( !!window.TweenMax ) { GS = TweenMax }
		if ( !!window.TweenLite ) { GS = TweenLite }
		if ( !GS ) { return v; }
		var tweens = TweenMax.getAllTweens();
		for (var i = 0, len = tweens.length; i < len; i++ ) {
			if ( !tweens[i].paused ) {
				v = true;
				return v;
			}
		}
		return v;
	}
	function executeQueue() {
		if ( !!actionQueue.length ) {
			if( !isAnythingAnimating() ) {
				while ( !!actionQueue.length ) {
					actionQueue.pop().execute();
				}
			} else {
				if ( !!actionDeferr ) {
					clearTimeout( actionDeferr );
					actionDeferr = null;
				}
				actionDeferr = setTimeout( deferredHandle, 333 );
			}
		}
	}
	function deferredHandle () {
		actionDeferr = null;
		executeQueue();
	}
	ActionDeferr.prototype.enqueueAction = function enqueueAction( callback, args ) {
		actionQueue.push( new DefferedAction( args, callback ) );
		if ( !!actionDeferr ) {
			clearTimeout( actionDeferr );
			actionDeferr = null;
		}
		actionDeferr = setTimeout( deferredHandle, 333 );
	}
}
var Deferr = new ActionDeferr(false);