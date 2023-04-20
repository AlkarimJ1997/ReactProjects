import React from 'react'
import ListItem from './ListItem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul className="itemList">
            {items.map(item => {
                return (
                    <ListItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
                )
            })}
        </ul>
    )
}

export default ItemList