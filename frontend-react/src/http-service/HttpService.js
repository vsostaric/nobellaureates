import React from "react";
import axios from "axios/index";

class HttpService {

    baseUrl = 'http://localhost:8090';

    sendGetRequest(url) {
        return axios.get(this.baseUrl + url);
    }

    sendPostRequest(url, body) {
        return axios.post(this.baseUrl + url, body);
    }

}

const http = new HttpService();
export default http;
