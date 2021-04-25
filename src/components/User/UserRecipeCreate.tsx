import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export interface UserRecipeCreateProps {
  token: string;
  // deleteImg: Function;
}

export interface UserRecipeCreateState {
  recipeName: string;
  ingredients: string;
  directions: string;
  photoURL: string;
  category: string;
  loading: boolean;
}

export class UserRecipeCreate extends React.Component<
  UserRecipeCreateProps,
  UserRecipeCreateState
> {
  constructor(props: UserRecipeCreateProps) {
    super(props);
    this.state = {
      recipeName: "",
      ingredients: "",
      directions: "",
      photoURL: "",
      category: "",
      loading: false,
    };
  }

  uploadImage = async (e: any) => {
    const data = new FormData();
    const files = e.target.files;
    data.append("file", files[0]);
    data.append("upload_preset", "artisan-goods-cloudinary");
    this.setState({ loading: true });
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

    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=/recipe/create`,
      {
        method: "POST",
        body: JSON.stringify({
          product: {
            recipeName: this.state.recipeName,
            ingredients: this.state.ingredients,
            directions: this.state.directions,
            category: this.state.category,
            photoURL: this.state.photoURL,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }
    )
      .then((res) => res.json())
      .then((logData) => {
        console.log("logData -->", logData);
        this.setState({ recipeName: "" });
        this.setState({ ingredients: "" });
        this.setState({ directions: "" });
        this.setState({ category: "" });
        this.setState({ photoURL: "" });
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
    this.setState({ category: e.target.value });
  };

  render() {
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
              type="number"
              min="0"
              name="category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <Input
              type="number"
              min="0"
              name="category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              type="number"
              min="0"
              name="category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="directions">Directions</Label>
            <Input
              type="number"
              min="0"
              name="category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
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
