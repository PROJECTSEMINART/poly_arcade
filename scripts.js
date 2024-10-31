// Mapping for department content
const branchData = {
    'Notes': '<h2>Notes</h2><ul><li><a href="#">Sample Note 1</a></li><li><a href="#">Sample Note 2</a></li></ul>',
    'Syllabus': '<h2>Syllabus</h2><ul><li><a href="#">Syllabus Link 1</a></li><li><a href="#">Syllabus Link 2</a></li></ul>',
    'Textbooks': '<h2>Textbooks</h2><ul><li><a href="#">Textbook Link 1</a></li><li><a href="#">Textbook Link 2</a></li></ul>',
    'QuestionPapers': '<h2>Question Papers</h2><ul><li><a href="#">Question Paper 1</a></li><li><a href="#">Question Paper 2</a></li></ul>',
    // Add content for other branches similarly
};

function openBranch(branchName) {
    // Set the overlay content
    document.getElementById('branch-content').innerHTML = branchData[branchName] || '<h2>Content Not Found</h2>';
    // Show the overlay
    document.getElementById('overlay').style.display = 'block';
}



const pagesToSearch = [
    'notes.html',
    'syllabus.html',
    'textbooks.html',
    'question_papers.html',
    'solved_question_papers.html',
    'contact.html'
];

let pageContents = {}; // Store the content of each page

// Function to load page content via AJAX
function loadPageContent() {
    pagesToSearch.forEach(page => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', page, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Store the content of each page in the `pageContents` object
                pageContents[page] = xhr.responseText.toLowerCase();
            }
        };
        xhr.send();
    });
}

// Call the function to load all page contents at the start
loadPageContent();

// Function to filter both current page and linked pages
function filterContent() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    
    // Filter the current page's cards
    for (let i = 0; i < cards.length; i++) {
        const cardText = cards[i].innerText.toLowerCase();
        if (cardText.includes(searchInput)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }

    // Search through loaded page contents
    for (let page in pageContents) {
        if (pageContents[page].includes(searchInput)) {
            console.log(`Found "${searchInput}" in ${page}`);
            // Display a message or link to the relevant page
        }
    }
}
