import React from "react";
import { Box, CardContent, Paper } from "@material-ui/core";
import notfoundImg from "../images/notfound.jpg";
const Movie = (props) => {
  const image = props.movie.Poster === "N/A" ? notfoundImg : props.movie.Poster;
  return (
    <>
      <Box
        width="300px"
        marginTop="40px"
        display="flex"
        justifyContent="center"
      >
        <Paper>
          <img
            width="100%"
            style={{ backgroundSize: "auto" }}
            alt={`The movie titled: ${props.movie.Title}`}
            src={image}
          />

          <CardContent>
            <Box textAlign="center">{props.movie.Title}</Box>
          </CardContent>
        </Paper>
      </Box>
    </>
  );
};

export default Movie;
