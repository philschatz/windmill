// This file was automatically generated from windmill.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace windmill.templates.
 * @public
 */

goog.provide('windmill.templates');

goog.require('soy');
goog.require('soydata');
goog.require('goog.asserts');


/**
 * @param {{
 *    contents: !Array<?>
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.gridSvg = function(opt_data, opt_ignored) {
  var contents = goog.asserts.assertArray(opt_data.contents, "expected parameter 'contents' of type list<unknown>.");
  var output = '<g class="grid-base">';
  var entityList5 = contents;
  var entityListLen5 = entityList5.length;
  for (var entityIndex5 = 0; entityIndex5 < entityListLen5; entityIndex5++) {
    var entityData5 = entityList5[entityIndex5];
    output += windmill.templates.entityGridSvg(entityData5);
  }
  output += '</g><g class="grid-extras">';
  var entityList9 = contents;
  var entityListLen9 = entityList9.length;
  for (var entityIndex9 = 0; entityIndex9 < entityListLen9; entityIndex9++) {
    var entityData9 = entityList9[entityIndex9];
    output += windmill.templates.entityExtraSvg(entityData9);
  }
  output += '</g>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.gridSvg.soyTemplateName = 'windmill.templates.gridSvg';
}


/**
 * @param {{
 *    color: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.colorSvg = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  goog.asserts.assert(opt_data.color == null || goog.isNumber(opt_data.color), "expected param 'color' of type null|number|undefined.");
  var color = /** @type {null|number|undefined} */ (opt_data.color);
  var output = '';
  if (color != null) {
    switch (color) {
      case 1:
        output += 'black';
        break;
      case 2:
        output += 'white';
        break;
      case 3:
        output += 'cyan';
        break;
      case 4:
        output += 'magenta';
        break;
      case 5:
        output += 'yellow';
        break;
      case 6:
        output += 'red';
        break;
      case 7:
        output += 'green';
        break;
      case 8:
        output += 'blue';
        break;
      case 9:
        output += 'orange';
        break;
    }
  } else {
    output += 'gray';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.colorSvg.soyTemplateName = 'windmill.templates.colorSvg';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    hasBend: (boolean|null|undefined),
 *    drawType: number,
 *    type: number,
 *    extras: (?)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.entityExtraSvg = function(opt_data, opt_ignored) {
  var i = goog.asserts.assertNumber(opt_data.i, "expected parameter 'i' of type int.");
  var j = goog.asserts.assertNumber(opt_data.j, "expected parameter 'j' of type int.");
  goog.asserts.assert(opt_data.hasBend == null || goog.isBoolean(opt_data.hasBend) || opt_data.hasBend === 1 || opt_data.hasBend === 0, "expected param 'hasBend' of type boolean|null|undefined.");
  var hasBend = /** @type {boolean|null|undefined} */ (opt_data.hasBend);
  var drawType = goog.asserts.assertNumber(opt_data.drawType, "expected parameter 'drawType' of type int.");
  var type = goog.asserts.assertNumber(opt_data.type, "expected parameter 'type' of type int.");
  var output = '';
  var coord__soy37 = {x: 100 * i, y: 100 * j, i: i, j: j, hasBend: hasBend};
  switch (drawType) {
    case 1:
      switch (type) {
        case 2:
          break;
        case 7:
          output += windmill.templates.squareSvg(soy.$$augmentMap(coord__soy37, {color: opt_data.extras.color}));
          break;
        case 8:
          output += windmill.templates.starSvg(soy.$$augmentMap(coord__soy37, {color: opt_data.extras.color}));
          break;
        case 9:
          output += windmill.templates.tetrisSvg(soy.$$augmentMap(coord__soy37, {shape: opt_data.extras.shape, maximumSize: opt_data.extras.maximumTetrisSize}));
          break;
        case 10:
          output += windmill.templates.errorSvg(coord__soy37);
          break;
        case 11:
          output += windmill.templates.triangleSvg(soy.$$augmentMap(coord__soy37, {count: opt_data.extras.count}));
          break;
        default:
          output += '<!-- whoops -->';
      }
      break;
    case 2:
      switch (type) {
        case 2:
          break;
        case 3:
          output += windmill.templates.startSvg(coord__soy37);
          break;
        case 4:
          output += windmill.templates.endSvg(soy.$$augmentMap(coord__soy37, {horizontal: opt_data.extras.horizontal, vertical: opt_data.extras.vertical}));
          break;
        case 6:
          output += windmill.templates.hexagonSvg(coord__soy37);
          break;
        default:
          output += '<!-- whoops -->';
      }
      break;
    case 3:
    case 4:
      switch (type) {
        case 6:
          output += windmill.templates.hexagonSvg(soy.$$augmentMap(coord__soy37, {direction: drawType}));
          break;
      }
      break;
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.entityExtraSvg.soyTemplateName = 'windmill.templates.entityExtraSvg';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    hasBend: (boolean|null|undefined),
 *    drawType: number,
 *    type: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.entityGridSvg = function(opt_data, opt_ignored) {
  var i = goog.asserts.assertNumber(opt_data.i, "expected parameter 'i' of type int.");
  var j = goog.asserts.assertNumber(opt_data.j, "expected parameter 'j' of type int.");
  goog.asserts.assert(opt_data.hasBend == null || goog.isBoolean(opt_data.hasBend) || opt_data.hasBend === 1 || opt_data.hasBend === 0, "expected param 'hasBend' of type boolean|null|undefined.");
  var hasBend = /** @type {boolean|null|undefined} */ (opt_data.hasBend);
  var drawType = goog.asserts.assertNumber(opt_data.drawType, "expected parameter 'drawType' of type int.");
  var type = goog.asserts.assertNumber(opt_data.type, "expected parameter 'type' of type int.");
  var output = '';
  var coord__soy78 = {x: 100 * i, y: 100 * j, hasBend: hasBend};
  switch (drawType) {
    case 3:
    case 4:
      output += (type != 1) ? windmill.templates.gridLineSvg(soy.$$augmentMap(coord__soy78, {direction: drawType, disjoint: type == 5})) : '';
      break;
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.entityGridSvg.soyTemplateName = 'windmill.templates.entityGridSvg';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    horizontal: number,
 *    vertical: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.endSvg = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.x), "expected param 'x' of type number.");
  var x = /** @type {number} */ (opt_data.x);
  goog.asserts.assert(goog.isNumber(opt_data.y), "expected param 'y' of type number.");
  var y = /** @type {number} */ (opt_data.y);
  goog.asserts.assert(goog.isNumber(opt_data.horizontal), "expected param 'horizontal' of type number.");
  var horizontal = /** @type {number} */ (opt_data.horizontal);
  goog.asserts.assert(goog.isNumber(opt_data.vertical), "expected param 'vertical' of type number.");
  var vertical = /** @type {number} */ (opt_data.vertical);
  var output = '';
  var dx__soy87 = horizontal == 0 ? 0 : horizontal > 0 ? 20 : -20;
  var dy__soy88 = vertical == 0 ? 0 : vertical > 0 ? 20 : -20;
  output += '<line x1="' + soy.$$escapeHtmlAttribute(x) + '" y1="' + soy.$$escapeHtmlAttribute(y) + '" x2="' + soy.$$escapeHtmlAttribute(x + dx__soy87) + '" y2="' + soy.$$escapeHtmlAttribute(y + dy__soy88) + '" stroke-width="20" stroke-linecap="round" /><circle class="puzzle-end-pulsator" cx="' + soy.$$escapeHtmlAttribute(x + dx__soy87) + '" cy="' + soy.$$escapeHtmlAttribute(y + dy__soy88) + '" r="10" style="transform-origin: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x + dx__soy87)) + 'px ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y + dy__soy88)) + 'px;" />';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.endSvg.soyTemplateName = 'windmill.templates.endSvg';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.errorSvg = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(windmill.templates.cellSvg(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<rect width="15px" height="8px" transform="rotate(-90 0 4)" /><rect width="15px" height="8px" transform="rotate(30 0 4)" /><rect width="15px" height="8px" transform="rotate(150 0 4)" />'), attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('fill="white" stroke="white"')})));
};
if (goog.DEBUG) {
  windmill.templates.errorSvg.soyTemplateName = 'windmill.templates.errorSvg';
}


/**
 * @param {{
 *    count: number,
 *    x: (null|number|undefined),
 *    width: (null|number|undefined),
 *    y: (null|number|undefined),
 *    height: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.triangleSvg = function(opt_data, opt_ignored) {
  var count = goog.asserts.assertNumber(opt_data.count, "expected parameter 'count' of type int.");
  var output = '';
  var r__soy117 = 8;
  var addl__soy118 = r__soy117 * 2 + 4;
  var h__soy119 = r__soy117 * 1.73205 / 2;
  var xTransform__soy120 = (count - 1) * addl__soy118;
  var param121 = '';
  var iLimit122 = count;
  for (var i122 = 0; i122 < iLimit122; i122++) {
    param121 += '<polygon class="triangle" points="0,' + soy.$$escapeHtmlAttribute(-h__soy119) + ' ' + soy.$$escapeHtmlAttribute(r__soy117) + ',' + soy.$$escapeHtmlAttribute(h__soy119) + ' ' + soy.$$escapeHtmlAttribute(-r__soy117) + ',' + soy.$$escapeHtmlAttribute(h__soy119) + '" transform="translate(' + soy.$$escapeHtmlAttribute(i122 * addl__soy118 - xTransform__soy120 / 2) + ',0)" />';
  }
  output += windmill.templates.cellSvg(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param121), attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('fill="white" stroke="white"')}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.triangleSvg.soyTemplateName = 'windmill.templates.triangleSvg';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.starSvg = function(opt_data, opt_ignored) {
  var output = '';
  var color__soy142 = '' + ('' + windmill.templates.colorSvg(opt_data));
  color__soy142 = soydata.$$markUnsanitizedTextForInternalBlocks(color__soy142);
  output += windmill.templates.cellSvg(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<rect width="30px" height="30px" /><rect width="30px" height="30px" transform="rotate(45 15 15)" />'), width: 30, height: 30, attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(' class="star-piece" data-color="' + soy.$$escapeHtmlAttribute(color__soy142) + '"')}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.starSvg.soyTemplateName = 'windmill.templates.starSvg';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    direction: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.hexagonSvg = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.x), "expected param 'x' of type number.");
  var x = /** @type {number} */ (opt_data.x);
  goog.asserts.assert(goog.isNumber(opt_data.y), "expected param 'y' of type number.");
  var y = /** @type {number} */ (opt_data.y);
  goog.asserts.assert(opt_data.direction == null || goog.isNumber(opt_data.direction), "expected param 'direction' of type null|number|undefined.");
  var direction = /** @type {null|number|undefined} */ (opt_data.direction);
  var output = '';
  var r__soy154 = 8;
  var s__soy155 = r__soy154 / 2;
  var h__soy156 = r__soy154 * 1.73205 / 2;
  var fullWidth__soy157 = r__soy154 * 2;
  var fullHeight__soy158 = h__soy156 * 2;
  output += '<polygon class="hexagon" points="' + soy.$$escapeHtmlAttribute(-r__soy154) + ',0 ' + soy.$$escapeHtmlAttribute(-s__soy155) + ',' + soy.$$escapeHtmlAttribute(-h__soy156) + ' ' + soy.$$escapeHtmlAttribute(s__soy155) + ',' + soy.$$escapeHtmlAttribute(-h__soy156) + ' ' + soy.$$escapeHtmlAttribute(r__soy154) + ',0 ' + soy.$$escapeHtmlAttribute(s__soy155) + ',' + soy.$$escapeHtmlAttribute(h__soy156) + ' ' + soy.$$escapeHtmlAttribute(-s__soy155) + ',' + soy.$$escapeHtmlAttribute(h__soy156) + '" transform="translate(' + soy.$$escapeHtmlAttribute(x + (direction == 3 ? 50 : 0)) + ',' + soy.$$escapeHtmlAttribute(y + (direction == 4 ? 50 : 0)) + ')" />';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.hexagonSvg.soyTemplateName = 'windmill.templates.hexagonSvg';
}


/**
 * @param {{
 *    shape: {free: boolean, height: number, negative: boolean, rows: !Array<!Array<boolean>>, width: number},
 *    maximumSize: number,
 *    x: (null|number|undefined),
 *    y: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.tetrisSvg = function(opt_data, opt_ignored) {
  var shape = goog.asserts.assertObject(opt_data.shape, "expected parameter 'shape' of type [free: bool, height: int, negative: bool, rows: list<list<bool>>, width: int].");
  var maximumSize = goog.asserts.assertNumber(opt_data.maximumSize, "expected parameter 'maximumSize' of type int.");
  var output = '';
  var width__soy185 = 18 * shape.width + 3 * (shape.width - 1);
  var height__soy186 = 18 * shape.height + 3 * (shape.height - 1);
  var allowedSpace__soy187 = 63.0 * (shape.free ? 0.7071 : 1);
  var maxDimension__soy188 = 18 * maximumSize + 3 * (maximumSize - 1);
  var scaleFactor__soy189 = maxDimension__soy188 <= allowedSpace__soy187 ? 1 : allowedSpace__soy187 / maxDimension__soy188;
  var neg__soy190 = shape.negative ? 2 : 0;
  var pos__soy191 = ! shape.negative ? 2 : 0;
  var param192 = '<g transform="' + ((shape.free) ? 'rotate(-15, ' + soy.$$escapeHtmlAttribute(width__soy185 * scaleFactor__soy189 / 2) + ', ' + soy.$$escapeHtmlAttribute(height__soy186 * scaleFactor__soy189 / 2) + ') scale(' + soy.$$escapeHtmlAttribute(scaleFactor__soy189) + ')' : 'scale(' + soy.$$escapeHtmlAttribute(scaleFactor__soy189) + ')') + '">';
  var rowList225 = shape.rows;
  var rowListLen225 = rowList225.length;
  for (var rowIndex225 = 0; rowIndex225 < rowListLen225; rowIndex225++) {
    var rowData225 = rowList225[rowIndex225];
    var colList223 = rowData225;
    var colListLen223 = colList223.length;
    for (var colIndex223 = 0; colIndex223 < colListLen223; colIndex223++) {
      var colData223 = colList223[colIndex223];
      param192 += (colData223) ? '<rect width="' + soy.$$escapeHtmlAttribute(18 - 2 * neg__soy190) + 'px" height="' + soy.$$escapeHtmlAttribute(18 - 2 * neg__soy190) + 'px" rx="' + soy.$$escapeHtmlAttribute(pos__soy191) + '" ry="' + soy.$$escapeHtmlAttribute(pos__soy191) + '" x="' + soy.$$escapeHtmlAttribute(21 * colIndex223 + neg__soy190) + '" y="' + soy.$$escapeHtmlAttribute(21 * rowIndex225 + neg__soy190) + '" />' : '';
    }
  }
  param192 += '</g>';
  output += windmill.templates.cellSvg(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param192), width: width__soy185 * scaleFactor__soy189, height: height__soy186 * scaleFactor__soy189, attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('' + ((shape.negative) ? 'class="tetris-hole-square"' : 'class="tetris-square"'))}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.tetrisSvg.soyTemplateName = 'windmill.templates.tetrisSvg';
}


/**
 * @param {{
 *    content: (soydata.SanitizedHtml|string)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.iconWrapper = function(opt_data, opt_ignored) {
  goog.asserts.assert((opt_data.content instanceof soydata.SanitizedHtml) || (opt_data.content instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content), "expected param 'content' of type soydata.SanitizedHtml.");
  var content = /** @type {soydata.SanitizedHtml} */ (opt_data.content);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<svg viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="scale(0.64)">' + soy.$$escapeHtml(content) + '</g></svg>');
};
if (goog.DEBUG) {
  windmill.templates.iconWrapper.soyTemplateName = 'windmill.templates.iconWrapper';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.logo = function(opt_data, opt_ignored) {
  var output = '';
  var coords__soy242 = {x: 0, y: 0};
  var zoom15__soy243 = 'scale(1.5) translate(-16.66, -16.66)';
  zoom15__soy243 = soydata.$$markUnsanitizedTextForInternalBlocks(zoom15__soy243);
  output += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><g id="tetris" transform="scale(0.32, 0.32) ' + soy.$$escapeHtmlAttribute(zoom15__soy243) + '">' + windmill.templates.tetrisSvg(soy.$$augmentMap(coords__soy242, {shape: {rows: [[true, true], [true, true]], width: 2, height: 2, free: false, negative: false}, maximumSize: 2})) + '</g></svg>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.logo.soyTemplateName = 'windmill.templates.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.icons = function(opt_data, opt_ignored) {
  var output = '';
  var coords__soy253 = {x: 0, y: 0};
  var zoom1__soy254 = 'none';
  zoom1__soy254 = soydata.$$markUnsanitizedTextForInternalBlocks(zoom1__soy254);
  var zoom15__soy256 = 'scale(1.5) translate(-16.66, -16.66)';
  zoom15__soy256 = soydata.$$markUnsanitizedTextForInternalBlocks(zoom15__soy256);
  var zoom2__soy258 = 'scale(2) translate(-25, -25)';
  zoom2__soy258 = soydata.$$markUnsanitizedTextForInternalBlocks(zoom2__soy258);
  output += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>';
  var colorList276 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var colorListLen276 = colorList276.length;
  for (var colorIndex276 = 0; colorIndex276 < colorListLen276; colorIndex276++) {
    var colorData276 = colorList276[colorIndex276];
    output += '<g id="square' + soy.$$escapeHtmlAttribute(colorData276) + '"><g transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.squareSvg(soy.$$augmentMap(coords__soy253, {color: colorData276})) + '</g></g><g id="star' + soy.$$escapeHtmlAttribute(colorData276) + '"><g transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.starSvg(soy.$$augmentMap(coords__soy253, {color: colorData276})) + '</g></g>';
  }
  output += '<g id="tetris" transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.tetrisSvg(soy.$$augmentMap(coords__soy253, {shape: {rows: [[true, true], [true, true]], width: 2, height: 2, free: false, negative: false}, maximumSize: 2})) + '</g><g id="negative" transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.tetrisSvg(soy.$$augmentMap(coords__soy253, {shape: {rows: [[true, true], [true, true]], width: 2, height: 2, free: false, negative: true}, maximumSize: 2})) + '</g><g id="error" transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.errorSvg(coords__soy253) + '</g>';
  for (var count295 = 0; count295 < 3; count295++) {
    output += '<g id="triangle' + soy.$$escapeHtmlAttribute(count295) + '" transform="' + soy.$$escapeHtmlAttribute(zoom15__soy256) + '">' + windmill.templates.triangleSvg(soy.$$augmentMap(coords__soy253, {count: count295 + 1})) + '</g>';
  }
  output += '<g id="start" transform="translate(50, 50) scale(1.5)" stroke="black" fill="black"><g transform="translate(-6, 0)">' + windmill.templates.startSvg(coords__soy253) + '</g>' + windmill.templates.gridLineSvg(soy.$$augmentMap(coords__soy253, {direction: 3})) + '</g><g id="end" transform="translate(40, 50) scale(1.5)" stroke="black"><line x1="0" y1="0" x2="20" y2="0" stroke-width="20" stroke-linecapPHIL="round" /><line x1="0" y1="0" x2="10" y2="0" stroke-width="20" stroke-linecap="square" /></g><g id="disjoint" transform="translate(-25, 50) scale(1.5)" stroke="black">' + windmill.templates.gridLineSvg(soy.$$augmentMap(coords__soy253, {direction: 3, disjoint: true})) + '</g><g id="hexagon" transform="translate(-25, 50) scale(1.5)" stroke="black">' + windmill.templates.gridLineSvg(soy.$$augmentMap(coords__soy253, {direction: 3})) + '<g transform="translate(50, 0)">' + windmill.templates.hexagonSvg(coords__soy253) + '</g></g></defs></svg>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.icons.soyTemplateName = 'windmill.templates.icons';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.squareSvg = function(opt_data, opt_ignored) {
  var output = '';
  var color__soy328 = '' + ('' + windmill.templates.colorSvg(opt_data));
  color__soy328 = soydata.$$markUnsanitizedTextForInternalBlocks(color__soy328);
  output += windmill.templates.cellSvg(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<rect width="40px" height="40px" rx="15px" ry="15px" />'), width: 40, height: 40, attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('class="square-piece" data-color="' + soy.$$escapeHtmlAttribute(color__soy328) + '"')}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.squareSvg.soyTemplateName = 'windmill.templates.squareSvg';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    content: (soydata.SanitizedHtml|string),
 *    attributes: (soydata.SanitizedHtmlAttribute|string|undefined),
 *    width: (null|number|undefined),
 *    height: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.cellSvg = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  goog.asserts.assert((opt_data.content instanceof soydata.SanitizedHtml) || (opt_data.content instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content), "expected param 'content' of type soydata.SanitizedHtml.");
  var content = /** @type {soydata.SanitizedHtml} */ (opt_data.content);
  goog.asserts.assert(opt_data.attributes == null || (opt_data.attributes instanceof soydata.SanitizedHtmlAttribute) || (opt_data.attributes instanceof soydata.UnsanitizedText) || goog.isString(opt_data.attributes), "expected param 'attributes' of type soydata.SanitizedHtmlAttribute|string|undefined.");
  var attributes = /** @type {soydata.SanitizedHtmlAttribute|string|undefined} */ (opt_data.attributes);
  goog.asserts.assert(opt_data.width == null || goog.isNumber(opt_data.width), "expected param 'width' of type null|number|undefined.");
  var width = /** @type {null|number|undefined} */ (opt_data.width);
  goog.asserts.assert(opt_data.height == null || goog.isNumber(opt_data.height), "expected param 'height' of type null|number|undefined.");
  var height = /** @type {null|number|undefined} */ (opt_data.height);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<g transform="translate(' + soy.$$escapeHtmlAttribute(x + 50.0 - (width ? width : 0) / 2) + ',' + soy.$$escapeHtmlAttribute(y + 50.0 - (height ? height : 0) / 2) + ')"' + ((attributes) ? ' ' + soy.$$filterHtmlAttributes(attributes) : '') + '>' + soy.$$escapeHtml(content) + '</g>');
};
if (goog.DEBUG) {
  windmill.templates.cellSvg.soyTemplateName = 'windmill.templates.cellSvg';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    direction: number,
 *    hasBend: boolean,
 *    start: (null|number|undefined),
 *    end: (null|number|undefined),
 *    disjoint: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.gridLineSvg = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.x), "expected param 'x' of type number.");
  var x = /** @type {number} */ (opt_data.x);
  goog.asserts.assert(goog.isNumber(opt_data.y), "expected param 'y' of type number.");
  var y = /** @type {number} */ (opt_data.y);
  goog.asserts.assert(goog.isNumber(opt_data.direction), "expected param 'direction' of type number.");
  var direction = /** @type {number} */ (opt_data.direction);
  goog.asserts.assert(goog.isBoolean(opt_data.hasBend) || opt_data.hasBend === 1 || opt_data.hasBend === 0, "expected param 'hasBend' of type boolean.");
  var hasBend = /** @type {boolean} */ (!!opt_data.hasBend);
  goog.asserts.assert(opt_data.start == null || goog.isNumber(opt_data.start), "expected param 'start' of type null|number|undefined.");
  var start = /** @type {null|number|undefined} */ (opt_data.start);
  goog.asserts.assert(opt_data.end == null || goog.isNumber(opt_data.end), "expected param 'end' of type null|number|undefined.");
  var end = /** @type {null|number|undefined} */ (opt_data.end);
  goog.asserts.assert(opt_data.disjoint == null || goog.isBoolean(opt_data.disjoint) || opt_data.disjoint === 1 || opt_data.disjoint === 0, "expected param 'disjoint' of type boolean|null|undefined.");
  var disjoint = /** @type {boolean|null|undefined} */ (opt_data.disjoint);
  var output = '';
  var horizontal__soy353 = direction == 3 ? 1 : 0;
  var vertical__soy354 = 1 - horizontal__soy353;
  var soff__soy355 = start ? start : 0;
  var eoff__soy356 = end ? end : 0;
  var partial__soy357 = start || end ? 1 : 0;
  output += '<!-- Partially trying to fix the just-a-line puzzle case by using rectangles instead of lines<rect x="' + soy.$$escapeHtmlRcdata(x + horizontal__soy353 * partial__soy357 * soff__soy355 - 10.0) + '" y="' + soy.$$escapeHtmlRcdata(y + vertical__soy354 * partial__soy357 * soff__soy355 - 10.0) + '" width="' + soy.$$escapeHtmlRcdata(horizontal__soy353 ? horizontal__soy353 * (100 - partial__soy357 * eoff__soy356) : 20) + 'px" height="' + soy.$$escapeHtmlRcdata(vertical__soy354 ? vertical__soy354 * (100 - partial__soy357 * eoff__soy356) : 20) + 'px" partial="' + soy.$$escapeHtmlRcdata(partial__soy357) + '" soff="' + soy.$$escapeHtmlRcdata(soff__soy355) + '" eoff="' + soy.$$escapeHtmlRcdata(eoff__soy356) + '" horizontal="' + soy.$$escapeHtmlRcdata(horizontal__soy353) + '" vertical="' + soy.$$escapeHtmlRcdata(vertical__soy354) + '" />--><line x1="' + soy.$$escapeHtmlAttribute(x + horizontal__soy353 * partial__soy357 * soff__soy355) + '" y1="' + soy.$$escapeHtmlAttribute(y + vertical__soy354 * partial__soy357 * soff__soy355) + '" x2="' + soy.$$escapeHtmlAttribute(x + horizontal__soy353 * (100 - partial__soy357 * eoff__soy356)) + '" y2="' + soy.$$escapeHtmlAttribute(y + vertical__soy354 * (100 - partial__soy357 * eoff__soy356)) + '" stroke-width="20"' + ((disjoint) ? 'stroke-dasharray="30,40,30"' : '') + 'class="' + soy.$$escapeHtmlAttribute(hasBend ? 'has-bend' : 'not-has-bend') + '" />';
  if (disjoint) {
    var r__soy401 = 10.0;
    output += '<g stroke="none"><rect width="' + soy.$$escapeHtmlAttribute(2 * r__soy401) + '" height="' + soy.$$escapeHtmlAttribute(2 * r__soy401) + '" x="' + soy.$$escapeHtmlAttribute(x + horizontal__soy353 * 30 - r__soy401) + '" y="' + soy.$$escapeHtmlAttribute(y + vertical__soy354 * 30 - r__soy401) + '" /><rect width="' + soy.$$escapeHtmlAttribute(2 * r__soy401) + '" height="' + soy.$$escapeHtmlAttribute(2 * r__soy401) + '" x="' + soy.$$escapeHtmlAttribute(x + horizontal__soy353 * 70 - r__soy401) + '" y="' + soy.$$escapeHtmlAttribute(y + vertical__soy354 * 70 - r__soy401) + '" /></g>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.gridLineSvg.soyTemplateName = 'windmill.templates.gridLineSvg';
}


/**
 * @param {{
 *    x: number,
 *    y: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.startSvg = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.x), "expected param 'x' of type number.");
  var x = /** @type {number} */ (opt_data.x);
  goog.asserts.assert(goog.isNumber(opt_data.y), "expected param 'y' of type number.");
  var y = /** @type {number} */ (opt_data.y);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<circle cx="' + soy.$$escapeHtmlAttribute(x) + '" cy="' + soy.$$escapeHtmlAttribute(y) + '" r="25" /><circle class="puzzle-start-pulsator " cx="' + soy.$$escapeHtmlAttribute(x) + '" cy="' + soy.$$escapeHtmlAttribute(y) + '" r="25" style="transform-origin: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x)) + 'px ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y)) + 'px;" />');
};
if (goog.DEBUG) {
  windmill.templates.startSvg.soyTemplateName = 'windmill.templates.startSvg';
}


