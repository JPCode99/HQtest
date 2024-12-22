const galleryItem1 = document.querySelector(".gallery-item-1");
const galleryItem2 = document.querySelector(".gallery-item-2");
const galleryItem3 = document.querySelector(".gallery-item-3");
const prevBtn = document.querySelector(".gallery-controls-prev");
const nextBtn = document.querySelector(".gallery-controls-next");

const sideBar = document.querySelector(".sidebar");
const openSideBar = document.querySelector(".fa-bars");
const closeSideBar = document.querySelector(".fa-xmark");

openSideBar.addEventListener('click',()=>{
  console.log("click");
  sideBar.classList.toggle("opensidebar")
});
closeSideBar.addEventListener('click',()=>{
  console.log("click");
  sideBar.classList.toggle("opensidebar")
});


