// function createPost() {
//   let postTemplateFn = _.template(document.getElementById("post-template").innerHTML)
//   let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML)
//   let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML)
//
//
//   let title = document.getElementById("post-title").innerHTML
//   let author = document.getElementById("post-author").innerHTML
//   let body = document.getElementById("post-body").innerHTML
//
//   document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn()
//
//   let postAttributes = postTemplateFn({post-title: title, post-author: author, post-body: body})
//   let comments = commentsTemplateFn()
//
//   let postArea = document.getElementById("post")
//   postArea.innerHTML = postAttributes
//   postArea.getElementsByTagName("footer")[1].innerHTML = comments
// }


function createPost(){
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  // Value from submitting post form
  var postTitle = document.getElementById("postTitle").value
  var postAuthor = document.getElementById("postAuthor").value
  var postBody = document.getElementById("postBody").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[1].innerHTML = commentsSection;
}
