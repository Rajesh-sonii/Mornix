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
    <div className="container" style={{width: "fit-content"}}> {/* Removed unnecessary d-flex and row here */}
      <div className="row"> {/* Main row for the two columns */}
        <div className="col-xl-6 col-12"> {/* Table column, takes full width on smaller screens */}
          <div className="table-responsive p-5 bg-dark" style={{ minWidth: "500px", maxWidth: '100%', width: "100%" }}>
            <table className="table table-bordered table-dark"> {/* Added table-dark for better contrast */}
              <thead>
                <tr className="text-center">
                  <th scope="col">Title</th>
                  <th scope="col">Value</th>
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
          <div className="col-xl-6 col-md-6"> {/* Form column */}
            <div className="p-5">
              <form onSubmit={handleSubmit}>


                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      //  </div>

  )
}

export default UpdateProfile