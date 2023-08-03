
document.addEventListener('DOMContentLoaded', function() {
    // Replace 'your_resume.pdf' with the actual path to your PDF file
    const resumePdfPath ='control systems.pdf';
    
    const resumeButton = document.getElementById('resume-button');
    resumeButton.addEventListener('click', function() {
      window.open(resumePdfPath, '_blank');
    });
  });

function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}





const descriptionElement = document.getElementById('description');
let charIndex = 0;

function typeWriter() {
  if (charIndex < descriptionText.length) {
    descriptionElement.innerHTML += descriptionText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50); 
  }
}

typeWriter();





