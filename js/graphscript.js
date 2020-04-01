let baseurl2 = "https://corona.lmao.ninja/v2/historical/all";
window.onload = function getresults() {
  fetch(`${baseurl2}`)
    .then(worldStats => {
      return worldStats.json();
    })
    .then(populateArray)
    .catch(error => {
      console.log(error);
    });
};

function populateArray(worldStats) {
  console.log(worldStats);
  let j = 0;
  var deathsArray = [];
  for (let k = 0; k < 22; k++) {
    for (let i = 0; i < 1; i++) {
      j = j + 3;
      const today = new Date("Jan 19, 2020");
      // console.log(today);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + j);
      month = tomorrow.getMonth() + 1;
      day = tomorrow.getDate();
      let okay = `${month}/${day}/20`;
      presentDeath = `${worldStats.cases[`${month}/${day}/20`]}`;
      //   var length = Object.keys(`${worldStats.deaths}`).length;
      deathsArray[k] = presentDeath;
    }
  }
  //   console.log(deathsArray);
}
