import Post from "../model/Post";
import axios from "./axios"

class Repository {

    api_key = process.env.API_KEY;
    public async getAllPosts(locale: string): Promise<Post[]> {
        try {
            const response = await axios.get(`/api/projects?locale=${locale}`);
            return response.data.data.map((post: any) => {
                return new Post(
                    post.id,
                    post.attributes.Title,
                    post.attributes.ImageUrls,
                    post.attributes.Location,
                    post.attributes.Purpose,
                    post.attributes.Date,
                    post.attributes.Concept,
                    post.attributes.createdAt,
                    post.attributes.updatedAt,
                    post.attributes.publishedAt,
                    post.attributes.locale,
                    post.attributes.type
                );
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    }

   public getPostById(id: number, locale: string): Promise<Post | undefined> {
    return axios.get(`/api/projects/${id}?locale=${locale}`)
        .then(response => {
            return response.data.data ? new Post(
                response.data.data.id,
                response.data.data.attributes.Title,
                response.data.data.attributes.ImageUrls,
                response.data.data.attributes.Location,
                response.data.data.attributes.Purpose,
                response.data.data.attributes.Date,
                response.data.data.attributes.Concept,
                response.data.data.attributes.createdAt,
                response.data.data.attributes.updatedAt,
                response.data.data.attributes.publishedAt,
                response.data.data.attributes.locale,
                response.data.data.attributes.type
            ) : undefined;
        })
        .catch(error => {
            console.error(error);
            return undefined;
        });
}

}

export default Repository;