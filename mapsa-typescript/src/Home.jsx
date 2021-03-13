import { Box, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cocktailDetailPath } from "./routePath";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${url}${search}`);
        const cocktails = await res.json();
        setCocktails(cocktails.drinks);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [search]);

  return (
    <div>
      Cocktails
      <Box m={2}>
        <TextField
          variant="outlined"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </Box>
      {cocktails.map(({ strDrink, idDrink, strDrinkThumb }) => (
        <Box key={idDrink}>
          <img width="200px" height="200px" src={strDrinkThumb} alt={strDrink} />
          <Typography variant="h2">{strDrink}</Typography>
          <Link to={`${cocktailDetailPath}/${idDrink}`}>Details</Link>
        </Box>
      ))}
    </div>
  );
};

export default Home;
