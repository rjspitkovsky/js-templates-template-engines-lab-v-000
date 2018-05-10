function createPost(){
  // Create templates for post 
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  // Establish values for individual post 
  let postTitle = document.getElementById("postTitle").value
  let postAuthor = document.getElementById("postAuthor").value
  let postBody = document.getElementById("postBody").value

  // Create page area for posts 
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()
  
  // Create 
  let postSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  let commenter = document.getElementById("commenter-name").value
  let comment = document.getElementById("comment").value

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  let commentDiv = document.getElementById("comments")
  commentDiv.innerHTML += commentTemplate({"commenter": commenter, "comment": comment})
}
