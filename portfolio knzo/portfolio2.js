//navbar

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.style.opacity = '0.5';
      }
    });
  });

  link.addEventListener('mouseout', () => {
    links.forEach(otherLink => {
      otherLink.style.opacity = '1';
    });
  });
});


// js pour le .gradient

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const gradients = document.querySelectorAll('.gradient');

  const options = {
      threshold: 0.5
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              switch (entry.target.id) {
                  case 'home':
                      applyGradient(gradients, 0, 'linear-gradient(#2E3192 , #1BFFFF)');
                      break;
                  case 'competences':
                      applyGradient(gradients, 1, 'linear-gradient(#614385 , #516395)');
                      break;
                  case 'travaux':
                      applyGradient(gradients, 0, 'linear-gradient(#11998E , #38EF7D)');
                      break;
                  case 'contact':
                      applyGradient(gradients, 1, 'linear-gradient(#C33764  , #1D2671)');
                      break;
              }
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  function applyGradient(gradients, index, gradientStyle) {
      gradients.forEach((gradient, i) => {
          if (i === index) {
              gradient.style.backgroundImage = gradientStyle;
              gradient.classList.add('active'); // Ajoute la classe active à l'élément correspondant
          } else {
              gradient.classList.remove('active'); // Supprime la classe active des autres éléments
          }
      });
  }
});