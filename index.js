document.addEventListener('DOMContentLoaded', function() {
    var toggleAboutMeButton = document.getElementById('toggle-about-me');
    var toggleSkillsButton = document.getElementById('toggle-skills');

    var aboutMeSection = document.getElementById('section-about-me');
    var skillsSection = document.getElementById('section-Skills');

    aboutMeSection.classList.add('hidden'); // Oculta a seção "Sobre Mim" inicialmente
    skillsSection.classList.add('hidden'); // Oculta a seção "Skills" inicialmente

    toggleAboutMeButton.addEventListener('click', function() {
        aboutMeSection.classList.toggle('hidden');
        skillsSection.classList.add('hidden'); // Adiciona a classe 'hidden' à seção Skills
    });

    toggleSkillsButton.addEventListener('click', function() {
        skillsSection.classList.toggle('hidden');
        aboutMeSection.classList.remove('hidden'); // Remove a classe 'hidden' da seção Sobre Mim
    });
});

