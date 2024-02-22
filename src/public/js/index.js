function gotoRandomExample(){
    var sections = document.querySelectorAll('section');
    var randomIndex = Math.floor(Math.random * sections.length);
    var randomSection = sections[randomIndex];
    randomSection.scrollIntoView({ behavior: 'smooth'});
}
