/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/coinData.js":
/*!*************************!*\
  !*** ./src/coinData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function coinData(symbol) {
  try {
    const response = await fetch(`https://coinlib.io/api/v1/coin?key=ae91246c432bdd5d&pref=USD&symbol=${symbol}`, {
      mode: 'cors',
    });
    const coinFetched = await response.json();
    console.log(coinFetched);
    makeCoin(coinFetched);
  } catch (error) {
    console.log('err');
  }
}

function createMain() {
  const content = document.getElementById('content');
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  content.appendChild(main);
  return main;
}

function clearMain() {
  const content = document.getElementById('content');
  const main = document.getElementById('main');
  return content.removeChild(main);
}

function makeCoin(coinFetched) {
  clearMain();
  createMain();
  const dollarSymbol = '$';
  const coinDiv = document.createElement('div');
  coinDiv.classList.add('container-md');

  const coinHeader = document.createElement('div');
  coinHeader.classList.add('coin-header');
  const name = document.createElement('h2');
  name.textContent = coinFetched.name;
  const ticker = document.createElement('p');
  ticker.textContent = coinFetched.symbol;
  coinHeader.appendChild(name);
  coinHeader.appendChild(ticker);

  const coinBody = document.createElement('div');
  coinBody.classList.add('coin-body');
  const bodyLeft = document.createElement('div');
  bodyLeft.classList.add('body-left');
  const currPrice = document.createElement('h1');
  currPrice.textContent = dollarSymbol.concat(parseFloat(coinFetched.price).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  bodyLeft.appendChild(currPrice);
  coinBody.appendChild(bodyLeft);

  const bodyRight = document.createElement('div');
  bodyRight.classList.add('body-right');

  const labels = document.createElement('div');
  labels.classList.add('labels');
  const values = document.createElement('div');
  values.classList.add('values');

  const deltaLabel = document.createElement('h3');
  deltaLabel.textContent = '24H%';
  labels.appendChild(deltaLabel);
  const delta = document.createElement('h2');
  delta.textContent = coinFetched.delta_24h;
  values.appendChild(delta);
  const lowLabel = document.createElement('h3');
  lowLabel.textContent = '24H Low';
  labels.appendChild(lowLabel);
  const low = document.createElement('h2');
  low.textContent = dollarSymbol.concat(parseFloat(coinFetched.low_24h).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  values.appendChild(low);
  const highLabel = document.createElement('h3');
  highLabel.textContent = '24H High';
  labels.appendChild(highLabel);
  const high = document.createElement('h2');
  high.textContent = dollarSymbol.concat(parseFloat(coinFetched.high_24h).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  values.appendChild(high);
  bodyRight.appendChild(labels);
  bodyRight.appendChild(values);
  coinBody.appendChild(bodyRight);

  const coinFooter = document.createElement('div');
  coinFooter.classList.add('coin-footer');
  const marketCap = document.createElement('h2');
  marketCap.textContent = dollarSymbol.concat(parseFloat(coinFetched.market_cap).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const volume = document.createElement('h2');
  volume.textContent = dollarSymbol.concat(parseFloat(coinFetched.total_volume_24h).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  coinFooter.appendChild(marketCap);
  coinFooter.appendChild(volume);

  coinDiv.appendChild(coinHeader);
  coinDiv.appendChild(coinBody);
  coinDiv.appendChild(coinFooter);

  const main = document.getElementById('main');
  main.appendChild(coinDiv);
  return coinDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coinData);


/***/ }),

/***/ "./src/coinInfo.js":
/*!*************************!*\
  !*** ./src/coinInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coinData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coinData */ "./src/coinData.js");


