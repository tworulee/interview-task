<template>
  <div class="container">
    <img :src="thumbnailUrl" alt="" />
    <div class="overlay">
      <p class="text">{{ movieName }} </p>
      <button>Play</button>
      <button>My List</button>
      <p class="text1">
        {{ description }}
      </p>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const thumbnailUrl = computed(() => {
      // Vuex store'daki thumbnailUrl state'ini kullanarak thumbnail URL'sini alın
      return store.state.thumbnailUrl;
    });

    const movieName = computed(() => {
      // Movie adını Vuexle alın
      return store.state.movieName;
    });

    const description = computed(() => {
      // Açıklamayı Vuexle alın
      return store.state.description;
    });

    // Bileşen yüklendiğinde thumbnail'ı almak için Vuex action'ını çağırın
    onMounted(() => {
      store.dispatch('fetchThumbnail');
    });

    return {
      thumbnailUrl,
      movieName,
      description,
    };
  },
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin-bottom: 0;
  position: relative;
  display: inline-block;
}
img {
  height: 450px;
  width: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
  height: 200px;
  margin: 80px 0 0 10px;
  display: inline-block;
}
.text {
  color: white;
  margin-right: 50px;
  font-size: 50px;
  text-align: center;
  font-weight: 700;
}
button {
  background-color: rgba(51, 51, 51, 0.5);
  margin: 20px 0 5px 40px;
  width: 90px;
  height: 30px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 2px;
}
button:hover {
  background-color: white;
  color: black;
}
.text1 {
  color: white;
  margin: 20px 0 0 30px;
  max-width: 300px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
