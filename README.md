# javascript-test-0004-final-14736-shivansh
Final Project Assignment - This repository contains the complete final project code and documentation.


# Concentric Number Pattern (JavaScript)

## Overview

This JavaScript program prints a **7 × 7 concentric number pattern**.
The numbers form square layers (or rings) that decrease as we move from the outer border toward the center.

The outermost layer contains the number **4**, and the values decrease step by step until the center value **1** is reached.

Example output:

```id="3m3i6x"
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```

---

## How the Program Works

### 1. Pattern Size

The variable `size` determines the dimensions of the square grid.

```javascript id="v5flk2"
let size = 7;
```

This creates a **7 × 7 pattern**.

---

### 2. Outer Loop (Rows)

```javascript id="j9ig8p"
for (let i = 0; i < size; i++)
```

This loop iterates through each **row** of the pattern.

---

### 3. Inner Loop (Columns)

```javascript id="g7m3x8"
for (let j = 0; j < size; j++)
```

This loop controls the **columns** within each row.

---

### 4. Distance from the Nearest Edge

```javascript id="s0t9x7"
let dist = Math.min(i, j, size - 1 - i, size - 1 - j);
```

This calculates the **minimum distance from the current position to any border**.

Example distances:

| Layer        | Distance |
| ------------ | -------- |
| Outer border | 0        |
| Second layer | 1        |
| Third layer  | 2        |
| Center       | 3        |

---

### 5. Number Calculation

```javascript id="p2k4l0"
let num = 4 - dist;
```

The value decreases as the distance increases.

| Distance | Printed Number |
| -------- | -------------- |
| 0        | 4              |
| 1        | 3              |
| 2        | 2              |
| 3        | 1              |

---

### 6. Build and Print Each Row

```javascript id="t7a5h1"
row += num + " ";
```

Each number is appended to the row string.

Finally, the row is printed:

```javascript id="k6f3r2"
console.log(row.trim());
```

`trim()` removes the extra space at the end.

---

## Code

```javascript id="q2b4m7"
// 7x7 Concentric Number Pattern

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
```

---

## How to Run the Program

1. Install **Node.js**
2. Save the file as `concentricPattern.js`
3. Open the terminal in the project folder
4. Run the command:

```id="4h1z7n"
node concentricPattern.js
```

---

## Concepts Used

* Nested loops
* Pattern printing logic
* Mathematical distance calculation
* JavaScript console output

---

## Author

Created as a practice program for understanding **pattern printing and loop logic in JavaScript**.
