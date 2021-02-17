const items1 = [
    { date: "10/17/2018", name: "john doe" },
    { date: "10/18/2018", name: "jane doe" },
  ];
  const items2 = [
    { date: "10/17/2019", name: "john doe" },
    { date: "10/18/2019", name: "jane doe" },
  ];
  function loadTableData(items) {
    const table = document.getElementById("userBody");
    items.forEach( item => {
      let row = table.insertRow();
      let date = row.insertCell(0);
      date.innerHTML = item.date;
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    });
  }
  loadTableData(items1);
  loadTableData(items2);
  loadTableData([]);