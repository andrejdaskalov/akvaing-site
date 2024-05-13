import Post from '@/model/Post';
import React, { useState, useRef, useEffect } from 'react';
import Card from './card';

const ProjectScroll = (props: {
    projects: Post[],
    navigateToProject: (id: number) => void,
    title: string
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 500;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const scroll = (toRight: boolean) => {
        if (scrollRef.current === null || scrollRef.current === undefined) return;
        const scrollWidth = scrollRef.current?.scrollWidth || 0;
        const clientWidth = scrollRef.current?.clientWidth || 0;
        if (toRight && scrollPosition + clientWidth + scrollAmount > scrollWidth) {
            if (scrollPosition + clientWidth + scrollAmount == Number.POSITIVE_INFINITY) {
                setScrollPosition(0);
                scrollRef?.current?.scrollTo({ left: 0, behavior: 'smooth' });
                return;
            } 
            setScrollPosition(Number.POSITIVE_INFINITY);
            scrollRef?.current?.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            return;
        } else if (!toRight && scrollPosition - scrollAmount < 0) {
            if (scrollPosition - scrollAmount == Number.NEGATIVE_INFINITY) {
                setScrollPosition(scrollWidth);
                scrollRef?.current?.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                return;
            }
            setScrollPosition(Number.NEGATIVE_INFINITY);
            scrollRef?.current?.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }
        setScrollPosition(scrollPosition + (toRight ? scrollAmount : -scrollAmount));
        scrollRef?.current?.scrollTo({ left: scrollPosition + (toRight ? scrollAmount : -scrollAmount), behavior: 'smooth' });
    }
    const scrollRight = () => {
        scroll(true);
    }
    const scrollLeft = () => {
        scroll(false);
    }

    useEffect(() => {
        if (scrollRef.current !== null && scrollRef.current !== undefined && scrollRef.current?.scrollWidth > scrollRef.current?.clientWidth) {
            setShowButtons(true);
        } else {
            setShowButtons(false);
        }
    }, [scrollRef.current?.scrollWidth, scrollRef.current?.clientWidth]);

    useEffect(() => {
        scrollRef?.current?.addEventListener('scroll', () => {
            if (scrollRef.current === null) return;
            setScrollPosition(scrollRef?.current?.scrollLeft || 0);
        });
    }, []);

    return (
        <div className='my-5'>
            <h2 className='h2 text-dark'>{props.title}</h2>
            <div className='position-relative hover-container'>
                {showButtons &&
                    <div className='position-absolute hover-buttons top-50 start-0 translate-middle-y'>
                        <button className='btn btn-link text-dark' onClick={scrollLeft}>
                            <i className='bi bi-arrow-left-circle-fill h1'></i>
                        </button>
                    </div>
                }
                {showButtons &&
                    <div className='position-absolute hover-buttons top-50 end-0 translate-middle-y'>
                        <button className='btn btn-link text-dark' onClick={scrollRight}>
                            <i className='bi bi-arrow-right-circle-fill h1'></i>
                        </button>
                    </div>
                }
                <div className='card-container d-flex flex-row justify-content-start overflow-auto' ref={scrollRef}>
                    {props.projects.map(post => (
                        <Card key={post.id} post={post} onClick={() => props.navigateToProject(post.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectScroll;