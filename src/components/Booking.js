import React, {Component} from 'react';
import Modal from '../shared/Modal';

class Booking extends Component {

  addModal = {
    action: "add",
    name: "Add"
  }

  updateModal = {
    action: "update",
    name: "Update"
  }

  // booking data 
  bookingData = [
    {
      num: '1',
      name: 'Muhammad Awais',
      contact: '+923312737076',
      departure: 'Karachi',
      arrival: 'Islamabad',
      vechicle: 'GFN-879',
      seats: '1'
    },
    {
      num: '2',
      name: 'Muhammad Idrees',
      contact: '+923312737076',
      departure: 'Karachi',
      arrival: 'Islamabad',
      vechicle: 'GFN-879',
      seats: '1'
    },
    {
      num: '3',
      name: 'Muhammad Ilyas',
      contact: '+923312737076',
      departure: 'Karachi',
      arrival: 'Islamabad',
      vechicle: 'GFN-879',
      seats: '1'
    },
  
  ]

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
                    <th scope="col">Vehicle #</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

              {
                this.bookingData.map(
                  (booking, i) => {
                    return(
                      <tr>
                        <th scope="row"> {booking.num} </th>
                        <td>{booking.name}</td>
                        <td>{booking.contact}</td>
                        <td>{booking.departure}</td>
                        <td>{booking.arrival}</td>
                        <td>{booking.vechicle}</td>
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