import exp from "constants"

class Post {
    public id: number
    public title: string
    public imageUrl: string

    constructor(id: number, title: string, imageUrl: string) {
        this.id = id
        this.title = title
        this.imageUrl = imageUrl
    }
}
export default Post;