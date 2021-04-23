import React, { useState, useEffect } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


const UserRecipeCreate = (props) => {

    const [name, setName] = useState('');
    const [ingredients,setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [categories, setCategories] = useState('');

    // /* **********
    // CLOUDINARY
    // *********** */
    // const [loading, setLoading] = useState(false);

    // const uploadImage = async e => {

    //     const data = new FormData();
    //     const files = e.target.files;
    //     data.append('file', files[0]);
    //     data.append('upload_preset', 'artisan-goods-cloudinary');
    //     setLoading(true);
    //     const res = await fetch(
    //         'https://api.cloudinary.com/v1_1/natescloudinary/image/upload',
    //         {
    //             method: 'POST',
    //             body: data
    //         }
    //     )
    //     const file = await res.json();

    //     setPhotoURL(file.secure_url);
    //     setLoading(false);
    // }

    /* **********
    END CLOUDINARY
    *********** */

    const handleSubmit = (e) => {

        e.preventDefault();



        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=/recipe/create` , {
            method: 'POST',
            body: JSON.stringify({
                product:{
                    name: name, 
                    ingredients: ingredients, 
                    directions: directions,
                    categories: categories, 
                    photoURL: photoURL,
                 
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then( (logData) => {
            console.log('logData -->', logData);
            setName('');
            setIngredients(0);
            setDirections('');
            setCategories(true);
            setPhotoURL('');
            props.getListOfProducts();

        })
        .catch((err => { console.log(err);}))

    }

    // const onValueChange = (e) => {
    //     e.target.value === 'inStock' ? setInStock(true) : setInStock(false);
    //     console.log('e.target.value', e.target.value);
    // }
    
    // function deleteImg(){
    //     setPhotoURL('');
    // }

    function changeBtn(e) {
    e.target.style.fontSize = 'larger';
    }

    function resetBtn(e) {
    e.target.style.fontSize = 'initial';
    }

    return ( 
        <>
        <div className="createRecipe">
            <h4 id="UserRecipeCreateFont" style={{fontSize: 40, textAlign: "center"}}>Create Recipe</h4>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="ingredients">Ingredients</Label>
                    <Input type="number" min="0" name='ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="directions">Directions</Label>
                    <Input type="textarea" name="directions" value={directions} onChange={(e) => setDirections(e.target.value)}/>
                </FormGroup>
            
                <br />
                <div className='align-middle text-center'>
                <Button  style={{width: 120, backgroundColor: "#f5f5f5", color: "black"}} type="submit">Submit</Button>
                </div>
            </Form>
            </div>
        </>
     );
}
 
export default UserRecipeCreate;

{/*disabled={loading}onMouseOver={changeBtn} onMouseLeave={resetBtn} */} 