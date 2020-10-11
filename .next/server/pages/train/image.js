module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/train/image.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BtnContGenerate.jsx":
/*!****************************************!*\
  !*** ./components/BtnContGenerate.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BtnContGenerate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_imgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/imgs */ "./reducers/imgs.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImgGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImgGenerate */ "./components/ImgGenerate.jsx");
/* harmony import */ var _MachineLearning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MachineLearning */ "./components/MachineLearning.jsx");
var _jsxFileName = "E:\\react\\OneClickAI\\front\\components\\BtnContGenerate.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function BtnContGenerate() {
  const Container = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.imgs[0].container); // const Data = useSelector((state) => state.imgs[1].data);

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const pageStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }; // const imgStyles = {};

  const trainingStyles = {};
  const mlStyles = {};
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: pageStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, Container.map(Container => __jsx(_ImgGenerate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: Container.id,
    id: Container.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("button", {
    onClick: () => dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["containerAdd"])()),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "container generator")), __jsx("div", {
    style: trainingStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["imgsCollect"])()),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Training")), __jsx("div", {
    style: mlStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_MachineLearning__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/ImgGenerate.jsx":
/*!************************************!*\
  !*** ./components/ImgGenerate.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BtnGenerate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_imgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/imgs */ "./reducers/imgs.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-webcam */ "react-webcam");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\react\\OneClickAI\\front\\components\\ImgGenerate.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BtnGenerate({
  id
}) {
  console.log("ImgGenerate Initiallised container: ", id);
  const container = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.imgs[0].container);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  let contId = id; // 컨테이너 아이디를 재정의... 필요한가?

  let imgSrc; // 웹캠으로 찍히는 사진 변수

  let labelInputId = "labelHolder" + contId.toString(); // input에 필요한 unique id, key를 이런식으로 만듬

  let comInputId = "comHolder" + contId.toString(); // input에 필요한 unique id, key를 이런식으로 만듬

  const chosenContainer = container.filter(obj => obj.id == contId);
  const chosenImgSet = chosenContainer[0].img;
  const webcamRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // image capture 진행

  const capture = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log("ImgGenerate: img capture activated");
    imgSrc = webcamRef.current.getScreenshot();
    dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["imgsAdd"])({
      id: contId,
      src: imgSrc
    }));
  }, [imgSrc]); // capture를 여러번 동작시키기 위해 pressHold 만듬

  const pressHold = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log("ImgGenerate: PressHold Activated");
    capture();
    intervalRef.current = setInterval(capture, 100);
  }, [imgSrc]); // 누르면 삭제

  function ContainerDel() {
    console.log("ImgGenerate: DeleteContainer");
    dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["containerDel"])({
      id: contId
    }));
  } // 라벨 업데이트


  function ImgLabelUpdate() {
    console.log("ImgGenerate: Labels will be updated!!");
    let label = document.getElementById(labelInputId).value;
    dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["imgsLabelUpdate"])({
      id: contId,
      label: label
    }));
  } // comment 업데이트


  function ImgComUpdate() {
    console.log("ImgGenerate: A Comment is updated!!");
    let comment = document.getElementById(comInputId).value;
    dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["imgsComUpdate"])({
      id: contId,
      comment: comment
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    id: labelInputId,
    placeholder: "Label here",
    onBlur: ImgLabelUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "text",
    id: comInputId,
    placeholder: "Comment here",
    onBlur: ImgComUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: ContainerDel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Delete This container"), __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_3___default.a, {
    audio: false,
    ref: webcamRef,
    screenshotFormat: "image/jpeg",
    width: "200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("button", {
    onMouseDown: pressHold,
    onMouseUp: () => clearInterval(intervalRef.current),
    onMouseLeave: () => clearInterval(intervalRef.current),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Capture photo"), chosenImgSet.map(imgs => __jsx("img", {
    key: imgs.iid,
    id: imgs.iid,
    src: imgs.src,
    width: "100",
    onClick: () => dispatch(Object(_reducers_imgs__WEBPACK_IMPORTED_MODULE_1__["imgsDel"])({
      id: contId,
      iid: imgs.iid
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/MachineLearning.jsx":
/*!****************************************!*\
  !*** ./components/MachineLearning.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MachineLearning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ "react-webcam");
/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.jsx");
var _jsxFileName = "E:\\react\\OneClickAI\\front\\components\\MachineLearning.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import ml5 from "ml5";



let featureExtractor;
let options;
let classifier;
let result = [{}];
let ml5;
function MachineLearning() {
  // console.log("Machine Learning code activated");
  const Data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.imgs[1].data);
  const container = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.imgs[0].container);
  const {
    0: imgSrc,
    1: setImgSrc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // web cam image update

  const classfyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // classfy setInterval

  const webcamRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // web cam ref

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("ML: useEffect1", container, container.length);
    options = {
      topk: Math.min(5, container.length),
      numLabels: container.length
    };
    ml5 = __webpack_require__(/*! ml5 */ "ml5");
    featureExtractor = ml5.featureExtractor("MobileNet", options, modelLoaded);
    classifier = featureExtractor.classification();
  }, [Data]);

  async function modelLoaded() {
    console.log("ML: Model Ready!!!!!"); // Add images and train them

    if (Data.length != 0) {
      await addImages();
      train();
    }
  }

  function addImages() {
    console.log("ML: addImages");
    Data.map((data, idx) => classifier.addImage(document.getElementById(data.iid), data.label));
  }

  function train() {
    classifier.train(function (lossValue) {
      if (lossValue != null) {
        console.log("Loss is", lossValue);
      } else {
        console.log("Loss is", lossValue);
        console.log("training finished");
        classfyRef.current = setInterval(() => classify(), 400); // classify();
      }
    });
  }

  function classify() {
    setImgSrc(webcamRef.current.getScreenshot());
    classifier.classify(document.getElementById("classyShot"), (err, res) => sorting(err, res));
  }

  function sorting(err, res) {
    result = res; //큰값부터 작은값으로

    let result2 = result.sort((a, b) => parseFloat(b.confidence) - parseFloat(a.confidence)); // 작은값부터 큰값으로

    let result3 = result.sort((a, b) => a.label > b.label ? 1 : b.label > a.label ? -1 : 0);
    console.log("result: ", result);
    console.log("result2: ", result2);
    console.log("result3: ", result3);
  }

  const containerStyles = {
    border: "1px solid black",
    width: "400px"
  };
  const webCamStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: imgSrc,
    id: "classyShot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: containerStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: webCamStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(react_webcam__WEBPACK_IMPORTED_MODULE_2___default.a, {
    audio: false,
    ref: webcamRef,
    screenshotFormat: "image/jpeg",
    width: "200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  })), result.map((item, idx) => __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: idx,
    id: idx,
    completed: Math.round(item.confidence * 100),
    label: item.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/ProgressBar.jsx":
/*!************************************!*\
  !*** ./components/ProgressBar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\react\\OneClickAI\\front\\components\\ProgressBar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProgressBar = props => {
  let {
    id,
    completed,
    label
  } = props;
  let bgcolor; // completed = 20;
  // label = "aaaa";

  if (id == 0) {
    bgcolor = "#3498DB";
  } else if (id == 1) {
    bgcolor = "#FFA07A";
  } else if (id == 2) {
    bgcolor = "#00695c";
  } else if (id == 3) {
    bgcolor = "#6a1b9a";
  } else if (id == 4) {
    bgcolor = "#ef6c00";
  }

  const outerContainerStyle = {
    border: "1px solid black",
    display: "flex"
  };
  const labelStyles = {
    width: "20%",
    border: "1px solid black",
    padding: 0,
    color: bgcolor,
    fontWeight: "bold"
  };
  const barContainerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 3
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out"
  };
  const valueStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };
  return __jsx("div", {
    style: outerContainerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("span", {
    style: labelStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, `${label}`), __jsx("div", {
    style: barContainerStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: fillerStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: valueStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, `${completed}%`))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./pages/train/image.js":
/*!******************************!*\
  !*** ./pages/train/image.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnContGenerate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BtnContGenerate */ "./components/BtnContGenerate.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores */ "./stores.jsx");
var _jsxFileName = "E:\\react\\OneClickAI\\front\\pages\\train\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Image = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      padding: "0 calc(100% / 9 * 2)",
      marginTop: 84
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: Object(_stores__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_BtnContGenerate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./reducers/entity.jsx":
/*!*****************************!*\
  !*** ./reducers/entity.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs */ "./reducers/imgs.jsx");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  imgs: _imgs__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./reducers/imgs.jsx":
/*!***************************!*\
  !*** ./reducers/imgs.jsx ***!
  \***************************/
/*! exports provided: default, containerAdd, containerDel, imgsAdd, imgsDel, imgsLabelUpdate, imgsComUpdate, imgsCollect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerAdd", function() { return containerAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerDel", function() { return containerDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsAdd", function() { return imgsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsDel", function() { return imgsDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsLabelUpdate", function() { return imgsLabelUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsComUpdate", function() { return imgsComUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsCollect", function() { return imgsCollect; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 // iid: image id
// id: container id

let lastiid = 5;
let lastid = 2;
const initialState1 = [{
  // 처음에 데이터 모으는 곳, 추가, 삭제 가능
  container: [{
    id: 1,
    label: "",
    comment: "",
    img: []
  }, {
    id: 2,
    label: "",
    comment: "",
    img: []
  } // {
  //   id: 3,
  //   label: "",
  //   comment: "",
  //   img: [],
  // },
  ]
}, // 트레이닝에 사용될 데이터 포멧에 맞게 다시 모으는 곳
{
  data: []
}];
const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "imgs",
  initialState: initialState1,
  reducers: {
    //container add
    containerAdd: (state, action) => {
      lastid += 1;
      state[0].container.push({
        id: lastid,
        img: []
      });
    },
    //container delete
    containerDel: (state, action) => {
      let remainContainer = state[0].container.filter(x => x.id != action.payload.id);
      state[0].container = remainContainer;
    },
    // img add
    imgsAdd: (state, action) => {
      lastiid += 1;
      let chosenContainer = state[0].container.filter(x => x.id == action.payload.id)[0];
      let imgsrc = action.payload.src;
      chosenContainer.img.push({
        iid: lastiid,
        src: imgsrc
      });
    },
    // img delete
    imgsDel: (state, action) => {
      let chosenContainer = state[0].container.filter(x => x.id == action.payload.id)[0];
      let modifImgList = chosenContainer.img.filter(x => x.iid != action.payload.iid);
      chosenContainer.img = modifImgList;
    },
    // input 아웃포커스 되면 label update
    imgsLabelUpdate: (state, action) => {
      let chosenContainer = state[0].container.filter(x => x.id == action.payload.id)[0];
      chosenContainer.label = action.payload.label;
      console.log(JSON.stringify(chosenContainer));
      console.log(action.payload.label);
    },
    imgsComUpdate: (state, action) => {
      let chosenContainer = state[0].container.filter(x => x.id == action.payload.id)[0];
      chosenContainer.comment = action.payload.comment;
      console.log(JSON.stringify(chosenContainer));
      console.log(action.payload.coment);
    },
    // reformat data objects
    // is this really necessary? i don't know
    imgsCollect: (state, action) => {
      console.log("Reducer: imgCollect");
      let newObj = state[0].container.map(x => reformat(x));
      state[1].data = newObj.flat(); // Object.assign(state[1].data, newObj.flat());
      // console.log(JSON.stringify(state[1].data));
      // console.log("Reducer: imgCollect done");
    }
  }
}); // Reducer

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer); // Actions

const {
  containerAdd,
  containerDel,
  imgsAdd,
  imgsDel,
  imgsLabelUpdate,
  imgsComUpdate,
  imgsCollect
} = slice.actions;

function reformat(input) {
  let lab = input.label;
  let img = input.img;
  let com = input.comment;
  let newObj = img.map(x => Object.assign({}, x, {
    label: lab,
    iid: x.iid,
    comment: com
  }));
  return newObj;
}

/***/ }),

