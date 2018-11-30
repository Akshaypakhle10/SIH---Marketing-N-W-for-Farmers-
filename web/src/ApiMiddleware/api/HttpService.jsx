import axios from 'axios';

axios.defaults.withCredentials = true; //remove in production

import randomstring  from 'random-string';
/**
 * This service handles the GET or POST request
 *  
 * @param {*} url 
 * @param {*} header 
 * @param {*} data 
 * @param {*} method 
 */

class HttpService {

    static setHttpService(baseUrl: String): null {
        let random = randomstring({
            length: 10,
            numeric: true,
            letters: true,
            special: false
        });
        this.axiosConstants = {
            xsrfCookieName: 'CSRF-TOKEN',
            xsrfHeaderName: 'X-CSRF-TOKEN'
        };
        this.xsrfCookieName = 'CSRF-TOKEN';
        this.xsrfHeaderName = 'X-CSRF-TOKEN';
        this.randomNumber = random;
        this.baseUrl = baseUrl;
    }

    static getCookie(): String {
        return this.randomNumber;
    }
    static get(url: string, params: Object): Object {
        return axios({
            url: url,
            method: 'GET',
            params: params,
            baseURL: this.baseUrl,
            xsrfCookieName: this.xsrfCookieName,
            xsrfHeaderName: this.xsrfHeaderName,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    static post(url: string, params: Object, body: Object): Object {
        return axios({
            url: url,
            method: 'POST',
            data: body,
            params: params,
            baseURL: this.baseUrl,
            xsrfCookieName: this.xsrfCookieName,
            xsrfHeaderName: this.xsrfHeaderName,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    static put(url: string, params: Object, body: Object): Object {
        return axios({
            url: url,
            method: 'PUT',
            data: body,
            params: params,
            responseType: 'json',
            baseURL: this.baseUrl,
            xsrfCookieName: this.xsrfCookieName,
            xsrfHeaderName: this.xsrfHeaderName,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    static delete(url: string, params: Object, body: Object): Object {
        return axios({
            url: url,
            method: 'DELETE',
            data: body,
            params: params,
            baseURL: this.baseUrl,
            xsrfCookieName: this.xsrfCookieName,
            xsrfHeaderName: this.xsrfHeaderName,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export default HttpService;