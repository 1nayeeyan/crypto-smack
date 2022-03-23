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
  const container = document.querySelector('.container');
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  content.insertBefore(main, container);
  return main;
}

function clearMain() {
  const content = document.getElementById('content');
  const main = document.getElementById('main');
  return content.removeChild(main);
}

function deltaCheck(deltaNum, delta) {
  if (deltaNum >= 0) {
    delta.setAttribute('style', 'color: green');
  } else {
    delta.setAttribute('style', 'color: red');
  }
  return delta;
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
  deltaLabel.textContent = '24H %';
  labels.appendChild(deltaLabel);
  const delta = document.createElement('h2');
  delta.textContent = coinFetched.delta_24h;
  const deltaNum = parseFloat(delta.textContent);
  deltaCheck(deltaNum, delta);
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
  const leftFooter = document.createElement('div');
  leftFooter.classList.add('left-footer');
  const marketCapLabel = document.createElement('h3');
  marketCapLabel.textContent = 'Market Cap';
  const marketCap = document.createElement('h2');
  marketCap.textContent = dollarSymbol.concat(parseFloat(coinFetched.market_cap).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  leftFooter.appendChild(marketCapLabel);
  leftFooter.appendChild(marketCap);
  const rightFooter = document.createElement('div');
  rightFooter.classList.add('right-footer');
  const volumeLabel = document.createElement('h3');
  volumeLabel.textContent = '24H Volume';
  const volume = document.createElement('h2');
  volume.textContent = dollarSymbol.concat(parseFloat(coinFetched.total_volume_24h).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  rightFooter.appendChild(volumeLabel);
  rightFooter.appendChild(volume);
  coinFooter.appendChild(leftFooter);
  coinFooter.appendChild(rightFooter);

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
  for (let i = 0; i < 20; i += 1) {
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
  content.appendChild(createMain());
  content.appendChild(coinTable());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSx3R0FBd0csT0FBTztBQUMvRztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUhBQXFILEVBQUU7QUFDdkg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQUFpSCxFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsRUFBRTtBQUNySDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSCxFQUFFO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkhBQTZILEVBQUU7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdIVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JVOztBQUVyQztBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsWUFBWSxLQUFLO0FBQ2pCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0EsTUFBTSxxREFBVztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBVztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQy9DOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsaURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svLi9zcmMvY29pbkRhdGEuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvLXNtYWNrLy4vc3JjL2NvaW5JbmZvLmpzIiwid2VicGFjazovL2NyeXB0by1zbWFjay8uL3NyYy9mZXRjaENvaW5MaXN0LmpzIiwid2VicGFjazovL2NyeXB0by1zbWFjay8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL2NyeXB0by1zbWFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jcnlwdG8tc21hY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NyeXB0by1zbWFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NyeXB0by1zbWFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NyeXB0by1zbWFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBjb2luRGF0YShzeW1ib2wpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvaW5saWIuaW8vYXBpL3YxL2NvaW4/a2V5PWFlOTEyNDZjNDMyYmRkNWQmcHJlZj1VU0Qmc3ltYm9sPSR7c3ltYm9sfWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb2luRmV0Y2hlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhjb2luRmV0Y2hlZCk7XG4gICAgbWFrZUNvaW4oY29pbkZldGNoZWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnInKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgY29udGFpbmVyKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICByZXR1cm4gY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gZGVsdGFDaGVjayhkZWx0YU51bSwgZGVsdGEpIHtcbiAgaWYgKGRlbHRhTnVtID49IDApIHtcbiAgICBkZWx0YS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiBncmVlbicpO1xuICB9IGVsc2Uge1xuICAgIGRlbHRhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJlZCcpO1xuICB9XG4gIHJldHVybiBkZWx0YTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvaW4oY29pbkZldGNoZWQpIHtcbiAgY2xlYXJNYWluKCk7XG4gIGNyZWF0ZU1haW4oKTtcbiAgY29uc3QgZG9sbGFyU3ltYm9sID0gJyQnO1xuICBjb25zdCBjb2luRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvaW5EaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW1kJyk7XG5cbiAgY29uc3QgY29pbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2luSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvaW4taGVhZGVyJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYW1lLnRleHRDb250ZW50ID0gY29pbkZldGNoZWQubmFtZTtcbiAgY29uc3QgdGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aWNrZXIudGV4dENvbnRlbnQgPSBjb2luRmV0Y2hlZC5zeW1ib2w7XG4gIGNvaW5IZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvaW5IZWFkZXIuYXBwZW5kQ2hpbGQodGlja2VyKTtcblxuICBjb25zdCBjb2luQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2luQm9keS5jbGFzc0xpc3QuYWRkKCdjb2luLWJvZHknKTtcbiAgY29uc3QgYm9keUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9keUxlZnQuY2xhc3NMaXN0LmFkZCgnYm9keS1sZWZ0Jyk7XG4gIGNvbnN0IGN1cnJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGN1cnJQcmljZS50ZXh0Q29udGVudCA9IGRvbGxhclN5bWJvbC5jb25jYXQocGFyc2VGbG9hdChjb2luRmV0Y2hlZC5wcmljZSkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICBib2R5TGVmdC5hcHBlbmRDaGlsZChjdXJyUHJpY2UpO1xuICBjb2luQm9keS5hcHBlbmRDaGlsZChib2R5TGVmdCk7XG5cbiAgY29uc3QgYm9keVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvZHlSaWdodC5jbGFzc0xpc3QuYWRkKCdib2R5LXJpZ2h0Jyk7XG5cbiAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVscy5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlcy5jbGFzc0xpc3QuYWRkKCd2YWx1ZXMnKTtcblxuICBjb25zdCBkZWx0YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZGVsdGFMYWJlbC50ZXh0Q29udGVudCA9ICcyNEggJSc7XG4gIGxhYmVscy5hcHBlbmRDaGlsZChkZWx0YUxhYmVsKTtcbiAgY29uc3QgZGVsdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBkZWx0YS50ZXh0Q29udGVudCA9IGNvaW5GZXRjaGVkLmRlbHRhXzI0aDtcbiAgY29uc3QgZGVsdGFOdW0gPSBwYXJzZUZsb2F0KGRlbHRhLnRleHRDb250ZW50KTtcbiAgZGVsdGFDaGVjayhkZWx0YU51bSwgZGVsdGEpO1xuICB2YWx1ZXMuYXBwZW5kQ2hpbGQoZGVsdGEpO1xuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxvd0xhYmVsLnRleHRDb250ZW50ID0gJzI0SCBMb3cnO1xuICBsYWJlbHMuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsb3cudGV4dENvbnRlbnQgPSBkb2xsYXJTeW1ib2wuY29uY2F0KHBhcnNlRmxvYXQoY29pbkZldGNoZWQubG93XzI0aCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICB2YWx1ZXMuYXBwZW5kQ2hpbGQobG93KTtcbiAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaGlnaExhYmVsLnRleHRDb250ZW50ID0gJzI0SCBIaWdoJztcbiAgbGFiZWxzLmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoaWdoLnRleHRDb250ZW50ID0gZG9sbGFyU3ltYm9sLmNvbmNhdChwYXJzZUZsb2F0KGNvaW5GZXRjaGVkLmhpZ2hfMjRoKS50b0ZpeGVkKDIpKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4gIHZhbHVlcy5hcHBlbmRDaGlsZChoaWdoKTtcbiAgYm9keVJpZ2h0LmFwcGVuZENoaWxkKGxhYmVscyk7XG4gIGJvZHlSaWdodC5hcHBlbmRDaGlsZCh2YWx1ZXMpO1xuICBjb2luQm9keS5hcHBlbmRDaGlsZChib2R5UmlnaHQpO1xuXG4gIGNvbnN0IGNvaW5Gb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29pbkZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjb2luLWZvb3RlcicpO1xuICBjb25zdCBsZWZ0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnRGb290ZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1mb290ZXInKTtcbiAgY29uc3QgbWFya2V0Q2FwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtYXJrZXRDYXBMYWJlbC50ZXh0Q29udGVudCA9ICdNYXJrZXQgQ2FwJztcbiAgY29uc3QgbWFya2V0Q2FwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbWFya2V0Q2FwLnRleHRDb250ZW50ID0gZG9sbGFyU3ltYm9sLmNvbmNhdChwYXJzZUZsb2F0KGNvaW5GZXRjaGVkLm1hcmtldF9jYXApLnRvRml4ZWQoMikpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcbiAgbGVmdEZvb3Rlci5hcHBlbmRDaGlsZChtYXJrZXRDYXBMYWJlbCk7XG4gIGxlZnRGb290ZXIuYXBwZW5kQ2hpbGQobWFya2V0Q2FwKTtcbiAgY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHRGb290ZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtZm9vdGVyJyk7XG4gIGNvbnN0IHZvbHVtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdm9sdW1lTGFiZWwudGV4dENvbnRlbnQgPSAnMjRIIFZvbHVtZSc7XG4gIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHZvbHVtZS50ZXh0Q29udGVudCA9IGRvbGxhclN5bWJvbC5jb25jYXQocGFyc2VGbG9hdChjb2luRmV0Y2hlZC50b3RhbF92b2x1bWVfMjRoKS50b0ZpeGVkKDIpKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4gIHJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHZvbHVtZUxhYmVsKTtcbiAgcmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQodm9sdW1lKTtcbiAgY29pbkZvb3Rlci5hcHBlbmRDaGlsZChsZWZ0Rm9vdGVyKTtcbiAgY29pbkZvb3Rlci5hcHBlbmRDaGlsZChyaWdodEZvb3Rlcik7XG5cbiAgY29pbkRpdi5hcHBlbmRDaGlsZChjb2luSGVhZGVyKTtcbiAgY29pbkRpdi5hcHBlbmRDaGlsZChjb2luQm9keSk7XG4gIGNvaW5EaXYuYXBwZW5kQ2hpbGQoY29pbkZvb3Rlcik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29pbkRpdik7XG4gIHJldHVybiBjb2luRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb2luRGF0YTtcbiIsImltcG9ydCBjb2luRGF0YSBmcm9tICcuL2NvaW5EYXRhJztcblxuZnVuY3Rpb24gZ2V0Q29pbkluZm8ocm93KSB7XG4gIGNvbnNvbGUubG9nKHJvdy5pZCk7XG4gIGNvbnN0IHN5bWJvbCA9IHJvdy5pZDtcbiAgY29pbkRhdGEoc3ltYm9sKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29pbkluZm87XG4iLCJpbXBvcnQgZ2V0Q29pbkluZm8gZnJvbSAnLi9jb2luSW5mbyc7XG5cbmZ1bmN0aW9uIGFkZENvaW5Ub1RhYmxlKGNvaW5MaXN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkgKz0gMSkge1xuICAgIGNvbnN0IExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29pbi1saXN0Jyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBsZXQgcmFuayA9IGNvaW5MaXN0W2ldWydyYW5rJ107XG4gICAgbGV0IG5hbWUgPSBjb2luTGlzdFtpXVsnbmFtZSddO1xuICAgIGxldCBzeW1ib2wgPSBjb2luTGlzdFtpXVsnc3ltYm9sJ107XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2NvaW5zJyk7XG4gICAgcm93LnNldEF0dHJpYnV0ZSgnaWQnLCBzeW1ib2wpO1xuICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICA8dGQ+JHtyYW5rfTwvdGQ+XG4gICAgICA8dGQ+JHtuYW1lfTwvdGQ+XG4gICAgICA8dGQ+JHtzeW1ib2x9PC90ZD5cbiAgICAgIGA7XG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2V0Q29pbkluZm8ocm93KTtcbiAgICB9KTtcbiAgICBMaXN0LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29pbkxpc3QoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb2lubGliLmlvL2FwaS92MS9jb2lubGlzdD9rZXk9YWU5MTI0NmM0MzJiZGQ1ZCZwcmVmPVVTRCZwYWdlPTEmb3JkZXI9cmFua19hc2MnLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YUZldGNoZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29pbkxpc3QgPSBhd2FpdCBkYXRhRmV0Y2hlZC5jb2lucztcbiAgICBhZGRDb2luVG9UYWJsZShjb2luTGlzdCk7XG4gICAgcmV0dXJuIGNvaW5MaXN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnInKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2luTGlzdDtcbiIsImltcG9ydCBnZXRDb2luTGlzdCBmcm9tICcuL2ZldGNoQ29pbkxpc3QnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY29pblRhYmxlKCkge1xuICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJywgJ3RhYmxlLXN0cmlwZWQnLCAndGFibGUtZGFyaycsICdtdC01JywgJ3RhYmxlLWJvcmRlcmVkJywgJ3RhYmxlLWhvdmVyJyk7XG5cbiAgY29uc3QgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgdGFibGVIZWFkLmNsYXNzTGlzdC5hZGQoJ3RoZWFkLWRhcmsnKTtcblxuICBjb25zdCBoZWFkdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGNvbnN0IHJhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICByYW5rLnRleHRDb250ZW50ID0gJ1JhbmsnO1xuICBjb25zdCBjb2luTmFtZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBjb2luTmFtZXMudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gIGNvbnN0IGNvaW5TeW1ib2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgY29pblN5bWJvbHMudGV4dENvbnRlbnQgPSAnU3ltYm9sJztcbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29pbi1saXN0Jyk7XG5cbiAgaGVhZHRleHQuYXBwZW5kQ2hpbGQocmFuayk7XG4gIGhlYWR0ZXh0LmFwcGVuZENoaWxkKGNvaW5OYW1lcyk7XG4gIGhlYWR0ZXh0LmFwcGVuZENoaWxkKGNvaW5TeW1ib2xzKTtcbiAgdGFibGVIZWFkLmFwcGVuZENoaWxkKGhlYWR0ZXh0KTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVCb2R5KTtcbiAgdGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpO1xuICBnZXRDb2luTGlzdCgpO1xuICByZXR1cm4gdGFibGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNpdGUoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2luVGFibGUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVNpdGUgZnJvbSAnLi9zaXRlJztcblxuaW5pdGlhbGl6ZVNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==