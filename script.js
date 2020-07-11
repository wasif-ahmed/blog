function onClick() {
  event.preventDefault();
  // localStorage.clear();
  let inputName = document.getElementById("author-name");
  let inputDate = document.getElementById("publish-date");
  let inputBlog = document.getElementById("blog-content");

  localStorage.setItem("author-name", inputName.value);
  localStorage.setItem("publish-date", inputDate.value);
  localStorage.setItem("blog-content", inputBlog.value);
  
  let storedName = localStorage.getItem("author-name");
  let storedPublishDate = localStorage.getItem("publish-date");
  let storedBlog = localStorage.getItem("blog-content");

  document.getElementById("nameResult").innerHTML = storedName
  document.getElementById("publishDateResult").innerHTML = storedPublishDate
  document.getElementById("blogResult").innerHTML = storedBlog


  document.getElementById("blogForm").reset();

}