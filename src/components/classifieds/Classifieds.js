import React from 'react'
import './classifieds.css'

function Classifieds() {
  // fetch classifieds and display them here


  
  return (
    <div className='classifieds'>
      <div className='classified-main-card'>
        <div className='classified-img-card'>
          <img alt='img' src='https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
        </div>
        <div className='classified-details'>
          <div className='name'>Interior Designer|Best prices in Kenya</div>
          <p className='desc'>Wallpaper Kenya are wallpaper for walls wholesalers and retailers with agents countrywide.</p>
        </div>
      </div> 
      <div className='classified-main-card'>
        <div className='classified-img-card'>
          <img alt='img' src='https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
        </div>
        <div className='classified-details'>
          <div className='name'>Interior Designer|Best prices in Kenya</div>
          <p className='desc'>Wallpaper Kenya are wallpaper for walls wholesalers and retailers with agents countrywide.</p>
        </div>
      </div> 
      
      
    </div>
  )
}

export default Classifieds