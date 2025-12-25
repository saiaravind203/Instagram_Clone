const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked : false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked : false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked : false
    }
]
let profilePosts=document.getElementById("posts")
function render(){
    for(let i =0; i <posts.length;i++){
        profilePosts.innerHTML+= 
        `  <div class="post">
                <div class="profile">
                    <img src="${posts[i].avatar}" alt="${posts[i].name}" class="avatar_icon">
                    <div class="profile-details">
                        <h1 class="profile-name">${posts[i].name}</h1>
                        <p class="profile-location">${posts[i].location}</p>
                    </div>
                </div>
                <div class="post-img">
                    <img src="${posts[i].post}" alt="${posts[i].name}" class="post-image ">
                </div>
                <div class="reactions">
                    <img src="./images/icon-heart.png" alt="like_icon" class="reaction-icon likeicon" id="like-${i}" >
                    <img src="./images/icon-comment.png" alt="comment_icon" class="reaction-icon">
                    <img src="./images/icon-dm.png" alt="Dm_icon" class="reaction-icon">
                </div>
               <div class="comments-sec">
                    <p class="likes" id = "likes-${i}"><strong>${posts[i].likes} likes </strong></p>
                    <p class="comments"><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
               </div>
            </div>
        `
    }
}
render()

for(let i=0;i<posts.length;i++){
    const likeBtn = document.getElementById(`like-${i}`)
    const likeText = document.getElementById(`likes-${i}`)
    if(posts[i].liked){
        posts[i].liked=false
    }
    likeBtn.addEventListener("click",function(){
        if(posts[i].liked){
            posts[i].likes--
            posts[i].liked=false
            likeBtn.src = "./images/icon-heart.png" 
        }
        else{
            posts[i].likes++
            posts[i].liked=true
            likeBtn.src ="./images/heart.png"
        }
        likeText.innerHTML = `<p class="likes"><strong>${posts[i].likes} likes </strong></p>`
   })
   
}


