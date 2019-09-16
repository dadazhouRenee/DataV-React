'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-2__373JB {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
__chunk_3.styleInject(css);

var Decoration = function Decoration(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(calcSVGData, calcSVGData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({ x: 0, y: 0, w: 0, h: 0 }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      x = _useState2$.x,
      y = _useState2$.y,
      w = _useState2$.w,
      h = _useState2$.h,
      setState = _useState2[1];

  function calcSVGData() {
    setState(reverse ? { w: 1, h: height, x: width / 2, y: 0 } : { w: width, h: 1, x: 0, y: height / 2 });
  }

  React.useEffect(calcSVGData, [reverse]);

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-2', className);
  }, className);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { width: width + 'px', height: height + 'px' },
      React__default.createElement(
        'rect',
        { x: x, y: y, width: w, height: h, fill: '#3faacb' },
        React__default.createElement('animate', {
          attributeName: reverse ? 'height' : 'width',
          from: '0',
          to: reverse ? height : width,
          dur: '6s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '.42,0,.58,1',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement(
        'rect',
        { x: x, y: y, width: '1', height: '1', fill: '#fff' },
        React__default.createElement('animate', {
          attributeName: reverse ? 'y' : 'x',
          from: '0',
          to: reverse ? height : width,
          dur: '6s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '0.42,0,0.58,1',
          repeatCount: 'indefinite'
        })
      )
    )
  );
};

Decoration.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map