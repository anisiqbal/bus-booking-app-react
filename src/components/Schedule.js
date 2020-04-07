import React from 'react';
import Modal from '../shared/Modal';

function Schedule() {

  const addModal = {
    action: "add",
    name: "Add"
  }

  const updateModal = {
    action: "update",
    name: "Update"
  }
  // schedule data
   const scheduleData = [
    {
      num: '1',
      vehicle: 'Daewoo',
      routeto: 'karachi',
      routefrom: 'islamabad',
    },
    {
      num: '2',
      vehicle: 'Movers',
      routeto: 'Multan',
      routefrom: 'islamabad',
    },
    {
      num: '3',
      vehicle: 'Hitachi',
      routeto: 'karachi',
      routefrom: 'Lahore',
    },
  ]

  return (

    <div>

      <h2 className = "text-left pb-2"> 
      All Schedules

      <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add Schedules</a>
      </h2>

    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Vehicle</th>
        <th scope="col">Route To</th>
        <th scope="col">Route From</th>
        <th scope="col">Actions</th>
        
       
      </tr>
    </thead>
    <tbody>
      {
        scheduleData.map(
          (schedule, i) => {
            return(

              <tr>
              <th scope="row">{schedule.num}</th>
              <td>{schedule.vehicle}</td>
              <td>{schedule.routeto}</td>
              <td>{schedule.routefrom}</td>
              
              
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

export default Schedule;