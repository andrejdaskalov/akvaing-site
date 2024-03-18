import React from 'react'
import  Post  from '../model/Post'


interface CardProps {
    post: Post,
    onClick: () => void
}

export default function Card({post, onClick} : CardProps): JSX.Element {
    return (
        <>
            <div className='card project-card flex-shrink-0 me-1' key={post.id} onClick={onClick}>
                <img src={post.thumbnailUrls[0]} className='card-img' alt={post.title} />
                <div className='card-img-overlay d-flex flex-column justify-content-end'>
                    <h5 className='card-title'>{post.title}</h5>
                    {/* <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                     <a href={'/project/'+ post.id} className="btn btn-outline-secondary stretched-link">Детали</a> */}
                </div>
            </div>
        </>
    )
}