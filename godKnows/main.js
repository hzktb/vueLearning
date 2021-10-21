var app = new Vue({
  el: "#app",
  data: {
    city: "",
    weatherArr: [],
  },
  methods: {
    searchWeather: function () {
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((res) => {
          console.log(res.data.data.forecast);
          this.weatherArr = res.data.data.forecast;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
