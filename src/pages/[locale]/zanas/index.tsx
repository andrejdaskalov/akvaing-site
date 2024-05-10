import Repository from '@/repository/strapi_repo'
import Intl from '../../../i18n/intl'
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

export default function ZaNas(props: { locale: string }) {
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    const repository = new Repository();
    const [content, setContent] = useState<string>("");
    useEffect(() => {
        repository.getAboutUs(props.locale).then(content => {
            setContent(content)
        })
    }, [])

    return (
        <main>
            <div className='row mt-5'>

                <div className="col-md-1">
                </div>
                <div className="col-md-6 details-container">
                    <h1 className="fw-bold mb-5">{t("zanas.title")}</h1>
                    <p className="text-dark fs-5 fw-bold" style={{whiteSpace: "pre-line"}}>{content} </p>

                </div>
                {/* <div className="col-md-2" />
                <div className="col-md-6  details-container">
                    
                </div> */}

            </div>
        </main>
    )
}