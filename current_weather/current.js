const select = document.getElementById('cities');
let city = select.value;

const input = document.getElementById('enterCity');

function getData() {
  let xhr = new XMLHttpRequest()
  let url = `http://api.weatherapi.com/v1/current.json?key=5be5d4c23c00497fb41144549230306&q=${city}&aqi=no`;
  xhr.open("GET", url);
  xhr.send();
}