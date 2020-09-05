import React, { useContext, useState } from 'react'
import {ItemContext} from '../contexts/ItemContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
const ItemForm = () => {
    const { addItem } = useContext(ItemContext)
    const [itemName, setItemName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(itemName)
        setItemName('')
    }
    return (
        <form className='form' autoComplete="off" onSubmit={handleSubmit}>
            <input id='add-field' type='text' placeholder='Produkt' value={itemName} onChange={(e) => setItemName(e.target.value)} required/>
            {/* <input id='submit-btn' type='submit' value='Lägg till'/> */}
            <button id='submit-btn' type='submit' ><FontAwesomeIcon id="add-icon" icon={faPlusCircle} /></button>
            
        </form>
    )
}

export default ItemForm