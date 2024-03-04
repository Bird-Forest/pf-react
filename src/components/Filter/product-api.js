import axios from 'axios';

export async function fetchFriends() {
  try {
    const response = await axios.get(
      'https://656383fbee04015769a7535a.mockapi.io/users'
    );
    // const data = response.data;
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCountries() {
  try {
    const response = await axios.get(
      'https://countryapi.io/api/all?apikey=KCfp0Q8oAseBq3sbKRTcuoC0SxteE3Ku9XpSkMHu'
    );
    // const data = response.data;
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
// KCfp0Q8oAseBq3sbKRTcuoC0SxteE3Ku9XpSkMHu
// KCfp0Q8oAseBq3sbKRTcuoC0SxteE3Ku9XpSkMHu
// "https://countryapi.io/api/all?apikey=YOUR-APIKEY"
