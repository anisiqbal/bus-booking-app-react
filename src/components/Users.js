import React from 'react';
import Modal from '../shared/Modal';

function Users() {

  const addModal = {
    action: "add",
    name: "Add"
  }

  const updateModal = {
    action: "update",
    name: "Update"
  }

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
          <th scope="col">Phone No.</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Muhammad Awais</td>
          <td>+923312737076</td>
          <td>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Edit</button>
              <button type="button" className="btn btn-warning">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Muhammad Anis</td>
          <td>+923312737076</td>
          <td>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-info">Edit</button>
              <button type="button" className="btn btn-warning">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Modal data={addModal} />
    <Modal data={updateModal} />

    </div>

  );
}

export default Users;