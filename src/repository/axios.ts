import axios from 'axios';
const api_key = process.env.API_KEY;
const baseURL = process.env.STRAPI_URL;
const instance = axios.create({
    baseURL: 'http://localhost:1337',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + api_key,
    },

});
instance.interceptors.request.use((config) => {
    console.log("api_key ",api_key);
    config.headers.Authorization = "Bearer 64a0272c72200e84b64c48ddc13816545657ee7324c3c75ac1f8459987836db9a3f40bfe4ecace4379f39bdc2dddba7eeaa557be6af227bffd614574e896aa3dd96ea3d7874e65d855a072de943c6c4350ea610ba79d5a4daff85b1a81876e0d02ce6d24f31299d2e1b8a7b27d78c79e92bb7a68893e2f6ab99743412e5678ef";
    return config;
});

export default instance;