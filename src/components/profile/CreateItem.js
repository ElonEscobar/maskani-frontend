import React, {  useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'


function CreateItem() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')


  
  const [errors, setErrors] = useState('')
  // const [items, setItems] = useState()
  const apiUrl = 'http://127.0.0.1:3000/items'
  const token = localStorage.token

  

  function handleCreateItem(e){
    e.preventDefault();
   

    const formData = new FormData();
    formData.append('name', name)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('image', image)
   
    async function createItem(){
      let res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}` 
        },
        body: formData
      });
      if (res.status > 199 && res.status < 300){
        let data = await res.json();
        console.log(data);
      }else{
        let err = await res.json();
        setErrors(err);
        console.log(errors);
      }
      
    }
    createItem();
  }

  function handleImg(e){
    setImage(e.target.files[0]);
  }
  return (
    <div className="create-items-container">
        <ProfileNav />
        <div className='create-items'>
          <h2>Sell items now</h2>
          <div className='create-item-form' >
            <form className='create-item' onSubmit={handleCreateItem}>
              <label htmlFor='item-img' className='item-img-label'>Item Image</label>
              <input  type='file' accept='image/*' id='item-img' className='item-img'  onChange={handleImg}/>
              <br/>

              <label htmlFor='item-name' className='item-name-label'>Item name</label>
              <input required type='text' id='item-name' className='item-name' onChange={(e) => setName(e.target.value)}/>
              <br/>
              <label htmlFor='item-desc' className='item-desc-label'>Item description</label>
              <textarea required type='text' id='item-desc' rows={1}  className='item-desc' onChange={(e)=> setDescription(e.target.value)}/>
              <br/>

            <label htmlFor='item-category'className='item-category-label'>Item category</label>
              <select  name="categories" id="categories" onChange={(e) => setCategory(e.target.value)}>
                <option>select category</option>
                <option>Furniture</option>
                <option>Appliances</option>
                <option>Electronics & Lighting</option>
                <option>Decor</option>
                <option>Garden & Tools</option>
              </select>
              <br/>

              <label htmlFor='item-price'className='item-price-label'>Item price</label>
              <input required type='number' id='item-price' className='item-price' onChange={(e)=> setPrice(e.target.value)}/>
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