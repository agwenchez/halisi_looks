import React from 'react'
import Link from 'next/link'
import { client } from '../lib/client'

import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
    // console.log("Hero banner", heroBanner)

  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h4>{heroBanner.largeText1}</h4>
            <img style={{backgroundImage: "none", width:"20rem"}}  className='hero-banner-image' src={urlFor(heroBanner.image)} alt="Halisi-looks" />
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner