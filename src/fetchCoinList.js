import getCoinInfo from './coinInfo';

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
      getCoinInfo(row);
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

export default getCoinList;
