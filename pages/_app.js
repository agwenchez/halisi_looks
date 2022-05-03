import React from 'react'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Toaster />
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
