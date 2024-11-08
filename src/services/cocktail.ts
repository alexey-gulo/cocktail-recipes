import { CocktailCode, Cocktail } from '../types/cocktail'
import { cocktailEndpoint } from '../config/api'

export const fetchCocktail = async (cocktailCode: CocktailCode): Promise<Cocktail[]> => {
  try {
    const response = await fetch(cocktailEndpoint(cocktailCode))

    if (response.status !== 200) {
      throw new Error(response.status + ': Error fetching data')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}
