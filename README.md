# Concentric Number Square Pattern in JavaScript

This project demonstrates how to generate a **Concentric Number Square Pattern** using JavaScript.

The program prints a square matrix where numbers decrease toward the center, forming **layers (or rings)**. This problem is commonly used in **coding assessments and technical interviews** to test logical thinking and nested loop concepts.

---

## 📌 Problem Statement

Write a program that prints a **Concentric Number Square Pattern** for a given square size.

Example when `size = 7`:

```text
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```

---

## 🧠 Logic Used

1. The pattern forms a **square matrix of size `n × n`**.
2. Each cell belongs to a **layer based on its distance from the nearest border**.
3. The distance from the border is calculated using:

```text
distance = min(row, column, size - 1 - row, size - 1 - column)
```

4. The maximum number in the pattern is:

```text
maxNumber = ceil(size / 2)
```

5. The value printed at each position is calculated as:

```text
value = maxNumber - distance
```

This logic ensures the pattern works for **any valid square size**.

---

## 💻 Implementation

```javascript
/**
 * Prints a concentric number square pattern
 * @param {number} size - Size of the square
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
```

---

## ⚙️ How to Run

1. Install **Node.js** on your system.
2. Save the file as:

```text
concentricSquare.js
```

3. Run the program using:

```bash
node concentricSquare.js
```

---

## 📂 Project Structure

```text
concentric-number-square-pattern
│
├── concentricSquare.js
└── README.md
```

---

## 🚀 Features

* Clean and readable JavaScript implementation
* Works for any square size
* Efficient mathematical logic
* Reusable function design
* Beginner-friendly explanation

---

## 📚 Concepts Covered

* JavaScript Nested Loops
* Pattern Printing Algorithms
* Matrix Logic
* Mathematical Optimization

---

## 👨‍💻 Author

**Shivansh Dubey**

B.Tech in Computer Science and Engineering
Java Full Stack Developer

Technologies:
Java • JavaScript • React • MySQL
