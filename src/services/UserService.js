import { Client } from './Client';
import global from '../config/appConfig';


const endpoint = {
  async login(data) {
    let deviceID = await global.deviceID;
    return Client.get(`/api/user/login`, {
      deviceId: deviceID,
      data: data
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return {
          error: true,
          message: error,
        };
      });
  },

}

export default endpoint;
