import axios from "axios";


const getProperties = async (url: string) => {
    const { data } = await axios.get(url, {
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_RENTRIS_HOST!,
          "x-rapidapi-key": process.env.REACT_APP_RENTRIS_KEY!,
        },
      });
      return data?.hits;
};

const getPropertyDetail = async (id: string) => {
    const { data } = await axios.get(process.env.REACT_APP_BASE_URL!, {
      params: {externalID: id},
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_RENTRIS_HOST!,
          "x-rapidapi-key": process.env.REACT_APP_RENTRIS_KEY!,
        },
      });
      return data;
};


const propertyService = {
  getProperties,
  getPropertyDetail,
};

export default propertyService;
