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
      //Vehicles data
  const    vehicleData =[
        {
          num:'1',
          vehicleno:'KXM-459',
          drivername:'Shakir Khan',
        },
        {
          num:'2',
          vehicleno:'KXM-999',
          drivername:'Muhammad Ali',
        },
        {
          num:'3',
          vehicleno:'KXM-789',
          drivername:'Dilawar khan',
        },
      ]

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
      {
        vehicleData.map(
          (vehicle, i) => {
            return(

            <tr>
            <th scope="row">{vehicle.num}</th>
            
            <td>{vehicle.vehicleno}</td>
            <td>{vehicle.drivername}</td>
            
            
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

      <Modal/>
    </tbody>
  </table>

  <Modal data={addModal} />
    <Modal data={updateModal} />

</div>
    );
}

export default Vehicles;