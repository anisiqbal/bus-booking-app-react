import React from 'react';
import Modal from '../shared/Modal';
import DataTable from '../shared/DataTable';

function Users() {

  const addModal = {
    action: "add",
    name: "Add"
  }

  const updateModal = {
    action: "update",
    name: "Update"
  }

  const columns = [
    "Id",
    "Name",
    "Phone No."
  ]

  const usersData = [
    {
      id: '1',
      name: 'Muhammad Awais',
      phone: '+923312737076'
    },
    {
      id: '2',
      name: 'Muhammad Idrees',
      phone: '+923312737076'
    },
    {
      id: '3',
      name: 'Muhammad Ilyas',
      phone: '+923312737076'
    },
  
  ]

  return (
    <div>
      <h2 className="text-left pb-2">
        All Users

        <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add User</a>
      </h2>

      <DataTable columns={columns} data={usersData}/>

    <Modal data={addModal} />
    <Modal data={updateModal} />

    </div>

  );
}

export default Users;