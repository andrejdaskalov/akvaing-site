import Post from "./Post";

class Repository {
    private posts: Post[] = [
        {
            id: 1,
            title: 'Проект 1',
            imageUrls: ['/images/proekt1.png'],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        },
        {
            id: 2,
            title: 'Проект 2',
            imageUrls: ['/images/proekt1.png'],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        },
        {
            id: 3,
            title: 'Проект 3',
            imageUrls: ['/images/proekt1.png'],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        },
        {
            id: 4,
            title: 'Проект 4',
            imageUrls: ['/images/proekt1.png'],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        },
        {
            id: 5,
            title: 'Проект 5',
            imageUrls: ['/images/proekt1.png'],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        },
        {
            id: 6,
            title: 'Проект 6',
            imageUrls: [
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
                '/images/proekt1.png',
            ],
            location: 'Москва',
            purpose: 'Для дома',
            date: new Date('2020-01-01').toLocaleDateString(["en-US","mk-MK"]),
            concept: 'Концепт 1'
        }
    ]

    public getAllPosts() {
        return this.posts
    }

    public getPostById(id: number) {
        return this.posts.find(post => post.id === id)
    }



}

export default Repository;
