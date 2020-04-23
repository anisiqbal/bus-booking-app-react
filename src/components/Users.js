import React ,{Component} from 'react';
import Modal from '../shared/Modal';
import DataTable from '../shared/DataTable';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: []
    };
}

   addModal = {
    action: "add",
    name: "Add"
  }

   updateModal = {
    action: "update",
    name: "Update"
  }

  componentDidMount() {
    const url = "https://5e9d75af0fd0b50016f7552b.mockapi.io/users";

    axios.get(url).then(responce => {
        console.log(responce);

        // getting array from responce 
        let  users = responce.data;
        
        // setting the planets state with api responce 
        this.setState({
         usersData: users
        });
    })
}
  
render() {
  return (
    <div>
      <h2 className="text-left pb-2">
        All Users

        <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add User</a>
      </h2>

      <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">phone</th>
                    <th scope="col">Actions</th>
                  
                </tr>
            </thead>
            <tbody>

              {
                this.state.usersData.map(
                  (users, i) => {
                    return(
                      <tr>
                        <th scope="row"> {users.id} </th>
                        <td>{users.name}</td>
                        <td>{users.phone}</td>
                        
                        <td>
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Edit</button>
                            <button type="button" className="btn btn-warning">Delete</button>
                          </div>
                        </td>
                      </tr>
                    )

                  }
                )
              }

            </tbody>
        </table>


        <Modal data={this.addModal} />
        <Modal data={this.updateModal} />

    </div>

  );
}
}
export default Users;