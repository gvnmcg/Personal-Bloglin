import clientPromise from "../../lib/mongodb";


export default async (req, res) => {
    switch (req.method) {
        case "GET":
            if (req.body.type === "getUserInfo") {
                return getUserInfo(req, res);
            } 
        case "POST":
            if (req.body.type === "createUser") {
                return createUser(req, res);
            }
        case "DELETE":
            if (req.body.type === "deleteUser") {
                return deleteUser(req, res);
            } 

        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const getUserInfo = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const userInfo = await db.collection("Users")
            .findOne({ username: req.body.username });
        
        return res.status(200).json(userInfo);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const createUser = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const userInfo = await db.collection("Users")
            .insertOne(req.body);
        
        return res.status(200).json(userInfo);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}

const deleteUser = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Blog_Content");
        const userInfo = await db.collection("Users")
            .deleteOne({username: req.body.username});
        
        return res.status(200).json(userInfo);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong." });

    }
}