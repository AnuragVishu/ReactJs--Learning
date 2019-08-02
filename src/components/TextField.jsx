import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const TextField = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="username" type = {"email"}/>
      </InputGroup>
      <br />
     <InputGroup>
        <Input placeholder="password" type = {"password"} />
     </InputGroup>
    </div>
  );
};

export default TextField;