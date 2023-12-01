<template>
  <nav id="navbar" :class="navbarClass">
    <a class="svg" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="678"
        viewBox="0 0 300 81.387"
        id="netflix"
      >
        <path
          fill="#b81d24"
          d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1"
        ></path>
      </svg>
    </a>
    <a @click="openModal" href="#"
      ><img class="user" src="../assets/avatar.png" alt=""
    /></a>
    <!-- Modal -->
    <div class="modal" :class="{ show: showModal }">
      <div class="modal-content">
        <!-- Modal içeriği buraya gelecek -->
        <h2>Favorite Characters</h2>
        <ol class="item-container">
          <li class="item-content">
            <img src="../assets/large-movie1.jpg" alt="" />
            <p>Luis Miguel</p>
            <button class="delete">x</button>
          </li>
          <li class="item-content">
            <img src="../assets/large-movie1.jpg" alt="" />
            <p>Luis Miguel</p>
            <button class="delete">x</button>
          </li>
          <!-- Diğer li elemanları buraya eklenebilir -->
        </ol>
        <button class="close" @click="closeModal">Kapat</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  name: "NavBar",
  setup() {
    const showModal = ref(false); // Modalın açık veya kapalı olduğunu takip eden değişken

    function openModal() {
      showModal.value = true; // Modalı aç
      // Ek olarak modalın açıldığında yapılacak işlemleri burada gerçekleştirebilirsiniz
    }

    function closeModal() {
      showModal.value = false; // Modalı kapat
      // Ek olarak modalın kapatıldığında yapılacak işlemleri burada gerçekleştirebilirsiniz
    }

    const isScrolled = ref(false);

    // Navbar class'ını hesaplamak için computed kullanabiliriz
    const navbarClass = computed(() => {
      return isScrolled.value ? "scrolled" : "";
    });

    // Sayfa yüklendiğinde scroll olayını dinleyelim
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    // Scroll işlemi gerçekleştiğinde çalışacak fonksiyonumuz
    function handleScroll() {
      // Window'un scrollY değeri 0'dan büyükse isScrolled değerini true yapalım
      isScrolled.value = window.scrollY > 0;
    }

    return {
      showModal,
      openModal,
      closeModal,
      navbarClass,
    };
  },
};
</script>

<style scoped>
nav {
  background-color: transparent; /* Başlangıçta arka plan rengi şeffaf olsun */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  transition: background-color 0.3s ease; /* Transition efekti ekleyelim */
}
.scrolled {
  background-color: black; /* Scroll down yapıldığında arka plan rengi değişecek */
}
#navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
}
a {
  margin-left: 20px;
}
svg {
  height: 70px;
  width: 70px;
}
.user {
  height: 40px;
  width: 40px;
  margin-top: 15px;
  margin-right: 20px;
}
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
    30,
    27,
    27,
    0.9
  ); /* Modal içeriğinin arka plan rengi */
  padding: 30px;
  margin: 10% auto;
  width: 30%; /* Modal genişliği */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Modal kutu gölgesi */
}

.show {
  display: block;
}

li {
  list-style-type: none;
  border: 2px solid rgb(241, 234, 234);
  margin-top: 15px;
}
li > img {
  width: 70px;
  height: 80px;
}
li > p {
  color: white;
}
h2 {
  color: white;
}
.item-container {
  list-style: none; /* Sırasız liste işaretlerini gizlemek için */
  padding: 0; /* Listeye varsayılan padding değerini kaldırmak için */
}

.item-content {
  display: flex;
  align-items: center; /* Dikeyde ortalamak için */
  margin-bottom: 10px; /* Li elemanları arasında boşluk bırakmak için */
}

.item-content img {
  margin-right: 10px; /* Resim ile metin arasında boşluk bırakmak için */
}
.close {
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete {
  width: 1rem;
  margin-left: 200px;
}
</style>
