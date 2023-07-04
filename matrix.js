const matrixText = document.getElementById("matrix-text");
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function createMatrixChars() {
  const matrixRowCount = Math.floor(window.innerHeight / 20);

  for (let i = 0; i < matrixRowCount; i++) {
    const matrixRow = document.createElement("div");
    matrixRow.classList.add("matrix-row");

    for (let j = 0; j < 100; j++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.animationDelay = `${Math.random() * 5}s`;
      matrixRow.appendChild(charSpan);
    }

    matrixText.appendChild(matrixRow);
  }
}

createMatrixChars();
