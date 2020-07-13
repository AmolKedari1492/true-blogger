import axios from "axios";

import {
    BASE_URL,
} from "../constants/";

class AxiosService {
    get = async (url, params = {}, successCb, errorCb) => {
        try {
            let resp = await axios({
                method: 'get',
                url,
                params,
                headers: {
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                baseURL: BASE_URL
            });
            if (resp.status === 200) {
                successCb(resp.data);
            } else {
                errorCb(resp);
            }
        } catch (e) {
            console.error(e);
            errorCb({ error: e });
        }
    }
};

export default new AxiosService();