/**
 * @param {{
 *    snakeId: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.snakeWrapperSvg = function(opt_data, opt_ignored) {
  var snakeId = goog.asserts.assertNumber(opt_data.snakeId, "expected parameter 'snakeId' of type int.");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<g id="path' + soy.$$escapeHtmlAttribute(snakeId) + '"></g>');
};
if (goog.DEBUG) {
  windmill.templates.snakeWrapperSvg.soyTemplateName = 'windmill.templates.snakeWrapperSvg';
}


/**
 * @param {{
 *    contents: !Array<?>
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.snakeSvg = function(opt_data, opt_ignored) {
  var contents = goog.asserts.assertArray(opt_data.contents, "expected parameter 'contents' of type list<unknown>.");
  var output = '<g class="snake">';
  var segmentList445 = contents;
  var segmentListLen445 = segmentList445.length;
  for (var segmentIndex445 = 0; segmentIndex445 < segmentListLen445; segmentIndex445++) {
    var segmentData445 = segmentList445[segmentIndex445];
    output += windmill.templates.snakeSegmentSvg(soy.$$augmentMap(segmentData445, {isLastSegment: segmentIndex445 == segmentListLen445 - 1}));
  }
  output += '</g>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.snakeSvg.soyTemplateName = 'windmill.templates.snakeSvg';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    isLastSegment: boolean,
 *    segmentType: number,
 *    direction: (null|number|undefined),
 *    start: (null|number|undefined),
 *    end: (null|number|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.snakeSegmentSvg = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.i), "expected param 'i' of type number.");
  var i = /** @type {number} */ (opt_data.i);
  goog.asserts.assert(goog.isNumber(opt_data.j), "expected param 'j' of type number.");
  var j = /** @type {number} */ (opt_data.j);
  goog.asserts.assert(goog.isBoolean(opt_data.isLastSegment) || opt_data.isLastSegment === 1 || opt_data.isLastSegment === 0, "expected param 'isLastSegment' of type boolean.");
  var isLastSegment = /** @type {boolean} */ (!!opt_data.isLastSegment);
  goog.asserts.assert(goog.isNumber(opt_data.segmentType), "expected param 'segmentType' of type number.");
  var segmentType = /** @type {number} */ (opt_data.segmentType);
  goog.asserts.assert(opt_data.direction == null || goog.isNumber(opt_data.direction), "expected param 'direction' of type null|number|undefined.");
  var direction = /** @type {null|number|undefined} */ (opt_data.direction);
  goog.asserts.assert(opt_data.start == null || goog.isNumber(opt_data.start), "expected param 'start' of type null|number|undefined.");
  var start = /** @type {null|number|undefined} */ (opt_data.start);
  goog.asserts.assert(opt_data.end == null || goog.isNumber(opt_data.end), "expected param 'end' of type null|number|undefined.");
  var end = /** @type {null|number|undefined} */ (opt_data.end);
  var output = '';
  var coord__soy449 = {x: 100 * i, y: 100 * j, hasBend: true};
  output += (segmentType == 1) ? windmill.templates.startSvg(coord__soy449) : (segmentType == 2 && direction != null) ? windmill.templates.gridLineSvg(soy.$$augmentMap(coord__soy449, {direction: direction, isLastSegment: isLastSegment})) : (segmentType == 3 && start != null && end != null && direction != null) ? windmill.templates.gridLineSvg(soy.$$augmentMap(coord__soy449, {direction: direction, isLastSegment: isLastSegment, start: start, end: end})) : '';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.snakeSegmentSvg.soyTemplateName = 'windmill.templates.snakeSegmentSvg';
}


