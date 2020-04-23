import React, {Component} from 'react';
import Modal from '../shared/Modal';

import axios from 'axios';

class Booking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bookingData: []
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
    const url = "https://5e9d75af0fd0b50016f7552b.mockapi.io/booking";

    axios.get(url).then(responce => {
        console.log(responce);

        // getting array from responce 
        let  booking = responce.data;
        
        // setting the planets state with api responce 
        this.setState({
          bookingData: booking
        });
    })
}



  render() {
    return (
      <div>

        <h2 className="text-left pb-2">
          All Bookings

          <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add Booking</a>
        </h2>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Arrival</th>
                    <th scope="col">Vehicle </th>
                    <th scope="col">Seats</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

              {
                this.state.bookingData.map(
                  (booking, i) => {
                    return(
                      <tr>
                        <th scope="row"> {booking.id} </th>
                        <td>{booking.name}</td>
                        <td>{booking.contact}</td>
                        <td>{booking.departure}</td>
                        <td>{booking.arrival}</td>
                        <td>{booking.vehicle}</td>
                        <td>{booking.seats}</td>
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

export default Booking;