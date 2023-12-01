<template>
  <nav>
    <div class="row">
      <p class="rowtitle">Netflix Orijinal</p>
      <table>
        <tr>
          <th v-for="(rowThumbnail, index) in rowThumbnails" :key="index">
            <div class="image-container">
              <img
                class="marvelimg"
                :src="rowThumbnail.thumbnail"
                @click="openModal(rowThumbnail)"
              />
              <button class="ekle">+</button>
            </div>
          </th>
        </tr>
        
      </table>
    </div>
    <!-- Modal -->
    <div class="modal" :class="{ show: showModal }">
      <div class="modal-content">
        <div class="card">
          <div class="first">
            <img :src="selectedImage" class="img" />
            <h1 class="title">{{ selectedName }}</h1>
            <p class="text">{{ selectedDescription }}</p>
          </div>
        </div>
        <button class="close" @click="closeModal">Kapat</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const rowThumbnails = computed(() => {
      return store.state.rowThumbnails;
    });

    const selectedImage = computed(() => {
      return store.state.selectedImage;
    });

    const selectedName = computed(() => {
      return store.state.selectedName;
    });

    const selectedDescription = computed(() => {
      return store.state.selectedDescription;
    });

    const showModal = ref(false);

    const openModal = (selectedRowThumbnail) => {
      showModal.value = true;
      store.commit("SET_SELECTED_IMAGE", selectedRowThumbnail.thumbnail);
      store.commit("SET_SELECTED_NAME", selectedRowThumbnail.name);
      store.commit(
        "SET_SELECTED_DESCRIPTION",
        selectedRowThumbnail.description
      );
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      rowThumbnails,
      selectedImage,
      selectedName,
      selectedDescription,
      showModal,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.row {
  padding: 0;
  margin-top: -5px;
  width: 100%;
  height: 350px;
  background-color: black;
  overflow: hidden;
  display: inline-block;
}
.rowtitle {
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 15px 0 5px 10px;
  padding: 10px 0 0 10px;
}
.image-container {
  transition: transform 0.3s ease;
}
.marvelimg {
  width: 170px;
  height: 265px;
  margin-left: 10px;
  margin-top: 15px;
  padding: 5px 0px 5px 10px;
}
.image-container:hover {
  transform: scale(1.2); /* For example, scale the container on hover */
}

th {
  position: relative;
}
.ekle {
  position: absolute; /* Resmin üzerine yerleştirilecek */
  top: 20px; /* Yatay konumu */
  left: 160px; /* Dikey konumu */
  background-color: transparent; /* Butonun arka plan rengi saydam olacak */
  border: none; /* Butonun kenarlık olmayacak */
  cursor: pointer; /* Üzerine gelince imleç şekli değişecek */
  font-size: 32px;
  pointer-events: all;
  color: rgb(247, 246, 246);
}
/* modal baslangıc */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.8
  ); /* Modal arka plan rengi ve saydamlığı */
}

.modal-content {
  background-color: rgba(
    14,
    12,
    12,
    0.9
  ); /* Modal içeriğinin arka plan rengi */
  padding: 30px 30px 10px 30px;
  margin: 5% auto;
  width: 40%; /* Modal genişliği */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Modal kutu gölgesi */
}

.show {
  display: block;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;

  /* margin-top: -1vh; */
}

.first {
  width: 350px;
  height: 550px;
  border: 2px solid #f0ebeb;
  padding: 0 10px 10px 10px;
  background-color: black;
}
.img {
  width: 270px;
  height: 300px;
  margin: 10px 30px 10px 30px;
}
.title {
  color: white;
}
.text {
  color: white;
  font-size: 15px;

  color: white;
}

h3 {
  margin: 20px 0 10px 0;
  color: white;
}
.close {
  margin: 20px 0 0 45%;
  padding: 10px 15px;
}
</style>