/**
 * @param {{
 *    contents: !Array<?>,
 *    editEntity: (?)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.gridHtml = function(opt_data, opt_ignored) {
  var contents = goog.asserts.assertArray(opt_data.contents, "expected parameter 'contents' of type list<unknown>.");
  goog.asserts.assert(opt_data.editEntity == null || opt_data.editEntity != null, "expected param 'editEntity' of type (?).");
  var editEntity = /** @type {(?)} */ (opt_data.editEntity);
  var output = '';
  var entityList465 = contents;
  var entityListLen465 = entityList465.length;
  for (var entityIndex465 = 0; entityIndex465 < entityListLen465; entityIndex465++) {
    var entityData465 = entityList465[entityIndex465];
    output += windmill.templates.entityPlayHtml(entityData465);
  }
  if (editEntity) {
    var entityList471 = contents;
    var entityListLen471 = entityList471.length;
    for (var entityIndex471 = 0; entityIndex471 < entityListLen471; entityIndex471++) {
      var entityData471 = entityList471[entityIndex471];
      output += windmill.templates.entityEditHtml(soy.$$augmentMap(entityData471, {editEntity: editEntity}));
    }
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.gridHtml.soyTemplateName = 'windmill.templates.gridHtml';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    hasBend: (boolean|null|undefined),
 *    drawType: number,
 *    type: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.entityPlayHtml = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.i), "expected param 'i' of type number.");
  var i = /** @type {number} */ (opt_data.i);
  goog.asserts.assert(goog.isNumber(opt_data.j), "expected param 'j' of type number.");
  var j = /** @type {number} */ (opt_data.j);
  goog.asserts.assert(opt_data.hasBend == null || goog.isBoolean(opt_data.hasBend) || opt_data.hasBend === 1 || opt_data.hasBend === 0, "expected param 'hasBend' of type boolean|null|undefined.");
  var hasBend = /** @type {boolean|null|undefined} */ (opt_data.hasBend);
  goog.asserts.assert(goog.isNumber(opt_data.drawType), "expected param 'drawType' of type number.");
  var drawType = /** @type {number} */ (opt_data.drawType);
  goog.asserts.assert(goog.isNumber(opt_data.type), "expected param 'type' of type number.");
  var type = /** @type {number} */ (opt_data.type);
  var output = '';
  var entity__soy474 = {x: 100 * i, y: 100 * j, i: i, j: j, drawType: drawType, hasBend: hasBend};
  output += (drawType == 2 && type == 3) ? windmill.templates.startHtml(entity__soy474) : '';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.entityPlayHtml.soyTemplateName = 'windmill.templates.entityPlayHtml';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    drawType: number,
 *    type: number,
 *    extras: (?),
 *    editEntity: (?)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.entityEditHtml = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.i), "expected param 'i' of type number.");
  var i = /** @type {number} */ (opt_data.i);
  goog.asserts.assert(goog.isNumber(opt_data.j), "expected param 'j' of type number.");
  var j = /** @type {number} */ (opt_data.j);
  goog.asserts.assert(goog.isNumber(opt_data.drawType), "expected param 'drawType' of type number.");
  var drawType = /** @type {number} */ (opt_data.drawType);
  var type = goog.asserts.assertNumber(opt_data.type, "expected parameter 'type' of type int.");
  var output = '';
  var entity__soy479 = {x: 100 * i, y: 100 * j, i: i, j: j, drawType: drawType, highlight: true, alwaysRemove: opt_data.editEntity.type == 2};
  var remove__soy480 = type == opt_data.editEntity.type;
  switch (drawType) {
    case 2:
      switch (opt_data.editEntity.type) {
        case 2:
        case 3:
        case 6:
        case 1:
        case 4:
          output += (opt_data.editEntity.type != 4 || opt_data.extras.endable) ? windmill.templates.overlayPointHtml(soy.$$augmentMap(entity__soy479, {small: type == 3, remove: remove__soy480})) : '';
          break;
        default:
      }
      break;
    case 1:
      switch (opt_data.editEntity.type) {
        case 7:
        case 8:
          output += windmill.templates.overlayCellHtml(soy.$$augmentMap(entity__soy479, {remove: remove__soy480 && opt_data.editEntity.extras.color == opt_data.extras.color}));
          break;
        case 9:
          output += windmill.templates.overlayCellHtml(soy.$$augmentMap(entity__soy479, {remove: remove__soy480 && opt_data.editEntity.extras.shape && opt_data.editEntity.extras.shape.negative == opt_data.extras.shape.negative && opt_data.editEntity.extras.shape.free == opt_data.extras.shape.free && opt_data.editEntity.extras.shape.repr == opt_data.extras.shape.repr}));
          break;
        case 11:
          output += windmill.templates.overlayCellHtml(soy.$$augmentMap(entity__soy479, {remove: remove__soy480 && opt_data.editEntity.extras.count == opt_data.extras.count}));
          break;
        case 2:
        case 10:
          output += windmill.templates.overlayCellHtml(soy.$$augmentMap(entity__soy479, {remove: remove__soy480}));
          break;
      }
      break;
    case 4:
    case 3:
      switch (opt_data.editEntity.type) {
        case 1:
        case 2:
        case 5:
        case 6:
          output += windmill.templates.overlayLineHtml(soy.$$augmentMap(entity__soy479, {remove: remove__soy480}));
          break;
      }
      break;
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.entityEditHtml.soyTemplateName = 'windmill.templates.entityEditHtml';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    drawType: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.errorHtml = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isNumber(opt_data.i), "expected param 'i' of type number.");
  var i = /** @type {number} */ (opt_data.i);
  goog.asserts.assert(goog.isNumber(opt_data.j), "expected param 'j' of type number.");
  var j = /** @type {number} */ (opt_data.j);
  var drawType = goog.asserts.assertNumber(opt_data.drawType, "expected parameter 'drawType' of type int.");
  var output = '';
  var entity__soy511 = {x: 100 * i, y: 100 * j, i: i, j: j, drawType: drawType, error: true};
  switch (drawType) {
    case 2:
      output += windmill.templates.overlayPointHtml(soy.$$augmentMap(entity__soy511, {small: true}));
      break;
    case 1:
      output += windmill.templates.overlayCellHtml(entity__soy511);
      break;
    case 4:
    case 3:
      output += windmill.templates.overlayLineHtml(entity__soy511);
      break;
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.errorHtml.soyTemplateName = 'windmill.templates.errorHtml';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    small: (boolean|null|undefined),
 *    highlight: (boolean|null|undefined),
 *    alwaysRemove: (boolean|null|undefined),
 *    drawType: (null|number|undefined),
 *    i: (null|number|undefined),
 *    j: (null|number|undefined),
 *    error: (boolean|null|undefined),
 *    content: (soydata.SanitizedHtml|string|undefined),
 *    remove: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.overlayPointHtml = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  goog.asserts.assert(opt_data.small == null || goog.isBoolean(opt_data.small) || opt_data.small === 1 || opt_data.small === 0, "expected param 'small' of type boolean|null|undefined.");
  var small = /** @type {boolean|null|undefined} */ (opt_data.small);
  var output = '';
  var r__soy521 = small ? 10.0 : 20;
  output += windmill.templates.overlayHtml(soy.$$augmentMap(opt_data, {attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x - r__soy521)) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y - r__soy521)) + 'px; width: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(r__soy521 * 2)) + 'px; height: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(r__soy521 * 2)) + 'px; z-index: 2;"')}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.overlayPointHtml.soyTemplateName = 'windmill.templates.overlayPointHtml';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    drawType: number,
 *    highlight: (boolean|null|undefined),
 *    alwaysRemove: (boolean|null|undefined),
 *    i: (null|number|undefined),
 *    j: (null|number|undefined),
 *    error: (boolean|null|undefined),
 *    content: (soydata.SanitizedHtml|string|undefined),
 *    remove: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.overlayLineHtml = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  var drawType = goog.asserts.assertNumber(opt_data.drawType, "expected parameter 'drawType' of type int.");
  var output = '';
  var horizontal__soy534 = drawType == 3;
  var vertical__soy535 = ! horizontal__soy534;
  var longStart__soy536 = 10.0;
  var shortStart__soy537 = -20;
  var longLength__soy538 = 80;
  var shortLength__soy539 = 40;
  output += windmill.templates.overlayHtml(soy.$$augmentMap(opt_data, {attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x + (horizontal__soy534 ? longStart__soy536 : shortStart__soy537))) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y + (vertical__soy535 ? longStart__soy536 : shortStart__soy537))) + 'px; width: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(horizontal__soy534 ? longLength__soy538 : shortLength__soy539)) + 'px; height: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(vertical__soy535 ? longLength__soy538 : shortLength__soy539)) + 'px; z-index: 2;"')}));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  windmill.templates.overlayLineHtml.soyTemplateName = 'windmill.templates.overlayLineHtml';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    highlight: (boolean|null|undefined),
 *    alwaysRemove: (boolean|null|undefined),
 *    drawType: (null|number|undefined),
 *    i: (null|number|undefined),
 *    j: (null|number|undefined),
 *    error: (boolean|null|undefined),
 *    content: (soydata.SanitizedHtml|string|undefined),
 *    remove: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.overlayCellHtml = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(windmill.templates.overlayHtml(soy.$$augmentMap(opt_data, {attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x + 10.0)) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y + 10.0)) + 'px; width: 80px; height: 80px; z-index: 1;"')})));
};
if (goog.DEBUG) {
  windmill.templates.overlayCellHtml.soyTemplateName = 'windmill.templates.overlayCellHtml';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    drawType: number,
 *    content: (soydata.SanitizedHtml|string|undefined),
 *    attributes: (soydata.SanitizedHtmlAttribute|string|undefined),
 *    highlight: (boolean|null|undefined),
 *    error: (boolean|null|undefined),
 *    alwaysRemove: (boolean|null|undefined),
 *    remove: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.overlayHtml = function(opt_data, opt_ignored) {
  var i = goog.asserts.assertNumber(opt_data.i, "expected parameter 'i' of type int.");
  var j = goog.asserts.assertNumber(opt_data.j, "expected parameter 'j' of type int.");
  var drawType = goog.asserts.assertNumber(opt_data.drawType, "expected parameter 'drawType' of type int.");
  goog.asserts.assert(opt_data.content == null || (opt_data.content instanceof soydata.SanitizedHtml) || (opt_data.content instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content), "expected param 'content' of type soydata.SanitizedHtml|string|undefined.");
  var content = /** @type {soydata.SanitizedHtml|string|undefined} */ (opt_data.content);
  goog.asserts.assert(opt_data.attributes == null || (opt_data.attributes instanceof soydata.SanitizedHtmlAttribute) || (opt_data.attributes instanceof soydata.UnsanitizedText) || goog.isString(opt_data.attributes), "expected param 'attributes' of type soydata.SanitizedHtmlAttribute|string|undefined.");
  var attributes = /** @type {soydata.SanitizedHtmlAttribute|string|undefined} */ (opt_data.attributes);
  goog.asserts.assert(opt_data.highlight == null || goog.isBoolean(opt_data.highlight) || opt_data.highlight === 1 || opt_data.highlight === 0, "expected param 'highlight' of type boolean|null|undefined.");
  var highlight = /** @type {boolean|null|undefined} */ (opt_data.highlight);
  goog.asserts.assert(opt_data.error == null || goog.isBoolean(opt_data.error) || opt_data.error === 1 || opt_data.error === 0, "expected param 'error' of type boolean|null|undefined.");
  var error = /** @type {boolean|null|undefined} */ (opt_data.error);
  goog.asserts.assert(opt_data.alwaysRemove == null || goog.isBoolean(opt_data.alwaysRemove) || opt_data.alwaysRemove === 1 || opt_data.alwaysRemove === 0, "expected param 'alwaysRemove' of type boolean|null|undefined.");
  var alwaysRemove = /** @type {boolean|null|undefined} */ (opt_data.alwaysRemove);
  goog.asserts.assert(opt_data.remove == null || goog.isBoolean(opt_data.remove) || opt_data.remove === 1 || opt_data.remove === 0, "expected param 'remove' of type boolean|null|undefined.");
  var remove = /** @type {boolean|null|undefined} */ (opt_data.remove);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="' + ((error) ? 'error' : 'overlay' + ((highlight) ? ' canHighlight' : '') + ((alwaysRemove || remove) ? ' isRemoval' : '')) + '"' + ((attributes) ? soy.$$filterHtmlAttributes(attributes) : '') + 'data-c="' + soy.$$escapeHtmlAttribute(drawType) + ',' + soy.$$escapeHtmlAttribute(i) + ',' + soy.$$escapeHtmlAttribute(j) + '" data-op="' + soy.$$escapeHtmlAttribute(highlight ? (remove || alwaysRemove ? 2 : 1) : 0) + '">' + ((content) ? soy.$$escapeHtml(content) : '') + '</div>');
};
if (goog.DEBUG) {
  windmill.templates.overlayHtml.soyTemplateName = 'windmill.templates.overlayHtml';
}


/**
 * @param {{
 *    x: number,
 *    y: number
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.touchIndicator = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="touchContainer" style="top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(Math.round(y - 32))) + 'px; left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(Math.round(x - 32))) + 'px;"><div class="touchIndicator isSecond"></div><div class="touchIndicator"></div></div>');
};
if (goog.DEBUG) {
  windmill.templates.touchIndicator.soyTemplateName = 'windmill.templates.touchIndicator';
}


/**
 * @param {{
 *    i: number,
 *    j: number,
 *    cancel: boolean
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.touchCompleteIndicator = function(opt_data, opt_ignored) {
  var i = goog.asserts.assertNumber(opt_data.i, "expected parameter 'i' of type int.");
  var j = goog.asserts.assertNumber(opt_data.j, "expected parameter 'j' of type int.");
  goog.asserts.assert(goog.isBoolean(opt_data.cancel) || opt_data.cancel === 1 || opt_data.cancel === 0, "expected param 'cancel' of type boolean.");
  var cancel = /** @type {boolean} */ (!!opt_data.cancel);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="touchContainer material-icons" style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(100 * i - 32)) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(100 * j - 32)) + 'px; line-height: 64px; text-align: center; color:' + ((cancel) ? 'rgba(100,0,0,0.5)' : 'rgba(0,200,0,0.5)') + '">' + ((cancel) ? 'close' : 'check') + '</div>');
};
if (goog.DEBUG) {
  windmill.templates.touchCompleteIndicator.soyTemplateName = 'windmill.templates.touchCompleteIndicator';
}


