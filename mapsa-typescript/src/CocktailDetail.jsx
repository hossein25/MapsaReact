import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetail = (props) => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCocktail = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}${id}`);
        const cocktail = await res.json();
        setCocktail(cocktail.drinks[0]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getCocktail();
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box mt={8}>
      Deatils
      <Typography>{cocktail.strAlcoholic}</Typography>
      <Typography>{cocktail.strDrink}</Typography>
      <Typography>{cocktail.strCategory}</Typography>
      <Typography>{cocktail.strCreativeCommonsConfirmed}</Typography>
    </Box>
  );
};

export default CocktailDetail;
