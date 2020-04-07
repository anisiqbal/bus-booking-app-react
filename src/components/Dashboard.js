import React from 'react';

function Dashboard() {

  // cards data
  const cardsData=[
    {
      number:'120',
      name:'Bookings',
    },
    {
      number:'17',
      name:'Vehicles',
    },
    {
      number:'359',
      name:'Users',
    },
  ]
  
  return (
    <div className="dashboard">
        <div className="row">

         

         { 
          cardsData.map(
            (card, i) => {
              return(
                 <div className="col-md-4">
                <div className="card">
                <div className="card-body">
              <h5 className="card-title"> {card.number} </h5>
                <p className="card-text">{card.name}</p>
              </div>
            </div>
          </div>
              )
            }
          )
         }

        </div>

        <div className="row pt-5">
          <h2>Charts</h2>
        </div>
    </div>
  );
}

export default Dashboard;
