import exp from "constants"

enum PostType {
    architecture = "architecture",
    hydrotechnics = "hydrotechnics"
}

class Post {
    public id: number
    public title: string
    public imageUrls: string[]
    public thumbnailUrls: string[]
    public location?: string
    public purpose?: string
    public date?: string
    public concept?: string
    public createdAt?: string
    public updatedAt?: string
    public publishedAt?: string
    public locale?: string
    public type?: PostType



    constructor(id: number, title: string, imageUrls: string[], thumbnailUrls: string[], location?: string, purpose?: string, date?: string, concept?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, locale?: string, type?: string) {
        this.id = id;
        this.title = title;
        this.imageUrls = imageUrls ? imageUrls : [];
        this.thumbnailUrls = thumbnailUrls ? thumbnailUrls : [];
        this.location = location;
        this.purpose = purpose;
        this.date = date;
        this.concept = concept;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.publishedAt = publishedAt;
        this.locale = locale;
        this.type = type as PostType;
    }

    public static fromJson(json: any): Post {
        return new Post(json.id, json.title, json.imageUrls, json.thumbnailUrls, json.location, json.purpose, json.date, json.concept, json.createdAt, json.updatedAt, json.publishedAt, json.locale, json.type);
    }

    public toJson(): any {
        return {
            id: this.id,
            title: this.title,
            imageUrls: this.imageUrls,
            thumbnailUrls: this.thumbnailUrls,
            location: this.location,
            purpose: this.purpose,
            date: this.date,
            concept: this.concept,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            publishedAt: this.publishedAt,
            locale: this.locale,
            type: this.type
        }
    }

    public copyWith({ id, title, imageUrls, thumbnailUrls, location, purpose, date, concept, createdAt, updatedAt, publishedAt, locale, type }: { id?: number, title?: string, imageUrls?: string[], thumbnailUrls?: string[], location?: string, purpose?: string, date?: string, concept?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, locale?: string, type?: string }): Post {
        return new Post(id ? id : this.id, title ? title : this.title, imageUrls ? imageUrls : this.imageUrls, thumbnailUrls ? thumbnailUrls : this.thumbnailUrls, location ? location : this.location, purpose ? purpose : this.purpose, date ? date : this.date, concept ? concept : this.concept, createdAt ? createdAt : this.createdAt, updatedAt ? updatedAt : this.updatedAt, publishedAt ? publishedAt : this.publishedAt, locale ? locale : this.locale, type ? type : this.type);
    }

    public static fromJsonArray(json: any): Post[] {
        return json.map((post: any) => Post.fromJson(post));
    }

    public static toJsonArray(posts: Post[]): any[] {
        return posts.map((post: Post) => post.toJson());
    }
}
export default Post;