
import clientPromise from "../../lib/mongodb";


export default async (req, res) => {
    switch (req.method) {
        case "GET":
            if (req.body.type === "postContent") {
                return getPostContent(req, res);
            } else if (req.body.type === "postCards") {
                return getPostCards(req, res);
            } else if (req.body.type === "postComments") {
                return getPostComments(req, res);
            } else if (req.body.type === "filteredPosts") {
                return getFilteredPosts(req, res);
            }
        case "POST":
            if (req.body.type === "postComment") {
                return postComment(req, res);
            } else if (req.body.type === "postNewPost") {
                return postNewPost(req, res);
            }
        case "DELETE":
            if (req.body.type === "deletePost") {
                return deletePost(req, res);
            } else if (req.body.type === "deleteComment") {
                return deleteComment(req, res);
            }
        case "PUT":
            if (req.body.type === "editPost") {
                return updatePostContent(req, res);
            }
            //  else if (req.body.type === "editComment") {
            //     return updateComment(req, res);
            // }

        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


const getPostContent = async (req, res) => {

    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const postContent = await db.collection("Posts")
            .findOne({ title: req.body.slug }).content;

        return res.status(200).json(postContent);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });
    }
}

const getPostCards = async (req, res) => {

    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const posts = await db.collection("Posts")
            .find({ tag: req.body.tag }).toArray();
        const postCards = posts.map(post => {
            return {
                title: post.title,
                image: post.image,
                slug: post.slug,
                tag: post.tag
            }
        });
        return res.status(200).json(postCards);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });
    }
}

const getPostComments = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const comments = await db.collection("Comments")
            .find({ post: req.body.slug }).toArray();
        return res.status(200).json(comments);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const getFilteredPosts = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const posts = await db.collection("Posts")
            .find({ tag: req.body.tag }).toArray();
        return res.status(200).json(posts);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const postComment = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const comment = await db.collection("Comments")
            .insertOne({
                post: req.body.post,
                slug: req.body.slug,
                comment: req.body.comment,
                author: req.body.author,
                date: req.body.date
            });
        return res.status(200).json(comment);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const postNewPost = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const collection = await db.collection("Posts");
        if (collection.findOne({ title: req.body.slug })) {
            return res.status(500).json({ message: "Post already exists." });
        }

        const post = await db.collection("Posts")
            .insertOne({
                title: req.body.title,
                slug: req.body.slug,
                tag: req.body.tag,
                content: req.body.content,
                image: req.body.image,
                date: req.body.date
            });
        return res.status(200).json(post);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const deletePost = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const collection = await db.collection("Posts");
        if (!collection.findOne({ title: req.body.slug })) {
            return res.status(500).json({ message: "Post doesn't exist." });
        }
        const post = await db.collection("Posts")
            .deleteOne({ title: req.body.slug });
        return res.status(200).json(post);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const updatePostContent = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const collection = await db.collection("Posts");
        if (!collection.findOne({ title: req.body.slug })) {
            return res.status(500).json({ message: "Post doesn't exist." });
        }
        const post = await db.collection("Posts")
            .updateOne({ title: req.body.slug }, { $set: { content: req.body.content } });
        return res.status(200).json(post);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}






