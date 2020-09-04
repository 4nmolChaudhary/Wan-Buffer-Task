import React from 'react'
import { connect } from 'react-redux'
import { removeFromList } from '../redux'

function ListItem({ name, phone, email, removeFromList }) {
    return (
        <div className="listItem">
            <div>{name}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <button onClick={() => removeFromList(name)}>

                <svg xmlns="http://www.w3.org/2000/svg" width="14.414" height="14.414" viewBox="0 0 14.414 14.414">
                    <g id="close-cancel" transform="translate(-4.793 -4.793)">
                        <line id="Line_168" data-name="Line 168" x2="13" y2="13" transform="translate(5.5 5.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <line id="Line_169" data-name="Line 169" x1="13" y2="13" transform="translate(5.5 5.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </g>
                </svg>
            </button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromList: (state) => dispatch(removeFromList(state)),
    }
}

export default connect(null, mapDispatchToProps)(ListItem)
