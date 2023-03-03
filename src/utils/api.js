import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2FkYzM2YmJlZWYzYjc5MThkNjFkZmJhYzI5ZWQzMyIsInN1YiI6IjYzZjg5MzgwNjljNzBmMDA5ZWE2NDE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIR56UcnAa_Ce3miJbICjwx4H_38VUMsigIQaqN7FUA";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
