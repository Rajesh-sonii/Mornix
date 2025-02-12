import PropTypes from 'prop-types';

const InfoCard = (props) => {
  return (
    <div className="card flex-row justify-content-cetner align-items-center p-2" style={{width: "15rem"}}>
        <img className="w-25 h-25" src={props.img} alt="..."/>
        <div className="card-body">
            <h5 className="card-title p-0 m-0">{props.title}</h5>
            <p className="card-text p-0 m-0">{props.text}</p>
        </div>
    </div>
  )
}

InfoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string
};

export default InfoCard