import Repository from '@/repository/strapi_repo'
import Intl from '../../../i18n/intl'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const paths = locales.map((locale) => ({ params: { locale: locale } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
    const locale = params.locale
    // const repository = new Repository();
    // const content = await repository.getAboutUs(locale);
    // return { props: { locale: locale, content: content } }
    return { props: { locale: locale } }
}

export default function ZaNas(props: { locale: string, content: string}) {
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    // const repository = new Repository();
    // const [content, setContent] = useState<string>("");
    // useEffect(() => {
    //     repository.getAboutUs(props.locale).then(content => {
    //         setContent(content)
    //     })
    // }, [])

    const content = props.content;

    return (
        <>

            <Head>
                <title>{t("company-name") + " - " + t("zanas.title")}</title>
                <meta name="google-site-verification" content="oadKBr5R6v8YjRhVmkphhjfjfJ5nz3tSBD4shhfNNoc" />
                <meta name='description' content={t("zanas.description")} />
            </Head>
            <main>
                <div className='row mt-5'>

                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6 details-container">
                        <h1 className="fw-bold mb-5">{t("zanas.title")}</h1>
                        <p className="text-dark fs-5 fw-bold" style={{ whiteSpace: "pre-line" }}>{t("zanas.text")} </p>

                    </div>
                    {/* <div className="col-md-2" />
                <div className="col-md-6  details-container">
                    
                </div> */}

                </div>
            </main>
        </>
    )
}
