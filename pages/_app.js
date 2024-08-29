import '../styles/globals.css'
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return ( <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    </Head>
    <DefaultSeo {...SEO} />
    <Header/>
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
