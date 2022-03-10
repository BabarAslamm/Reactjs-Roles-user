// import React, { useState, useEffect } from 'react'  
// import axios from 'axios';  
// import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


// function EmployeList(props) { 
//     return (
//         <b>Editemployee emloyee</b>
//     )

//     } 

// export default EmployeList  


import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function RoleList(props) {  
  const [data, setData] = useState([]);  

  useEffect(() => { 
    const GetData = async () => {    
      const result = await axios('http://127.0.0.1:8000/roles');  
      setData(result.data);  
    };  

    GetData();  
  }, []);  
  const deleterole = (id) => {  
    
    // debugger;  
    axios.delete('http://127.0.0.1:8000/delete/role/'+id)  
      .then((result) => {
        //   alert(result)  
        window.location.reload();
        props.history.push('/RoleList')  
      });  
  };  
  const editrole = (id) => {  
    props.history.push({  
      pathname: '/edit/' + id  
    });  

  };  
  return (  
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Roles List  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>ID</th>  
                    <th>Name</th>  
                    <th>Slug</th>   
                    <th>Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr key={idx}>  
                        <td>{item.id}</td>  
                        <td>{item.name}</td>  
                        <td>{item.slug}</td>  
 
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-warning m-1 " onClick={() => { editrole(item.id) }}>Edit</button>  
                            <button className="btn btn-danger m-1" onClick={() => { deleterole(item.id) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  )  
}  
export default RoleList  