const preview = document.querySelector('#project-preview');
const projectSelect = document.querySelectorAll('.project-desc');

projectSelect.forEach(project => {
  project.addEventListener('mouseenter', (e) => {
    let imageName = e.target.getAttribute('data-id');
    preview.style.backgroundImage = `url('img/${imageName}.JPG')`;
  });
  // project.addEventListener('mouseleave', () => {
  //   preview.style.backgroundImage = 'none';
  // });
});