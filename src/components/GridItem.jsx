
import PropTypes from 'prop-types';

const GridItem = ({id,title,url}) => {
    return (
        <div className="card">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    );
}

GridItem.propTypes={
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
}

export default GridItem;