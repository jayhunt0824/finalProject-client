import React from 'react';
import { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import whitelines from "../Home/assets/whitelines.jpg";

export interface CommentsCreateProps {
    token: string;
  fetchComments: Function;
    
    
}
 
export interface CommentsCreateState {
    id: number;
    recipeId: number;
    comments: string; 
    photoURL: string;
}
 
class CommentsCreate extends React.Component<CommentsCreateProps, CommentsCreateState> {
    constructor(props: CommentsCreateProps) {
        super(props);
        this.state = { id: 0, recipeId: 0, comments: '', photoURL: ''  };
    }

    //uploadimage function

handleSubmit =(e: any) => {
    e.preventDefault();
    let token = this.props.token ? this.props.token: localStorage.getItem("token");

    console.log(
        this.state.id, this.state.recipeId, this.state.comments, this.state.photoURL);
    fetch(`http://localhost:3000/comments/create`, {
        method: "POST", 
        body: JSON.stringify({
            id: this.state.id, 
            recipeId: this.state.recipeId, 
            comments: this.state.comments, 
            photoURL: this.state.photoURL,
        }), 
        headers: new Headers({
            "Content-Type": "application/json", 
            Authorization: token ? token : "",
        })
    })
    .then((res)=> res.json())
    .then((logData)=>{
        console.log("logData -->", logData);
        this.setState({id: 0});
        this.setState({recipeId: 0});
        this.setState({comments: ""});
        this.setState({photoURL: ""});
    })
    .catch((err)=> {
        console.log(err);
    })
};

// changeBtn = (e: any) => {
//     e.target.style.fontSize = "larger";
//   };

//   resetBtn = (e: any) => {
//     e.target.style.fontSize = "initial";
//   };

//   handleChangeCategory = (e: any) => {
//     this.setState({ categories: e.target.value });
//   };



    render() { 
        return ( <div className="createDiv">
           <h4 className="commentsH">What's on your mind?</h4>
           <Form style={{color: "rgb(234, 238, 8)"  }}onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="comment"></Label>
            <Input
                
              type="textarea"
              value={this.state.comments}
              onChange={(e) => {
                this.setState({ comments: e.target.value });
              }}
            />
             <Button className="postbtn"
              style={{ width: 120, backgroundColor: "#f5f5f5", color: "white", marginTop: "10px" }}
              type="submit"
            >
              Post!
            </Button>
          </FormGroup>
          </Form>
            {/* <img className="whiteLinesC" src={whitelines} alt=""/> */}
          <hr style={{backgroundColor: "yellow", marginTop: "90px", width: "800px"}}/>
        </div>  );
    }
}
 
export default CommentsCreate;