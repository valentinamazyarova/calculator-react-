import { store } from '../store';
import PropTypes from 'prop-types'

const BtnBar = ({displayShow, orerationGo }) => {
    return (
        <div className='btnBar'>
            {
                store.values.map((item) => {
                    return (
                        <button className='btn' onClick={()=>{displayShow(item.value)}} key={item.value}>{item.value}</button>
                    )
                })
            }
            {
                store.operations.map((item) => {
                    return (
                        <button className='btn' onClick={()=>{orerationGo(item.value)}} key={item.value}>{item.value}</button>
                    )
                })
            }
        </div>
    );
}

BtnBar.propTypes = {
    displayNumber: PropTypes.func,
    orerationGo: PropTypes.func
}

export default BtnBar;