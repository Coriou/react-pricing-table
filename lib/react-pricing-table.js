(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-pricing-table", [], factory);
	else if(typeof exports === 'object')
		exports["react-pricing-table"] = factory();
	else
		root["react-pricing-table"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(10);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var StyleElement = __webpack_require__(6)

var memoize = function(fn) {
  var memo;

  return function() {
    if (typeof memo === "undefined") memo = fn.apply(this, arguments);
    return memo;
  };
};

var isOldIE; // IE <= 9
var flagAttr = "data-universal";
var flagAttrValue = "ssr";
// Used during server side to store loaded style.
var serverStyles = [];
// Indicate whether a style processed.
var stylesInDom = {};
var singleton = null;
var singletonCounter = 0;
var getElement;
var stylesInsertedAtTop = [];
var fixUrls;

function noop() {}

/**
 * Ignored options: options.insertInto | options.insertAt
 */
module.exports = function(list, options) {
  options = options || {};

  options.attrs = typeof options.attrs === "object" ? options.attrs : {};

  var styles = listToStyles(list, options);

  // reset
  noop.__universal__ = undefined;

  // If in server env, export styles to global if user want to inject to html.
  if (typeof window !== "object" || !window.document) {
    isOldIE = memoize(function() {
      if (typeof navigator === "object" && navigator.userAgent) {
        return /MSIE [5-9]\b/i.test(navigator.userAgent);
      }
      return false;
    });
    if (!options.singleton) options.singleton = isOldIE();
    return handleStylesForSsr(styles, options);
  } else {
    isOldIE = memoize(function() {
      return window && document && document.all && !window.atob;
    });
  }

  // Now in browser side, do almost the same as original style-loader.
  if (!options.singleton) options.singleton = isOldIE();
  // By default, add <style> tags to the <head> element
  if (!options.insertInto) options.insertInto = "head";

  // By default, add <style> tags to the bottom of the target
  if (!options.insertAt) options.insertAt = "bottom";

  fixUrls = __webpack_require__(7);
  getElement = (function(fn) {
    var memo = {};

    return function(selector) {
      if (typeof memo[selector] === "undefined") {
        var styleTarget = fn.call(this, selector);
        // Special case to return head of iframe instead of iframe itself
        if (styleTarget instanceof window.HTMLIFrameElement) {
          try {
            // This will throw an exception if access to iframe is blocked
            // due to cross-origin restrictions
            styleTarget = styleTarget.contentDocument.head;
          } catch (e) {
            styleTarget = null;
          }
        }
        memo[selector] = styleTarget;
      }
      return memo[selector]
    };
  })(function(target) {
    return document.querySelector(target)
  });

  addStylesToDom(styles, options);

  // Check if has the same style inserted by server, and remove it.
  setTimeout(cleanDomStyles, 16);

  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      domStyle.refs--;
      mayRemove.push(domStyle);
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i];

      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

        delete stylesInDom[domStyle.id];
      }
    }
  };
};

function cleanDomStyles() {
  var allStyles = [].slice.call(document.getElementsByTagName("style"), 0);
  var item;
  for (var i = 0; i < allStyles.length; i++) {
    item = allStyles[i];
    if (item.getAttribute(flagAttr) === flagAttrValue) {
      item.parentNode.removeChild(item);
    }
  }
}

function handleStylesForSsr(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    for (var j = 0; j < item.parts.length; j++) {
      addUniversalStyle(item.parts[j], options, item.id);
    }
  }

  // Export for ssr.
  noop.__universal__ = serverStyles;
  return noop;

  function addUniversalStyle(obj, options, id) {
    var style, result;

    // Do transform, and if return null, it means we should ignore this style.
    if (options.transform && obj.css) {
      result = options.transform(obj.css);
      if (result) {
        obj.css = result;
      } else {
        return noop;
      }
    }

    // Set attrs.type to `text/css`.
    options.attrs.type = "text/css";
    // Indicate that the style is insetred during ssr time.
    options.attrs[flagAttr] = flagAttrValue;

    if (options.singleton) {
      var styleIndex = singletonCounter++;
      options.attrs["data-singleton"] = "singleton";
      style = singleton || (singleton = createStyle(options, id));
      style.content.splice(styleIndex, 1, obj.css);
      if (serverStyles.indexOf(style) === -1) {
        serverStyles.push(style);
      }
    } else {
      style = createStyle(options, id);
      style.content.push(obj.css)
      if (obj.media) {
        style.setAttribute("media", obj.media)
      }
      serverStyles.push(style);
    }

    return noop;
  }

  function createStyle(options, id) {
    var style = new StyleElement(id);
    Object.keys(options.attrs).forEach(function(key) {
      style.setAttribute(key, options.attrs[key]);
    });
    return style;
  }
}

