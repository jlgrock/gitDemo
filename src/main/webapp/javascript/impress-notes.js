/**
 * Slight modification of impress.js notes from David Souther.
 *
 * Adds support for inline speaker notes.
 *
 * MIT Licensed.
 *
 * Copyright 2012 David Souther (davidsouther@gmail.com)
 * Modified by Justin Grant (jlgrock@hotmial.com)
 */

(function ( document, window ) {
    'use strict';
    var globalImpress = impress();

	//We have a child!
    var notesWindow = null;

	//Some default HTML, if there's no template.
    var notesTemplate = document.getElementById('impress-notes-template') ?
        document.byId('notesTemplate').innerHTML :
        '<div class="controls"> ' +
            '<a href="#" onclick="impress().prev(); return false;" />Prev</a>' +
            '<a href="#" onclick="impress().next(); return false;" style="float:right;"/>Next</a>' +
            '</div>' +
            '<div id="notes" style="text-align: justify;"></div>' +
            '<div class="controls"> ' +
            '<a href="#" onclick="impress().prev(); return false;" />Prev</a>' +
            '<a href="#" onclick="impress().next(); return false;" style="float:right;"/>Next</a>' +
            '</div>';

	//Add a new function to the impress() object. 
	//SIDE EFFECT: If impress hasn't already run, it just got initialized.
	//TODO look at what to do if there are multiple impress roots.
        globalImpress.openNotes = function(){
        if(notesWindow && !notesWindow.closed) {
            notesWindow.focus();
        } else {
            notesWindow = window.open();
            notesWindow.document.title = "Impress.js Speaker Notes (" + document.title + ")";
            notesWindow.impress = window.impress;
            notesWindow.document.body.innerHTML = notesTemplate;
            notesWindow.document.addEventListener("keydown", function ( event ) {
			    switch( event.keyCode ) {
				    case 8: ; // backspace
			        case 33: ; // pg up
			        case 37: ; // left
			        case 38:   // up
			                 impress().prev();
			                 break;
			        case 9:  ; // tab
			        case 32: ; // space
			        case 34: ; // pg down
			        case 39: ; // right
			        case 40:   // down
			                 impress().next();
			                 break;
			        default: break;
			    }
				    
			    event.preventDefault();
			}, false);
            
            slideChange();
        }
    };

	// Replace the HTML
    var slideChange = function(){
        if(notesWindow) {
            notesWindow.document.getElementById('notes').innerHTML =
            	document.querySelector('.active .notes').innerHTML;
        }
    };

    var currentNext = globalImpress.next;
    var impressNextOverride = function() {
    	currentNext();
    	slideChange();
    };
    globalImpress.next = impressNextOverride;

    var currentPrev = globalImpress.prev;
    var impressPrevOverride = function() {
    	currentPrev();
    	slideChange();
    };
    globalImpress.prev = impressPrevOverride;
    
	//When the window closes, clean up after ourselves.
	window.onunload = function(){
		if (notesWindow && !notesWindow.closed) {
			notesWindow.close();
		}
	};

	//Open speaker notes when they press 'n'
    document.addEventListener("keyup", function ( event ) {
        if ( event.keyCode === 78 ) {
            impress().openNotes();
        }
    }, false);

	//If they set the notesOnStartup to the window's impress object, start it
    if(impress.notesOnStartup) {
        impress().openNotes();
    }

})(document, window);
