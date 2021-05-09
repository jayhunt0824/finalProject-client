import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import CommentsEdit from "./CommentsEdit";

export interface CommentsCardsProps {
    fetchComments: Function;
    comment: any;
    sessionToken: string;
    deleteComment: any;}
 
export interface CommentsCardsState {
    editComment: any;
    userId: string | null;
    role: string | null;
}
 
class CommentsCards extends React.Component<CommentsCardsProps, CommentsCardsState> {
    constructor(props: CommentsCardsProps) {
        super(props);
        this.state = { editComment: null, userId: "", role: "" }
    }

componentDidMount() {
    const userId = localStorage.getItem("id") != null ? localStorage.getItem("id") : ""
    const role= localStorage.getItem("role");

    this.setState({role: role, userId: userId});
}


    render() { 
        console.log(this.props.comment)
        return ( <div >
      
     
            <Card className="commentCard">
                  <CardImg className="postimg" style={{height: "200px", width: "300px"}}  src={this.props.comment.photoURL}  />
                  <CardBody>
                  <div className="postWhiteDiv"></div>
                      {/* <CardTitle tag="h5">{this.props.comment.id}</CardTitle> */}
                      <div>
                      <CardSubtitle id="postCom" tag="h6" className="mb-2 text-muted">{this.props.comment.comments} </CardSubtitle>
                      </div>
                      <CardText>{this.props.comment.ingredients}</CardText>
                     { this.state.role == "Admin" || this.props.comment.userId == this.state.userId  ?  <><CommentsEdit sessionToken={this.props.sessionToken} fetchComments={this.props.fetchComments} editComment={this.state.editComment} id={this.props.comment.id}  />
                      <Button className="deletepostbtn" onClick={()=>this.props.deleteComment(this.props.comment.id)}>Delete</Button></> : null }
                  </CardBody>
              </Card>
              </div> );
    }
}
 
export default CommentsCards;