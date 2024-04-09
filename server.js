const express = require('express')
const app = express()
const port = 2607

const blogs = [
    {
        id: 1,
        title: "Blog 1",
        content: "Nội dung blog 1"
    },
    {
        id: 2,
        title: "Blog 2",
        content: "Nội dung blog 2"
    }
]

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/blogs', (req, res) => {
    res.json(blogs);
});

app.get('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find((blog) => blog.id === blogId);
    if(!blog){
        res.status(404).send("Blog không tồn tại");
        return;
    }

    res.json(blog);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})