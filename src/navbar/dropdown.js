import React, {useState} from 'react';
import {DropdownButton,Form} from 'react-bootstrap';
function Drop(params) {
  

  function rohane(params) {
    
    
  }
    return<div>
    <DropdownButton title={params.droptitle}>
      
        <Form.Group  controlId="formBasicCheckbox1">
    <Form.Check onChange={rohane} checked={false} title="ro" value="rrrr" type="checkbox" label="Energy" />
    </Form.Group>
  
    <Form.Group controlId="formBasicCheckbox2">
    <Form.Check type="checkbox" label="goverment" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox3">
    <Form.Check type="checkbox" label="support" />
    </Form.Group>
    </DropdownButton>
        
  </div>
    
}
export default Drop