/***/ "./stores.jsx":
/*!********************!*\
  !*** ./stores.jsx ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/entity */ "./reducers/entity.jsx");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: _reducers_entity__WEBPACK_IMPORTED_MODULE_1__["default"],
    middleware: [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["getDefaultMiddleware"])()]
  });
});

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "ml5":
/*!**********************!*\
  !*** external "ml5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ml5");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-webcam":
/*!*******************************!*\
  !*** external "react-webcam" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-webcam");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdG5Db250R2VuZXJhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1nR2VuZXJhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFjaGluZUxlYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy90cmFpbi9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9lbnRpdHkuanN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2ltZ3MuanN4Iiwid2VicGFjazovLy8uL3N0b3Jlcy5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1sNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13ZWJjYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIkJ0bkNvbnRHZW5lcmF0ZSIsIkNvbnRhaW5lciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpbWdzIiwiY29udGFpbmVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInBhZ2VTdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ0cmFpbmluZ1N0eWxlcyIsIm1sU3R5bGVzIiwibWFwIiwiaWQiLCJjb250YWluZXJBZGQiLCJpbWdzQ29sbGVjdCIsIkJ0bkdlbmVyYXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRJZCIsImltZ1NyYyIsImxhYmVsSW5wdXRJZCIsInRvU3RyaW5nIiwiY29tSW5wdXRJZCIsImNob3NlbkNvbnRhaW5lciIsImZpbHRlciIsIm9iaiIsImNob3NlbkltZ1NldCIsImltZyIsIndlYmNhbVJlZiIsInVzZVJlZiIsImludGVydmFsUmVmIiwiY2FwdHVyZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImdldFNjcmVlbnNob3QiLCJpbWdzQWRkIiwic3JjIiwicHJlc3NIb2xkIiwic2V0SW50ZXJ2YWwiLCJDb250YWluZXJEZWwiLCJjb250YWluZXJEZWwiLCJJbWdMYWJlbFVwZGF0ZSIsImxhYmVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiaW1nc0xhYmVsVXBkYXRlIiwiSW1nQ29tVXBkYXRlIiwiY29tbWVudCIsImltZ3NDb21VcGRhdGUiLCJjbGVhckludGVydmFsIiwiaWlkIiwiaW1nc0RlbCIsImZlYXR1cmVFeHRyYWN0b3IiLCJvcHRpb25zIiwiY2xhc3NpZmllciIsInJlc3VsdCIsIm1sNSIsIk1hY2hpbmVMZWFybmluZyIsIkRhdGEiLCJkYXRhIiwic2V0SW1nU3JjIiwidXNlU3RhdGUiLCJjbGFzc2Z5UmVmIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwidG9wayIsIk1hdGgiLCJtaW4iLCJudW1MYWJlbHMiLCJyZXF1aXJlIiwibW9kZWxMb2FkZWQiLCJjbGFzc2lmaWNhdGlvbiIsImFkZEltYWdlcyIsInRyYWluIiwiaWR4IiwiYWRkSW1hZ2UiLCJsb3NzVmFsdWUiLCJjbGFzc2lmeSIsImVyciIsInJlcyIsInNvcnRpbmciLCJyZXN1bHQyIiwic29ydCIsImEiLCJiIiwicGFyc2VGbG9hdCIsImNvbmZpZGVuY2UiLCJyZXN1bHQzIiwiY29udGFpbmVyU3R5bGVzIiwiYm9yZGVyIiwid2lkdGgiLCJ3ZWJDYW1TdHlsZXMiLCJpdGVtIiwicm91bmQiLCJQcm9ncmVzc0JhciIsInByb3BzIiwiY29tcGxldGVkIiwiYmdjb2xvciIsIm91dGVyQ29udGFpbmVyU3R5bGUiLCJsYWJlbFN0eWxlcyIsInBhZGRpbmciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJiYXJDb250YWluZXJTdHlsZXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJmaWxsZXJTdHlsZXMiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwidmFsdWVTdHlsZXMiLCJJbWFnZSIsIm1hcmdpblRvcCIsInN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiaW1nUmVkY3VlciIsImxhc3RpaWQiLCJsYXN0aWQiLCJpbml0aWFsU3RhdGUxIiwic2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInB1c2giLCJyZW1haW5Db250YWluZXIiLCJ4IiwicGF5bG9hZCIsImltZ3NyYyIsIm1vZGlmSW1nTGlzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21lbnQiLCJuZXdPYmoiLCJyZWZvcm1hdCIsImZsYXQiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsImlucHV0IiwibGFiIiwiY29tIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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RSxDQUVBOztBQUNPLE1BQU07QUFDWDlILGNBRFc7QUFFWDJCLGNBRlc7QUFHWEwsU0FIVztBQUlYaUIsU0FKVztBQUtYTixpQkFMVztBQU1YRyxlQU5XO0FBT1huQztBQVBXLElBUVQyRyxLQUFLLENBQUNtQixPQVJIOztBQVVQLFNBQVNILFFBQVQsQ0FBa0JJLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDbkcsS0FBaEI7QUFDQSxNQUFJZixHQUFHLEdBQUdrSCxLQUFLLENBQUNsSCxHQUFoQjtBQUNBLE1BQUlvSCxHQUFHLEdBQUdGLEtBQUssQ0FBQzdGLE9BQWhCO0FBQ0EsTUFBSXdGLE1BQU0sR0FBRzdHLEdBQUcsQ0FBQ2hCLEdBQUosQ0FBU3NILENBQUQsSUFDbkJlLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JoQixDQUFsQixFQUFxQjtBQUFFdkYsU0FBSyxFQUFFb0csR0FBVDtBQUFjM0YsT0FBRyxFQUFFOEUsQ0FBQyxDQUFDOUUsR0FBckI7QUFBMEJILFdBQU8sRUFBRStGO0FBQW5DLEdBQXJCLENBRFcsQ0FBYjtBQUdBLFNBQU9QLE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNwSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsMkVBQVk7QUFDekIsU0FBT1UsdUVBQWMsQ0FBQztBQUNwQlAscUVBRG9CO0FBRXBCUSxjQUFVLEVBQUUsQ0FBQyxHQUFHQyw2RUFBb0IsRUFBeEI7QUFGUSxHQUFELENBQXJCO0FBSUQsQzs7Ozs7Ozs7Ozs7QUNSRCw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy90cmFpbi9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdHJhaW4vaW1hZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnRhaW5lckFkZCwgaW1nc0NvbGxlY3QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvaW1nc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEltZ0dlbmVyYXRlIGZyb20gXCIuL0ltZ0dlbmVyYXRlXCI7XHJcbmltcG9ydCBNYWNoaW5lTGVhcm5pbmcgZnJvbSBcIi4vTWFjaGluZUxlYXJuaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdG5Db250R2VuZXJhdGUoKSB7XHJcbiAgY29uc3QgQ29udGFpbmVyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pbWdzWzBdLmNvbnRhaW5lcik7XHJcbiAgLy8gY29uc3QgRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW1nc1sxXS5kYXRhKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHBhZ2VTdHlsZXMgPSB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGltZ1N0eWxlcyA9IHt9O1xyXG5cclxuICBjb25zdCB0cmFpbmluZ1N0eWxlcyA9IHt9O1xyXG5cclxuICBjb25zdCBtbFN0eWxlcyA9IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtwYWdlU3R5bGVzfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge0NvbnRhaW5lci5tYXAoKENvbnRhaW5lcikgPT4gKFxyXG4gICAgICAgICAgICA8SW1nR2VuZXJhdGUga2V5PXtDb250YWluZXIuaWR9IGlkPXtDb250YWluZXIuaWR9IC8+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGNvbnRhaW5lckFkZCgpKX0+XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciBnZW5lcmF0b3JcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt0cmFpbmluZ1N0eWxlc30+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGltZ3NDb2xsZWN0KCkpfT5UcmFpbmluZzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXttbFN0eWxlc30+XHJcbiAgICAgICAgICA8TWFjaGluZUxlYXJuaW5nIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge1xyXG4gIENvbXBvbmVudCxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGltZ3NBZGQsXHJcbiAgaW1nc0RlbCxcclxuICBjb250YWluZXJEZWwsXHJcbiAgaW1nc0xhYmVsVXBkYXRlLFxyXG4gIGltZ3NDb21VcGRhdGUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL2ltZ3NcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSBcInJlYWN0LXdlYmNhbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnRuR2VuZXJhdGUoeyBpZCB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJJbWdHZW5lcmF0ZSBJbml0aWFsbGlzZWQgY29udGFpbmVyOiBcIiwgaWQpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW1nc1swXS5jb250YWluZXIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgbGV0IGNvbnRJZCA9IGlkOyAvLyDsu6jthYzsnbTrhIgg7JWE7J2065SU66W8IOyerOygleydmC4uLiDtlYTsmpTtlZzqsIA/XHJcbiAgbGV0IGltZ1NyYzsgLy8g7Ju57Lqg7Jy866GcIOywje2eiOuKlCDsgqzsp4Qg67OA7IiYXHJcbiAgbGV0IGxhYmVsSW5wdXRJZCA9IFwibGFiZWxIb2xkZXJcIiArIGNvbnRJZC50b1N0cmluZygpOyAvLyBpbnB1dOyXkCDtlYTsmpTtlZwgdW5pcXVlIGlkLCBrZXnrpbwg7J2065+w7Iud7Jy866GcIOunjOuTrFxyXG4gIGxldCBjb21JbnB1dElkID0gXCJjb21Ib2xkZXJcIiArIGNvbnRJZC50b1N0cmluZygpOyAvLyBpbnB1dOyXkCDtlYTsmpTtlZwgdW5pcXVlIGlkLCBrZXnrpbwg7J2065+w7Iud7Jy866GcIOunjOuTrFxyXG5cclxuICBjb25zdCBjaG9zZW5Db250YWluZXIgPSBjb250YWluZXIuZmlsdGVyKChvYmopID0+IG9iai5pZCA9PSBjb250SWQpO1xyXG4gIGNvbnN0IGNob3NlbkltZ1NldCA9IGNob3NlbkNvbnRhaW5lclswXS5pbWc7XHJcblxyXG4gIGNvbnN0IHdlYmNhbVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gaW1hZ2UgY2FwdHVyZSDsp4TtlolcclxuICBjb25zdCBjYXB0dXJlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJJbWdHZW5lcmF0ZTogaW1nIGNhcHR1cmUgYWN0aXZhdGVkXCIpO1xyXG4gICAgaW1nU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xyXG4gICAgZGlzcGF0Y2goaW1nc0FkZCh7IGlkOiBjb250SWQsIHNyYzogaW1nU3JjIH0pKTtcclxuICB9LCBbaW1nU3JjXSk7XHJcblxyXG4gIC8vIGNhcHR1cmXrpbwg7Jes65+s67KIIOuPmeyekeyLnO2CpOq4sCDsnITtlbQgcHJlc3NIb2xkIOunjOuTrFxyXG4gIGNvbnN0IHByZXNzSG9sZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW1nR2VuZXJhdGU6IFByZXNzSG9sZCBBY3RpdmF0ZWRcIik7XHJcbiAgICBjYXB0dXJlKCk7XHJcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoY2FwdHVyZSwgMTAwKTtcclxuICB9LCBbaW1nU3JjXSk7XHJcblxyXG4gIC8vIOuIhOultOuptCDsgq3soJxcclxuICBmdW5jdGlvbiBDb250YWluZXJEZWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkltZ0dlbmVyYXRlOiBEZWxldGVDb250YWluZXJcIik7XHJcbiAgICBkaXNwYXRjaChjb250YWluZXJEZWwoeyBpZDogY29udElkIH0pKTtcclxuICB9XHJcblxyXG4gIC8vIOudvOuyqCDsl4XrjbDsnbTtirhcclxuICBmdW5jdGlvbiBJbWdMYWJlbFVwZGF0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW1nR2VuZXJhdGU6IExhYmVscyB3aWxsIGJlIHVwZGF0ZWQhIVwiKTtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsSW5wdXRJZCkudmFsdWU7XHJcbiAgICBkaXNwYXRjaChpbWdzTGFiZWxVcGRhdGUoeyBpZDogY29udElkLCBsYWJlbDogbGFiZWwgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29tbWVudCDsl4XrjbDsnbTtirhcclxuICBmdW5jdGlvbiBJbWdDb21VcGRhdGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkltZ0dlbmVyYXRlOiBBIENvbW1lbnQgaXMgdXBkYXRlZCEhXCIpO1xyXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb21JbnB1dElkKS52YWx1ZTtcclxuICAgIGRpc3BhdGNoKGltZ3NDb21VcGRhdGUoeyBpZDogY29udElkLCBjb21tZW50OiBjb21tZW50IH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD17bGFiZWxJbnB1dElkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbCBoZXJlXCJcclxuICAgICAgICAgIG9uQmx1cj17SW1nTGFiZWxVcGRhdGV9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9e2NvbUlucHV0SWR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnQgaGVyZVwiXHJcbiAgICAgICAgICBvbkJsdXI9e0ltZ0NvbVVwZGF0ZX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtDb250YWluZXJEZWx9PkRlbGV0ZSBUaGlzIGNvbnRhaW5lcjwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICByZWY9e3dlYmNhbVJlZn1cclxuICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbk1vdXNlRG93bj17cHJlc3NIb2xkfVxyXG4gICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpfVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhcHR1cmUgcGhvdG9cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAge2Nob3NlbkltZ1NldC5tYXAoKGltZ3MpID0+IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAga2V5PXtpbWdzLmlpZH1cclxuICAgICAgICAgICAgaWQ9e2ltZ3MuaWlkfVxyXG4gICAgICAgICAgICBzcmM9e2ltZ3Muc3JjfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGltZ3NEZWwoeyBpZDogY29udElkLCBpaWQ6IGltZ3MuaWlkIH0pKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVJlZixcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3QsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGltcG9ydCBtbDUgZnJvbSBcIm1sNVwiO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gXCJyZWFjdC13ZWJjYW1cIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG5sZXQgZmVhdHVyZUV4dHJhY3RvcjtcclxubGV0IG9wdGlvbnM7XHJcbmxldCBjbGFzc2lmaWVyO1xyXG5sZXQgcmVzdWx0ID0gW3t9XTtcclxubGV0IG1sNTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hY2hpbmVMZWFybmluZygpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcIk1hY2hpbmUgTGVhcm5pbmcgY29kZSBhY3RpdmF0ZWRcIik7XHJcbiAgY29uc3QgRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW1nc1sxXS5kYXRhKTtcclxuICBjb25zdCBjb250YWluZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmltZ3NbMF0uY29udGFpbmVyKTtcclxuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoXCJcIik7IC8vIHdlYiBjYW0gaW1hZ2UgdXBkYXRlXHJcbiAgY29uc3QgY2xhc3NmeVJlZiA9IHVzZVJlZihudWxsKTsgLy8gY2xhc3NmeSBzZXRJbnRlcnZhbFxyXG4gIGNvbnN0IHdlYmNhbVJlZiA9IHVzZVJlZihudWxsKTsgLy8gd2ViIGNhbSByZWZcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiTUw6IHVzZUVmZmVjdDFcIiwgY29udGFpbmVyLCBjb250YWluZXIubGVuZ3RoKTtcclxuICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgIHRvcGs6IE1hdGgubWluKDUsIGNvbnRhaW5lci5sZW5ndGgpLFxyXG4gICAgICBudW1MYWJlbHM6IGNvbnRhaW5lci5sZW5ndGgsXHJcbiAgICB9O1xyXG4gICAgbWw1ID0gcmVxdWlyZSgnbWw1JylcclxuICAgIGZlYXR1cmVFeHRyYWN0b3IgPSBtbDUuZmVhdHVyZUV4dHJhY3RvcihcIk1vYmlsZU5ldFwiLCBvcHRpb25zLCBtb2RlbExvYWRlZCk7XHJcbiAgICBjbGFzc2lmaWVyID0gZmVhdHVyZUV4dHJhY3Rvci5jbGFzc2lmaWNhdGlvbigpO1xyXG4gIH0sIFtEYXRhXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1vZGVsTG9hZGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNTDogTW9kZWwgUmVhZHkhISEhIVwiKTtcclxuICAgIC8vIEFkZCBpbWFnZXMgYW5kIHRyYWluIHRoZW1cclxuICAgIGlmIChEYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGF3YWl0IGFkZEltYWdlcygpO1xyXG4gICAgICB0cmFpbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkSW1hZ2VzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNTDogYWRkSW1hZ2VzXCIpO1xyXG4gICAgRGF0YS5tYXAoKGRhdGEsIGlkeCkgPT5cclxuICAgICAgY2xhc3NpZmllci5hZGRJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLmlpZCksIGRhdGEubGFiZWwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhaW4oKSB7XHJcbiAgICBjbGFzc2lmaWVyLnRyYWluKGZ1bmN0aW9uIChsb3NzVmFsdWUpIHtcclxuICAgICAgaWYgKGxvc3NWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb3NzIGlzXCIsIGxvc3NWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb3NzIGlzXCIsIGxvc3NWYWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmFpbmluZyBmaW5pc2hlZFwiKTtcclxuICAgICAgICBjbGFzc2Z5UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiBjbGFzc2lmeSgpLCA0MDApO1xyXG4gICAgICAgIC8vIGNsYXNzaWZ5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xhc3NpZnkoKSB7XHJcbiAgICBzZXRJbWdTcmMod2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpKTtcclxuICAgIGNsYXNzaWZpZXIuY2xhc3NpZnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGFzc3lTaG90XCIpLCAoZXJyLCByZXMpID0+XHJcbiAgICAgIHNvcnRpbmcoZXJyLCByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc29ydGluZyhlcnIsIHJlcykge1xyXG4gICAgcmVzdWx0ID0gcmVzO1xyXG4gICAgLy/tgbDqsJLrtoDthLAg7J6R7J2A6rCS7Jy866GcXHJcbiAgICBsZXQgcmVzdWx0MiA9IHJlc3VsdC5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gcGFyc2VGbG9hdChiLmNvbmZpZGVuY2UpIC0gcGFyc2VGbG9hdChhLmNvbmZpZGVuY2UpXHJcbiAgICApO1xyXG4gICAgLy8g7J6R7J2A6rCS67aA7YSwIO2BsOqwkuycvOuhnFxyXG4gICAgbGV0IHJlc3VsdDMgPSByZXN1bHQuc29ydCgoYSwgYikgPT5cclxuICAgICAgYS5sYWJlbCA+IGIubGFiZWwgPyAxIDogYi5sYWJlbCA+IGEubGFiZWwgPyAtMSA6IDBcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdDogXCIsIHJlc3VsdCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdDI6IFwiLCByZXN1bHQyKTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0MzogXCIsIHJlc3VsdDMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGFpbmVyU3R5bGVzID0ge1xyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgd2lkdGg6IFwiNDAwcHhcIixcclxuICB9O1xyXG5cclxuICBjb25zdCB3ZWJDYW1TdHlsZXMgPSB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWdTcmN9IGlkPVwiY2xhc3N5U2hvdFwiIC8+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZXN9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3dlYkNhbVN0eWxlc30+XHJcbiAgICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cclxuICAgICAgICAgICAgcmVmPXt3ZWJjYW1SZWZ9XHJcbiAgICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3Jlc3VsdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBpZD17aWR4fVxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ9e01hdGgucm91bmQoaXRlbS5jb25maWRlbmNlICogMTAwKX1cclxuICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xyXG4gIGxldCB7IGlkLCBjb21wbGV0ZWQsIGxhYmVsIH0gPSBwcm9wcztcclxuICBsZXQgYmdjb2xvcjtcclxuXHJcbiAgLy8gY29tcGxldGVkID0gMjA7XHJcbiAgLy8gbGFiZWwgPSBcImFhYWFcIjtcclxuXHJcbiAgaWYgKGlkID09IDApIHtcclxuICAgIGJnY29sb3IgPSBcIiMzNDk4REJcIjtcclxuICB9IGVsc2UgaWYgKGlkID09IDEpIHtcclxuICAgIGJnY29sb3IgPSBcIiNGRkEwN0FcIjtcclxuICB9IGVsc2UgaWYgKGlkID09IDIpIHtcclxuICAgIGJnY29sb3IgPSBcIiMwMDY5NWNcIjtcclxuICB9IGVsc2UgaWYgKGlkID09IDMpIHtcclxuICAgIGJnY29sb3IgPSBcIiM2YTFiOWFcIjtcclxuICB9IGVsc2UgaWYgKGlkID09IDQpIHtcclxuICAgIGJnY29sb3IgPSBcIiNlZjZjMDBcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG91dGVyQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBsYWJlbFN0eWxlcyA9IHtcclxuICAgIHdpZHRoOiBcIjIwJVwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGNvbG9yOiBiZ2NvbG9yLFxyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFyQ29udGFpbmVyU3R5bGVzID0ge1xyXG4gICAgaGVpZ2h0OiAyMCxcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlMGUwZGVcIixcclxuICAgIGJvcmRlclJhZGl1czogNTAsXHJcbiAgICBtYXJnaW46IDMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsbGVyU3R5bGVzID0ge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBgJHtjb21wbGV0ZWR9JWAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnY29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGVhc2UtaW4tb3V0XCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsdWVTdHlsZXMgPSB7XHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtvdXRlckNvbnRhaW5lclN0eWxlfT5cclxuICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGVzfT57YCR7bGFiZWx9YH08L3NwYW4+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2JhckNvbnRhaW5lclN0eWxlc30+XHJcbiAgICAgICAgey8qIDxpbnB1dCAvPiAqL31cclxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWxsZXJTdHlsZXN9PlxyXG4gICAgICAgICAgey8qIDxpbnB1dCAvPiAqL31cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt2YWx1ZVN0eWxlc30+e2Ake2NvbXBsZXRlZH0lYH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdG5Db250R2VuZXJhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuQ29udEdlbmVyYXRlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzXCI7XHJcblxyXG5jb25zdCBJbWFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjAgY2FsYygxMDAlIC8gOSAqIDIpXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IDg0LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlKCl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEJ0bkNvbnRHZW5lcmF0ZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGltZ1JlZGN1ZXIgZnJvbSBcIi4vaW1nc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBpbWdzOiBpbWdSZWRjdWVyLFxyXG59KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuLy8gaWlkOiBpbWFnZSBpZFxyXG4vLyBpZDogY29udGFpbmVyIGlkXHJcbmxldCBsYXN0aWlkID0gNTtcclxubGV0IGxhc3RpZCA9IDI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUxID0gW1xyXG4gIHtcclxuICAgIC8vIOyymOydjOyXkCDrjbDsnbTthLAg66qo7Jy864qUIOqzsywg7LaU6rCALCDsgq3soJwg6rCA64qlXHJcbiAgICBjb250YWluZXI6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgIGNvbW1lbnQ6IFwiXCIsXHJcbiAgICAgICAgaW1nOiBbXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgIGNvbW1lbnQ6IFwiXCIsXHJcbiAgICAgICAgaW1nOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIGlkOiAzLFxyXG4gICAgICAvLyAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAvLyAgIGNvbW1lbnQ6IFwiXCIsXHJcbiAgICAgIC8vICAgaW1nOiBbXSxcclxuICAgICAgLy8gfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAgLy8g7Yq466CI7J2064ud7JeQIOyCrOyaqeuQoCDrjbDsnbTthLAg7Y+s66mn7JeQIOunnuqyjCDri6Tsi5wg66qo7Jy864qUIOqzs1xyXG4gIHtcclxuICAgIGRhdGE6IFtdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBzbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImltZ3NcIixcclxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZTEsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vY29udGFpbmVyIGFkZFxyXG4gICAgY29udGFpbmVyQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBsYXN0aWQgKz0gMTtcclxuICAgICAgc3RhdGVbMF0uY29udGFpbmVyLnB1c2goeyBpZDogbGFzdGlkLCBpbWc6IFtdIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL2NvbnRhaW5lciBkZWxldGVcclxuICAgIGNvbnRhaW5lckRlbDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgbGV0IHJlbWFpbkNvbnRhaW5lciA9IHN0YXRlWzBdLmNvbnRhaW5lci5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHguaWQgIT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGVbMF0uY29udGFpbmVyID0gcmVtYWluQ29udGFpbmVyO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBpbWcgYWRkXHJcbiAgICBpbWdzQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBsYXN0aWlkICs9IDE7XHJcbiAgICAgIGxldCBjaG9zZW5Db250YWluZXIgPSBzdGF0ZVswXS5jb250YWluZXIuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LmlkID09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgIClbMF07XHJcbiAgICAgIGxldCBpbWdzcmMgPSBhY3Rpb24ucGF5bG9hZC5zcmM7XHJcbiAgICAgIGNob3NlbkNvbnRhaW5lci5pbWcucHVzaCh7IGlpZDogbGFzdGlpZCwgc3JjOiBpbWdzcmMgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGltZyBkZWxldGVcclxuICAgIGltZ3NEZWw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBjaG9zZW5Db250YWluZXIgPSBzdGF0ZVswXS5jb250YWluZXIuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LmlkID09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgIClbMF07XHJcbiAgICAgIGxldCBtb2RpZkltZ0xpc3QgPSBjaG9zZW5Db250YWluZXIuaW1nLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC5paWQgIT0gYWN0aW9uLnBheWxvYWQuaWlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjaG9zZW5Db250YWluZXIuaW1nID0gbW9kaWZJbWdMaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBpbnB1dCDslYTsm4Ptj6zsu6TsiqQg65CY66m0IGxhYmVsIHVwZGF0ZVxyXG4gICAgaW1nc0xhYmVsVXBkYXRlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBsZXQgY2hvc2VuQ29udGFpbmVyID0gc3RhdGVbMF0uY29udGFpbmVyLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApWzBdO1xyXG4gICAgICBjaG9zZW5Db250YWluZXIubGFiZWwgPSBhY3Rpb24ucGF5bG9hZC5sYWJlbDtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2hvc2VuQ29udGFpbmVyKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmxhYmVsKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW1nc0NvbVVwZGF0ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgbGV0IGNob3NlbkNvbnRhaW5lciA9IHN0YXRlWzBdLmNvbnRhaW5lci5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHguaWQgPT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKVswXTtcclxuICAgICAgY2hvc2VuQ29udGFpbmVyLmNvbW1lbnQgPSBhY3Rpb24ucGF5bG9hZC5jb21tZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjaG9zZW5Db250YWluZXIpKTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuY29tZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcmVmb3JtYXQgZGF0YSBvYmplY3RzXHJcbiAgICAvLyBpcyB0aGlzIHJlYWxseSBuZWNlc3Nhcnk/IGkgZG9uJ3Qga25vd1xyXG4gICAgaW1nc0NvbGxlY3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVkdWNlcjogaW1nQ29sbGVjdFwiKTtcclxuICAgICAgbGV0IG5ld09iaiA9IHN0YXRlWzBdLmNvbnRhaW5lci5tYXAoKHgpID0+IHJlZm9ybWF0KHgpKTtcclxuICAgICAgc3RhdGVbMV0uZGF0YSA9IG5ld09iai5mbGF0KCk7XHJcbiAgICAgIC8vIE9iamVjdC5hc3NpZ24oc3RhdGVbMV0uZGF0YSwgbmV3T2JqLmZsYXQoKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlWzFdLmRhdGEpKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJSZWR1Y2VyOiBpbWdDb2xsZWN0IGRvbmVcIik7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gUmVkdWNlclxyXG5leHBvcnQgZGVmYXVsdCBzbGljZS5yZWR1Y2VyO1xyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIGNvbnRhaW5lckFkZCxcclxuICBjb250YWluZXJEZWwsXHJcbiAgaW1nc0FkZCxcclxuICBpbWdzRGVsLFxyXG4gIGltZ3NMYWJlbFVwZGF0ZSxcclxuICBpbWdzQ29tVXBkYXRlLFxyXG4gIGltZ3NDb2xsZWN0LFxyXG59ID0gc2xpY2UuYWN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIHJlZm9ybWF0KGlucHV0KSB7XHJcbiAgbGV0IGxhYiA9IGlucHV0LmxhYmVsO1xyXG4gIGxldCBpbWcgPSBpbnB1dC5pbWc7XHJcbiAgbGV0IGNvbSA9IGlucHV0LmNvbW1lbnQ7XHJcbiAgbGV0IG5ld09iaiA9IGltZy5tYXAoKHgpID0+XHJcbiAgICBPYmplY3QuYXNzaWduKHt9LCB4LCB7IGxhYmVsOiBsYWIsIGlpZDogeC5paWQsIGNvbW1lbnQ6IGNvbSB9KVxyXG4gICk7XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcixcclxuICAgIG1pZGRsZXdhcmU6IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSgpXSxcclxuICB9KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1sNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC13ZWJjYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==