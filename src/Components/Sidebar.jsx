import React, { useState } from 'react'

export default function Sidebar() {
  const [toggle,setToggle]=useState(0)
  return (
    <>
    <button onClick={()=>{setToggle(!toggle)}} className='fixed right-2 top-2 w-[80px] h-[40px] bg-slate-50 z-50 cursor-pointer'>
      Navigation
      </button>
      {
      <div className='fixed z-40 bg-white w-full overflow-hidden flex justify-center items-center' style={{height:!toggle?"0vh":"100vh",transition:"all ease 0.3s"}}>
          
            {/*add navigation menu here (can modify the container color ^ )*/}
            {/* as of now you can add a logo + ecell ,social links, some quick links for pages like home about_us contact_us gallery and 1 or 2 more option so create according to it */}
          <p>i am for navigation</p>
      </div>
      }
      </>
  )
}
