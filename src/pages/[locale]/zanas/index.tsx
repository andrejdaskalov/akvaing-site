import Intl from '../../../i18n/intl'

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
    return (
        <main>
            <div className='row mt-5'>

                <div className="col-md-1">
                </div>
                <div className="col-md-3 details-container">
                    <h1 className="fw-bold mb-5">{t("zanas.title")}</h1>
                    <p className="text-dark fs-5 fw-bold">{t("zanas.text")} </p>

                </div>
                <div className="col-md-2" />
                <div className="col-md-6  details-container">
                    

                </div>

            </div>
        </main>
    )
}