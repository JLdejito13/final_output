const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}










    function uploadBlog() {
      var blogTitle = document.getElementById('blogTitle').value;
      var blogContent = document.getElementById('blogContent').value;
      var photoUpload = document.getElementById('photoUpload');
      
      // Get the selected photo file
      var photoFile = photoUpload.files[0];

      var uploadedBlogContainer = document.getElementById('uploadedBlogContainer');
      var newBlogPost = document.createElement('div');
      newBlogPost.className = 'blogPost';
      newBlogPost.innerHTML = '<h2>' + blogTitle + '</h2><p>' + blogContent + '</p>';

      // Display the uploaded photo if available
      if (photoFile) {
        var photoURL = URL.createObjectURL(photoFile);
        newBlogPost.innerHTML += '<img src="' + photoURL + '" alt="Uploaded Photo">';
      }

      uploadedBlogContainer.appendChild(newBlogPost);

      // Reset the form
      document.getElementById('blogForm').reset();
    }
 



    //gallery ni



    
