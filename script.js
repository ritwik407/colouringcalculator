let display = document.getElementById("display");

// Function to handle button inputs
function input(val) {
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "0";
}

// Function to delete the last entry
function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}

// Function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}