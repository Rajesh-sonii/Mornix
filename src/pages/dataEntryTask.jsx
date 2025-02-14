const DataEntryTask = () => {
  return (
    <div className="container">
      <h5>Data Entry Task</h5>
      <div className="d-flex flex-row">
        <div className="col col-4 m-3 ms-0">
          <label htmlFor="date" className="form-label small">Date</label>
          <input className="form-control" id="date" type="date" value="Disabled readonly input" aria-label="Disabled input example" disabled readOnly></input>
        </div>
        <div className="col col-4 m-3">
          <label htmlFor="totalLink" className="form-label small">Total Link count</label>
          <input className="form-control" id="totalLink" type="number" value="10" aria-label="Disabled input example" disabled readOnly></input>
        </div>

      </div>


      <div className="row">

        <div className="col-xl-12 col-md-12 col-sm-12">{/* Table column, takes full width on smaller screens */}
          <div className="table-responsive p-0 small">
            <table className="table table-bordered"> {/* Added table-dark for better contrast */}

              <thead className='thead-dark'>
                <tr className="">
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Earning Amount</th>
                  <th scope="col">Generated String</th>
                  <th scope="col">Entering String</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="">{row.col1}</td>
                    <td className="">{row.col2}</td>
                    <td className="">
                      <input className="form-control form-control-sm"
                        id="date"
                        type="text"
                        value={row.col1}
                        aria-label="Disabled input example"
                        disabled readOnly>
                      </input>
                    </td>
                    <td className="text-small">
                      <input type="text" className="form-control form-control-sm" id="colFormLabel" placeholder="Enter value here..." />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center"> */}
        <button type="submit" className="btn btn-primary btn-sm px-5">Submit</button>
      {/* </div> */}

    </div>
  )
}


const tableData = [
  { col1: 'Row 1, Column 1', col2: 'Row 1, Column 2' },
  { col1: 'Row 2, Column 1', col2: 'Row 2, Column 2' },
  { col1: 'Row 3, Column 1', col2: 'Row 3, Column 2' },
  { col1: 'Row 4, Column 1', col2: 'Row 4, Column 2' },
  { col1: 'Row 5, Column 1', col2: 'Row 5, Column 2' },
  { col1: 'Row 6, Column 1', col2: 'Row 6, Column 2' },
  { col1: 'Row 7, Column 1', col2: 'Row 7, Column 2' },
  { col1: 'Row 8, Column 1', col2: 'Row 8, Column 2' }
];


export default DataEntryTask