import React, { useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'


function CreateItem() {

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    img: ''
  })

  function handleCreateItem(e){
    e.preventDefault();
    console.log(newItem);
  }
  return (
    <div className="create-items-container">
        <ProfileNav />
        <div className='create-items'>
          <h2>Sell items now</h2>
          <div className='create-item-form' >
            <form className='create-item' onSubmit={handleCreateItem}>
              <label id='item-img' className='item-img-label'>Item Image</label>
              <input required type='file' accept='image/*' id='item-img' className='item-img' value={newItem.img} onChange={(e)=> setNewItem({...newItem, img: e.target.value})}/>
              <br/>

              <label id='item-name' className='item-name-label'>Item name</label>
              <input required type='text' id='item-name' className='item-name' value={newItem.name} onChange={(e)=> setNewItem({...newItem, name: e.target.value})}/>
              <br/>
              <label for='item-desc' className='item-desc-label'>Item description</label>
              <textarea required type='text' id='item-desc' rows={1}  className='item-desc' value={newItem.description} onChange={(e)=> setNewItem({...newItem, description: e.target.value})}/>
              <br/>

            <label id='item-category'className='item-category-label'>Item category</label>
              <select  name="categories" id="categories" onChange={(e) => setNewItem({...newItem, category: e.target.value})}>
                <option>select category</option>
                <option>Furniture</option>
                <option>Appliances</option>
                <option>Electronics & Lighting</option>
                <option>Decor</option>
                <option>Garden & Tools</option>
              </select>
              <br/>

              <label id='item-price'className='item-price-label'>Item price</label>
              <input required type='number' id='item-price' className='item-price' value={newItem.price} onChange={(e)=> setNewItem({...newItem, price: e.target.value})}/>
              <br/>

              <button type='submit' className='create-new-item-button'>create item</button>
            </form>

          </div>
                   <div className='my-items'>
            <h2>Created Items</h2>

          </div>
        </div>

      
    </div>
  )
}

export default CreateItem