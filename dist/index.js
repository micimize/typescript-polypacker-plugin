"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var parser = exports.parser = {
  argumentSchema: {
    "type": "object",
    "properties": {
      "typescript": {
        "type": "boolean",
        "default": true,
        "help": "whether to compile with typescript"
      }
    }
  },
  presets: {
    TYPESCRIPT: function TYPESCRIPT(args) {
      args.entry = args.entry || './src/index.ts';
      args.typescript = true;
      return args;
    }
  }
};

var webpackConfiguration = exports.webpackConfiguration = {
  builders: {
    resolveTypescript: function resolveTypescript(_ref) {
      var _ref$resolve = _ref.resolve;
      _ref$resolve = _ref$resolve === undefined ? {} : _ref$resolve;
      var _ref$resolve$extensio = _ref$resolve.extensions;
      var extensions = _ref$resolve$extensio === undefined ? [] : _ref$resolve$extensio;

      var resolve = _objectWithoutProperties(_ref$resolve, ["extensions"]);

      resolve.extensions = [].concat(_toConsumableArray(extensions), ['.ts', '.tsx']);
      return { resolve: resolve };
    }
  },
  moduleLoaders: {
    'typescript': { test: /\.tsx?$/, loader: "ts-loader" }
  }
};

/*
 function simple({configuration, args}){
 console.log('simple test task from simple-test-polypacker-plugin/simple')
 return 'simple-test runner run successful'
 }

 export const tasks = {
 simple,
 simpleChain: [ 'polypacker/compile', simple, 'polypacker/run', ]
 }
 */