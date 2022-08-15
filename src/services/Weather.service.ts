import { api } from "./api";
import GeolocationService from "./Geolocation.service";

const WeatherService = {
  async getCurrent() {
    const { lat, lon, city } = await GeolocationService.getByIp();

    const response = await api.get("/data/2.5/weather", {
      params: { lat, lon },
    });
    return response.data;
  },
};

export default WeatherService;
