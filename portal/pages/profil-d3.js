import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import SideNav  from '../components/sidenav';
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from '../lib/media';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProfilD3 = ({profilProdiD3}) => {
  return (
    <div>
        <Header />
        <div className='container-fluid main-body'>
            <div className='row'>
                <div className='col-8'>
                    <h1>{profilProdiD3.attributes.judul_content}</h1>
                    <Image
                        className='mt-3'
                        src={getStrapiMedia(profilProdiD3.attributes.banner_konten)}
                        width={1920}
                        height={1080}
                        layout='intrinsic'
                        alt="Banner profil jurusan"
                    />
                    <ReactMarkdown className='mt-3 lh-lg' remarkPlugins={remarkGfm}>
                        {profilProdiD3.attributes.body_konten}
                    </ReactMarkdown>
                </div>
                <div className='col-4'>
                    <SideNav />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const profilProdiD3 = await fetchAPI("/profil-prodi-d3", {
        populate: "*"
    });

    return {
        props: {profilProdiD3: profilProdiD3.data}
    }
}

export default ProfilD3;