function getCoinInfo(row) {
  console.log(row.id);
  const symbol = row.id;
  (0,_coinData__WEBPACK_IMPORTED_MODULE_0__["default"])(symbol);
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
    row.classList.add('coins');
    row.setAttribute('id', symbol);
    row.innerHTML = `
      <td>${rank}</td>
      <td>${name}</td>
      <td>${symbol}</td>
      `;
    row.addEventListener('click', () => {
      (0,_coinInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(row);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSx3R0FBd0csT0FBTztBQUMvRztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUhBQXFILEVBQUU7QUFDdkg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILEVBQUU7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1IQUFtSCxFQUFFO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSCxFQUFFO0FBQzVIO0FBQ0EsNkhBQTZILEVBQUU7QUFDL0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckdVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1Y7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUlU7O0FBRXJDO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQixZQUFZLEtBQUs7QUFDakIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQSxNQUFNLHFEQUFXO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZTs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFXO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDL0M5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQyxpREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0by1zbWFjay8uL3NyYy9jb2luRGF0YS5qcyIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvY29pbkluZm8uanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL2ZldGNoQ29pbkxpc3QuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL3NpdGUuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyeXB0by1zbWFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGNvaW5EYXRhKHN5bWJvbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY29pbmxpYi5pby9hcGkvdjEvY29pbj9rZXk9YWU5MTI0NmM0MzJiZGQ1ZCZwcmVmPVVTRCZzeW1ib2w9JHtzeW1ib2x9YCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvaW5GZXRjaGVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGNvaW5GZXRjaGVkKTtcbiAgICBtYWtlQ29pbihjb2luRmV0Y2hlZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2VycicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICByZXR1cm4gY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvaW4oY29pbkZldGNoZWQpIHtcbiAgY2xlYXJNYWluKCk7XG4gIGNyZWF0ZU1haW4oKTtcbiAgY29uc3QgZG9sbGFyU3ltYm9sID0gJyQnO1xuICBjb25zdCBjb2luRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvaW5EaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW1kJyk7XG5cbiAgY29uc3QgY29pbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2luSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvaW4taGVhZGVyJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYW1lLnRleHRDb250ZW50ID0gY29pbkZldGNoZWQubmFtZTtcbiAgY29uc3QgdGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aWNrZXIudGV4dENvbnRlbnQgPSBjb2luRmV0Y2hlZC5zeW1ib2w7XG4gIGNvaW5IZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvaW5IZWFkZXIuYXBwZW5kQ2hpbGQodGlja2VyKTtcblxuICBjb25zdCBjb2luQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2luQm9keS5jbGFzc0xpc3QuYWRkKCdjb2luLWJvZHknKTtcbiAgY29uc3QgYm9keUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9keUxlZnQuY2xhc3NMaXN0LmFkZCgnYm9keS1sZWZ0Jyk7XG4gIGNvbnN0IGN1cnJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGN1cnJQcmljZS50ZXh0Q29udGVudCA9IGRvbGxhclN5bWJvbC5jb25jYXQocGFyc2VGbG9hdChjb2luRmV0Y2hlZC5wcmljZSkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICBib2R5TGVmdC5hcHBlbmRDaGlsZChjdXJyUHJpY2UpO1xuICBjb2luQm9keS5hcHBlbmRDaGlsZChib2R5TGVmdCk7XG5cbiAgY29uc3QgYm9keVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvZHlSaWdodC5jbGFzc0xpc3QuYWRkKCdib2R5LXJpZ2h0Jyk7XG5cbiAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVscy5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlcy5jbGFzc0xpc3QuYWRkKCd2YWx1ZXMnKTtcblxuICBjb25zdCBkZWx0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZGVsdGFMYWJlbC50ZXh0Q29udGVudCA9ICcyNEglJztcbiAgbGFiZWxzLmFwcGVuZENoaWxkKGRlbHRhTGFiZWwpO1xuICBjb25zdCBkZWx0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGRlbHRhLnRleHRDb250ZW50ID0gY29pbkZldGNoZWQuZGVsdGFfMjRoO1xuICB2YWx1ZXMuYXBwZW5kQ2hpbGQoZGVsdGEpO1xuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxvd0xhYmVsLnRleHRDb250ZW50ID0gJzI0SCBMb3cnO1xuICBsYWJlbHMuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsb3cudGV4dENvbnRlbnQgPSBkb2xsYXJTeW1ib2wuY29uY2F0KHBhcnNlRmxvYXQoY29pbkZldGNoZWQubG93XzI0aCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICB2YWx1ZXMuYXBwZW5kQ2hpbGQobG93KTtcbiAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaGlnaExhYmVsLnRleHRDb250ZW50ID0gJzI0SCBIaWdoJztcbiAgbGFiZWxzLmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoaWdoLnRleHRDb250ZW50ID0gZG9sbGFyU3ltYm9sLmNvbmNhdChwYXJzZUZsb2F0KGNvaW5GZXRjaGVkLmhpZ2hfMjRoKS50b0ZpeGVkKDIpKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4gIHZhbHVlcy5hcHBlbmRDaGlsZChoaWdoKTtcbiAgYm9keVJpZ2h0LmFwcGVuZENoaWxkKGxhYmVscyk7XG4gIGJvZHlSaWdodC5hcHBlbmRDaGlsZCh2YWx1ZXMpO1xuICBjb2luQm9keS5hcHBlbmRDaGlsZChib2R5UmlnaHQpO1xuXG4gIGNvbnN0IGNvaW5Gb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29pbkZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjb2luLWZvb3RlcicpO1xuICBjb25zdCBtYXJrZXRDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBtYXJrZXRDYXAudGV4dENvbnRlbnQgPSBkb2xsYXJTeW1ib2wuY29uY2F0KHBhcnNlRmxvYXQoY29pbkZldGNoZWQubWFya2V0X2NhcCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB2b2x1bWUudGV4dENvbnRlbnQgPSBkb2xsYXJTeW1ib2wuY29uY2F0KHBhcnNlRmxvYXQoY29pbkZldGNoZWQudG90YWxfdm9sdW1lXzI0aCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICBjb2luRm9vdGVyLmFwcGVuZENoaWxkKG1hcmtldENhcCk7XG4gIGNvaW5Gb290ZXIuYXBwZW5kQ2hpbGQodm9sdW1lKTtcblxuICBjb2luRGl2LmFwcGVuZENoaWxkKGNvaW5IZWFkZXIpO1xuICBjb2luRGl2LmFwcGVuZENoaWxkKGNvaW5Cb2R5KTtcbiAgY29pbkRpdi5hcHBlbmRDaGlsZChjb2luRm9vdGVyKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb2luRGl2KTtcbiAgcmV0dXJuIGNvaW5EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvaW5EYXRhO1xuIiwiaW1wb3J0IGNvaW5EYXRhIGZyb20gJy4vY29pbkRhdGEnO1xuXG5mdW5jdGlvbiBnZXRDb2luSW5mbyhyb3cpIHtcbiAgY29uc29sZS5sb2cocm93LmlkKTtcbiAgY29uc3Qgc3ltYm9sID0gcm93LmlkO1xuICBjb2luRGF0YShzeW1ib2wpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2luSW5mbztcbiIsImltcG9ydCBnZXRDb2luSW5mbyBmcm9tICcuL2NvaW5JbmZvJztcblxuZnVuY3Rpb24gYWRkQ29pblRvVGFibGUoY29pbkxpc3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2luLWxpc3QnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxldCByYW5rID0gY29pbkxpc3RbaV1bJ3JhbmsnXTtcbiAgICBsZXQgbmFtZSA9IGNvaW5MaXN0W2ldWyduYW1lJ107XG4gICAgbGV0IHN5bWJvbCA9IGNvaW5MaXN0W2ldWydzeW1ib2wnXTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnY29pbnMnKTtcbiAgICByb3cuc2V0QXR0cmlidXRlKCdpZCcsIHN5bWJvbCk7XG4gICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgIDx0ZD4ke3Jhbmt9PC90ZD5cbiAgICAgIDx0ZD4ke25hbWV9PC90ZD5cbiAgICAgIDx0ZD4ke3N5bWJvbH08L3RkPlxuICAgICAgYDtcbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRDb2luSW5mbyhyb3cpO1xuICAgIH0pO1xuICAgIExpc3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb2luTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NvaW5saWIuaW8vYXBpL3YxL2NvaW5saXN0P2tleT1hZTkxMjQ2YzQzMmJkZDVkJnByZWY9VVNEJnBhZ2U9MSZvcmRlcj1yYW5rX2FzYycsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhRmV0Y2hlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb2luTGlzdCA9IGF3YWl0IGRhdGFGZXRjaGVkLmNvaW5zO1xuICAgIGFkZENvaW5Ub1RhYmxlKGNvaW5MaXN0KTtcbiAgICByZXR1cm4gY29pbkxpc3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2VycicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvaW5MaXN0O1xuIiwiaW1wb3J0IGdldENvaW5MaXN0IGZyb20gJy4vZmV0Y2hDb2luTGlzdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjb2luVGFibGUoKSB7XG4gIGNvbnN0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUnLCAndGFibGUtc3RyaXBlZCcsICd0YWJsZS1kYXJrJywgJ210LTUnLCAndGFibGUtYm9yZGVyZWQnLCAndGFibGUtaG92ZXInKTtcblxuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICB0YWJsZUhlYWQuY2xhc3NMaXN0LmFkZCgndGhlYWQtZGFyaycpO1xuXG4gIGNvbnN0IGhlYWR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgcmFuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIHJhbmsudGV4dENvbnRlbnQgPSAnUmFuayc7XG4gIGNvbnN0IGNvaW5OYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGNvaW5OYW1lcy50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgY29uc3QgY29pblN5bWJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBjb2luU3ltYm9scy50ZXh0Q29udGVudCA9ICdTeW1ib2wnO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICB0YWJsZUJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdjb2luLWxpc3QnKTtcblxuICBoZWFkdGV4dC5hcHBlbmRDaGlsZChyYW5rKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pbk5hbWVzKTtcbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQoY29pblN5bWJvbHMpO1xuICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQoaGVhZHRleHQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWQpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIGdldENvaW5MaXN0KCk7XG4gIHJldHVybiB0YWJsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2luVGFibGUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNpdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3NpdGUnO1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9