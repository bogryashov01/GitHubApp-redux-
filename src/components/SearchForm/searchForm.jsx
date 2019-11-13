import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
const SearchForm = (props) => {
    const {onChange,onClick, onKeyPress} = props;
    return <Form inline className="logo">
    <FormControl type="text" placeholder="Search users"  onChange={onChange} onKeyPress={onKeyPress}/>
    <Button variant="outline-success" onClick={onClick}>Search user</Button>
    </Form>
  }
export default SearchForm;  