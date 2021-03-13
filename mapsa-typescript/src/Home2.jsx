import { Box, TextField, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CocktailContext } from "./CocktailProvider";
import { cocktailDetailPath } from "./routePath";

const Home2 = (props) => {
  const [search, setSearch] = useState("");
  const { cocktails, getCocktails } = useContext(CocktailContext);

  useEffect(() => {
    getCocktails(search);
  }, [getCocktails, search]);

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

export default Home2;
