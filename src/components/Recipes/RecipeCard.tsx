import * as React from 'react';
import { Component } from 'react';
import {DrinkResponse, Drink} from "./RecipeCardsInterface";
import{CardColumns} from "reactstrap";
import RecipeCards from "./RecipeCards";



export interface RecipeCardProps {
    url: string,
    query: string
    
}
 
export interface RecipeCardState {
    drinkinformation: Drink[]
}
 
class RecipeCard extends React.Component<RecipeCardProps, RecipeCardState> {
    constructor(props: RecipeCardProps) {
        super(props);
        this.state = { drinkinformation: []  };
    }


componentDidMount(){

    const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

    fetch(this.props.url)
    .then((res)=>res.json())
    .then((json: DrinkResponse)=> {
        console.log(json)
        this.setState({drinkinformation : json.results})
    })
}





    render() { 
        return ( <div>
            <CardColumns>
                {this.state.drinkinformation.map((drink: Drink, index: number))}
                <RecipeCards drink={Drink} key={index} />
            </CardColumns>
        </div> );
    }
}
 
export default RecipeCard;