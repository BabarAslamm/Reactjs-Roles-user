import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  


function User(props) {  
    const [data, setData] = useState([]);  
  
    useEffect(() => { 
      const GetData = async () => {    
        const result = await axios('http://127.0.0.1:8000/users');  
        setData(result.data);  
        console.log(result.data)
      };  
  
      GetData();  
    }, []);  
    const deleterole = (id) => {  
      
      // debugger;  
      axios.delete('http://127.0.0.1:8000/delete/role/'+id)  
        .then((result) => {
            alert(result)  
          window.location.reload();
          props.history.push('/RoleList')  
        });  
    };  
    const assignrole = (id) => {  
        
        props.history.push({  
        pathname: '/assign/role/' + id  
      });  
  
    };  
    return (  
      <div className="animated fadeIn">  
        <Row>  
          <Col>  
            <Card>  
              <CardHeader>  
                <i className="fa fa-align-justify"></i> Users List  
                </CardHeader>  
              <CardBody>  
                <Table hover bordered striped responsive size="sm">  
                  <thead>  
                    <tr>  
                      <th>ID</th>  
                      <th>User Name</th>  
                      <th>Email</th>   
                      <th>Role</th>   
                      <th>Action</th>  
                    </tr>  
                  </thead>  
                  <tbody>  
                    {  
                      data.map((item, idx) => {  
                        return <tr key={idx}>  
                          <td>{item.id}</td>  
                          <td>{item.username}</td>  
                          <td>{item.email}</td>  
                          <td>{item.rolename}</td>  
   
                          <td>  
                            <div class="btn-group">  
                              <button className="btn btn-warning m-1 " onClick={() => { assignrole(item.id) }} >Assign Role</button>  
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
  export default User  