import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Form className="container form-container">
          <FormGroup className="row">
            <div className="col-sm-6">
              <FormGroup>
                <Label for="exampleEmail">Section Title</Label>
                <Input type="text" name="title" placeholder="title" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="description" className="input textArea" placeholder="tell us about yourself" />
              </FormGroup>
            </div>
            <div className="col-sm-6">
              <FormGroup>
                <Label for="examplePassword">Facebook Link</Label>
                <Input type="url" name="facebook" placeholder="https://" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Twitter Link</Label>
                <Input type="url" name="twitter" placeholder="https://" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Google+ Link</Label>
                <Input type="url" name="google" placeholder="https://" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">LinkedIn Link</Label>
                <Input type="url" name="linkedin" placeholder="https://" />
              </FormGroup>
            </div>
          </FormGroup>
        </Form>
    );
  }
}

export default App;
