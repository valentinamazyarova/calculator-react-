import PropTypes from 'prop-types'
const Display = ({count}) => {
    return ( 
    <div className='display'>{count || 0}</div> 
    );
}

Display.propTypes = {
    count: PropTypes.string
}
 
export default Display;