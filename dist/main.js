/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/coinInfo.js":
/*!*************************!*\
  !*** ./src/coinInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getCoinInfo(row) {
  const symbol = row.id;
  try {
    const response = await fetch(`https://coinlib.io/api/v1/coin?key=ae91246c432bdd5d&pref=USD&symbol=${symbol}`, {
      mode: 'cors',
    });
    const coinFetched = await response.json();
    console.log(coinFetched);
  } catch (error) {
    console.log('err');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoinInfo);


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
/* harmony import */ var _coinInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coinInfo */ "./src/coinInfo.js");


function addCoinToTable(coinList) {
  for (let i = 0; i < 10; i += 1) {
    const List = document.getElementById('coin-list');
    const row = document.createElement('tr');
    let rank = coinList[i]['rank'];
    let name = coinList[i]['name'];
    let symbol = coinList[i]['symbol'];
    row.setAttribute('id', symbol);
    row.innerHTML = `
      <td>${rank}</td>
      <td>${name}</td>
      <td>${symbol}</td>
      `;
    row.addEventListener('mousedown', (0,_coinInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(row), false);
    List.appendChild(row);
  }
}

async function getCoinList() {
  try {
    const response = await fetch('https://coinlib.io/api/v1/coinlist?key=ae91246c432bdd5d&pref=USD&page=1&order=rank_asc', {
      mode: 'cors',
    });
    const dataFetched = await response.json();
    const coinList = await dataFetched.coins;
    addCoinToTable(coinList);
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


const content = document.getElementById('content');

function coinTable() {
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('container');

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-dark', 'mt-5', 'table-bordered', 'table-hover');

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
  (0,_fetchCoinList__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxPQUFPO0FBQy9HO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JVOztBQUVyQztBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVksS0FBSztBQUNqQixZQUFZLE9BQU87QUFDbkI7QUFDQSxzQ0FBc0MscURBQVc7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBVztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQy9DOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsaURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvY29pbkluZm8uanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL2ZldGNoQ29pbkxpc3QuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL3NpdGUuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyeXB0by1zbWFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldENvaW5JbmZvKHJvdykge1xuICBjb25zdCBzeW1ib2wgPSByb3cuaWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jb2lubGliLmlvL2FwaS92MS9jb2luP2tleT1hZTkxMjQ2YzQzMmJkZDVkJnByZWY9VVNEJnN5bWJvbD0ke3N5bWJvbH1gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfSk7XG4gICAgY29uc3QgY29pbkZldGNoZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coY29pbkZldGNoZWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnInKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2luSW5mbztcbiIsImltcG9ydCBnZXRDb2luSW5mbyBmcm9tICcuL2NvaW5JbmZvJztcblxuZnVuY3Rpb24gYWRkQ29pblRvVGFibGUoY29pbkxpc3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2luLWxpc3QnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxldCByYW5rID0gY29pbkxpc3RbaV1bJ3JhbmsnXTtcbiAgICBsZXQgbmFtZSA9IGNvaW5MaXN0W2ldWyduYW1lJ107XG4gICAgbGV0IHN5bWJvbCA9IGNvaW5MaXN0W2ldWydzeW1ib2wnXTtcbiAgICByb3cuc2V0QXR0cmlidXRlKCdpZCcsIHN5bWJvbCk7XG4gICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgIDx0ZD4ke3Jhbmt9PC90ZD5cbiAgICAgIDx0ZD4ke25hbWV9PC90ZD5cbiAgICAgIDx0ZD4ke3N5bWJvbH08L3RkPlxuICAgICAgYDtcbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZ2V0Q29pbkluZm8ocm93KSwgZmFsc2UpO1xuICAgIExpc3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb2luTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NvaW5saWIuaW8vYXBpL3YxL2NvaW5saXN0P2tleT1hZTkxMjQ2YzQzMmJkZDVkJnByZWY9VVNEJnBhZ2U9MSZvcmRlcj1yYW5rX2FzYycsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhRmV0Y2hlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb2luTGlzdCA9IGF3YWl0IGRhdGFGZXRjaGVkLmNvaW5zO1xuICAgIGFkZENvaW5Ub1RhYmxlKGNvaW5MaXN0KTtcbiAgICByZXR1cm4gY29pbkxpc3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2VycicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvaW5MaXN0O1xuIiwiaW1wb3J0IGdldENvaW5MaXN0IGZyb20gJy4vZmV0Y2hDb2luTGlzdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjb2luVGFibGUoKSB7XG4gIGNvbnN0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUnLCAndGFibGUtc3RyaXBlZCcsICd0YWJsZS1kYXJrJywgJ210LTUnLCAndGFibGUtYm9yZGVyZWQnLCAndGFibGUtaG92ZXInKTtcblxuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICB0YWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgndGhlYWQtZGFyaycpO1xuXG4gIGNvbnN0IGhlYWR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgcmFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIHJhbmsudGV4dENvbnRlbnQgPSAnUmFuayc7XG4gIGNvbnN0IGNvaW5OYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGNvaW5OYW1lcy50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgY29uc3QgY29pblN5bWJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBjb2luU3ltYm9scy50ZXh0Q29udGVudCA9ICdTeW1ib2wnO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICB0YWJsZUJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdjb2luLWxpc3QnKTtcblxuICBoZWFkdGV4dC5hcHBlbmRDaGlsZChyYW5rKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pbk5hbWVzKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pblN5bWJvbHMpO1xuICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQoaGVhZHRleHQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIGdldENvaW5MaXN0KCk7XG4gIHJldHVybiB0YWJsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2luVGFibGUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNpdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3NpdGUnO1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9