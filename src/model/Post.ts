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
}
export default Post;