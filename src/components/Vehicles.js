import React, {Component} from 'react';
import Modal from '../shared/Modal';
import axios from 'axios';

class Vehicles extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      vehiclesData: []
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
    const url = "https://5e9d75af0fd0b50016f7552b.mockapi.io/vehicles";

    axios.get(url).then(responce => {
        console.log(responce);

        // getting array from responce 
        let  vehicles = responce.data;
        
        // setting the planets state with api responce 
        this.setState({
          vehiclesData: vehicles
        });
    })
}


render(){
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
        this.state.vehiclesData.map(
          (vehicles, i) => {
            return(

            <tr>
            <th scope="row">{vehicles.id}</th>
            
            <td>{vehicles.vehicle}</td>
            <td>{vehicles.driver}</td>
            
            
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
export default Vehicles;