/// Used by both side.
function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) styles.push(newStyles[id] = {
      id: id,
      parts: [part]
    });
    else newStyles[id].parts.push(part);
  }

  return styles;
}

/// Functions from original addStyles.js, only used by browser side.
function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];

    if (domStyle) {
      domStyle.refs++;

      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options, style) {
  var target = getElement(options.insertInto)

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
  }

  var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

  if (options.insertAt === "top") {
    if (!lastStyleElementInsertedAtTop) {
      target.insertBefore(style, target.firstChild);
    } else if (lastStyleElementInsertedAtTop.nextSibling) {
      target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
    } else {
      target.appendChild(style);
    }
    stylesInsertedAtTop.push(style);
  } else if (options.insertAt === "bottom") {
    target.appendChild(style);
  } else {
    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
  }
}

function removeStyleElement(style) {
  if (style.parentNode === null) return false;
  style.parentNode.removeChild(style);

  var idx = stylesInsertedAtTop.indexOf(style);
  if (idx >= 0) {
    stylesInsertedAtTop.splice(idx, 1);
  }
}

function createStyleElement(options) {
  var style = document.createElement("style");

  options.attrs.type = "text/css";

  addAttrs(style, options.attrs);
  insertStyleElement(options, style);

  return style;
}

function createLinkElement(options) {
  var link = document.createElement("link");

  options.attrs.type = "text/css";
  options.attrs.rel = "stylesheet";

  addAttrs(link, options.attrs);
  insertStyleElement(options, link);

  return link;
}

function addAttrs(el, attrs) {
  Object.keys(attrs).forEach(function(key) {
    el.setAttribute(key, attrs[key]);
  });
}

