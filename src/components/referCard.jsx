import PropTypes from 'prop-types';
import "../styles/referCard.css";
const ReferCard = (props) => {
    return (<>
        <div className="d-flex flex-row flex-nowrap row-auto align-items-center justify-content-between bg-dark text-white border border-white p-2 refer-card">
            <div className="col">{props.rank}</div>
            <div className="col-auto d-flex flex-row align-items-center">
                {/* <div className="m-0 p-0"> */}
                <img className='ps-2' style={{ width: "50px" }} src="https://lh3.googleusercontent.com/Cx2NMD7ebrOzOvCm65KQT0aXHSOEJoyCunbfqcGLs856aaEppSH9T6IuO8lNkVaUBV00LgG9C5iLpi-Ri1xTCd_tKu7vyKVzAn6dBvXScSEi=s0" alt="" />
                <div className="px-2">
                    <div className="small">asdfjskdafljsdalkfjsdlfkjsdlkfjsdlfkj</div>
                    <div className="small" style={{ fontSize: "10px" }}>
                        Total refer = {props.totalRefer}
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className="col badge">
                <span className="text-bg-secondary p-2 rounded">{props.code}</span>
            </div>
        </div>
    </>
    )
};

ReferCard.propTypes = {
    rank: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalRefer: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired
};

export default ReferCard