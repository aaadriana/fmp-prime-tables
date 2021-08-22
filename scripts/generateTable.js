function generateTable(list) {
  if (!Array.isArray(list)) return "";
  if (!list.length) return "";
  if (list.some((el) => !Number.isInteger(el))) return "";

  var result = "<table><tr><td class='sticky-column sticky-row'></td>";

  // our table needs to have n+1 columns and n+1 rows; I'm adding a dummy '0' at the beginning of this array in order to achieve this
  list.unshift(0);

  list.forEach((i) => {
    list.forEach((j) => {
      if (i === 0 && j > 0) {
        result += `<td class='sticky-row'>[${j}]</td>`;
      }

      if (j === 0 && i > 0) {
        result += `<td class='sticky-column'>[${i}]</td>`;
      }

      if (i > 0 && j > 0) {
        result += `<td>${i * j}</td>`;
      }
    });
    result += "</tr>";
  });

  result += "</table>";

  return result;
}

export default generateTable;
