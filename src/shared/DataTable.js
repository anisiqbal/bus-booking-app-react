import React from 'react';

function DataTable(props) {

  const { columns, data } = props

    return (
        <table className="table">
          <thead>
            <tr>
              {
                columns.map((column, i) => {
                  return (
                    <th scope="col">{column}</th>
                  )
                })
              }
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Muhammad Awais</td>
              <td>+923312737076</td>
              <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Edit</button>
                  <button type="button" className="btn btn-warning">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    );
}

export default DataTable;
