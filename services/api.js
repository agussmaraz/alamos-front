import Axios from 'axios';

class ApiClient {
    _makeCall(entity, params, method) {
        return Axios({
            baseURL: process.env.API_URL,
            url: `${entity}`,
        }).then(({ data }) => data.data);
    }

    checkHealth() {
        return this._makeCall('health');
    }

    getPublications() {
        return this._makeCall('publications');
    }
}

export default new ApiClient();
