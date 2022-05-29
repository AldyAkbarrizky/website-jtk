import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import reactMarkdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';

const ProfilJurusan = ({profil}) => {
  console.log(profil)
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h1>{profil.attributes.judul_content}</h1>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(profil.attributes.banner_konten)}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
                    <ReactMarkdown className='mt-3'>
                        {profil.attributes.body_konten}
                    </ReactMarkdown>
                </div>
                <div className='col-4'>
                    {/* Untuk side bar */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const profilJurusan = await fetchAPI("/profil-jurusan", {
        populate: "*"
    });

    console.log(profilJurusan);

    return {
        props: {profil: profilJurusan.data}
    }
}

export default ProfilJurusan