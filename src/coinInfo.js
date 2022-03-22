import coinData from './coinData';

function getCoinInfo(row) {
  console.log(row.id);
  const symbol = row.id;
  coinData(symbol);
}

export default getCoinInfo;
