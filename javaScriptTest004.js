let size = 7;

for (let i = 0; i < size; i++) {

  let row = "";

  for (let j = 0; j < size; j++) {

    // find distance from the nearest border
    let dist = Math.min(i, j, size - 1 - i, size - 1 - j);

    // calculate number to print
    let num = 4 - dist;

    row += num + " ";
  }

  console.log(row.trim());
}