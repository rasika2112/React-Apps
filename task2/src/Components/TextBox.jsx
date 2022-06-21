import React from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import useTextboxForm from './useTextboxForm';

const TextBox = (props) => {
    
  const { input, handleSubmit, handleChange } = useTextboxForm(props);

    return ( 
    <Form className='py-5' onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.Text>Add Text Here</InputGroup.Text>
        <FormControl as="textarea" id='TextArea' value={input} onChange={handleChange} />
        <Button type='submit' variant='success'>
          Add
        </Button>
      </InputGroup>
    </ Form> );
}
 
export default TextBox;