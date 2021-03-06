import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const Product = ({product : {image,name,slug,price }}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} alt="" className='product-image' width={250} height={250} />

          <div style={{ display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Ksh{price}</p>
          </div>
         
        </div>
      </Link>
    </div>
  )
}

export default Product