function addStyle(obj, options) {
  var style, update, remove, result;

  // If a transform function was defined, run it on the css
  if (options.transform && obj.css) {
    result = options.transform(obj.css);

    if (result) {
      // If transform returns a value, use that instead of the original css.
      // This allows running runtime transformations on the css.
      obj.css = result;
    } else {
      // If the transform function returns a falsy value, don't add this css.
      // This allows conditional loading of css
      return function() {};
    }
  }

  if (options.singleton) {
    var styleIndex = singletonCounter++;

    style = singleton || (singleton = createStyleElement(options));

    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);

  } else if (
    obj.sourceMap &&
    typeof URL === "function" &&
    typeof URL.createObjectURL === "function" &&
    typeof URL.revokeObjectURL === "function" &&
    typeof Blob === "function" &&
    typeof btoa === "function"
  ) {
    style = createLinkElement(options);
    update = updateLink.bind(null, style, options);
    remove = function() {
      removeStyleElement(style);

      if (style.href) URL.revokeObjectURL(style.href);
    };
  } else {
    style = createStyleElement(options);
    update = applyToTag.bind(null, style);
    remove = function() {
      removeStyleElement(style);
    };
  }

  update(obj);

  return function updateStyle(newObj) {
    if (newObj) {
      if (
        newObj.css === obj.css &&
        newObj.media === obj.media &&
        newObj.sourceMap === obj.sourceMap
      ) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

var replaceText = (function() {
  var textStore = [];

  return function(index, replacement) {
    textStore[index] = replacement;

    return textStore.filter(Boolean).join("\n");
  };
})();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? "" : obj.css;

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) style.removeChild(childNodes[index]);

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, obj) {
  var css = obj.css;
  var media = obj.media;

  if (media) {
    style.setAttribute("media", media)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

function updateLink(link, options, obj) {
  var css = obj.css;
  var sourceMap = obj.sourceMap;

  /*
  	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
  	and there is no publicPath defined then lets turn convertToAbsoluteUrls
  	on by default.  Otherwise default to the convertToAbsoluteUrls option
  	directly
  */
  var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

  if (options.convertToAbsoluteUrls || autoFixUrls) {
    css = fixUrls(css);
  }

  if (sourceMap) {
    // http://stackoverflow.com/a/26603875
    css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
  }

  var blob = new Blob([css], {
    type: "text/css"
  });

  var oldSrc = link.href;

  link.href = URL.createObjectURL(blob);

  if (oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
module.exports.__universal__ = update.__universal__;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".Grid {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.Grid-cell {\n  flex: 1;\n}\n\n.Grid--flexCells > .Grid-cell {\n  display: flex;\n}\n\n.Grid--top {\n  align-items: flex-start;\n}\n\n.Grid--bottom {\n  align-items: flex-end;\n}\n\n.Grid--center {\n  align-items: center;\n}\n\n.Grid--justifyCenter {\n  justify-content: center;\n}\n\n.Grid-cell--top {\n  align-self: flex-start;\n}\n\n.Grid-cell--bottom {\n  align-self: flex-end;\n}\n\n.Grid-cell--center {\n  align-self: center;\n}\n\n.Grid-cell--autoSize {\n  flex: none;\n}\n\n.Grid--fit > .Grid-cell {\n  flex: 1;\n}\n\n.Grid--full > .Grid-cell {\n  flex: 0 0 100%;\n}\n\n.Grid--1of2 > .Grid-cell {\n  flex: 0 0 50%;\n}\n\n.Grid--1of3 > .Grid-cell {\n  flex: 0 0 33.3333%;\n}\n\n.Grid--1of4 > .Grid-cell {\n  flex: 0 0 25%;\n}\n\n@media (--break-sm) {\n  .small-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .small-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .small-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .small-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .small-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n@media (--break-md) {\n  .med-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .med-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .med-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .med-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .med-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n@media (--break-lg) {\n  .large-Grid--fit > .Grid-cell {\n    flex: 1;\n  }\n  .large-Grid--full > .Grid-cell {\n    flex: 0 0 100%;\n  }\n  .large-Grid--1of2 > .Grid-cell {\n    flex: 0 0 50%;\n  }\n  .large-Grid--1of3 > .Grid-cell {\n    flex: 0 0 33.3333%;\n  }\n  .large-Grid--1of4 > .Grid-cell {\n    flex: 0 0 25%;\n  }\n}\n\n.Grid--gutters {\n  margin: -1em 0 1em -1em;\n}\n.Grid--gutters > .Grid-cell {\n  padding: 1em 0 0 1em;\n}\n\n.Grid--guttersLg {\n  margin: -1.5em 0 1.5em -1.5em;\n}\n.Grid--guttersLg > .Grid-cell {\n  padding: 1.5em 0 0 1.5em;\n}\n\n.Grid--guttersXl {\n  margin: -2em 0 2em -2em;\n}\n.Grid--guttersXl > .Grid-cell {\n  padding: 2em 0 0 2em;\n}\n\n@media (--break-sm) {\n  .small-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .small-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .small-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .small-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .small-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .small-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n\n@media (--break-md) {\n  .med-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .med-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .med-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .med-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .med-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .med-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n\n@media (--break-lg) {\n  .large-Grid--gutters {\n    margin: -1em 0 1em -1em;\n  }\n  .large-Grid--gutters > .Grid-cell {\n    padding: 1em 0 0 1em;\n  }\n  .large-Grid--guttersLg {\n    margin: -1.5em 0 1.5em -1.5em;\n  }\n  .large-Grid--guttersLg > .Grid-cell {\n    padding: 1.5em 0 0 1.5em;\n  }\n  .large-Grid--guttersXl {\n    margin: -2em 0 2em -2em;\n  }\n  .large-Grid--guttersXl > .Grid-cell {\n    padding: 2em 0 0 2em;\n  }\n}\n", ""]);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

function StyleElement (id) {
  this.id = id;
  this.content = [];
  this.attrs = {};
}

StyleElement.prototype.setAttribute = function (key, value) {
  if (value == null) {
    delete this.attrs[key];
  } else {
    this.attrs[key] = value;
  }
}

StyleElement.prototype.toString = function (connector) {
  var content = this.content.join(connector == null ? '\n' : connector);
  var attrStr = '';
  var attrs = this.attrs;

  Object.keys(this.attrs).forEach(function (v) {
    attrStr += v + '="' + attrs[v] + '" ';
  });
  if (attrStr.length > 0) {
    attrStr = ' ' + attrStr.slice(0, -1);
  }
  return '<style' + attrStr + '>' + content + '</style>';
}

module.exports = StyleElement;


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
module.exports.__universal__ = update.__universal__;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// Module
exports.push([module.i, "body {\n  font-family: 'Quicksand', sans-serif;\n}\n\n/* Style the list */\n.price {\n    list-style-type: none;\n    margin:20px;\n    -webkit-transition: margin 0.5s ease-out;\n    -moz-transition: margin 0.5s ease-out;\n    -o-transition: margin 0.5s ease-out;\n    padding-left: 0px;\n    min-width: 180px;\n}\n\n.basic-border {\n    border: 1px solid grey;\n}\n\n.highlighted-border {\n    border: 1px solid #f44336;\n}\n\n/* Add shadows on hover */\n.price:hover {\n    margin-top: 10px;\n}\n\n/* Pricing header */\n.price .highlighted-header {\n    background-color: #f44336;\n    color: white;\n    font-size: 24px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.price .basic-header{\n  background-color: #f8f9fa;\n  color: grey;\n  font-size: 24px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n/* List items */\n.price li {\n  /*  border-bottom: 1px solid #eee; */\n    padding: 5px;\n    text-align: center;\n    font-size: 14px;\n}\n\n/* tag list item */\n.price .tag {\n    font-size: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n/* The \"Sign Up\" button */\n.button-submit {\n    background-color: #f44336;\n    color: white;\n    height: 35px;\n    border: none;\n    font-size: 11px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.text-line-through{\n  text-decoration: line-through;\n}\n", ""]);



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(11),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(13);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/grid.css
var grid = __webpack_require__(4);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/PricingTable.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var propTypes = {
  highlightColor: prop_types_default.a.string,
  children: prop_types_default.a.node
};
var defaultProps = {
  highlightColor: '#f44336'
};

var PricingTable_PricingTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricingTable, _React$Component);

  function PricingTable(props) {
    _classCallCheck(this, PricingTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(PricingTable).call(this, props));
  }

  _createClass(PricingTable, [{
    key: "render",
    value: function render() {
      var _this = this;

      var childrenWithProps = react_default.a.Children.map(this.props.children, function (child) {
        return react_default.a.cloneElement(child, {
          highlightColor: _this.props.highlightColor
        });
      });
      return react_default.a.createElement("div", {
        className: "react-pricing-table"
      }, react_default.a.createElement("div", {
        className: "Grid"
      }, childrenWithProps));
    }
  }]);

  return PricingTable;
}(react_default.a.Component);

