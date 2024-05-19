const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function validateUSPhoneNumber(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?\d{3})([\s-]?\d{4})$/;
  return regex.test(str);
}

checkBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") {
    alert("Please provide a phone number");
    return;
  }

  if (validateUSPhoneNumber(value)) {
    resultsDiv.textContent = `Valid US number: ${value}`;
    resultsDiv.classList.add("valid");
    resultsDiv.classList.remove("invalid");
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`;
    resultsDiv.classList.add("invalid");
    resultsDiv.classList.remove("valid");
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  resultsDiv.classList.remove("valid", "invalid");
  input.value = "";
});
