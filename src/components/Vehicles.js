import React from 'react';
import Modal from '../shared/Modal';

function Vehicles() {

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
      <h2 className = "text-left pb-2" >
          All Vehicles

          <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add Vehicles</a>
        </h2>  
   
    
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Vehicle No.</th>
        <th scope="col">Driver Name</th>
        <th scope="col">Actions</th>
        
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        
        <td>KXM-459</td>
        <td>Shakir Khan</td>
        
        
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Edit</button>
            <button type="button" className="btn btn-warning">Delete</button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>KEW-532</td>
        <td>Shayan Khan</td>
        
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info">Edit</button>
            <button type="button" className="btn btn-warning">Delete</button>

            

          <Modal/>

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

export default Vehicles;