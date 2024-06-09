import React from 'react';

import  "./AppDownload.css"
import { assets } from '../../assest/asset/assets';

export default function AppDownload() {
  return (
    <div   className='app-download'  id='app-download'>
    <p>For Better Experience  Download  <br/> DeliverGrub</p>
    <div  className='app-download-platforms'>
        <img   src={assets.play_store}/>
        <img  src={assets.app_store}/>

    </div>
      
    </div>
  )
}





