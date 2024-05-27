import Head from 'next/head'
import Repository from '../../repository/strapi_repo'
import { useRouter } from 'next/router'
import Post from '../../model/Post'
import Intl from '@/i18n/intl'
import { useEffect } from 'react'
import ProjectScroll from '@/component/project_scroll'


export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const paths = locales.map((locale) => ({ params: { locale: locale } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
    const locale = params.locale
    const repository = new Repository()
    const architecturePosts = await repository.getArchitecturalProjects(locale)
    const hydrotechnicsPosts = await repository.getHydrotechnicalProjects(locale)
    const interiorPosts = await repository.getInteriorProjects(locale)
    const urbanPlanningPosts = await repository.getUrbanPlanningProjects(locale)
    return { props: { locale: locale, 
        architecturePosts: Post.toJsonArray(architecturePosts),
        hydrotechnicsPosts: Post.toJsonArray(hydrotechnicsPosts), 
        interiorPosts: Post.toJsonArray(interiorPosts), 
        urbanPlanningPosts: Post.toJsonArray(urbanPlanningPosts) } }
}


export default function Home(props: { locale: string, architecturePosts: Post[], hydrotechnicsPosts: Post[], interiorPosts: Post[], urbanPlanningPosts: Post[] }) {
    // const repository = new Repository()
    const router = useRouter()
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    // const [architecturePosts, setArchitecturePosts] = useState<Post[]>([])
    // const [hydrotechnicsPosts, setHydrotechnicsPosts] = useState<Post[]>([])
    // const [interiorPosts, setInteriorPosts] = useState<Post[]>([])
    // const [urbanPlanningPosts, setUrbanPlanningPosts] = useState<Post[]>([])

    const locale = props.locale
    // useEffect(() => {
    //     repository.getArchitecturalProjects(props.locale).then(posts => {
    //         setArchitecturePosts(posts)
    //     })
    //     repository.getHydrotechnicalProjects(props.locale).then(posts => {
    //         setHydrotechnicsPosts(posts)
    //     })
    //     repository.getInteriorProjects(props.locale).then(posts => {
    //         setInteriorPosts(posts)
    //     })
    //     repository.getUrbanPlanningProjects(props.locale).then(posts => {
    //         setUrbanPlanningPosts(posts)
    //     })
    // }, [locale])

    const architecturePosts = Post.fromJsonArray(props.architecturePosts)
    const hydrotechnicsPosts = Post.fromJsonArray(props.hydrotechnicsPosts)
    const interiorPosts = Post.fromJsonArray(props.interiorPosts)
    const urbanPlanningPosts = Post.fromJsonArray(props.urbanPlanningPosts)



    const navigateToProject = (id: number) => {
        router.push(props.locale + '/project/' + id)
    }

    useEffect(() => {
        if (translation.readLocale() !== props.locale) {
            router.push(props.locale)
        }
    }, [])


    return (
        <>
            <Head>
                <title>{t("company-name") + " - " + t("nav.projects")}</title>
                <meta name="keywords" content={t("meta.keywords")} />
                <meta name="description" content={t("meta.description")} />
                <meta name="google-site-verification" content="oadKBr5R6v8YjRhVmkphhjfjfJ5nz3tSBD4shhfNNoc" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={'ps-2 d-flex flex-column justify-content-between'}>
                <ProjectScroll projects={architecturePosts} navigateToProject={navigateToProject} title={t("architecture")} />
                <ProjectScroll projects={hydrotechnicsPosts} navigateToProject={navigateToProject} title={t("hydrotechnics")} />
                <ProjectScroll projects={interiorPosts} navigateToProject={navigateToProject} title={t("interior")} />
                <ProjectScroll projects={urbanPlanningPosts} navigateToProject={navigateToProject} title={t("urban-planning")} />
            </main>
        </>
    )
}
