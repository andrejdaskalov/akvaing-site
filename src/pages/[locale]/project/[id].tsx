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
import { Spinner } from "react-bootstrap";
import Head from "next/head";
import { downloadFile } from "@/service/image_download_service";


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
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: number, locale: string } }) {
    const repository = new Repository();
    let post = await repository.getPostById(params.id, params.locale);
    return { props: { id: params.id, locale: params.locale, post: post?.toJson() } }
}


export default function Project(props: { id: number, locale: string, post: any}) {
    // const repository = new Repository()
    // const [post, setPost] = useState<Post | undefined>(undefined)

    // useEffect(() => {
    //     repository.getPostById(props.id, props.locale).then(post => {
    //         setPost(post)
    //     })
    // }, [])
    const post = Post.fromJson(props.post);

    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);


    if (!post) return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="grow" color='#212529' />
    </div>
    return (
        <>
            <Head>
                <title>{t("company-name") + " - " + post.title}</title>
                <meta name="description" content={post.concept} />
                <meta name="google-site-verification" content="oadKBr5R6v8YjRhVmkphhjfjfJ5nz3tSBD4shhfNNoc" />
            </Head>
            <main className="special-scroll">

                <div className='row mt-5'>

                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3 details-container">
                        <h1 className="fw-bold mb-5">{post.title}</h1>
                        <p className="text-dark fs-5 fw-normal">{t("project.location")}: {post.location}</p>
                        <p className="text-dark fs-5 fw-normal">{t("project.purpose")}: {post.purpose}</p>
                        <p className="text-dark fs-5 fw-normal">{t("project.date")}: {post.date?.slice(0, 4)}</p>
                        <p className="text-dark fs-5 fw-normal">{t("project.concept")}: {post.concept}</p>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-6 image-row overflow-auto ">
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            download={false}
                        >
                            {post.imageUrls && post.thumbnailUrls ?
                                post.imageUrls.map((url, index) => (
                                    <a key={url} href={url}>
                                        <img src={post.thumbnailUrls[index]} className='img-fluid mb-2 details-image-thumb' alt={post.title} />
                                    </a>
                                ))
                                : null
                            }
                        </LightGallery>
                    </div>

                </div>
            </main>
        </>
    )
}