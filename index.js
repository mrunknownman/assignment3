const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


const posts = [
    {
        title: "Hello World!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 0
    },
    {
        title: "DNENIEDijdie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 1
    }
]

app.get('/', (req, res)=>{
    res.render("blog", {posts: posts, fill:"Read More"})
})

app.get('/about', (req, res)=>{
    res.render("about")
})

app.get('/add-post', (req, res)=>{
    res.render("addPost")
})

app.post("/add-post", (req, res)=>{
    const newItem = {
        title: req.body.title,
        text: req.body.content,
        id: posts.length
    }
    posts.push(newItem)
    res.redirect("/")
})

app.get("/posts/:postId", (req, res)=>{
    res.render("post", {
        title: posts[req.params.postId].title,
        text: posts[req.params.postId].text
    })
})

app.listen(3000, ()=>{
    console.log("Server is running: http://localhost:3000/")
})