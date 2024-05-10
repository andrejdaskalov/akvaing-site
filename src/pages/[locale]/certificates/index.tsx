import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Intl from '../../../i18n/intl'
import Repository from '@/repository/strapi_repo'
import { useEffect, useState } from 'react'

export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const paths = locales.map((locale) => ({ params: { locale: locale } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
    const locale = params.locale
    return { props: { locale: locale } }
}

export default function Certificates(props: { locale: string }) {
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    const repository = new Repository();
    const [certificates, setCertificates] = useState<string[]>([]);
    useEffect(() => {
        repository.getCertificates().then(certificates => {
            setCertificates(certificates)
        })
    }, [])
    return (
        <main className='p-3'>
            <h1 className="fw-bold mb-5">{t("certificates.title")}</h1>
            <div className='container flex-row flex-wrap justify-content-start'>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    download={false}
                >
                    {certificates.length > 0 ?
                        certificates.map((url, index) => (
                            <a key={url} href={url} style={{width:"250px", height:"400px", objectFit:"contain"}} className='me-3'>
                                <img src={url} className='img-fluid mb-2 ' alt="" style={{width:"250px", height:"400px",}}/>
                            </a>
                        ))
                        : null
                    }
                </LightGallery>
            </div>
        </main>
    )
}