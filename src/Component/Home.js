import React from "react";

const Home = () => {
  async function api() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGFlZmE3NzMyYWNlMjU3MTI1YjdhMDgyMmVmZTIyOCIsInN1YiI6IjY0ZGIyM2RiZDEwMGI2MDBmZjBjYjBlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Ku-bMRdlQFlUMGtIhq7wC0P8ZFJyN7t5fOeWG2GIwY",
      },
    };
    let result = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
    console.log(result);
  }
  api();
  return <></>;
};

export default Home;
