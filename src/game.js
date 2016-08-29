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
goog.require('windmill.Sound');



// angular.element(document).ready(function() {
// document.addEventListener( "DOMContentLoaded", function() {
window.addEventListener( "load", function() {
  var index = 0;
  var PUZZLES = [

    {n:'grid-test', c:'CAkSAigDEgIIARICKAISAggEEgASAggEEgIoAhICCAESABICCAESAigEEgIIBBICKAQSAggFEgIoCRICCAUSAigEEgIIAxICKAUSAggEEgIoDRICCAYSAggGEgIoDBICCAMSAigFEgIIBBICKAI=_0'},
    {n:'start', theme:'orange', c:'CAUSAggDEgIoAxICCAQ=_0'},
    {n:'up-left', theme:'orange', c:'CAMSAggEEgIoAhICCAESAigDEgIIARIAEgIIARICKAISAggBEgIIARICCAM=_0'},
    {n:'maze-simple', theme:'orange', c:'CAkSAigDEgIIARIAEgIIARICKAISAggEEgIIARICKAcSAggBEgIoBRICCAESAigFEgIIARICKAMSAggBEgIoAxICCAESAigLEgIIARIAEgIIARIAEgIIARICKAsSAggBEgIoBRICCAESAggDEgIoBBICCAESAigD_0'}, // 4x4
    {n:'maze-large', theme:'orange', c:'CBUSAigLEgIIARICKAUSAggBEgIoAhICCAQSAggBEgIoAxICCAESABICCAESAigDEgIIARICKAMSAggBEgASAggBEgIoBRICCAESABICCAESAigDEgIIARIAEgIIARICKAkSAggBEgIoBxICCAESAigFEgIIARIAEgIIARIAEgIIARICKAMSAggBEgIoAxICCAESABICCAESAigDEgIIARIAEgIIARICKAMSAggBEgIoAxICCAESAggBEgIoAhICCAESAigDEgIIARIAEgIIARICKAUSAggBEgIoAxICCAESAigFEgIIARICKAcSAggBEgIoAxICCAESAigEEgIIARICKAQSAggBEgASAggBEgASAggBEgASAggBEgASAggBEgIoAxICCAESAigDEgIIARIAEgIIARIAEgIIARICKAcSAggBEgIoAxICCAESAigDEgIIARIAEgIIARICKAUSAggBEgASAggBEgIoCRICCAESAigFEgIIARIAEgIIARICKAMSAggBEgIoBRICCAESABICCAESAigJEgIIARICKAUSAggBEgASAggBEgIoCRICCAESAigFEgIIARICKAcSAggBEgASAggBEgIoAxICCAESABICCAESAigHEgIIARIAEgIIARIAEgIIARICKAMSAggBEgASAggBEgIoAxICCAESABICCAESABICCAESAigFEgIIARICKA8SAggBEgASAggBEgIoCRICCAESABICCAESAigDEgIIARIAEgIIARIAEgIIARICKAUSAggBEgIoBxICCAESABICCAESAigHEgIIARICKAMSAggBEgASAggBEgIoAxICCAESAigDEgIIARIAEgIIARICKAUSAggBEgIIARICKAISAggBEgIoAxICCAESABICCAESAigFEgIIARIAEgIIARICKAgSAggDEgIoBhICCAESAigHEgIIARICKAU=_0'}, // 10x10

    // TODO: Large maze with multiple starts

    // bw teaching section
    {n:'bw1', theme:'blue', c:'CAMSAigEEgQIBxABEgASAggDEgASAggEEgASBAgHEAISAigE_0'}, // bw intro 1x2
    {n:'bw2', theme:'blue', c:'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQAhIAEgIIAxICKAI=_0'}, // bw intro 1x2
    {n:'bw3', theme:'blue', c:'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQARICKAUSBAgHEAISABICCAMSAigC_0'}, // bw intro 1x3
    // 'CAMSAigCEgIIBBIAEgQIBxABEgIoBRIECAcQAhICKAUSBAgHEAESABICCAMSAigC_0', // bw intro 1x3 (middle)
    {n:'bw4', theme:'blue', c:'CAUSAigEEgIIBBIAEgQIBxABEgASBAgHEAESAigHEgQIBxABEgASBAgHEAISABICCAMSAigE_0'}, // bw intro 2x2
    {n:'bw5', theme:'blue', c:'CAcSAigGEgIIBBIAEgQIBxABEgASBAgHEAESABIECAcQARICKAkSBAgHEAESABIECAcQAhIAEgQIBxABEgIoCRIECAcQAhIAEgQIBxACEgASBAgHEAISABICCAMSAigG_0'}, // bw intro 3x3
    {n:'bw6', theme:'blue', c:'CAcSAigIEgQIBxABEgASBAgHEAESABIECAcQARICKAkSBAgHEAESABIECAcQAhIAEgQIBxABEgASAggEEgIoBxIECAcQAhIAEgQIBxACEgASBAgHEAISABICCAMSAigG_0'}, // bw intro 3x3
    {n:'bw7', theme:'blue', c:'CAkSAigCEgIIBBICKAcSBAgHEAESAigDEgQIBxACEgASBAgHEAESAigLEgQIBxABEgASBAgHEAESABIECAcQARIAEgQIBxABEgIoCxIECAcQARIAEgQIBxACEgASBAgHEAESABIECAcQARICKAsSBAgHEAISABIECAcQAhIAEgQIBxACEgASBAgHEAESABICCAMSAigI_0'}, // bw intro 4x4
    {n:'bw8', theme:'blue', c:'CAkSAigKEgQIBxABEgASBAgHEAESABIECAcQAhIAEgQIBxABEgIoDRIECAcQARIAEgQIBxABEgASBAgHEAESAigJEgIIBBIAEgQIBxABEgASBAgHEAISABIECAcQARIAEgQIBxABEgIoCxIECAcQAhIAEgQIBxACEgASBAgHEAISABIECAcQARIAEgIIAxICKAg=_0'}, // bw intro 4x4
    {n:'bw9', theme:'blue', c:'CAkSAigMEgQIBxABEgASBAgHEAISABIECAcQARICKAsSBAgHEAESAigFEgQIBxABEgIoCxIECAcQARIAEgQIBxACEgASBAgHEAESAigNEgQIBxACEgASBAgHEAISABIECAcQAhIAEgQIBxABEgASAggDEgIoBRICCAQSAigC_0'}, // bw 4x4 (group-white)


    {n:'bw-octagon', theme:'blue', c:'CAkSAigIEgIIBBIAEgQIBxACEgASBAgHEAESABIECAcQARIAEgQIBxACEgIoCxIECAcQARIAEgQIBxABEgASBAgHEAESABIECAcQARICKAsSBAgHEAESABIECAcQARIAEgQIBxABEgASBAgHEAESAigLEgQIBxACEgASBAgHEAESABIECAcQARIAEgQIBxACEgASAggDEgIoCA==_0'},

    // dot teaching section
    {n:'dot1', theme:'light-green', c:'CAUSAigEEgIIBBICKAISAggGEgASAggGEgIoChICCAMSAigE_0'}, // dot 2x2

    {n:'dot2', theme:'light-green', c:'CAcSABICCAESAggGEgIoAxICCAQSAggBEgIoChICCAYSAggBEgIoCBICCAYSABICCAYSAigIEgIIARICKAISAggDEgIoBRICCAY=_0'}, // dot 3x3
    {n:'dot3', theme:'light-green', c:'CAcSABICCAESAggGEgIoAxICCAQSAggBEgIoCRICCAESAggGEgIIARICKAgSAggGEgASAggGEgIoCBICCAESAigCEgIIAxICKAUSAggG_0'}, // dot 3x3
    {n:'dot4', theme:'light-green', c:'CAcSABICCAESAggGEgIoBBICCAESAigGEgIIBBIAEgIIAxIAEgIIBhICCAESAigIEgIIBhIAEgIIBhIAEgIIAxICKAYSAggBEgIoCBICCAY=_0'}, // dot 3x3 (2starts)
    {n:'dot5', theme:'light-green', c:'CAcSABICCAESAggGEgASAggDEgASAggDEgIIARICKAYSAggEEgIoAxICCAYSAggBEgIIBhICKAcSAggGEgASAggGEgIoAxICCAMSAigEEgIIARICKAgSAggG_0'}, // dot 3x3 (3 starts)

    {n:'windmill', theme:'light-green', c:'CAsSAigFEgIIBhICKBMSAggFEgIoAxICCAUSAigDEgIIBRIAEgIIBRICKAUSAggFEgASAggFEgIoCxICCAYSAigJEgIIBhICKAsSAggFEgASAggFEgIoBRICCAUSABICCAUSAigDEgIIBRICKAMSAggFEgIoEhICCAMSABICCAQSAigE_0'}, // 5x5

    // tetris teaching section
    {n:'tetris1', theme:'brown', c:'CAMSAigCEgIIBBICKAcSCQgJIgUIARIBARIAEgIIAxICKAI=_0'}, // tetris 1x2
    {n:'tetris2', theme:'brown', c:'CAMSAigCEgIIBBICKA0SCQgJIgUIARIBARIAEgIIAxICKAI=_0'}, // tetris 1x3
    {n:'tetris3', theme:'brown', c:'CAMSAigCEgIIBBICKA0SCggJIgYIARICAQESABICCAMSAigC_0'}, // tetris 1x3
    {n:'tetris4', theme:'brown', c:'CAUSAigEEgIIBBICKAsSDAgJIggIAhIEAQABARICKAMSAggDEgIoBA==_0'}, // tetris 2x2

    {n:'tetris5', theme:'brown', c:'CAcSAigGEgIIBBICKAwSAggFEgIoBBIMCAkiCAgCEgQBAQEBEgIoBhICCAUSAigKEgIIAxICKAQSAggFEgA=_0'}, // tetris 3x3 (square)
    {n:'tetris6', theme:'brown', c:'CAsSAigKEggIBBoECAIQABICKAQSAggFEgIoAxICCAUSABICCAUSAighEgIIBRICKAQSDggJIgoIAhIGAQEBAAEAEgIoHhICCAUSAigSEgIIAxICKAgSAggFEgA=_0'}, // 5x5 (L)

    // 2-piece tutorial
    {n:'tetris6', theme:'brown', c:'CAMSAigCEgIIBBICKAcSCQgJIgUIARIBARICCAUSAigDEgIIBRIJCAkiBQgBEgEBEgASAggDEgIoAg==_0'}, // 1x3
    {n:'tetris6', theme:'brown', c:'CAMSAigCEgIIBBICKAcSCQgJIgUIARIBARICKAISAggFEgIoAhIJCAkiBQgBEgEBEgASAggDEgIoAg==_0'}, // 1x3
    {n:'tetris6', theme:'brown', c:'CAUSAigEEgIIBBICKA0SCQgJIgUIARIBARICKAcSDAgJIggIAhIEAQABARICKAMSAggDEgIoBA==_0'}, // 2x3
    {n:'tetris6', theme:'brown', c:'CAcSAigGEgIIBBIAEgoICSIGCAISAgEBEgIoGxIMCAkiCAgCEgQBAQEBEgIoBRICCAMSAigG_0'}, // 3x3 square-and-2
    {n:'tetris6', theme:'brown', c:'CAcSAigGEgIIBBICKAMSCggJIgYIAhICAQESAigZEgwICSIICAISBAEBAQESAigFEgIIAxICKAY=_0'}, // 3x3 square-and-2-part2
    {n:'tetris6', theme:'brown', c:'CAcSAigGEgIIBBICKB0SDAgJIggIAhIEAQEBARIAEgoICSIGCAISAgEBEgIoAxICCAMSAigG_0'}, // 3x3 square-and-2-part3
    {n:'tetris6', theme:'brown', c:'CAcSAigGEgIIBBICKA8SDAgJIggIAhIEAQEBARIAEgsICSIHCAMSAwEBARICKBESAggDEgIoBg==_0'}, // 3x3 square-and-3
    {n:'tetris6', theme:'brown', c:'CAcSAigGEgIIBBIAEgoICSIGCAISAgEBEgIoHxIMCAkiCAgCEgQBAQEBEgASAggDEgIoBg==_0'}, // 4x4 square-and-2-part3



    {n:'tetris-red1', theme:'dark-red', c:'CAkSAigIEgIIBBICKBMSDAgJIggIBBIEAQEBARICKAQSAggFEgIoIBILCAkiBwgBEgMBAQESABILCAkiBwgBEgMBAQESAigDEgIIAxICKAg=_0'}, // 4x4
    {n:'tetris-red2', theme:'dark-red', c:'CAkSAigIEgIIBBICKBMSDAgJIggIBBIEAQEBARICKAISAggFEgIoIhILCAkiBwgBEgMBAQESABILCAkiBwgBEgMBAQESAigDEgIIAxICKAg=_0'}, // 4x4
    {n:'tetris-red3', theme:'dark-red', c:'CAsSAigKEggIBBoECAIQABICKAkSDAgJIggIARIEAQEBARICKCcSCQgJIgUIARIBARICKCsSCggJIgYIAhICAQESAigFEgIIAxICKAo=_0'}, // 5x5
    {n:'tetris-red-corners', theme:'dark-red', c:'CAsSAigKEggIBBoECAIQABIAEg4ICSIKCAMSBgEBAQAAARICKAcSCggJIgYIAhICAQESAihREgsICSIHCAESAwEBARICKAUSCwgJIgcIAxIDAQEBEgASAggDEgIoCg==_0'}, // 5x5

    {n:'tetris-optional1', theme:'brown', c:'CAsSAigKEggIBBoECAIQABIAEg4ICSIKCAMSBgEAAAEBARICKAcSDAgJIggIARIEAQEBARICKE8SDggJIgoIAxIGAQEBAQAAEgIoCRICCAMSAigK_0'}, // 5x5
    {n:'tetris-optional1-squished', theme:'brown', c:'CAkSAigIEgIIBBIAEg4ICSIKCAMSBgEAAAEBARICKAUSDAgJIggIARIEAQEBARICKC8SDggJIgoIAxIGAQEBAQAAEgIoBxICCAMSAigI_0'}, // 4x4

    {n:'tetris-just-tetris-pieces', theme:'brown', c:'CAsSAigKEgIIBBICKAMSDggJIgoIAxIGAQEBAAABEgIoKxIMCAkiCAgCEgQBAQEBEgIoAxIOCAkiCggCEgYBAAEBAAESABIMCAkiCAgBEgQBAQEBEgIoDRIOCAkiCggDEgYBAQEBAAASAigtEg4ICSIKCAMSBgABAAEBARICKAMSDggJIgoIAxIGAQEAAAEBEgIoAxICCAMSAigK_0'}, // 5x6 just-tetris-pieces


    {n:'tetris-fun-lr', theme:'brown', c: 'CAkSAigIEgIIBBICKDcSDggJIgoIAhIGAQABAAEBEgIoBRIOCAkiCggCEgYBAQEAAQASABICCAMSAigI_0'},

    {n:'tetris-fill', theme:'brown', c:'CAcSAigGEgIIBBICKAUSCQgJIgUIARIBARICKAkSEQgJIg0IAxIJAQEBAQABAQEBEgIoExICCAMSAigG_0'}, // 3x3
    {n:'tetris-fill2', theme:'brown', c:'CAcSAigGEgIIBBICKB8SDAgJIggIAhIEAAEBABIAEgwICSIICAISBAEAAAESABICCAMSAigG_0'}, // 3x3
    {n:'tetris-fill3', theme:'brown', c:'CAkSAigIEgIIBBIAEgkICSIFCAESAQESAigDEgwICSIICAQSBAEBAQESAigfEg4ICSIKCAISBgABAQABABICKBkSAggDEgIoCA==_0'},
    {n:'tetris-fill', theme:'brown', c:'CAkSAigIEgIIBBIAEhEICSINCAMSCQEBAQAAAQAAARICKBcSCwgJIgcIARIDAQEBEgIoDRIQCAkiDAgEEggBAAABAQAAARICKBcSAggDEgIoCA==_0'},

    {n:'tetris-rotate', theme:'brown', c:'CAMSAigCEgIIBBICKBMSDggJIgoIARIEAQEBARgBEgASAggDEgIoAg==_0'},
    {n:'tetris-rotate2', theme:'brown', c:'CAUSAigEEgIIBBICKBUSEAgJIgwIAxIGAQEBAAABGAESAigDEgIIAxICKAQ=_0'},
    {n:'tetris-rotate3', theme:'brown', c:'CAkSAigIEgIIBBIAEhAICSIMCAISBgEBAQABABgBEgASEAgJIgwIAhIGAQEBAAEAGAESAigaEgIIBRICKBMSAggFEgIoDBICCAMSAigI_0'},
    {n:'tetris-rotate4', theme:'brown', c:'CAsSAigKEgIIBBICKAQSAggFEgIoAxICCAUSABICCAUSAigLEgIIBRICKBoSEAgJIgwIAhIGAQEBAAEAGAESAigSEgIIBRICKB4SAggDEgIoBhICCAUSAigD_0'},


    {n:'tetris-rotate-fun', theme:'brown', c:'CAsSAigKEgIIBBIAEg4ICSIKCAESBAEBAQEYARICCAUSAigEEg4ICSIKCAISBAEBAAEYARICCAUSAihREgIIBRICKAISEAgJIgwIAhIGAAEAAQEBGAESAigCEgIIBRICKAISAggDEgIoCg==_0'},
    {n:'tetris-rotate-fun', theme:'brown', c:'CAsSAigKEgIIBBICKBcSEAgJIgwIAxIGAAEAAQEBGAESAigbEhIICSIOCAISCAEAAQABAAEBGAESAiglEg4ICSIKCAISBAABAQAYARICKAkSAggDEgIoCg==_0'},
    {n:'tetris-rotate-fun', theme:'brown', c:'CAsSAigKEgIIBBICKAcSEAgJIgwIAxIGAAABAQEBGAESAigGEgIIBRICKBsSAggFEgIoAhIQCAkiDAgDEgYAAAEBAQEYARICKBYSAggFEgIoDxICCAUSAigEEhAICSIMCAISBgEBAQEBARgBEgIoCRICCAMSAigK_0'},
    {n:'tetris-rotate-fun', theme:'brown', c:'CAsSAigKEgIIBBICKAUSCwgJIgcIARIBARgBEgIoJxIQCAkiDAgCEgYAAQEAAAEYARICKAcSEAgJIgwIAhIGAQAAAQEAGAESAignEhMICSIPCAMSCQEBAQEAAAEAABgBEgIoBRICCAMSAigK_0'},


    {n:'tetris-hole1', theme:'default', c:'CAMSAigCEgIIBBICKAcSCwgJIgcIARIBASABEgIoBRINCAkiCQgBEgMBAQEYARIAEgIIAxICKAI=_0'},
    {n:'tetris-hole2', theme:'default', c:'CAMSAigCEgIIBBICKA0SDggJIgoIARIEAQEBARgBEgIoBRIMCAkiCAgBEgIBASABEgASAggDEgIoAg==_0'},
    {n:'tetris-hole', theme:'default', c:'CAUSAigEEgIIBBICKAsSDAgJIggIAhIEAQEBARIAEgsICSIHCAESAQEgARIAEgIIAxICKAQ=_0'},
    // This one shows that the JS is broken. Should be able to wirk with 4 squared and a blue-2 but doesn't. So, I simplified the puzzle
    {n:'tetris-hole', theme:'default', c:'CAkSAigIEgIIBBICKCsSDAgJIggIAhICAQEgARICKA8SDAgJIggIAhIEAQEBARIAEgwICSIICAISBAEBAQESABICCAMSAigI_0'},
    {n:'tetris-hole', theme:'default', c:'CAkSAigIEgIIBBICKAcSGAgJIhQIBBIQAQEBAQEAAAEBAAABAQEBARICKC8SCwgJIgcIARIBASABEgIoBxICCAMSAigI_0'},


    {n:'tetris-hole-fun', theme:'default', c:'CAkSAigIEgIIBBICKAMSCwgJIgcIARIBASABEgIoIxIMCAkiCAgEEgQBAQEBEgIoERIMCAkiCAgBEgQBAQEBEgIoBRICCAMSAigI_0'},
    {n:'tetris-hole-fun2', theme:'default', c:'CAkSAigIEgIIBBICKAUSDAgJIggIBBIEAQEBARICKCMSCwgJIgcIARIBASABEgIoERILCAkiBwgBEgEBIAESABIMCAkiCAgBEgQBAQEBEgASAggDEgIoCA==_0'},
    {n:'tetris-hole-fun3', theme:'default', c:'CAkSAigIEgIIBBICKAUSCwgJIgcIARIBASABEgASDAgJIggIBBIEAQEBARICKCESEQgJIg0IAxIJAAEBAAEAAQEAEgIoFRICCAMSAigI_0'},
    // Skipping a 2x2 blue square puzzle here at https://www.youtube.com/watch?v=2j4n78yxzRE&index=12&list=PLGKJJhcJXlNw2Fi_7syjV1OHcm31iaJI0
    {n:'tetris-hole-fun4', theme:'default', c:'CAkSAggEEgIoCRIYCAkiFAgEEhABAAEAAAEAAQEAAQAAAQABEgIoAxILCAkiBwgBEgEBIAESAigTEg4ICSIKCAMSBgEBAQABABICKAsSCwgJIgcIARIBASABEgIoGRICCAMSAigI_0'},

    // This one is also broken because of the blue squares bug. it's a 4x4 yellow square with a blue 2x3 L
    // {n:'tetris-hole-fun5-big-square', theme:'default', c:''},


    // TODO: The implementation is buggy here for cancelling out blue polyaminos ("Missing Feature")
    {n:'tetris-hole-zero', theme:'default', c:'CAMSAigCEgIIBBICKAcSDAgJIggIARICAQEgARICKAUSCggJIgYIARICAQESABICCAMSAigC_0'},
    {n:'tetris-hole-zero2', theme:'default', c:'CAUSAigEEgIIBBIAEgsICSIHCAESAQEgARICKAkSCwgJIgcIARIBASABEgIoCRIKCAkiBggBEgIBARICKAMSAggDEgIoBA==_0'},
    {n:'tetris-hole-zero3', theme:'default', c:'CAkSAigIEgIIBBIAEgsICSIHCAESAQEgARICKAMSDAgJIggIAhIEAQEBARICKB8SDAgJIggIAhIEAQABARICKBMSDAgJIggIARICAQEgARICKAMSCwgJIgcIARIBASABEgASAggDEgIoCA==_0'},
    {n:'tetris-hole-zero4', theme:'default', c:'CAsSAigHEgIIBRICKAISAggEEgASDAgJIggIAhIEAQEBARICKAUSCwgJIgcIARIBASABEgIoDxIMCAkiCAgBEgIBASABEgIoBxILCAkiBwgBEgEBIAESAggFEgIoEhIOCAkiCggCEgQBAQEAIAESAigTEgwICSIICAISBAABAQESAigFEgIIAxICKAo=_0'},


    // PHIL: Stopped here TODO at https://www.youtube.com/watch?v=qJlG-lrNw_Y&index=13&list=PLGKJJhcJXlNw2Fi_7syjV1OHcm31iaJI0


    // {n:'tetris6', theme:'brown', c:'CAcSAigDEgIIBRICKAISAggEEgIoBhICCAUSAigKEgwICSIICAISBAEBAQESAigREgIIAxICKAQSAggFEgA=_0'}, // tetris 3x3
    // {n:'tetris7', theme:'brown', c:'CAsSAigKEgIIBBICKAoSAggFEgIoCxICCAUSAigaEg4ICSIKCAISBgEBAQABABICKBYSAggFEgIoGhICCAMSAigIEgIIBRIA_0'}, // tetris 5x5
    // {n:'tetris8', theme:'brown', c:'CAsSAigKEgIIBBICKAoSAggFEgIoCxICCAUSAigaEg4ICSIKCAISBgEBAQABABICKBISAggFEgIoAxICCAUSAigaEgIIAxICKAgSAggFEgA=_0'}, // tetris 5x5

    // TODO: add more tutorials: https://www.youtube.com/watch?v=-nuJqaDPJ9c&list=PLGKJJhcJXlNw2Fi_7syjV1OHcm31iaJI0&index=11


    // // 2 piece tetris tutorial
    // {n:'tetris2piece1', theme:'brown', c:'CAMSAigCEgIIBBIAEgkICSIFCAESAQESAigFEgkICSIFCAESAQESABICCAMSAigC_0'}, // 1x2
    // {n:'tetris2piece2', theme:'brown', c:'CAMSAigCEgIIBBIAEgkICSIFCAESAQESAigLEgkICSIFCAESAQESABICCAMSAigC_0'}, // 1x3
    // {n:'tetris2piece3', theme:'brown', c:'CAcSAigGEgIIBBICKAMSCggJIgYIAhICAQESAigZEgoICSIGCAISAgEBEgIoBRICCAMSAigG_0'}, // 3x3
    // {n:'tetris2piece4', theme:'brown', c:'CAcSAigGEgIIBBICKBMSCggJIgYIAhICAQESAigJEgoICSIGCAISAgEBEgIoBRICCAMSAigG_0'}, // 3x3
    // {n:'tetris2piece5', theme:'brown', c:'CAkSAigIEgIIBBICKCcSCwgJIgcIAxIDAQEBEgIoAxILCAkiBwgBEgMBAQESAigTEgIIAxICKAg=_0'}, // 4x4
    // {n:'tetris2piece6', theme:'brown', c:'CAkSAigIEgIIBBICKBgSAggFEgIoDhILCAkiBwgDEgMBAQESAigDEgsICSIHCAESAwEBARICKBMSAggDEgIoCA==_0'}, // 4x4
    //
    // // multi-piece not-exactly-tutorial
    // {n:'tetris-mine1', theme:'brown', c:'CAsSAigKEgIIBBICKBASAggFEgIoCBIKCAkiBggCEgIBARICKAISAggFEgIoEhIMCAkiCAgCEgQBAAEBEgIoGRIMCAkiCAgCEgQBAQEBEgIoGRICCAMSAigK_0'}, // 4x4 (3 pieces all moved)
    // {n:'tetris-mine2', theme:'brown', c:'CAsSAigKEgIIBBICKBkSCggJIgYIAhICAQESAigTEgwICSIICAISBAEAAQESAigbEgwICSIICAISBAEBAQESAigZEgIIAxICKAo=_0'}, // 5x5 all pieces moved (maybe duplicate)

    // Star tutorial
    {n:'star1', c:'CAMSAigEEgQICBAIEgASAggDEgASAggEEgASBAgIEAgSAigE_0'}, // 1x2
    {n:'star2', c:'CAUSAigEEgIIBBIAEgQICBAIEgASBAgIEAgSAigHEgQICBAIEgASBAgIEAgSABICCAMSAigE_0'}, // 2x2
    {n:'star3', c:'CAcSAigGEgIIBBICKA8SBAgIEAgSABIECAgQCBIAEgQICBAIEgIoCxIECAgQCBICKAMSAggDEgIoBg==_0'}, // 3x3
    {n:'star4', c:'CAcSAigGEgIIBBIAEgQICBAFEgASBAgIEAgSABIECAgQCBICKAkSBAgIEAUSAigDEgQICBAFEgIoCRIECAgQCBIAEgQICBAIEgASBAgIEAUSABICCAMSAigG_0'}, // 3x3 2-colors
    {n:'star5', c:'CAkSAigIEgIIBBIAEgQICBACEgASBAgIEAISABIECAgQAhIAEgQICBACEgIoCxIECAgQARIAEgQICBABEgASBAgIEAYSABIECAgQBhICKAsSBAgIEAUSABIECAgQCBIAEgQICBAIEgASBAgIEAYSAigLEgQICBAFEgASBAgIEAgSABIECAgQCBIAEgQICBAGEgASAggDEgIoCA==_0'}, // 4x4 4-colors


    // star and square example
    {n:'starsquare', c:'CAUSAigEEgIIBBIAEgQIBxABEgIoCxIECAgQAhICKAcSBAgHEAISAigDEgIIAxICKAQ=_0'}, // 1x3



  {n:'', c:'CAkSAigEEggIBBoECAAQARICKAUSBAgIEAUSABIECAgQCBIAEgQICBAIEgASBAgIEAISAigLEgQICBAFEgIIBhIECAgQCBIAEgQICBAIEgIIBhIECAgQAhICKAsSBAgIEAUSABIECAgQAxIAEgQICBADEgASBAgIEAISAigLEgQICBAFEgASBAgIEAMSABIECAgQAxIAEgQICBACEgIoBRICCAMSAigE_0'}, // surfing
  {n:'', c:'CAcSAigGEggIBBoECAIQABICKAISAggGEgIoBhICCAYSAigDEgIIBhICKAMSAggKEgIoAhICCAYSAigCEgIIBhIAEgIIBhICCAUSAigDEgIIBhIAEgIIBhICKAISAggDEgIoBg_0'}, // short walk
  {n:'', c:'CA0SAigMEggIBBoECAIQABIAEgwICSIICAISBAEBAQASAigFEgwICSIICAISBAEBAQASAigDEgIIChICKBMSDAgJIggIAhIEAAEBARICKAUSDAgJIggIAhIEAAEBARIAEgIIAxICKAw_0'}, //gallery

];

  function startLevel() {
    var gui;
    var grid = new windmill.Grid();
    var puzzle = PUZZLES[index];

    var theme = puzzle.theme || 'default';
    document.body.setAttribute('data-theme', theme);
    grid.initialize(undefined, undefined, puzzle.c);
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

    windmill.Sound.playStartRipples();
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
