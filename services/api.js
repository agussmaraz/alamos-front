import Axios from 'axios';

class ApiClient {
    _makeCall(entity, data, params = {}, method = 'GET') {
        return Axios({
            baseURL: process.env.API_URL,
            url: `${entity}`,
            data,
            method,
        }).then(({ data }) => data.data);
    }

    checkHealth() {
        return this._makeCall('health');
    }

    getPublications() {
        return this._makeCall('publications');
    }

    getPublicationsByUser(user_id) {
        return this._makeCall('publications', { user_id });
    }
}

export default new ApiClient();
