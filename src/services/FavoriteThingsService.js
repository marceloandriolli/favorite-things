import apiClient from './apiClient';


export default {
    getFavoriteThings() {
      return apiClient.get('favorite-things/');
    }
}
