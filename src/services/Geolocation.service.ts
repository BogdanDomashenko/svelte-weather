import axios from "axios";

const GeolocationService = {
  async getByGeo() {
    try {
      const pos: any = await new Promise<any>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
    } catch (error) {
      throw error;
    }
  },

  async getByIp() {
    try {
      const responseIp = await axios.get("https://api.db-ip.com/v2/free/self");
      const { ipAddress } = responseIp.data;

      const responseGeo = await axios.get(
        "http://ip-api.com/json/" + ipAddress
      );
      const { lat, lon, city } = responseGeo.data;

      return { lat, lon, city };
    } catch (error) {
      throw error;
    }
  },
};

export default GeolocationService;
