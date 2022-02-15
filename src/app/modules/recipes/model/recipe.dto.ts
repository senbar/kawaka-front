import { Time } from "@angular/common";

export class RecipeDTO{
    public Name:String="Coffee recipe";
    public Coffee:String="Coffee";
    public Author:String="Anomylous";
    public Temperature?:number;
    public TimeInSeconds:number=0;
}