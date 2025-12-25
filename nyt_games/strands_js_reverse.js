// NEED TO PUT HOOK AT MANUAL_DICT instantiation

table = document.getElementById('table');
resultText = '';
rows = table.querySelectorAll('tr');
rows.forEach(row => {
 rowText = '';
 cells = row.querySelectorAll('td');

 cells.forEach(cell => {
   // Append the text content of each cell to the current row's text.
   // Trim to remove any leading/trailing whitespace.
   rowText += cell.textContent.trim();
 });

 // Add the completed row text to the overall result, followed by a newline.
 // Ensure no extra newline is added after the last row.
 if (resultText !== '') {
      resultText += '\n';
 }
 resultText += "\"" + rowText + "\",";
});
console.log(resultText)

const result = {};
  const columns = 6;

  for (const key in MANUAL_DICT) {
    if (Object.prototype.hasOwnProperty.call(MANUAL_DICT, key)) {
      result[key] = MANUAL_DICT[key].map(number => {
        const row = Math.floor(number / columns);
        const column = number % columns;
        return [row, column];
      });
    }
  }

result