/**
 * @param {{
 *    x: number,
 *    y: number,
 *    highlight: (boolean|null|undefined),
 *    alwaysRemove: (boolean|null|undefined),
 *    drawType: (null|number|undefined),
 *    i: (null|number|undefined),
 *    j: (null|number|undefined),
 *    error: (boolean|null|undefined),
 *    content: (soydata.SanitizedHtml|string|undefined),
 *    remove: (boolean|null|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
windmill.templates.startHtml = function(opt_data, opt_ignored) {
  var x = goog.asserts.assertNumber(opt_data.x, "expected parameter 'x' of type int.");
  var y = goog.asserts.assertNumber(opt_data.y, "expected parameter 'y' of type int.");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(windmill.templates.overlayHtml(soy.$$augmentMap(opt_data, {attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x - 50)) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y - 50)) + 'px; width: 0; height: 0; border-radius: 50px; border: 50px solid transparent; cursor: auto;" data-touch="1"')})) + windmill.templates.overlayHtml(soy.$$augmentMap(opt_data, {attributes: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('style="left: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(x - 25)) + 'px; top: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(y - 25)) + 'px; width: 0; height: 0; border-radius: 25px; border: 25px solid transparent;"')})));
};
if (goog.DEBUG) {
  windmill.templates.startHtml.soyTemplateName = 'windmill.templates.startHtml';
}