PricingTable_PricingTable.propTypes = propTypes;
PricingTable_PricingTable.defaultProps = defaultProps;
/* harmony default export */ var src_PricingTable = (PricingTable_PricingTable);
// CONCATENATED MODULE: ./src/Button.js
function Button_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Button_typeof = function _typeof(obj) { return typeof obj; }; } else { Button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Button_typeof(obj); }

function Button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Button_createClass(Constructor, protoProps, staticProps) { if (protoProps) Button_defineProperties(Constructor.prototype, protoProps); if (staticProps) Button_defineProperties(Constructor, staticProps); return Constructor; }

function Button_possibleConstructorReturn(self, call) { if (call && (Button_typeof(call) === "object" || typeof call === "function")) { return call; } return Button_assertThisInitialized(self); }

function Button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Button_getPrototypeOf(o) { Button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Button_getPrototypeOf(o); }

function Button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Button_setPrototypeOf(subClass, superClass); }

function Button_setPrototypeOf(o, p) { Button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Button_setPrototypeOf(o, p); }



var Button_propTypes = {
  color: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string
};

var Button_Button =
/*#__PURE__*/
function (_React$Component) {
  Button_inherits(Button, _React$Component);

  function Button(props) {
    Button_classCallCheck(this, Button);

    return Button_possibleConstructorReturn(this, Button_getPrototypeOf(Button).call(this, props));
  }

  Button_createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var buttonColor = this.props.color;
      Array.from(document.getElementsByClassName('button-submit')).forEach(function (element) {
        element.style.backgroundColor = buttonColor;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          className = _this$props.className,
          children = _this$props.children;
      return react_default.a.createElement("button", {
        type: "button",
        onClick: onClick,
        className: className
      }, children);
    }
  }]);

  return Button;
}(react_default.a.Component);

