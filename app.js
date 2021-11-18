const preview = document.querySelector('#project-preview');
const projectSelect = document.querySelectorAll('.project-desc');

projectSelect.forEach(project => {
  project.addEventListener('mouseenter', (e) => {
    let imageName = e.target.getAttribute('data-id');
    preview.style.backgroundImage = `url('img/${imageName}.JPG')`;
  });
});


const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
}
const callback = function(entries){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    let theKids = entry.target.children;
    Array.from(theKids).forEach(x => {
      x.classList.toggle('inactive');
    })
    observer.unobserve(entry.target);
  });
};
const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('section').forEach(div => {
  observer.observe(div);
})