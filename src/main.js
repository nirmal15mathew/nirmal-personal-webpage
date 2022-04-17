const logoContainer = document.querySelector('#logo-container')
const targets = document.querySelectorAll('.page-section');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'overview':
          case 'skill':
            logoContainer.classList.replace('logo-dark', 'logo-light')
            break;
          case 'projects':
          case 'about':
            logoContainer.classList.replace('logo-light', "logo-dark")
            break;
        }
      }
    });
  }, {
      threshold: 0.75
  });

  io.observe(target)
};

targets.forEach(lazyLoad);
