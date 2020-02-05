$(function () {
  loadTable(false);
});


function to_minutes(horaire) {
    return parseInt(horaire.split(":")[0])*60 + parseInt(horaire.split(":")[1]);
}

function remain_time(current, next) {
  if (isNaN(next) || next==0){
    return "...";
  } else {
    return next - current;
  }
}

function loadTable(config) {
  if (config) {
    ratp("A")
  } else {
    ratp("R")
  }
}

current_road = false

function switcher() {
  if (current_road) {
    current_road = false;
  } else {
    current_road = true;
  }
  clearInterval(myInterval)
  loadTable(current_road)
}
