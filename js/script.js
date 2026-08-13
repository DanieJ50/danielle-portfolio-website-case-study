(() => {
  'use strict';

  const doc = document;
  const body = doc.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projectData = {
    savesip: {
      title: 'SaveSip',
      meta: 'UX/UI • Branding • Capstone',
      image: 'assets/images/portfolio/image23.jpg',
      description: 'A gamified drink-spending tracker that reframes financial awareness as a warm, visual habit-building experience. The project evolved from Cup$i into SaveSip, adding mascots, challenges, savings feedback, home-brew comparisons, and a recipe/community layer.',
      tags: ['Product thinking', 'Mobile UI', 'Gamification', 'Brand evolution', 'Wireframes', 'Visual systems']
    },
    recipe: {
      title: 'Cozy Recipe Builder',
      meta: 'UX/UI • Personalization • Web',
      image: 'assets/images/portfolio/image22.jpg',
      description: 'A playful recipe-building experience designed around what a person wants to taste and feel. Users choose flavor, texture, ingredients, and cooking method, then explore swaps, nutrition previews, saved recipes, and challenge-style prompts.',
      tags: ['Personalization', 'High-fidelity UI', 'Content design', 'Interaction logic', 'Recipe system']
    },
    olympics: {
      title: 'NYC 2028 Identity Concept',
      meta: 'Identity • Symbol Design • Graphic Design',
      image: 'assets/images/portfolio/nyc-2028-identity.jpg',
      description: 'An Olympic identity exploration that combines the silhouette of the Statue of Liberty with the New York skyline and Olympic rings. The concept uses a bold single-color mark to connect place, global visibility, and civic symbolism.',
      tags: ['Identity design', 'Symbolism', 'Silhouette', 'Campaign mark']
    },
    nike: {
      title: 'Just Buy It',
      meta: 'Culture Jamming • Advertising Critique',
      image: 'assets/images/portfolio/nike-just-buy-it-runner.jpg',
      description: 'A parody campaign that flips Nike’s motivational advertising language into a critique of consumer pressure, status, and price. Familiar composition and typography make the message feel instantly recognizable before the copy turns it sideways.',
      tags: ['Culture jamming', 'Art direction', 'Copywriting', 'Satire', 'Advertising']
    },
    enchanted: {
      title: 'Enchanted Brew',
      meta: 'Brand Direction • Logo Exploration',
      image: 'assets/images/portfolio/image24.jpg',
      description: 'A café identity direction exploring soft, magical visual cues, illustrated beverage forms, and friendly typography. The project shows how a small logo idea can expand into mood, tone, and a recognizable brand personality.',
      tags: ['Logo design', 'Brand mood', 'Identity system', 'Typography']
    },
    key: {
      title: 'Design Is the Key',
      meta: 'Poster • Typography • Visual Metaphor',
      image: 'assets/images/portfolio/design-is-the-key.jpg',
      description: 'A typographic poster built around the phrase “Design is the Key,” using a literal key integrated into the letterforms and playful cat silhouettes to create movement, interruption, and personality.',
      tags: ['Typography', 'Poster design', 'Visual metaphor', 'Composition']
    },
    mcd: {
      title: 'I’m Buyin’ It',
      meta: 'Culture Jamming • Campaign Design',
      image: 'assets/images/portfolio/mcd-buyin-it.jpg',
      description: 'A consumerism-focused parody using dramatic fast-food imagery and a city-scale visual metaphor. The familiar fast-food color language is repurposed to make the buying behavior itself the headline.',
      tags: ['Satire', 'Campaign design', 'Photo composition', 'Brand language']
    },
    cookies: {
      title: 'Cookie Website',
      meta: 'Web Design • Food Branding',
      image: 'assets/images/portfolio/image3.jpg',
      description: 'A food-focused web concept built around atmospheric photography, large editorial type, interface layering, and warm visual hierarchy.',
      tags: ['Web design', 'Responsive layout', 'Food visuals', 'UI hierarchy']
    },
    summer: {
      title: 'Summer Alt Sounds',
      meta: 'Poster • Experimental Typography',
      image: 'assets/images/portfolio/image13.jpg',
      description: 'A music-poster experiment using expressive type, texture, collage, and visual rhythm to give the composition the energy of an alternative summer lineup.',
      tags: ['Poster design', 'Typography', 'Texture', 'Music graphics']
    },
    underwater: {
      title: 'Underwater Composite',
      meta: 'Photo Manipulation • Visual Storytelling',
      image: 'assets/images/portfolio/image14.jpg',
      description: 'A surreal underwater scene created through compositing, masking, tonal control, and narrative image-building.',
      tags: ['Photoshop', 'Compositing', 'Masking', 'Mood', 'Surreal narrative']
    },
    double: {
      title: 'Double Exposure',
      meta: 'Digital Art • Photo Composite',
      image: 'assets/images/portfolio/image9.jpg',
      description: 'A portrait-driven double exposure combining a human silhouette with city imagery, light, and a central figure to create a layered emotional narrative.',
      tags: ['Double exposure', 'Photo manipulation', 'Digital art', 'Narrative']
    },
    happiness: {
      title: 'McHappiness+',
      meta: 'Satire • Advertising • Campaign',
      image: 'assets/images/portfolio/mcd-happiness-subscription.jpg',
      description: 'A fictional subscription advertisement that exaggerates convenience marketing into a literal “happiness plan,” using polished fast-food ad language to critique the commodification of craving and comfort.',
      tags: ['Advertising parody', 'Copywriting', 'Visual hierarchy', 'Campaign concept']
    },
    water: {
      title: 'Water Graphic',
      meta: 'Educational Graphic • Advertising',
      image: 'assets/images/portfolio/image12.jpg',
      description: 'An educational visual that turns hydration information into an attention-first advertising composition using image manipulation and high-contrast hierarchy.',
      tags: ['Information design', 'Advertising', 'Photo manipulation', 'Hierarchy']
    },
    burger: {
      title: 'Burger Poster',
      meta: 'Food Advertising • Poster Design',
      image: 'assets/images/portfolio/image5.jpg',
      description: 'A dramatic food-ad poster using close-up imagery, warm lighting, texture, and bold headline hierarchy to create appetite and atmosphere.',
      tags: ['Food advertising', 'Poster design', 'Art direction', 'Composition']
    },
    letterforms: {
      title: 'Letterform Studies',
      meta: 'Typography • Form Exploration',
      image: 'assets/images/portfolio/image26.jpg',
      description: 'A grid of letterform experiments exploring shape, rhythm, color, and the point where typography starts behaving like illustration.',
      tags: ['Typography', 'Letterforms', 'Color systems', 'Experimentation']
    },
    coffee: {
      title: 'Coffee Lettering',
      meta: 'Lettering • Logo Exploration',
      image: 'assets/images/portfolio/image27.jpg',
      description: 'An expressive coffee-themed lettering mark that integrates pouring liquid and cup forms directly into the word shape.',
      tags: ['Lettering', 'Logo design', 'Visual metaphor', 'Brand exploration']
    },
    journeyart: {
      title: 'The Journey',
      meta: 'Illustration • Visual Storytelling',
      image: 'assets/images/portfolio/journey-illustration.jpg',
      description: 'A reflective visual about moving from an earlier self toward a brighter future, using mirrored environments, silhouette, and a glowing path to make personal growth feel spatial.',
      tags: ['Illustration', 'Narrative', 'Mood', 'Personal storytelling']
    }
  };

  const revealItems = [...doc.querySelectorAll('.reveal')];
  if (reduceMotion) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  const menuButton = doc.getElementById('menu-button');
  const mainNav = doc.getElementById('main-nav');
  const setMenuState = (open) => {
    mainNav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  menuButton.addEventListener('click', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  doc.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuState(false);
    }
  });

  const progressBar = doc.getElementById('scroll-progress-bar');
  const parallaxItems = [...doc.querySelectorAll('[data-parallax]')];
  let ticking = false;

  const onScrollFrame = () => {
    const scrollTop = window.scrollY || doc.documentElement.scrollTop;
    const maxScroll = Math.max(doc.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    progressBar.style.width = `${progress * 100}%`;

    if (!reduceMotion) {
      parallaxItems.forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0;
        el.style.translate = `0 ${scrollTop * speed}px`;
      });
    }
    ticking = false;
  };

  const requestScrollFrame = () => {
    if (!ticking) {
      window.requestAnimationFrame(onScrollFrame);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestScrollFrame, { passive: true });
  requestScrollFrame();

  const navLinks = [...mainNav.querySelectorAll('a[href^="#"]')];
  const sections = navLinks
    .map((link) => doc.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => navObserver.observe(section));
  }

  const filterButtons = [...doc.querySelectorAll('.filter-button')];
  const projectCards = [...doc.querySelectorAll('.project-card')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
      projectCards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  const dialog = doc.getElementById('project-dialog');
  const dialogClose = doc.getElementById('dialog-close');
  const dialogImage = doc.getElementById('dialog-image');
  const dialogTitle = doc.getElementById('dialog-title');
  const dialogMeta = doc.getElementById('dialog-meta');
  const dialogDescription = doc.getElementById('dialog-description');
  const dialogTags = doc.getElementById('dialog-tags');

  const openProject = (key) => {
    const project = projectData[key];
    if (!project) return;
    dialogImage.src = project.image;
    dialogImage.alt = `${project.title} project image`;
    dialogTitle.textContent = project.title;
    dialogMeta.textContent = project.meta;
    dialogDescription.textContent = project.description;
    dialogTags.replaceChildren(...project.tags.map((tag) => {
      const span = doc.createElement('span');
      span.textContent = tag;
      return span;
    }));
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    body.style.overflow = 'hidden';
  };

  [...doc.querySelectorAll('[data-project]')].forEach((trigger) => {
    trigger.addEventListener('click', () => openProject(trigger.dataset.project));
  });

  const closeDialog = () => {
    if (dialog.open && typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    body.style.overflow = '';
  };

  dialogClose.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) closeDialog();
  });
  dialog.addEventListener('close', () => { body.style.overflow = ''; });

  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const glow = doc.getElementById('pointer-glow');
    window.addEventListener('pointermove', (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      glow.style.opacity = '1';
    }, { passive: true });

    const tiltCards = [...doc.querySelectorAll('.tilt-card')];
    tiltCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const rotateX = y * -5;
        const rotateY = x * 7;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });

    const magneticItems = [...doc.querySelectorAll('.magnetic')];
    magneticItems.forEach((item) => {
      item.addEventListener('pointermove', (event) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        item.style.translate = `${x * 0.08}px ${y * 0.08}px`;
      });
      item.addEventListener('pointerleave', () => {
        item.style.translate = '';
      });
    });
  }
})();
