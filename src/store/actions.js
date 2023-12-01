// store/actions.js
import axiosInstance from '../axiosClient';

export default {
  async fetchThumbnail({ commit }) {
    try {
      const response = await axiosInstance.get('/characters'); // API isteğini burada yapın
      console.log(response) 
      // burasın HeaderPage icin kullanılıyor
      const i = Math.floor(Math.random() * 20);
      const thumbnailUrl = response.data.data.results[i].thumbnail.path + '.' + response.data.data.results[i].thumbnail.extension; // API yanıtından thumbnail URL'sini alın (bu örnek verilerle ilgili)
      const movieName = response.data.data.results[i].name
      const description = response.data.data.results[i].description
      // -----------------------------------------------

      const rowThumbnails = response.data.data.results
                  .slice(0, 11)
                  .map(result => ({
                     thumbnail: result.thumbnail.path + '.' + result.thumbnail.extension,
                     name: result.name,
                     description: result.description,
  }));
      // const rowThumbnails=response.data.data.results.slice(0, 10).map(result => result.thumbnail.path + '.' + result.thumbnail.extension);
      // const selectedName=response.data.data.results.slice(0, 10).map(result => result.name);
      // const selectedDescription=response.data.data.results.slice(0, 10).map(result => result.description);
      commit('SET_THUMBNAIL_URL', thumbnailUrl); // Mutasyonu çağırarak state'i güncelleyin
      commit("SET_MOVIE_NAME",movieName);
      commit("SET_DESCRIPTION",description);
      commit("SET_ROWTHUMBNAILS",rowThumbnails);
      // commit("SET_SELECTED_NAME",selectedName);
      // commit("SET_SELECTED_DESCRIPTION",selectedDescription);

    } catch (error) {
      console.error('Thumbnail alınırken bir hata oluştu:', error);
    }
  },
}


// async fetchData({ commit }) {
//   try {
//     const response = await axiosInstance.get('/characters');
//     const totalCharacters = response.data.data.results.length;
//     const randomNumbers = [];

//     while (randomNumbers.length < 7) {
//       const randomNumber = Math.floor(Math.random() * totalCharacters);
//       if (!randomNumbers.includes(randomNumber)) {
//         randomNumbers.push(randomNumber);
//       }
//     }

//     const imageUrls = randomNumbers.map((index) => {
//       const path = response.data.data.results[index].thumbnail['path'];
//       return path + '.' + 'jpg';
//     });

//     commit('setImageUrls', imageUrls);
//   } catch (error) {
//     console.error(error);
//   }
// },
