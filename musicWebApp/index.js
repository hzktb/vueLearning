var app = new Vue({
  el: "#app",
  data: {
    query: "",
    musicList: [],
    musicUrl: "",
  },
  methods: {
    searchMusic: function () {
      axios
        .get("https://autumnfish.cn/search?keywords=" + this.query)
        .then((res) => {
          this.musicList = res.data.result.songs;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    playMusic: function (musicId) {
      console.log(musicId);
      axios
        .get("https://autumnfish.cn/song/url?id=" + musicId)
        .then((res) => {
          this.musicUrl = res.data.data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
