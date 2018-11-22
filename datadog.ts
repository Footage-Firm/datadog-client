import util from "util";
import dogapi from "dogapi";
import _ from "lodash";

class Datadog {
  constructor() {
    dogapi.initialize({
      api_key: process.env.API_KEY,
      app_key: process.env.APP_KEY
    });

    // Promisify the functions used in this class.
    dogapi.client.requestAsync = util.promisify(dogapi.client.request);

  }

  async getMetrics(): Promise<string[]> {
    const now = _.round(new Date().getTime() / 1000);
    const hoursInSeconds = 60 * 60;
    const then = now - 1 * hoursInSeconds;
    const result = await dogapi.client.requestAsync("GET", "/metrics", {query: {from: then}});
    return result.metrics;
  }
}

export default new Datadog();
