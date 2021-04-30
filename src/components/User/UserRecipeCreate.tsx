import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export interface UserRecipeCreateProps {
  token: string;
  fetchRecipes: Function;
  // deleteImg: Function;
}

export interface UserRecipeCreateState {
  name: string;
  ingredients: string;
  directions: string;
  photoURL: string;
  categories: string;
  loading: boolean;
  id: string;
}

export class UserRecipeCreate extends React.Component<
  UserRecipeCreateProps,
  UserRecipeCreateState
> {
  constructor(props: UserRecipeCreateProps) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      directions: "",
      photoURL: "",
      categories: "Cocktail",
      loading: false,
     id: '',
    };
  }

  uploadImage = async (e: any) => {
    const data = new FormData();
    const files = e.target.files;
    data.append("file", files[0]);
    data.append("upload_preset", "artisan-goods-cloudinary");
    // this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/natescloudinary/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    this.setState({ photoURL: file.secure_url });
    this.setState({ loading: false });

    // setPhotoURL(file.secure_url);
    // setLoading(false);
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    let token = this.props.token ? this.props.token: localStorage.getItem("token");

    console.log(
      this.state.name,
      this.state.ingredients,
      this.state.directions,
      this.state.categories, 
      this.state.id,
    );
    fetch(`http://localhost:3000/recipe/create`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        categories: this.state.categories,
        id: this.state.id,
        // photoURL: this.state.photoURL,
      }),
      headers: new Headers({
        // "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: token ? token : "",
        
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log("logData -->", logData);
        this.setState({ name: "" });
        this.setState({ categories: "" });
        this.setState({ ingredients: "" });
        this.setState({ directions: "" });
        this.setState({ photoURL: "" });
        this.setState({id:""})
        //   this.props.getListOfProducts();
      })
      
      .catch((err) => {
        console.log(err);
      });
  };

  //   deleteImg = () => {
  //     this.setState({ photoUrl: "" });
  //   };

  changeBtn = (e: any) => {
    e.target.style.fontSize = "larger";
  };

  resetBtn = (e: any) => {
    e.target.style.fontSize = "initial";
  };

  handleChangeCategory = (e: any) => {
    this.setState({ categories: e.target.value });
  };

  render() {
    // console.log(this.props.token)
    return (
      <div className="createRecipe">
        <h4
          id="UserRecipeCreateFont"
          style={{ fontSize: 40, textAlign: "center" }}
        >
          Create Recipe
        </h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="recipeName">Name</Label>
            <Input
              name="name"
              type="text"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <Input
              type="select"
              name="category"
              value={this.state.categories}
              onChange={(e) => {
                this.setState({ categories: e.target.value });
              }}
            >
              <option value="Cocktail"> Cocktail </option>
              <option value="Ordinary Drink"> Ordinary Drink</option>
              <option value="Martini"> Martini </option>
              <option value="Shot"> Shot</option>
              <option value="Punch/Party Drink"> Punch/Party Drink</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              type="text"
              name="Ingredients"
              value={this.state.ingredients}
              onChange={(e) => {
                this.setState({ ingredients: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="directions">Directions</Label>
            <Input
              type="text"
              name="category"
              value={this.state.directions}
              onChange={(e) => {
                this.setState({ directions: e.target.value });
              }}
            />{" "}
            {/* <Input
              type="number"
              min="0"
              name="category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            /> */}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="photoURL">Upload image</Label>
            <Input type="file" onChange={this.uploadImage} />
            {this.state.loading ? (
              <h6>Loading...</h6>
            ) : (
              <img src={this.state.photoURL} style={{ width: "120px" }} />
            )}
            <br />
            <Button
              size="sm"
              color="outline-danger"
              disabled={this.state.loading || this.state.photoURL === ""}
              //   onClick={this.deleteImg}
            >
              Delete image
            </Button>
          </FormGroup>

          <br />
          <div className="align-middle text-center">
            <Button
              style={{ width: 120, backgroundColor: "#f5f5f5", color: "black" }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default UserRecipeCreate;