import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import TextField from './TextField.jsx'

const LoginCards = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle style = {{textAlign: "center"}}>LOGIN</CardTitle>
          <TextField/>
        </CardBody>
        <CardBody style={{textAlign: "center"}}>
          <CardLink href="#" >Register</CardLink>
          <CardLink href="#" >Login</CardLink>
          <br></br>
          <CardLink href='#'>Forgot Password</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};


export default LoginCards;