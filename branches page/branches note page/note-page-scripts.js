function showPopup() {
    const popup = document.getElementById('downloadPopup');
    popup.classList.add('show');

    // Remove the popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
