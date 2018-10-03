const baseUrl = 'https://www.spotahome.com/api/public/listings/similars/122836';

async function sendRequest(url, requestParams) {
  let response = await fetch(url, requestParams);
  let result;

  try {
    result = await response.json();
  } catch (e) {
    result = { error: e };
  }

  return result;
}

class SpotahomeAPI {
  static async getListings() {
    return sendRequest(`${baseUrl}`);
  }
}

export default SpotahomeAPI;
