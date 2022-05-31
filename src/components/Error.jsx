import React from 'react'

const Error = ({mensaje}) => {
    /*props con CHILDREN (sirve para mandar mucho html)*/
  return (
    <>
        <div className='bg-red-800 text-white uppercase text-center p-3 font-bold mb-3 rounded-md'>
          <p>{mensaje}</p></div>
          
    </>
  )
}

export default Error