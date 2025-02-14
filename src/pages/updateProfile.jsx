import { useState } from 'react';
const UpdateProfile = () => {

  const [formData, setFormData] = useState({
    mobile: '',
    fullName: '',
    email: '',
    state: '',
    dob: '',
    address: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Or submit the form data to your backend
  };


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

  return (
    <div className="container"> {/* Removed unnecessary d-flex and row here */}
      <div className="row table-form"> {/* Main row for the two columns */}

        {/* table starts from here */}
        <div className="col-xl-6 col-md-12 col-sm-12 p-5"> {/* Table column, takes full width on smaller screens */}
          <div className="table-responsive p-0">
            <table className="table table-bordered"> {/* Added table-dark for better contrast */}

              <thead>
                <tr className="text-center">
                  <th scope="col bg-dark">Title</th>
                  <th scope="col bg-dark">Value</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="px-4">{row.col1}</td>
                    <td className="px-4">{row.col2}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* form starts from here  */}
        <div className="col-xl-6 col-md-12 col-sm-12 p-5 border border-dark"> {/* Form column */}
          <div className="p-3">
            <h5 className='d-flex justify-content-center'>Update your details</h5>
            <form onSubmit={handleSubmit}>

              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Phone</label>
                <div className="col-sm-10">
                  <input type="phone" className="form-control" id="colFormLabel" placeholder="00000-00000" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Full Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="colFormLabel" placeholder="write somethig here..." />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="colFormLabel" placeholder="example@example.com" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">State</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="colFormLabel" placeholder="write something here..." />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">DoB</label>
                <div className="col-sm-10">
                  <input type="date" className="form-control" id="colFormLabel" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Address</label>
                <div className="col-sm-10">
                  <input type="textarea" className="form-control" id="colFormLabel" placeholder="write something here..." />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-sm px-5">Submit</button>
              </div>

            </form>
          </div>
        </div>

      </div> {/* row */}
    </div> // container
  )
}

export default UpdateProfile