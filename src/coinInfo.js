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

export default getCoinInfo;
