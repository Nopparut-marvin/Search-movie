import React, { useEffect, useReducer } from "react";
import { Box } from "@material-ui/core";
import Search from "../src/components/Search";
import Movie from "./components/Movie";

const initialState = {
  loading: "false",
  errormsg: null,
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEACH_CALLING":
      return {
        ...state,
        loading: true,
        errormsg: null,
      };
    case "SEARCH_COMPLETE":
      return {
        ...state,
        loading: false,
        errormsg: null,
        movies: action.payload,
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        errormsg: "search fail",
        loading: false,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=men&page=2&apikey=42c796ff")
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          dispatch({
            type: "SEARCH_COMPLETE",
            payload: data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_FAIL",
          });
          console.log("noooo");
        }
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_CALLING",
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=42c796ff`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          dispatch({
            type: "SEARCH_COMPLETE",
            payload: data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_FAIL",
          });
        }
      });
  };
  const { movies, errormsg, loading } = state;
  return (
    <div>
      <Search search={search} />
      {loading && !errormsg ? (
        <span>loading... </span>
      ) : 
       errormsg ? (
        <Box marginTop="100px">more specific </Box>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          marginTop="50px"
        >
          {movies.map((movie, index) => (
            <Box
              display="flex"
              key={index}
              justifyContent="center"
              width="400px"
              justifyItems="center"
            >
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
}

export default App;
