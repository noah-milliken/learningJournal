const blogPostData = [
    {
        date: "July 21, 2022",
        title: 'Blog Six',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-06.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "July 14, 2022",
        title: 'Blog Five',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-05.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "July 7, 2022",
        title: 'Blog Four',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-04.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 31, 2022",
        title: 'Blog Three',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-03.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 24, 2022",
        title: 'Blog Two',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-02.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 17, 2022",
        title: 'Blog One',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "blog-image-01.png",
        imageAlt: 'Picture of a computer and desk',
    },
]


function getBlogHtml() {

    let blogHtml = ``
    blogPostData.forEach(function (post) {
        blogHtml += `
        <div class="post">
            <img src="${post.imagePath}" alt="${post.imageAlt}">
            <div class="blog-text">
                <p>${post.date}</p>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        </div>
        `
    })
    return blogHtml

}
function render() {
    const blogFeed = document.getElementById('blog-feed')
    blogFeed.innerHTML = getBlogHtml()
}
render()
