const ChangePassword = () => {
  return (
    <div className="container w-50">

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Create new password</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {/* <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm px-3">Submit</button>
      </form>
    </div>

  )
}

export default ChangePassword