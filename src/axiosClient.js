import axios from 'axios';

const apikey = 'd907d2b67ed43ea76946d8e9e2012793'; // Marvel API anahtarınızı buraya girin
const hash = 'c530d5ebcd214180bd98a0b76530503c'; // Marvel API hash kodunuzu buraya girin
const timestamp = '1690314859346';

const axiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public', // Marvel API'nin temel URL'si
  timeout: 10000, // İstek zaman aşımı süresi (10 saniye)
});

// Marvel API istekleri için gerekli olan hash kodu ve API anahtarını otomatik olarak eklemek için interceptor kullanalım
axiosInstance.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params.ts = timestamp;
    config.params.apikey = apikey;
    config.params.hash = hash;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
