import React, { Fragment } from "react";
//lấy id của trang ta sử dụng useParams
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import MovieCredit from "./MovieCredit";
import MovieReview from "./MovieReview";
import MovieSimilar from "./MovieSimilar";
import MovieVideo from "./MovieVideo";
const movieTypes = ({ type }) => {
  const { moviesId } = useParams();
  console.log(moviesId);
  const { data, error } = useSWR(
    tmdbAPI.getMovieDetails(moviesId, type),
    fetcher
  );
  console.log("movieData", data);
  //check data

  if (!data) {
    return <div>Loading...</div>;
  }
  switch (type) {
    case "credits":
      return <MovieCredit />;
    case "reviews":
      return <MovieReview />;
    case "similar":
      return <MovieSimilar />;
    case "videos":
      return <MovieVideo />;
    default:
      return null;
  }
};
const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  console.log(moviesId);
  const { data, error } = useSWR(
    tmdbAPI.getMovieDetails(moviesId, "videos"),
    fetcher
  );
  console.log("movieData", data);
  //check data

  if (!data) {
    return <div>Loading...</div>;
  }
  // const detail = data?.results || [];
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <Fragment>
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0  bg-black  bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[600px] max-w-[600px] -mt-[300px] mx-auto relative pb-10">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="w-full object-cover h-full rounded-xl z-10"
        />
      </div>
      <h1 className="text-white text-center  text-3xl font-bold mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex justify-center flex-center gap-x-5 mb-10">
          {genres.map((item, index) => (
            <span
              className="text-primary border border-primary py-2 px-4 rounded-lg"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-white text-2xl leading-relaxed max-w-[600px] mx-auto pb-10">
        {overview}
      </p>
      <movieTypes type={"credits"} />
      <movieTypes type={"reviews"} />
      <movieTypes type={"similar"} />
      <movieTypes type={"videos"} />
    </Fragment>
  );
};

export default MovieDetailsPage;
