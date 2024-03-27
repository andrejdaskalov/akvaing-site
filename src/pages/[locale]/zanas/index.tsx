import Intl from '../../../i18n/intl'

export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const paths = locales.map((locale) => ({ params: { locale: locale }}))
    console.log("paths: ", paths)
    return { paths, fallback: false}
}

export async function getStaticProps({ params }: { params: { locale : string }}) {
    const locale = params.locale
    console.log("locale: ", locale)
    return { props: { locale: locale } }
}

export default function ZaNas(props :  {locale: string}){
    const translation = new Intl();
    const t  = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    return(
        <>
            <h1>{t("about-us")}</h1>
        </>
    )
}