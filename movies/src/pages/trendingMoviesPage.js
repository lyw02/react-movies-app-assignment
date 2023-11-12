import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatchIcon";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TrendingMoviesPage = (props) => {
  const { timeWindow } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["trending", { timeWindow: timeWindow }],
    getTrendingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter((m) => m.must_watch);
  localStorage.setItem("must_watch", JSON.stringify(mustWatch));
  const addToMustWatch = (movieId) => true;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />;
      }}
    />
  );
};

export default TrendingMoviesPage;
