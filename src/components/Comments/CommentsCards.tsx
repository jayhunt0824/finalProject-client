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
}
 
class CommentsCards extends React.Component<CommentsCardsProps, CommentsCardsState> {
    constructor(props: CommentsCardsProps) {
        super(props);
        this.state = { editComment: null }
    }
    render() { 
        console.log(this.props.comment)
        return ( <div>
      
     
            <Card className="commentCard">
                  <CardImg className="postimg" style={{height: "200px", width: "300px"}}  src={this.props.comment.photoURL}  />
                  <CardBody>
                  <div className="postWhiteDiv"></div>
                      {/* <CardTitle tag="h5">{this.props.comment.id}</CardTitle> */}
                      <div>
                      <CardSubtitle id="postCom" tag="h6" className="mb-2 text-muted">{this.props.comment.comments}</CardSubtitle>
                      </div>
                      <CardText>{this.props.comment.ingredients}</CardText>
                      <CommentsEdit sessionToken={this.props.sessionToken} fetchComments={this.props.fetchComments} editComment={this.state.editComment} id={this.props.comment.id}  />
                      <Button className="deletepostbtn" onClick={()=>this.props.deleteComment(this.props.comment.id)}>Delete</Button>
                  </CardBody>
              </Card>
              </div> );
    }
}
 
export default CommentsCards;