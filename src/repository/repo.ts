import Post from "./Post";

class Repository {
    private posts: Post[] = [
        {
            id: 1,
            title: 'Проект 1',
            imageUrl: '/images/proekt1.png'
        },
        {
            id: 2,
            title: 'Проект 2',
            imageUrl: '/images/proekt1.png'
        },
        {
            id: 3,
            title: 'Проект 3',
            imageUrl: '/images/proekt1.png'
        },
        {
            id: 4,
            title: 'Проект 4',
            imageUrl: '/images/proekt1.png'
        },
        {
            id: 5,
            title: 'Проект 5',
            imageUrl: '/images/proekt1.png'
        },
        {
            id: 6,
            title: 'Проект 6',
            imageUrl: '/images/proekt1.png'
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
