const display = document.querySelector(".output");
const buttons = document.querySelectorAll(".b");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.textContent = "0";
    } else if (value === "CE") {
      display.textContent = display.textContent.slice(0, -1) || "0";
    } else if (value === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "ERROR";
      }
    } else {
      if (
        display.textContent === "00" ||
        display.textContent === "Error" ||
        display.textContent === "0"
      ) {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});

/*dark mode script added */
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("dark");
  logo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      logo.src = "logo-dark.png";
    } else {
      logo.src = "logo.png";
    }
  });
});
