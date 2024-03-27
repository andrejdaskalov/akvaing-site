import Repository from "@/repository/strapi_repo";
import Post from "@/model/Post"
import { useRouter } from "next/router";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { useState, useEffect } from "react";
import Intl from '@/i18n/intl'


export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const repository = new Repository()
    const paths: { params: { id: string, locale: string } }[] = []
    for (let locale of locales) {
        let posts = await repository.getAllPosts(locale);
        posts.forEach((post) => {
            paths.push({ params: { id: post.id.toString(), locale: locale } })
        })
    }
    console.log("paths: ", paths)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: number, locale: string } }) {
    return { props: { id: params.id, locale: params.locale } }
}


export default function Project(props: { id: number, locale: string }) {
    const repository = new Repository()
    const [post, setPost] = useState<Post | undefined>(undefined)

    useEffect(() => {
        repository.getPostById(props.id, props.locale).then(post => {
            setPost(post)
        })
    }, [])

    const translation = new Intl(); 
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);


    if (!post) return <h1>Post not found</h1>
    return (
        <main className="special-scroll">

            <div className='row mt-5'>

                <div className="col-md-1">
                </div>
                <div className="col-md-5">
                    <h1 className="fw-bold mb-5">{post.title}</h1>
                    <p className="text-dark fs-3 fw-normal">{t("project.location")}: {post.location}</p>
                    <p className="text-dark fs-3 fw-normal">{t("project.purpose")}: {post.purpose}</p>
                    <p className="text-dark fs-3 fw-normal">{t("project.date")}: {post.date}</p>
                    <p className="text-dark fs-3 fw-normal">{t("project.concept")}: {post.concept}</p>
                </div>
                <div className="col-md-6 image-row overflow-auto d-flex flex-column justify-items-start">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {post.imageUrls && post.thumbnailUrls ?
                            post.imageUrls.map((url, index) => (
                                <a key={url} href={url}>
                                    <img src={post.thumbnailUrls[index]} className='img-fluid mb-2' alt={post.title} />
                                </a>
                            ))
                            : null
                        }
                    </LightGallery>
                </div>

            </div>
        </main>
    )
}