async function getCoinList() {
  try {
    const response = await fetch('https://coinlib.io/api/v1/coinlist?key=ae91246c432bdd5d&pref=USD&page=1&order=rank_asc');
    const coinList = await response.json();
    return coinList;
  } catch (error) {
    console.log('err');
  }
}

export default getCoinList;
