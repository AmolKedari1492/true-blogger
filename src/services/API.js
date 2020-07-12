import axios from "./Axios";

import {
    API_ENDPOINT
} from "../constants/";

class APIService {
    
    getPosts = (params = {}, sucessCb, errorCb) => {
        axios.get(API_ENDPOINT, params, sucessCb, errorCb);
    }

    getBlog = (id, sucessCb, errorCb) => {
        axios.get(`${API_ENDPOINT}/${id}`, {}, sucessCb, errorCb);
    }

};

export default new APIService();
