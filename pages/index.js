import React from 'react'
import { Product, HeroBanner, FooterBanner} from '../components'
import { client } from '../lib/client'

const Home = ({products, banner}) => {
  
  // console.log("Banner", banner)
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]}/>
      <div className='products-heading'>
        <h2>Best Selling Natural Beauty Products</h2>
        <p>Beauty Products for all your needs</p>
      </div>

      <div className='products-container'>
        {products?.map( product => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={banner && banner[1]} />
    </>
  )
}

export const getServerSideProps = async() =>{
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery)

  return{
    props:{ products, banner }
  }
}


export default Home