function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}
const linkButtons = document.querySelectorAll('.link-button');

linkButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const url = this.getAttribute('data-url');
        openLink(url);
    });
});
