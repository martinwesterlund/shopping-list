import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'

const ItemDetails = ({item}) => {
    const {removeItem, moveItem} = useContext(ItemContext)

    return (
        <li onClick={() => moveItem(item.id)} >
            <div className='item-name'>{item.itemName}</div>
        </li>
    )
}

export default ItemDetails