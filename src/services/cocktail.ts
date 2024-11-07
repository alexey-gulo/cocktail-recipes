import { CocktailCode, Cocktail } from '../types/cocktail'
import { cocktailEndpoint } from '../config/api'

export const fetchCocktail = async (cocktailCode: CocktailCode): Promise<Cocktail[]> => {
  const response = await fetch(cocktailEndpoint(cocktailCode))
  const data = await response.json()
  return data.drinks
}
