// store/mutations.js
export default {
    SET_THUMBNAIL_URL(state, url) {
        state.thumbnailUrl = url;
      },
    SET_MOVIE_NAME(state,name){
        state.movieName = name;
    },
    SET_DESCRIPTION(state, description) {
        state.description = description;
      },
    SET_ROWTHUMBNAILS(state,urls){
        state.rowThumbnails=urls;
    }, 
    SET_SELECTED_IMAGE(state, url) {
      state.selectedImage = url;
    },
    SET_SELECTED_NAME(state,name){
      state.selectedName = name
    },
    SET_SELECTED_DESCRIPTION(state,description){
      state.selectedDescription = description
    }
};
