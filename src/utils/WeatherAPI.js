import store from "./Store";

const API_KEY = "c95951b6fec7e1a5b79aad4db8eaca2d";

const getWeatherData = () => {
  const city = store.getSearchTerm() || "Munich,DE";
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`;

  fetch(url).then(resp => resp.json()).then(data => {
    store.updateGlobalState(data);
  });
};

export {
  getWeatherData
}