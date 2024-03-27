import Post from "../model/Post";
import axios from "./axios"

class Repository {

    api_key = process.env.API_KEY;
    baseURL = 'http://localhost:1337';
    public async getAllPosts(locale: string): Promise<Post[]> {
        try {
            const response = await axios.get(`/api/projects?locale=${locale}`);
            return response.data.data.map((post: any) => {
                return this.mapPost(post);
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    public async getArchitecturalProjects(locale: string): Promise<Post[]> {
        try {
            const response = await axios.get(`/api/projects?locale=${locale}&type=architecture&populate[0]=ImageUrls`);
            return response.data.data.map((post: any) => {
                return this.mapPost(post);
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    public async getHydrotechnicalProjects(locale: string): Promise<Post[]> {
        try {
            const response = await axios.get(`/api/projects?locale=${locale}&type=hydrotechnics&populate[0]=ImageUrls`);
            return response.data.data.map((post: any) => {
                return this.mapPost(post);
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    public async getPostById(id: number, locale: string): Promise<Post | undefined> {
        try {
            const post = await axios.get(`/api/projects/${id.toString()}?locale=${locale}&populate[0]=ImageUrls`);
            return post.data.data ? this.mapPost(post.data.data) : undefined;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    private mapPost(post: any): Post {
        return new Post(
            post.id,
            post.attributes.Title,
            post.attributes.ImageUrls ? 
            post.attributes.ImageUrls.data.map((image: any) => this.baseURL + image.attributes.url) 
            : [],
            post.attributes.ImageUrls ? post.attributes.ImageUrls.data.map((image: any) => this.baseURL + image.attributes.formats.thumbnail.url)
            : [],
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

    }

}

export default Repository;