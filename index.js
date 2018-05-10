function createPost() {
  let postTemplateFn = _.template(document.getElementById("post-template").innerHTML)
  let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML)
  let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML)


  let title = document.getElementById("post-title").innerHTML
  let author = document.getElementById("post-author").innerHTML
  let body = document.getElementById("post-body").innerHTML

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn()

  let postAttributes = postTemplateFn({post-title: title, post-author: author, post-body: body})
  let comments = commentsTemplateFn()
}
