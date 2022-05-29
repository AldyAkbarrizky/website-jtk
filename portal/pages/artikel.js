import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';

const Artikel = ({artikel}) => {
  console.log(artikel)
  return (
    <div>
        <Header />
        <div className='container-fluid main-body' id='artikel-main'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Berita Seputar JTK Polban</h1>
                    {artikel.map((data, i) => {
                        return (
                            <div key={data.attributes.id} className="card mt-4 mb-4">
                                <Image
                                    src={getStrapiMedia(data.attributes.banner_konten)}
                                    width={1920}
                                    height={1080}
                                    layout='intrinsic'
                                    alt="Banner Artikel"
                                />
                                <div className="card-body p-5">
                                    <h2>{data.attributes.judul_konten}</h2>
                                    <ReactMarkdown>
                                        {data.attributes.body_excerpt}
                                    </ReactMarkdown>
                                    <button type="button" className="btn btn-primary">Baca Selengkapnya</button>
                                </div>

                            </div>
                        );
                    })}
                </div>
                <div className='col-4'>
                    
                </div> 
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const artikel = await fetchAPI("/beritas", {
        populate: "*",
        sort: ['createdAt:desc'],
    });

    console.log(artikel);

    return {
        props: {artikel: artikel.data}
    }
}

export default Artikel