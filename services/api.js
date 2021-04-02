import Axios from 'axios';
class ApiClient {
    _makeCall(entity, data, method = 'GET', params = {}) {
        return Axios({
            baseURL: process.env.API_URL,
            url: `${entity}`,
            data,
            method,
        }).then(({ data }) => data.data);
    }

    _makeAuthCall(entity, data, method = 'GET', params = {}) {
        return Axios({
            baseURL: process.env.AUTH_URL,
            url: `${entity}`,
            data,
            method,
        }).then(({ data }) => data.data);
    }

    login(id, password) {
        return this._makeAuthCall('users/login', { id, password }, 'POST');
    }

    checkHealth() {
        return this._makeCall('health');
    }

    getPublications() {
        return this._makeCall('publications');
    }

    getPublicationsByUser(id) {
        return this._makeCall('publications/user/' + id);
    }
}

export default new ApiClient();
