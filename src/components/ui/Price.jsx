import React from 'react'

export default function Price({salePrice,originalPrice}) {
  return (
    <div className='book__price'>
    {salePrice ? ( 
        // IF IT EXIST lart

        // DO THIS
        <> 
        <span className='book__price--normal'>${originalPrice.toFixed(2)}</span>
        {salePrice.toFixed(2)} 
        </>
    ) : (
       <> {originalPrice.toFixed(2)} </> 
    )}
   
</div>
  )
}
