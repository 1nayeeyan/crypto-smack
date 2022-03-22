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

export default coinData;