Button_Button.propTypes = Button_propTypes;
/* harmony default export */ var src_Button = (Button_Button);
// CONCATENATED MODULE: ./src/PricingSlot.js
function PricingSlot_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PricingSlot_typeof = function _typeof(obj) { return typeof obj; }; } else { PricingSlot_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PricingSlot_typeof(obj); }

function PricingSlot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PricingSlot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PricingSlot_createClass(Constructor, protoProps, staticProps) { if (protoProps) PricingSlot_defineProperties(Constructor.prototype, protoProps); if (staticProps) PricingSlot_defineProperties(Constructor, staticProps); return Constructor; }

function PricingSlot_possibleConstructorReturn(self, call) { if (call && (PricingSlot_typeof(call) === "object" || typeof call === "function")) { return call; } return PricingSlot_assertThisInitialized(self); }

function PricingSlot_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PricingSlot_getPrototypeOf(o) { PricingSlot_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PricingSlot_getPrototypeOf(o); }

function PricingSlot_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PricingSlot_setPrototypeOf(subClass, superClass); }

function PricingSlot_setPrototypeOf(o, p) { PricingSlot_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PricingSlot_setPrototypeOf(o, p); }




var PricingSlot_propTypes = {
  highlighted: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  title: prop_types_default.a.string,
  titleAccessor: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  priceText: prop_types_default.a.string,
  priceAccessor: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  buttonClass: prop_types_default.a.string,
  buttonText: prop_types_default.a.string,
  children: prop_types_default.a.node,
  highlightColor: prop_types_default.a.string,
  shouldDisplayButton: prop_types_default.a.bool
};
var PricingSlot_defaultProps = {
  highlighted: false,
  highlightColor: "#f44336",
  shouldDisplayButton: true
};

var PricingSlot_PricingSlot =
/*#__PURE__*/
function (_React$Component) {
  PricingSlot_inherits(PricingSlot, _React$Component);

  function PricingSlot(props) {
    PricingSlot_classCallCheck(this, PricingSlot);

    return PricingSlot_possibleConstructorReturn(this, PricingSlot_getPrototypeOf(PricingSlot).call(this, props));
  }

  PricingSlot_createClass(PricingSlot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          highlighted = _this$props.highlighted,
          highlightColor = _this$props.highlightColor,
          buttonClass = _this$props.buttonClass,
          buttonText = _this$props.buttonText,
          shouldDisplayButton = _this$props.shouldDisplayButton,
          Title = _this$props.titleAccessor,
          Price = _this$props.priceAccessor;
      return react_default.a.createElement("div", {
        className: "Grid-cell"
      }, react_default.a.createElement("ul", {
        className: "price basic-border"
      }, Title ? react_default.a.createElement(Title, {
        id: (highlighted ? "highlighted" : "basic") + "-header",
        className: (highlighted ? "highlighted" : "basic") + "-header",
        highlighted: highlighted,
        highlightColor: highlightColor,
        text: this.props.title
      }) : react_default.a.createElement("li", {
        id: (highlighted ? "highlighted" : "basic") + "-header",
        style: highlighted ? {
          backgroundColor: highlightColor
        } : {},
        className: (highlighted ? "highlighted" : "basic") + "-header"
      }, this.props.title), Price ? react_default.a.createElement(Price, {
        className: "tag",
        text: this.props.priceText
      }) : react_default.a.createElement("li", {
        className: "tag"
      }, this.props.priceText), this.props.children, shouldDisplayButton && react_default.a.createElement("li", {
        className: "grey"
      }, react_default.a.createElement(src_Button, {
        onClick: this.props.onClick,
        color: highlightColor,
        className: buttonClass ? buttonClass : "button-submit"
      }, buttonText))));
    }
  }]);

  return PricingSlot;
}(react_default.a.Component);

