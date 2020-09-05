import React, {useContext} from 'react'
import {ItemContext} from '../contexts/ItemContext'

const BoughtItemDetails = ({item}) => {
    const {removeItem, moveItem} = useContext(ItemContext)

    return (
        <li onClick={() => removeItem(item.id)} >
            <div className='item-name'>{item.itemName}</div>
        </li>
    )
}

export default BoughtItemDetails