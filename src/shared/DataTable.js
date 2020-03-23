import React from 'react';

function Modal(props) {

    return (
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
            <tr>
              <th scope="row">1</th>
              <td>Muhammad Awais</td>
              <td>+923312737076</td>
              <td>Karachi</td>
              <td>Islamabad</td>
              <td>GFN-879</td>
              <td>1</td>
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
              <td>Karachi</td>
              <td>Lahore</td>
              <td>BNG-876</td>
              <td>2</td>
              <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-info">Edit</button>
                  <button type="button" className="btn btn-warning">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    );
}

export default Modal;
