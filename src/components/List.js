import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

function List({ items }) {
    return (
        <div className="lists">
            {
                items.map((item, ind) => {
                    return (
                        <ListItem
                            key={ind}
                            name={item.name}
                            email={item.email}
                            phone={item.phone}
                        />

                    )
                })
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        items: state.item.items
    }
}

export default connect(mapStateToProps, null)(List)
