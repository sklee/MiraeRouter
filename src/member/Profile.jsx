import React from 'react'
import { getImageUrl } from '../utils.js';

function Profile({
  name='name', 
  imgId, 
  profession, 
  awards, 
  discovered
}){  
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className='avatar'
          src={getImageUrl({imgId})}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Profile