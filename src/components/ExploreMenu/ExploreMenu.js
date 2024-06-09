import React from 'react';

import "./ExploreMenu.css";

import { menu_list } from '../../assest/asset/assets';

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className='Explore-menu'  id='Explore-menu'>
        <h2>Explore Our Menu</h2>
        <p  className='Explore-menu-text'>Choose Our Menu and dishes  ,where ur carvings can satisfy</p>
        <div  className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}   className='Explore-menu-list-item'>

                    <img      className={category===item.menu_name?"active":""}  src={item.menu_image}  alt=''/>
                    <p>{item.menu_name}</p>
                   
                    </div>
            )
        })}
 </div>
      <hr />
    </div>
  )
}