PricingSlot_PricingSlot.propTypes = PricingSlot_propTypes;
PricingSlot_PricingSlot.defaultProps = PricingSlot_defaultProps;
/* harmony default export */ var src_PricingSlot = (PricingSlot_PricingSlot);
// CONCATENATED MODULE: ./src/PricingDetail.js
function PricingDetail_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PricingDetail_typeof = function _typeof(obj) { return typeof obj; }; } else { PricingDetail_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PricingDetail_typeof(obj); }

function PricingDetail_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PricingDetail_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PricingDetail_createClass(Constructor, protoProps, staticProps) { if (protoProps) PricingDetail_defineProperties(Constructor.prototype, protoProps); if (staticProps) PricingDetail_defineProperties(Constructor, staticProps); return Constructor; }

function PricingDetail_possibleConstructorReturn(self, call) { if (call && (PricingDetail_typeof(call) === "object" || typeof call === "function")) { return call; } return PricingDetail_assertThisInitialized(self); }

function PricingDetail_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PricingDetail_getPrototypeOf(o) { PricingDetail_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PricingDetail_getPrototypeOf(o); }

function PricingDetail_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PricingDetail_setPrototypeOf(subClass, superClass); }

function PricingDetail_setPrototypeOf(o, p) { PricingDetail_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PricingDetail_setPrototypeOf(o, p); }



var PricingDetail_propTypes = {
  strikethrough: prop_types_default.a.bool,
  children: prop_types_default.a.node
};
var PricingDetail_defaultProps = {
  strikethrough: false
};

var PricingDetail_PricingDetail =
/*#__PURE__*/
function (_React$Component) {
  PricingDetail_inherits(PricingDetail, _React$Component);

  function PricingDetail(props) {
    PricingDetail_classCallCheck(this, PricingDetail);

    return PricingDetail_possibleConstructorReturn(this, PricingDetail_getPrototypeOf(PricingDetail).call(this, props));
  }

  PricingDetail_createClass(PricingDetail, [{
    key: "render",
    value: function render() {
      var strikethrough = this.props.strikethrough;
      return react_default.a.createElement("div", null, react_default.a.createElement("li", {
        className: strikethrough ? "text-line-through" : ""
      }, this.props.children));
    }
  }]);

  return PricingDetail;
}(react_default.a.Component);

PricingDetail_PricingDetail.propTypes = PricingDetail_propTypes;
PricingDetail_PricingDetail.defaultProps = PricingDetail_defaultProps;
/* harmony default export */ var src_PricingDetail = (PricingDetail_PricingDetail);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport PricingTable */__webpack_require__.d(__webpack_exports__, "PricingTable", function() { return src_PricingTable; });
/* concated harmony reexport PricingSlot */__webpack_require__.d(__webpack_exports__, "PricingSlot", function() { return src_PricingSlot; });
/* concated harmony reexport PricingDetail */__webpack_require__.d(__webpack_exports__, "PricingDetail", function() { return src_PricingDetail; });






if (typeof window !== 'undefined') {
  window.PricingTable = src_PricingTable;
  window.PricingSlot = src_PricingSlot;
  window.PricingDetail = src_PricingDetail;
}



/***/ })
/******/ ]);
});
//# sourceMappingURL=react-pricing-table.js.map