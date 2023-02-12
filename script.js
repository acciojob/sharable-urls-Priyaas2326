const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const yearInput = document.querySelector("#year");
    const urlDisplay = document.querySelector("#url");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = nameInput.value;
      const year = yearInput.value;
      urlDisplay.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
    });