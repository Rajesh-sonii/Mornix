import { useState } from 'react';

const BankDetails = () => {

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
    <div className="container mb-5"> {/* Removed unnecessary d-flex and row here */}
      <div className="d-flex align-items-center justify-content-center">
        <h4>Add payment details</h4>
      </div>
      <div className="row table-form"> {/* Main row for the two columns */}

        <div className="col-xl-12 col-md-12 col-sm-12"> {/* Table column, takes full width on smaller screens */}
          {/* form starts from here  */}
          <form className='w-50 border border-dark px-5 py-3'>
            <h5 className='mb-3'>UPI ID/Gpay/PhonePe/Paytm Details</h5>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Receiver&apos;s name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number(GPay, PhonePe,Paytm)</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">UPI ID</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">I agree & confirm with the above details</label>
            </div>
            <button type="submit" className="btn btn-primary px-3">Submit</button>
          </form>
        </div>

        {/* table starts from here */}
        <div className="col-xl-12 col-md-12 col-sm-12 p-5"> {/* Table column, takes full width on smaller screens */}
          <div className="table-responsive p-0 small">
            <table className="table table-bordered"> {/* Added table-dark for better contrast */}

              <thead className='thead-dark'>
                <tr className="">
                  <th scope="col">Detail ID</th>
                  <th scope="col">Entry Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">GPay/PhonePe/Paytm Number</th>
                  <th scope="col">UPI ID</th>
                  <th scope="col">Confirm</th>
                  <th scope="col">Verification</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="">{row.col1}</td>
                    <td className="">{row.col2}</td>
                    <td className="">{row.col1}</td>
                    <td className="">{row.col2}</td>
                    <td className="">{row.col1}</td>
                    <td className="">{row.col2}</td>
                    <td className="">{row.col1}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>


      </div> {/* row */}
    </div> // container
  )
}

export default BankDetails