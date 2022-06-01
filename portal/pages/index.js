import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';

const Home = ({landingPage}) => {
  return (
    <>
      <Header />
      <div id="landing-page-banner" style={{backgroundImage: `url(${getStrapiMedia(landingPage.attributes.banner_konten)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div id='landing-page-title-wrapper'>
          <div className='landing-page-title'>
            <div id="title-text">
              {landingPage.attributes.judul_content}
            </div>
            <button id="title-see-more">Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
      <div className='container-fluid gray-bg'>
        <div className='row padd-200'>
          <div className='col-6 white-bg highlight-detail my-5'>
            <h1 className='fw-bold mb-4'>{landingPage.attributes.judul_highlight}</h1>
            <div className='mb-4'>
              {landingPage.attributes.body_highlight}
            </div>
            <button id="highlight-btn">Lihat Selengkapnya</button>
          </div>
          <div className='col-6 my-5 p-0' style={{backgroundImage: `url(${getStrapiMedia(landingPage.attributes.banner_highlight)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div class='blue-alpha-bg'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const landingPage = await fetchAPI("/landing-page", {
      populate: "*"
  });

  return {
      props: {landingPage: landingPage.data}
  }
}

export default Home;