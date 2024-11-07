import { CocktailCode } from '../types/cocktail'

const baseURL = 'https://www.thecocktaildb.com'

export const cocktailEndpoint = (cocktailCode: CocktailCode): string => `${baseURL}/api/json/v1/1/search.php?s=${cocktailCode}`