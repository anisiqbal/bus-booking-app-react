import React, {Component} from 'react';
import Modal from '../shared/Modal';
import DataTable from '../shared/DataTable';

class Booking extends Component {

  addModal = {
    action: "add",
    name: "Add"
  }

  updateModal = {
    action: "update",
    name: "Update"
  }

  render() {
    return (
      <div>

        <h2 className="text-left pb-2">
          All Bookings

          <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">Add Booking</a>
        </h2>

        <DataTable />

        <Modal data={this.addModal} />
        <Modal data={this.updateModal} />

      </div>
    );
  }
}

export default Booking;