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

        <div className="card" style="width: 18rem;">
            <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
export default Card
