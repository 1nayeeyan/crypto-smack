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

export default addCoinToTable;
