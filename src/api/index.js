import axios from "axios";

const api = axios.create({
          baseURL: "https://desafioonline.webmotors.com.br/swagger/docs/v1",
});

api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';



export default api;