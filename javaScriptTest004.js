/**
 * Prints a concentric number square pattern
 * @param {number} size - Size of the square (should be an odd positive integer)
 */

function printConcentricNumberSquare(size) {
  if (!Number.isInteger(size) || size < 1) {
    console.error("Invalid input: size must be a positive integer.");
    return;
  }

  const maxNumber = Math.ceil(size / 2);

  for (let row = 0; row < size; row++) {
    let line = "";

    for (let col = 0; col < size; col++) {

      const distance = Math.min(
        row,
        col,
        size - 1 - row,
        size - 1 - col
      );

      const value = maxNumber - distance;

      line += value + " ";
    }

    console.log(line.trim());
  }
}

// Example
printConcentricNumberSquare(7);
