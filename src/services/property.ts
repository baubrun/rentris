import axios from "axios";
import data from "../prac/data.json"
import detail from "../prac/detail.json"

const host = "bayut.p.rapidapi.com"
const key = "9c02a07e79mshe0604cd613857eep1f623ajsnf0c7f967d747"

const getProperties = async (url: string) => {
    // const { data } = await axios.get(url, {
    //     headers: {
    //       "x-rapidapi-host": host,
    //       "x-rapidapi-key": key,
    //     },
    //   });

      return data?.hits;
};

const getPropertyDetail = async (id: string) => {
    // const { data } = await axios.get("https://bayut.p.rapidapi.com/properties/detail", {
      // params: {externalID: id},
      //   headers: {
      //     "x-rapidapi-host": host,
      //     "x-rapidapi-key": key,
      //   },
      // });
    return detail
      // return data;
};


const propertyService = {
  getProperties,
  getPropertyDetail,
};

export default propertyService;
