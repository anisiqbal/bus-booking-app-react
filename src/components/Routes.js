import React from 'react';
import Modal from '../shared/Modal';
import Booking from './Booking';

function Routes() {

  const addModal = {
    action: "add",
    name: "Add"
  }

  const updateModal = {
    action: "update",
    name: "Update"
  }

  // Routes data
 const routeData = [
    {
      num: '2',
      routeto: 'Karachi',
      routefrom: 'Islamabad',
    },
    {
      num: '3',
      routeto: 'Karachi',
      routefrom: 'Lahore',
    },
    {
      num: '4',
      routeto: 'Karachi',
      routefrom: 'Peshawar',
    },
  ]

  return (

    <div> 
      <h2 className = "text-left pb-2">
        All Routes

      <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add Routes</a>

      </h2>

    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Route To</th>
        <th scope="col">Route From</th>
        <th scope="col">Actions</th>
        
       
      </tr>
    </thead>
    <tbody>
        {
          routeData.map(
            (route, i) => {
              return(

                <tr>
                <th scope="row">{route.num}</th>
                
                <td>{route.routeto}</td>
                <td>{route.routefrom}</td>
                
                
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
  
  <Modal data={addModal} />
    <Modal data={updateModal} />

 </div>
    );
 }

export default Routes;