// import React, { useState, useEffect } from 'react'  
// import axios from 'axios';  
// import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


// function Createemployee(props) { 
//     return (
//         <b>Create emloyee</b>
//     )

//     } 


import React, { useState, useEffect } from 'react'  

import axios from 'axios';  

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function CreateRole(props) {  
  const [role, setrole] = useState({ name: '', slug: '' }); 
// alert('create')
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://127.0.0.1:8000/add/role/";  

  const Insertrole = (e) => {  
    e.preventDefault();  
    debugger;  
    const data = { name:role.name, slug: role.slug }; 
    console.log(data) 
    axios.post(apiUrl, data)  
      .then((result) => {  
        props.history.push('/RoleList')  
      });  
  };  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setrole({...role, [e.target.name]: e.target.value});  
  }  
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={Insertrole}>  
                  <h1>Add Role</h1>  

                  <InputGroup className="mb-3">  
                    <Input type="text" name="name" id="Name" placeholder="Name" value={role.name} onChange={ onChange }  />  
                  </InputGroup>  

                   <InputGroup className="mb-3">  
                    <Input type="text" placeholder="Slug" name="slug" id="Department" value={role.slug} onChange={ onChange }/>  
                  </InputGroup>  

 
                <CardFooter className="p-4">  
                    <Row>  
                    <Col xs="12" sm="6">  
                        <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                    </Col>  
                    <Col xs="12" sm="6">  
                        <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                    </Col>  
                    </Row>  
                </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div>  
  )  

}  
export default CreateRole  