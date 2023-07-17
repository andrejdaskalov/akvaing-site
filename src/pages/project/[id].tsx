import Repository from "@/repository/repo";
import Post from "@/repository/Post"
import { useRouter } from "next/router";


export default function Project() {
    const router = useRouter()
    const id = Number(router.query.id)

    const repository = new Repository()
    const post = repository.getPostById(id)
    if(!post) return <h1>Post not found</h1>
    return (
        <main>
            <h1>Project {post.title}</h1>
            <img src={post.imageUrl} alt={post.title} />
        </main>
    )
}