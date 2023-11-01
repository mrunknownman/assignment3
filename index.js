const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


const posts = [
    {
        title: "How to Get the Most Out of Your University Music Club Experience",
        text: "If you're a member of a university music club, there are a few things you can do to get the most out of your experience: \nGet involved. Don't be afraid to participate in club activities and rehearsals. The more involved you are, the more you'll learn and the more fun you'll have. \nTake advantage of the resources that are available. Most music clubs have access to practice rooms, instruments, and other resources that can help you improve your skills. \nNetwork with other club members. Get to know the other musicians and singers in your club. They can help you learn new things, collaborate on projects, and support each other. \nAttend concerts and recitals. This is a great way to see other musicians perform and learn new things. It's also a great way to support your fellow club members. \nHave fun! Music clubs are a great way to relax and have fun with friends. Enjoy the time you spend with your fellow musicians and singers.",
        id: 0
    },
    {
        title: "5 Must-Attend Music Events on Campus This Semester",
        text: "Looking for some great music to listen to on campus this semester? Here are five must-attend music events: \nFall Concert Series: The music department hosts a series of concerts throughout the fall semester. These concerts feature a variety of ensembles, including the band, choir, orchestra, and other",
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
