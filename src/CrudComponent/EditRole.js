// import React, { useState, useEffect } from 'react'  
// import axios from 'axios';  
// import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


// function Editemployee(props) { 
//     return (
//         <b>Editemployee emloyee</b>
//     )

//     } 

// export default Editemployee  

import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Editrole(props) {  

        const [role, setrole]= useState({id:'',name: '', slug: '' });  
        // const Url = "http://127.0.0.1:8000/edit/role/?id=" + props.match.params.id;  
        const Url = "http://127.0.0.1:8000/edit/role/" + props.match.params.id;  

        useEffect(() => {  
            const GetData = async () => {  
            const result = await axios(Url);  
            setrole(result.data);  

          };  

          GetData();  
        }, []);  
        
        const UpdateRole = (e) => {  
          e.preventDefault();  

          const data = {id:props.match.params.id, name:role.name, slug: role.slug };  
        //   alert(data)

          axios.post('http://127.0.0.1:8000/update/role/', data)  
            .then((result) => {  

              props.history.push('/RoleList')  
            });  
        };  
        const onChange = (e) => {  
          e.persist();  
          setrole({...role, [e.target.name]: e.target.value});  
        }  

        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateRole}>  
                            <h1>Update Role</h1>  

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

export default Editrole  