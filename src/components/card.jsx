import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        // <div className="card">
        //     <div className="card-header">
        //         {props.title}
        //     </div>
        //     <div className="card-body">
        //         <img src={props.img} className="card-img" />
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>

        <div className="card text-center" style={{ width: "15rem" }}>
            <div className="card-header">
                {props.title}
            </div>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body m-0 p-0">
                {/* <h5 className="card-title">{props.title}</h5> */}
                <a href={props.link} className="btn btn-primary w-100 rounded-0">{props.text}</a>
            </div>
        </div>

    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Card
