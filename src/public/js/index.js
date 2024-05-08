function shareButtonCopy(button){
    // Copy link to clipboard
    let link = 'http://127.0.0.1:8080/#' + button.id
    console.log(link)
    navigator.clipboard.writeText(link)
        .then(function() {
            // Success message
            alert('Link copied to clipboard: ' + link);
        })
        .catch(function(error) {
            // Error message
            console.error('Unable to copy link: ', link);
        });
    }

function gotoRandomExample(){
    var sections = document.querySelectorAll('section');
    var randomIndex = Math.floor(Math.random() * sections.length-1);
    var randomSection = sections[randomIndex];
    randomSection.scrollIntoView({ behavior: 'smooth'});
    $
}

