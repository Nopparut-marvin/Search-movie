import React, { useState } from "react";
import { TextField, makeStyles, Button, Box, AppBar } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  },
});

const Search = (props) => {
  const classes = useStyles();
  const [Value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const searching = (e) => {
    e.preventDefault();
    props.search(Value);
    setValue("");
  };

  return (
    <>
      <AppBar variant="outlined" style={{backgroundColor:"lightGrey"}}>
      <Box
        padding="10px"
        display="flex"
        margin="auto"
        justifyContent="center"
        alignItems="center"
      >
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Standard"
            value={Value}
            onChange={handleChange}
          />
        </form>
        <Box  marginLeft="30px">
          <Button className={classes.root} onClick={searching}>
            Search
          </Button>
        </Box>
      </Box>
      </AppBar>
    </>
  );
};

export default Search;
