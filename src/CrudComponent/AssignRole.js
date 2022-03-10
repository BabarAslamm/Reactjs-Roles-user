import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


function AssignRole(props) { 
 
    const [data, setData ] = useState([]);  
    // const [dataUser, setDataUser ] = useStateUser([]); 
    
    /////////SET ROLE

    const [role, setrole] = useState({ userid: '', roleid: '' }); 
      const [showLoading, setShowLoading] = useState(false);  
      const apiUrl = "http://127.0.0.1:8000/set/role";  

    ///////////

    useEffect(() => { 
      const GetData = async () => {    
        const result = await axios('http://127.0.0.1:8000/roles');  
        setData(result.data);  
        console.log(result.data)
      };  
  
      GetData();  
    }, []);  

    // const [da, setDat ] = useState([]); 
    // const Url = "http://127.0.0.1:8000/assign/role/" + props.match.params.id;  


    // useEffect(() => {  
    //     const GetDataUser = async () => {  
    //     const result = await axios(Url);  
    //     setData(result.data);  
    //     console.log(result.data)

    //   };  

    //   GetDataUser();  
    // }, []);

    const SetRole = (e) => {  
        e.preventDefault();  
        // alert('setrole')
        // debugger;  
        // const data = { userid:role.userid, roleid: role.roleid }; 
        const data = { userid:props.match.params.id, roleid:role}; 
        console.log(data) 
        axios.post(apiUrl, data)  
          .then((result) => {  
              // console.log(result)
            props.history.push('/User')  
          });  
      };  
      const onChange = (e) => {  
        e.persist();  
        // debugger;  
        setrole({...role, [e.target.name]: e.target.value});  
      }

      const handleChange = (e) => {
        //   alert('drop')
          setrole({...role, [e.target.value]: e.target.value});
        setrole(e.target.value);

      };




    return (
        <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="12" lg="10" xl="8">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form onSubmit={SetRole}>  
  
                    <InputGroup className="mb-3">  
                    <Input type="hidden" name="userid" id="Name" placeholder="Name"  />  
                      {/* <Input type="hidden" name="userid" id="Name" placeholder="Name"   value={role.props.match.params.id} onChange={ onChange }/>   */}
                    </InputGroup>  

                    <InputGroup className="mb-3">
                        <select class="form-control"  onChange={handleChange}>
                          <option disabled selected>--Select Role---</option>

                          {data.map((option) => (
                        //  <option name = "roleid" value={role.option.id} onChange={ onChange }>{option.name}</option>
                         <option name = "roleid"  value={option.id}  >{option.name}</option>
                             ))}
                        </select>
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
export default AssignRole  
