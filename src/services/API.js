import axios from "./Axios";

import {
    API_ENDPOINT
} from "../constants/";

class APIService {
    
    getBlogs = (sucessCb, errorCb) => {
        axios.get(API_ENDPOINT, {}, sucessCb, errorCb);
    }

    getBlog = (id, sucessCb, errorCb) => {
        axios.get(`${API_ENDPOINT}/${id}`, {}, sucessCb, errorCb);
    }

};

export default new APIService();
