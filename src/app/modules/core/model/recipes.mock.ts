import { RecipeDTO } from "./recipe.dto";

export function GetRecipesMock():RecipeDTO[]{
    let result:RecipeDTO[]=[new RecipeDTO(),new RecipeDTO(), new RecipeDTO(), new RecipeDTO(), new RecipeDTO(), new RecipeDTO(), new RecipeDTO()];
    return result
}
