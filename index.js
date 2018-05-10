function createPost() {
  const title = document.getElementById("post-title").innerHTML
  const author = document.getElementById("post-author").innerHTML
  const body = document.getElementById("post-body").innerHTML

  const postTemplate = _.template(document.getElementById("post-template").innerHTML)
}
