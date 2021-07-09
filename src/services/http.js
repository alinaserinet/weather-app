import axios from 'axios';

class Http {
    constructor(config = {}) {
        this.instance = axios.create(config);
    }

    get(url, config = {}) {
        return new Promise((resolve, reject) => {
            this.instance.get(url, config)
            .then(({data}) => resolve(data))
            .catch(reject);
        });
    }
}

export default new Http({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        appid: process.env.REACT_APP_TOKEN,
        units: 'metric'
    }
});