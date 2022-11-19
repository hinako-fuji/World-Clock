function updateTime() {
  // London

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss[<small>][&nbsp;]A[</small>]"
    );
  }
  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss[<small>][&nbsp;]A[</small>]"
    );
  }
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss[<small>][&nbsp;]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  function updateTimeForSelectedCity() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = ` <div class="city">
            <div>
              <h2>${cityName}</h2>

              <div class="date">${cityTime.format("MMM Do YYYY")}</div>
            </div>

            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>&nbsp;${cityTime.format("A")}</small></div>
            </div>
            <a href="/" class= "default-link"> <i class="fa-solid fa-arrow-rotate-right"></i> Defalut cities</a>`;
  }
  updateTimeForSelectedCity();
  setInterval(updateTimeForSelectedCity, 1000);
}

let citySelect = document.querySelector("#select-city");
citySelect.addEventListener("change", updateCity);

// Theme Change

function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  } else {
    body.classList.add("dark");
    themeButton.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
  }
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);
