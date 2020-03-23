import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">120</h5>
                <p className="card-text">Bookings</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">17</h5>
                <p className="card-text">Vehicles</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">359</h5>
                <p className="card-text">Users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <h2>Charts</h2>
        </div>
    </div>
  );
}

export default Dashboard;
