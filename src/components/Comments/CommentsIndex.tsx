import * as React from "react";
import {Container, Row, Col, Button} from 'reactstrap';
import CommentsCreate from "./CommentsCreate";
import CommentsCards from "./CommentsCards"
import {IComment} from "./Interface";
import APIURL from "../../helpers/environment";


export interface CommentsIndexProps {
    sessionToken: string;
    id: string;
    fetchComments: Function;
    deleteComment: Function;
    
}
 
export interface CommentsIndexState {
    comments: IComment[] ;
    commentToUpdate: string;
    
}
 
class CommentsIndex extends React.Component<CommentsIndexProps, CommentsIndexState> {
    constructor(props: CommentsIndexProps) {
        super(props);
        this.state = {  comments: [], commentToUpdate: ""   };
    }


    componentDidMount() {
        this.fetchComments();
        
    }

    fetchComments = () => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem("token");


        fetch(`${APIURL}/comments/get`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token ? token : "", 
          }),
        })
          .then((res) => res.json())
          .then((logData: IComment[] ) => {
              console.log(logData);
            this.setState({comments: logData});
          });
      };

      deleteComment= ( id: number) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem("token");


        fetch(`${APIURL}/comments/delete/${id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:  token ? token : "",
          }),
        }).then(() => this.fetchComments());
      };





    render() { 
        return ( <Container id="postcontainer">
              
            <Row>
              <Col md="3">
                <CommentsCreate fetchComments={this.fetchComments}  token={this.props.sessionToken} />
              </Col>
              <Col md="9">
      
                  {this.state.comments.length> 0 ? (this.state.comments.map((comment: IComment, index: number)=>(<CommentsCards comment={comment} deleteComment={this.deleteComment} sessionToken={this.props.sessionToken} fetchComments={this.fetchComments} />))): null}
              
              </Col>
              
             
           
            </Row>
          </Container> );
    }
}
 
export default CommentsIndex;