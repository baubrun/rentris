import axios from "axios";
import data from "../prac/data.json"

export const baseUrl = 'https://bayut.p.rapidapi.com';

const getProperties = async (url: string) => {
    // const { data } = await axios.get(`${baseUrl}${url}`, {
    //     headers: {
    //       "x-rapidapi-host": "bayut.p.rapidapi.com",
    //       "x-rapidapi-key": "9c02a07e79mshe0604cd613857eep1f623ajsnf0c7f967d747",
    //     },
    //   });
        
      return data?.hits;
};


const propertyService = {
  getProperties,
};

export default propertyService;
