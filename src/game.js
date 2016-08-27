/**
 * @fileoverview
 * The monolithic Angular app which manages all grid chrome, views,
 * and server interactions.
 */
// TODO: Use @export for scope variables rather than string property access.
goog.provide('windmill.module');

goog.require('windmill.Grid');
// goog.require('windmill.GridRenderer');
goog.require('windmill.GridUi');
goog.require('windmill.GridUiHook');
// goog.require('goog.array');
// goog.require('goog.asserts');
// goog.require('goog.dom.classlist');
// goog.require('goog.object');



// angular.element(document).ready(function() {
// document.addEventListener( "DOMContentLoaded", function() {
window.addEventListener( "load", function() {
  var index = 0;
  var PUZZLES = [

    {n:'grid-test', c:'CAkSAigDEgIIARICKAISAggEEgASAggEEgIoAhICCAESABICCAESAigEEgIIBBICKAQSAggFEgIoCRICCAUSAigEEgIIAxICKAUSAggEEgIoDRICCAYSAggGEgIoDBICCAMSAigFEgIIBBICKAI=_0'},
    {n:'start', c:'CAUSAggDEgIoAxICCAQ=_0'},
    {n:'up-left', c:'CAMSAggEEgIoAhICCAESAigDEgIIARIAEgIIARICKAISAggBEgIIARICCAM=_0'},
    {n:'maze-simple', c:'CAkSAigDEgIIARIAEgIIARICKAISAggEEgIIARICKAcSAggBEgIoBRICCAESAigFEgIIARICKAMSAggBEgIoAxICCAESAigLEgIIARIAEgIIARIAEgIIARICKAsSAggBEgIoBRICCAESAggDEgIoBBICCAESAigD_0'}, // 4x4
    {n:'maze-large', c:'CBUSAigLEgIIARICKAUSAggBEgIoAhICCAQSAggBEgIoAxICCAESABICCAESAigDEgIIARICKAMSAggBEgASAggBEgIoBRICCAESABICCAESAigDEgIIARIAEgIIARICKAkSAggBEgIoBxICCAESAigFEgIIARIAEgIIARIAEgIIARICKAMSAggBEgIoAxICCAESABICCAESAigDEgIIARIAEgIIARICKAMSAggBEgIoAxICCAESAggBEgIoAhICCAESAigDEgIIARIAEgIIARICKAUSAggBEgIoAxICCAESAigFEgIIARICKAcSAggBEgIoAxICCAESAigEEgIIARICKAQSAggBEgASAggBEgASAggBEgASAggBEgASAggBEgIoAxICCAESAigDEgIIARIAEgIIARIAEgIIARICKAcSAggBEgIoAxICCAESAigDEgIIARIAEgIIARICKAUSAggBEgASAggBEgIoCRICCAESAigFEgIIARIAEgIIARICKAMSAggBEgIoBRICCAESABICCAESAigJEgIIARICKAUSAggBEgASAggBEgIoCRICCAESAigFEgIIARICKAcSAggBEgASAggBEgIoAxICCAESABICCAESAigHEgIIARIAEgIIARIAEgIIARICKAMSAggBEgASAggBEgIoAxICCAESABICCAESABICCAESAigFEgIIARICKA8SAggBEgASAggBEgIoCRICCAESABICCAESAigDEgIIARIAEgIIARIAEgIIARICKAUSAggBEgIoBxICCAESABICCAESAigHEgIIARICKAMSAggBEgASAggBEgIoAxICCAESAigDEgIIARIAEgIIARICKAUSAggBEgIIARICKAISAggBEgIoAxICCAESABICCAESAigFEgIIARIAEgIIARICKAgSAggDEgIoBhICCAESAigHEgIIARICKAU=_0'}, // 10x10

    // TODO: Large maze with multiple starts

    // bw teaching section
    {n:'bw1', c:'CAMSAigEEgQIBxABEgASAggDEgASAggEEgASBAgHEAISAigE_0'}, // bw intro 1x2
    {n:'bw2', c:'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQAhIAEgIIAxICKAI=_0'}, // bw intro 1x2
    {n:'bw3', c:'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQARICKAUSBAgHEAISABICCAMSAigC_0'}, // bw intro 1x3
    // 'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQAhICKAUSBAgHEAESABICCAMSAigC_0', // bw intro 1x3 (middle)
    {n:'bw4', c:'CAUSAigEEgIIBBIAEgQIBxABEgASBAgHEAESAigHEgQIBxABEgASBAgHEAISABICCAMSAigE_0'}, // bw intro 2x2
    {n:'bw5', c:'CAcSAigGEgIIBBIAEgQIBxABEgASBAgHEAESABIECAcQARICKAkSBAgHEAESABIECAcQAhIAEgQIBxABEgIoCRIECAcQAhIAEgQIBxACEgASBAgHEAISABICCAMSAigG_0'}, // bw intro 3x3
    {n:'bw6', c:'CAcSAigIEgQIBxABEgASBAgHEAESABIECAcQARICKAkSBAgHEAESABIECAcQAhIAEgQIBxABEgASAggEEgIoBxIECAcQAhIAEgQIBxACEgASBAgHEAISABICCAMSAigG_0'}, // bw intro 3x3
    {n:'bw7', c:'CAkSAigCEgIIBBICKAcSBAgHEAESAigDEgQIBxACEgASBAgHEAESAigLEgQIBxABEgASBAgHEAESABIECAcQARIAEgQIBxABEgIoCxIECAcQARIAEgQIBxACEgASBAgHEAESABIECAcQARICKAsSBAgHEAISABIECAcQAhIAEgQIBxACEgASBAgHEAESABICCAMSAigI_0'}, // bw intro 4x4
    {n:'bw8', c:'CAkSAigKEgQIBxABEgASBAgHEAESABIECAcQAhIAEgQIBxABEgIoDRIECAcQARIAEgQIBxABEgASBAgHEAESAigJEgIIBBIAEgQIBxABEgASBAgHEAISABIECAcQARIAEgQIBxABEgIoCxIECAcQAhIAEgQIBxACEgASBAgHEAISABIECAcQARIAEgIIAxICKAg=_0'}, // bw intro 4x4
    {n:'bw9', c:'CAkSAigMEgQIBxABEgASBAgHEAISABIECAcQARICKAsSBAgHEAESAigFEgQIBxABEgIoCxIECAcQARIAEgQIBxACEgASBAgHEAESAigNEgQIBxACEgASBAgHEAISABIECAcQAhIAEgQIBxABEgASAggDEgIoBRICCAQSAigC_0'}, // bw 4x4 (group-white)

    // dot teaching section
    {n:'dot1', c:'CAMSAigCEgIIBBICKAQSAggGEgIoBBICCAMSAigC_0'}, // dot 1x2
    {n:'dot2', c:'CAUSAigEEgIIBBICKAISAggGEgASAggGEgIoChICCAMSAigE_0'}, // dot 2x2

    {n:'dot3', c:'CAcSABICCAESAigEEgIIBBICCAESABICCAYSAigJEgIIARICKBESAggGEgASAggBEgASAggGEgIIAxICKAY=_0'}, // dot 3x3
    {n:'', c:'CAcSABICCAESAigEEgIIBBICCAESABICCAYSAigDEgIIBhICKAUSAggBEgIoERICCAYSABICCAESABICCAYSAggDEgIoBg==_0'}, // dot 3x3
    {n:'', c:'CAcSABICCAESAigFEgIIARIAEgIIBhICKAMSAggGEgIIBBIAEgIIAxICKAISAggBEgIoBRICCAYSAigGEgIIAxICKAQSAggGEgASAggBEgASAggGEgIoBw==_0'}, // dot 3x3
    {n:'', c:'CAcSABICCAESAigCEgIIAxIAEgIIAxICCAESABICCAYSAigDEgIIBhICCAQSAigEEgIIARICKAUSAggGEgIoCBICCAMSAigCEgIIBhIAEgIIARIAEgIIBhICKAc=_0'}, // dot 3x3

    // tetris teaching section
    {n:'', c:'CAMSAigCEgIIBBICKAcSCQgJIgUIARIBARIAEgIIAxICKAI=_0'}, // tetris 1x2
    {n:'', c:'CAMSAigCEgIIBBICKA0SCQgJIgUIARIBARIAEgIIAxICKAI=_0'}, // tetris 1x3
    {n:'', c:'CAMSAigCEgIIBBICKA0SCggJIgYIARICAQESABICCAMSAigC_0'}, // tetris 1x3
    {n:'', c:'CAUSAigEEgIIBBICKAsSDAgJIggIAhIEAQABARICKAMSAggDEgIoBA==_0'}, // tetris 2x2

    {n:'', c:'CAcSAigGEgIIBBICKBESDAgJIggIAhIEAQEBARICKBESAggDEgIoBg==_0'}, // tetris 3x3
    {n:'', c:'CAcSAigDEgIIBRICKAISAggEEgIoBhICCAUSAigKEgwICSIICAISBAEBAQESAigREgIIAxICKAQSAggFEgA=_0'}, // tetris 3x3
    {n:'', c:'CAsSAigKEgIIBBICKAoSAggFEgIoCxICCAUSAigaEg4ICSIKCAISBgEBAQABABICKBYSAggFEgIoGhICCAMSAigIEgIIBRIA_0'}, // tetris 5x5
    {n:'', c:'CAsSAigKEgIIBBICKAoSAggFEgIoCxICCAUSAigaEg4ICSIKCAISBgEBAQABABICKBISAggFEgIoAxICCAUSAigaEgIIAxICKAgSAggFEgA=_0'}, // tetris 5x5


    // 2 piece tetris tutorial
    {n:'', c:'CAMSAigCEgIIBBIAEgkICSIFCAESAQESAigFEgkICSIFCAESAQESABICCAMSAigC_0'}, // 1x2
    {n:'', c:'CAMSAigCEgIIBBIAEgkICSIFCAESAQESAigLEgkICSIFCAESAQESABICCAMSAigC_0'}, // 1x3
    {n:'', c:'CAcSAigGEgIIBBICKAMSCggJIgYIAhICAQESAigZEgoICSIGCAISAgEBEgIoBRICCAMSAigG_0'}, // 3x3
    {n:'', c:'CAcSAigGEgIIBBICKBMSCggJIgYIAhICAQESAigJEgoICSIGCAISAgEBEgIoBRICCAMSAigG_0'}, // 3x3
    {n:'', c:'CAkSAigIEgIIBBICKCcSCwgJIgcIAxIDAQEBEgIoAxILCAkiBwgBEgMBAQESAigTEgIIAxICKAg=_0'}, // 4x4
    {n:'', c:'CAkSAigIEgIIBBICKBgSAggFEgIoDhILCAkiBwgDEgMBAQESAigDEgsICSIHCAESAwEBARICKBMSAggDEgIoCA==_0'}, // 4x4

    // multi-piece not-exactly-tutorial
    {n:'', c:'CAsSAigKEgIIBBICKBASAggFEgIoCBIKCAkiBggCEgIBARICKAISAggFEgIoEhIMCAkiCAgCEgQBAAEBEgIoGRIMCAkiCAgCEgQBAQEBEgIoGRICCAMSAigK_0'}, // 4x4 (3 pieces all moved)
    {n:'', c:'CAsSAigKEgIIBBICKBkSCggJIgYIAhICAQESAigTEgwICSIICAISBAEAAQESAigbEgwICSIICAISBAEBAQESAigZEgIIAxICKAo=_0'}, // 5x5 all pieces moved (maybe duplicate)

    // Star tutorial
    {n:'', c:'CAMSAigEEgQICBAIEgASAggDEgASAggEEgASBAgIEAgSAigE_0'}, // 1x2
    {n:'', c:'CAUSAigEEgIIBBIAEgQICBAIEgASBAgIEAgSAigHEgQICBAIEgASBAgIEAgSABICCAMSAigE_0'}, // 2x2
    {n:'', c:'CAcSAigGEgIIBBICKA8SBAgIEAgSABIECAgQCBIAEgQICBAIEgIoCxIECAgQCBICKAMSAggDEgIoBg==_0'}, // 3x3
    {n:'', c:'CAcSAigGEgIIBBIAEgQICBAFEgASBAgIEAgSABIECAgQCBICKAkSBAgIEAUSAigDEgQICBAFEgIoCRIECAgQCBIAEgQICBAIEgASBAgIEAUSABICCAMSAigG_0'}, // 3x3 2-colors
    {n:'', c:'CAkSAigIEgIIBBIAEgQICBACEgASBAgIEAISABIECAgQAhIAEgQICBACEgIoCxIECAgQARIAEgQICBABEgASBAgIEAYSABIECAgQBhICKAsSBAgIEAUSABIECAgQCBIAEgQICBAIEgASBAgIEAYSAigLEgQICBAFEgASBAgIEAgSABIECAgQCBIAEgQICBAGEgASAggDEgIoCA==_0'}, // 4x4 4-colors


    // star and square example
    {n:'', c:'CAUSAigEEgIIBBIAEgQIBxABEgIoCxIECAgQAhICKAcSBAgHEAISAigDEgIIAxICKAQ=_0'}, // 1x3



  {n:'', c:'CAkSAigEEggIBBoECAAQARICKAUSBAgIEAUSABIECAgQCBIAEgQICBAIEgASBAgIEAISAigLEgQICBAFEgIIBhIECAgQCBIAEgQICBAIEgIIBhIECAgQAhICKAsSBAgIEAUSABIECAgQAxIAEgQICBADEgASBAgIEAISAigLEgQICBAFEgASBAgIEAMSABIECAgQAxIAEgQICBACEgIoBRICCAMSAigE_0'}, // surfing
  {n:'', c:'CAcSAigGEggIBBoECAIQABICKAISAggGEgIoBhICCAYSAigDEgIIBhICKAMSAggKEgIoAhICCAYSAigCEgIIBhIAEgIIBhICCAUSAigDEgIIBhIAEgIIBhICKAISAggDEgIoBg_0'}, // short walk
  {n:'', c:'CA0SAigMEggIBBoECAIQABIAEgwICSIICAISBAEBAQASAigFEgwICSIICAISBAEBAQASAigDEgIIChICKBMSDAgJIggIAhIEAAEBARICKAUSDAgJIggIAhIEAAEBARIAEgIIAxICKAw_0'}, //gallery

];

  function startLevel() {
    var gui;
    var grid = new windmill.Grid();
    grid.initialize(undefined, undefined, PUZZLES[index].c);
    var uiHook = new windmill.GridUiHook();
    function onSuccess(path) {
      // alert('success'); console.log(arguments);
      gui.disappearSnake(200, [], 0);
      gui.dispose();
      index++;
      if (PUZZLES[index]) {
        startLevel(PUZZLES[index].c);
      } else {
        alert('You won a coupon for a free beer! Leave a note with a phone number by the door to redeem!');
      }
    }
    uiHook.showToast = function() { alert('toast'); console.log(arguments); };
    uiHook.onSuccess = onSuccess;
    gui = new windmill.GridUi(grid, uiHook);
    gui.render();
    window.location.hash = PUZZLES[index].n;
  }

  function findPuzzle(puzzleName) {
    var foundIndex = 0;
    if (!puzzleName) { return foundIndex; }
    for (var i=0; i<PUZZLES.length; i++) {
      if (puzzleName === PUZZLES[i].n) {
        foundIndex = i;
        break;
      }
    }
    return foundIndex;
  }

  index = findPuzzle(window.location.hash.replace('#', ''));
  startLevel();

});
