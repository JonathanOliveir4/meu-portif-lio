document.addEventListener('DOMContentLoaded', () => {
  // Foto de perfil: mostra a imagem se "sua-foto.jpg" existir na mesma pasta.
  const avatarBox = document.getElementById('avatarBox');
  const profilePhoto = document.getElementById('profilePhoto');

  if (avatarBox && profilePhoto) {
    profilePhoto.addEventListener('load', () => avatarBox.classList.add('has-photo'));
    profilePhoto.addEventListener('error', () => avatarBox.classList.remove('has-photo'));
    
    if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
      avatarBox.classList.add('has-photo');
    }
  }

  // Dados de competências — edite nome e nível (0-100) conforme seu domínio real.
  const skills = [
    { name: 'Python',     level: 88 },
    { name: 'C',          level: 80 },
    { name: 'C++',        level: 75 },
    { name: 'Go',         level: 60 },
    { name: 'JavaScript', level: 65 },
  ];

  const grid = document.getElementById('skillsGrid');
  if (grid) {
    skills.forEach(s => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-name">${s.name}</div>
        <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
        <div class="skill-level">${s.level}%</div>
      `;
      grid.appendChild(card);
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }, 100);
    });
  }
});