import { createContext, useCallback, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const CocktailContext = createContext({ cocktails: [], getCocktail: () => {} });

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = useCallback(async (search) => {
    try {
      const res = await fetch(`${url}${search}`);
      const cocktails = await res.json();
      setCocktails(cocktails.drinks);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCocktails("");
  }, [getCocktails]);

  return (
    <CocktailContext.Provider value={{ cocktails, getCocktails }}>
      {children}
    </CocktailContext.Provider>
  );
};
