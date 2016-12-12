import React from 'react';
import UserListElement from './userListElement';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import UserDelete from './userDelete';

class UserList extends React.Component{
  render(){
    return(
      <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>USENAME</th>
                <th>JOB</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.users.map((user,index)=>{
                  return(
                      <UserListElement key={user.id} user={user}/>
                  )
                })
              }
            </tbody>
          </Table>
          <UserDelete/>
      </div>
    )
  }
}
function mapStateToProps(state){
  return({
    users:state.users.list,
  })
}
export default connect(mapStateToProps)(UserList)
