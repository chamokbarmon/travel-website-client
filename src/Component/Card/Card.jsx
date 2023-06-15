import React, { useEffect, useState } from 'react';
import CardsShow from './CardsShow';


const Card = () => {
  const [user, setUser]=useState([]);
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res=>res.json())
     .then(data=>setUser(data))
  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-14'>
            {
              user.slice(0,6).map((use)=>(<CardsShow key={use.id}   use={use} ></CardsShow>))
            }
    </div>
  );
};

export default Card;