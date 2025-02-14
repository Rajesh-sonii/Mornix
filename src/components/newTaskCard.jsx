import PropTypes from 'prop-types';

const NewTaskCard = (props) => {
    const eyeOn = "https://img.freepik.com/premium-vector/eye-icon_352279-337.jpg";
    const eyeOff = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGgo51AQ56uq7qamMzPwP3HjxWinWYI8U_w&s";
    return (
        <>
            <div className="card justify-content-cetner align-items-center text-align-center p-2" style={{ maxWidth: "12rem" }}>
                <div className="d-flex flex-row align-items-center">
                    <img className="" style={{width: "30px", height: "30px"}} src={props.status === "pending" ? eyeOff : eyeOn} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title p-0 m-0">{props.status}</h5>
                    </div>
                </div>
                <div className="card-footer p-0 bg-white">
                   <a className="btn btn-link" href={props.link}>
                    Start your task {">>"}
                    </a> 
                </div>
            </div>
        </>
    )
}

NewTaskCard.propTypes = {
    status: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default NewTaskCard