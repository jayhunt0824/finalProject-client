import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const RecipeEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.recipeToUpdate.description);
  const [editDef, setEditDef] = useState(props.recipeToUpdate.definition);
  const [editRes, setEditRes] = useState(props.recipeToUpdate.result);

  const recipeUpdate = (event, workout) => {
    event.preventDefault();
    fetch(`http://localhost:3000/recipe/${props.recipeToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        log: { description: editDesc, definition: editDef, result: editRes },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchRecipes();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Create a Recipe</ModalHeader>
      <ModalBody>
        <Form onSubmit={recipeUpdate}>
          <FormGroup>
            <Label htmlFor="Name">Edit Name:</Label>
            <Input
              name="Name"
              value={editRes}
              onChange={(e) => setEditRes(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ingredients">Edit ingredients:</Label>
            <Input
              name="ingredients"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="directions">Edit directions:</Label>
            <Input
              type="select"
              name="directions"
              value={editDef}
              onChange={(e) => setEditDef(e.target.value)}
            >
              <option></option>
              <option value="Time">Time</option>
              <option value="Weight">Weight</option>
              <option value="Distance">Distance</option>
            </Input>
          </FormGroup>
          <Button Type="submit">Update the workout!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default RecipeEdit;
