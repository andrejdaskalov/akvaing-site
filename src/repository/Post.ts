import exp from "constants"

class Post {
    public id: number
    public title: string
    public imageUrls: string[]
    public location?: string
    public purpose?: string
    public date?: Date
    public concept?: string

    constructor(id: number, title: string, imageUrls: string[], location?: string, purpose?: string, date?: Date, concept?: string) {
        this.id = id
        this.title = title
        this.imageUrls = imageUrls
        this.location = location
        this.purpose = purpose
        this.date = date
        this.concept = concept
    }
}
export default Post;