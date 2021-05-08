import React from 'react';
import { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart';

export interface CommentsCreateProps {
    token: string;
  fetchComments: Function;
    
    
}
 
export interface CommentsCreateState {
    id: number;
    recipeId: number;
    comments: string; 
    photoURL: string;
    loading: boolean,
    text: string;
}
 
class CommentsCreate extends React.Component<CommentsCreateProps, CommentsCreateState> {
    constructor(props: CommentsCreateProps) {
        super(props);
        this.state = { id: 0, recipeId: 0, comments: '', photoURL: '', loading: false, text: '' };
    }

    //uploadimage function
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

changeBtn = (e: any) => {
    e.target.style.fontSize = "larger";
  };

  resetBtn = (e: any) => {
    e.target.style.fontSize = "initial";
  };

//   handleChange = (e: any) => {
//     this.setState({ text: e.target.value })
//     console.log(e)
//   }

//   addEmoji = (e: any) => {
//   let sym = e.unified.split('-')
//   let codesArray: any = []
//   sym.forEach((el:any) => codesArray.push('0x' + el))
//   let emoji = String.fromCodePoint(...codesArray)
//   this.setState({
//      text: this.state.text + emoji
//   })
// }

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
            <span>
   {/* <Picker onSelect={this.addEmoji} /> */}
</span>
          </FormGroup>
          <FormGroup>
           
            <Input className="choosefilebtn" style={{position: "relative", bottom: "50px", left: "140px"}} type="file" onChange={this.uploadImage} />
            {this.state.loading ? (
              <h6>Loading...</h6>
            ) : (
              <img src={this.state.photoURL} style={{ width: "120px" }} />
            )}
            <br />
            <Button style={{position: "relative", bottom: "106px", left: "370px"}}
              size="sm"
              color="outline-danger"
              disabled={this.state.loading || this.state.photoURL === ""}
              //   onClick={this.deleteImg}
            >
              Delete image
            </Button>
          </FormGroup>
          </Form>
            {/* <img className="whiteLinesC" src={whitelines} alt=""/> */}
          <hr style={{backgroundColor: "yellow", marginTop: "-50px", width: "800px"}}/>
        </div>  );
    }
}
 
export default CommentsCreate;