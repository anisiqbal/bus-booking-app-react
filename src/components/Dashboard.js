import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
