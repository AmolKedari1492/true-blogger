import axios from "./Axios";

import {
    API_ENDPOINT,
    RELATED_POST_API_ENDPOINT
} from "../constants/";

class APIService {
    
    getPosts = (params = {}, sucessCb, errorCb) => {
        axios.get(API_ENDPOINT, params, sucessCb, errorCb);
    }

    getPost = (id, sucessCb, errorCb) => {
        axios.get(`${API_ENDPOINT}/${id}`, {}, sucessCb, errorCb);
    }

    getRelatedPost = (id, sucessCb, errorCb) => {
        axios.get(`${API_ENDPOINT}/${id}/${RELATED_POST_API_ENDPOINT}`, {}, sucessCb, errorCb);
    }

};

export default new APIService();
