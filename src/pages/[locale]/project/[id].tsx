import Repository from "@/repository/repo";
import Post from "@/repository/Post"
import { useRouter } from "next/router";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const repository = new Repository()
    const paths = locales.flatMap((locale) => {
        const posts = repository.getAllPosts(locale)
        return posts.map((post) => ({ params: { id: post.id.toString(), locale: locale }}))
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: number, locale : string }}) {
    const repository = new Repository()
    const post = repository.getPostById(Number(params.id), params.locale)
    return { props: { post } }
}


export default function Project({ post }: { post: Post }) {
    // const router = useRouter()
    // const id = Number(router.query.id)

    // const repository = new Repository()
    // const post = repository.getPostById(id)
    if (!post) return <h1>Post not found</h1>
    return (
        <main className="special-scroll">

            <div className='row mt-5'>

                <div className="col-md-1">
                </div>
                <div className="col-md-5">
                    <h1 className="fw-bold mb-5">{post.title}</h1>
                    <p className="text-dark fs-3 fw-normal">ЛОКАЦИЈА: {post.location}</p>
                    <p className="text-dark fs-3 fw-normal">НАМЕНА: {post.purpose}</p>
                    <p className="text-dark fs-3 fw-normal">ДАТУМ: {post.date}</p>
                    <p className="text-dark fs-3 fw-normal">КОНЦЕПТ: {post.concept}</p>
                </div>
                <div className="col-md-6 image-row overflow-auto">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {
                            post.imageUrls.map((url) => (
                                <a key={url} href={url}>
                                    <img src={url} className='img-fluid mb-2' alt={post.title} />
                                </a>
                            ))
                        }
                    </LightGallery>
                </div>

            </div>
        </main>
    )
}