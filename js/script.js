let baseurl = "https://corona.lmao.ninja/v2/all";
const updateButton = document.querySelector(".button");
updateButton.addEventListener("click", getresults);
function getresults() {
  fetch(`${baseurl}`)
    .then(worldStats => {
      return worldStats.json();
    })
    .then(displayresults)
    .catch(error => {
      console.log(error);
    });
}
function displayresults(worldStats) {
  console.log(worldStats);
  let cases = document.querySelector(".cases");
  cases.innerText = `${worldStats.cases}`;
  let deaths = document.querySelector(".deaths");
  deaths.innerText = `${worldStats.deaths}`;
  let recovered = document.querySelector(".recovered");
  recovered.innerText = `${worldStats.recovered}`;
  let active = document.querySelector(".active");
  active.innerText = `${worldStats.active}`;
}
