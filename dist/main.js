/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\n    const contact=document.createElement('div');\n    contact.classList.add('contact');\n\n    const phone= document.createElement('div');\n    phone.textContent= '0656253256';\n\n    const address= document.createElement('div');\n    address.textContent= '18 Queen Road 45784 Columbia';\n\n    contact.appendChild(phone);\n    contact.appendChild(address);\n\n    return contact;\n}\n\nconst loadContact = () => {\n    const main = document.querySelector('#main');\n    main.innerHTML='';\n    main.appendChild(createContact())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ \"./src/landing.js\");\n\n\n\n(0,_landing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconsole.log(\"Hello\");\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst landingPage = () => {\n    const container = document.querySelector('#content');\n    const head = document.createElement('h1'); \n    head.style.fontSize= \"14px\";\n    head.textContent= \"THE HIMALAYAN\";\n\n    const restImage = new Image();\n    restImage.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const desc = document.createElement('div');\n    desc.textContent= \"Welcome to the Himalayan, the Greatest Nepalese Restaurant!\"; \n\n    const main = document.createElement('div');\n    main.id= \"main\";\n\n    const buttons= document.createElement('div');\n    const homeButton = document.createElement('button');\n    homeButton.textContent = \"HOME\";\n    const menuButton = document.createElement('button');\n    menuButton.textContent= 'MENU';\n    const contactButton = document.createElement('button');\n    contactButton.textContent= 'CONTACT';\n\n    buttons.appendChild(homeButton);\n    buttons.appendChild(menuButton);\n    buttons.appendChild(contactButton);\n    \n\n    container.appendChild(head);\n    container.appendChild(buttons);\n    container.appendChild(main);\n    main.appendChild(restImage);\n    main.appendChild(desc);\n\n    \n    container.appendChild(main);\n\n\n    menuButton.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    contactButton.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingPage);\n\n//# sourceURL=webpack://restaurant/./src/landing.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu =() => {\n\nconst menu = document.createElement('div');\nmenu.classList.add('menu');\nconst menuHead= document.createElement('h1');\n\nmenu.appendChild(createItem( \"Chicken Curry\", \"Chicken, Onions, Cream\")); \n\nmenu.appendChild(createItem( \"Lamb Curry\", \"Lamb, Onions, Cream\"));\n\nmenu.appendChild(createItem( \"Chicken Badami\", \"Chicken, Onions, Cream, Almonds\"));\n\nreturn menu; \n}\n\nfunction createItem (name, description) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menuitem');\n\n    const foodName = document.createElement('h2');\n    foodName.classList.add('foodname');\n    foodName.textContent= name;\n\n    const foodDesc = document.createElement('p');\n    foodDesc.classList.add('fooddesc');\n    foodDesc.textContent= description;\n\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDesc);\n\n    return menuItem;\n}\n\nconst loadMenu = () => {\n    const main= document.querySelector('#main');\n    main.innerHTML= 'zdzdzd';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff44bcca07901d0d8386.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/restaurant.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;