/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/coinToTable.js":
/*!****************************!*\
  !*** ./src/coinToTable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addCoinToTable(coinList) {
  const List = document.getElementById('coin-list');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${coinList.coins.i.rank}</td>
      <td>${coinList.coins.i.rank}</td>
      <td>${coinList.coins.i.rank}</td>
      `;
    List.appendChild(row);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCoinToTable);


/***/ }),

/***/ "./src/fetchCoinList.js":
/*!******************************!*\
  !*** ./src/fetchCoinList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getCoinList() {
  try {
    const response = await fetch('https://coinlib.io/api/v1/coinlist?key=ae91246c432bdd5d&pref=USD&page=1&order=rank_asc');
    const coinList = await response.json();
    return coinList;
  } catch (error) {
    console.log('err');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoinList);


/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchCoinList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchCoinList */ "./src/fetchCoinList.js");
/* harmony import */ var _coinToTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coinToTable */ "./src/coinToTable.js");



const content = document.getElementById('content');

function coinTable() {
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('container');

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  const tableHead = document.createElement('thead');
  tableHead.classList.add('thead-dark');

  const headtext = document.createElement('tr');
  const rank = document.createElement('th');
  rank.textContent = 'Rank';
  const coinNames = document.createElement('th');
  coinNames.textContent = 'Name';
  const coinSymbols = document.createElement('th');
  coinSymbols.textContent = 'Symbol';
  const tableBody = document.createElement('tbody');
  tableBody.setAttribute('id', 'coin-list');

  headtext.appendChild(rank);
  headtext.appendChild(coinNames);
  headtext.appendChild(coinSymbols);
  tableHead.appendChild(headtext);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  tableContainer.appendChild(table);
  const coinList = (0,_fetchCoinList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  console.log(coinList);
  (0,_coinToTable__WEBPACK_IMPORTED_MODULE_1__["default"])(coinList);
  return tableContainer;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function initializeSite() {
  content.appendChild(coinTable());
  content.appendChild(createMain());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSite);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ "./src/site.js");


(0,_site__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDLFlBQVksc0JBQXNCO0FBQ2xDLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZDlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNDOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBVztBQUM5QjtBQUNBLEVBQUUsd0RBQWM7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDbEQ5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQyxpREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0by1zbWFjay8uL3NyYy9jb2luVG9UYWJsZS5qcyIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvZmV0Y2hDb2luTGlzdC5qcyIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkQ29pblRvVGFibGUoY29pbkxpc3QpIHtcbiAgY29uc3QgTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2luLWxpc3QnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICA8dGQ+JHtjb2luTGlzdC5jb2lucy5pLnJhbmt9PC90ZD5cbiAgICAgIDx0ZD4ke2NvaW5MaXN0LmNvaW5zLmkucmFua308L3RkPlxuICAgICAgPHRkPiR7Y29pbkxpc3QuY29pbnMuaS5yYW5rfTwvdGQ+XG4gICAgICBgO1xuICAgIExpc3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRDb2luVG9UYWJsZTtcbiIsImFzeW5jIGZ1bmN0aW9uIGdldENvaW5MaXN0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY29pbmxpYi5pby9hcGkvdjEvY29pbmxpc3Q/a2V5PWFlOTEyNDZjNDMyYmRkNWQmcHJlZj1VU0QmcGFnZT0xJm9yZGVyPXJhbmtfYXNjJyk7XG4gICAgY29uc3QgY29pbkxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGNvaW5MaXN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnInKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2luTGlzdDtcbiIsImltcG9ydCBnZXRDb2luTGlzdCBmcm9tICcuL2ZldGNoQ29pbkxpc3QnO1xuaW1wb3J0IGFkZENvaW5Ub1RhYmxlIGZyb20gJy4vY29pblRvVGFibGUnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY29pblRhYmxlKCkge1xuICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJywgJ3RhYmxlLXN0cmlwZWQnKTtcblxuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICB0YWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgndGhlYWQtZGFyaycpO1xuXG4gIGNvbnN0IGhlYWR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgcmFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIHJhbmsudGV4dENvbnRlbnQgPSAnUmFuayc7XG4gIGNvbnN0IGNvaW5OYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGNvaW5OYW1lcy50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgY29uc3QgY29pblN5bWJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBjb2luU3ltYm9scy50ZXh0Q29udGVudCA9ICdTeW1ib2wnO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICB0YWJsZUJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdjb2luLWxpc3QnKTtcblxuICBoZWFkdGV4dC5hcHBlbmRDaGlsZChyYW5rKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pbk5hbWVzKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pblN5bWJvbHMpO1xuICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQoaGVhZHRleHQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIGNvbnN0IGNvaW5MaXN0ID0gZ2V0Q29pbkxpc3QoKTtcbiAgY29uc29sZS5sb2coY29pbkxpc3QpO1xuICBhZGRDb2luVG9UYWJsZShjb2luTGlzdCk7XG4gIHJldHVybiB0YWJsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2luVGFibGUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNpdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3NpdGUnO1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9