/*
    script.js
    Handles the book search functionality and manages adding books to the wishlist.
*/

// Array of Islamic book objects
const books = [
    { title: "The Holy Quran", author: "Allah (Translation by Yusuf Ali)", genre: "quran", language: "english", price: "$0" },
    { title: "Sahih Bukhari", author: "Imam Bukhari", genre: "hadith", language: "arabic", price: "$25" },
    { title: "The Sealed Nectar", author: "Safi-ur-Rahman al-Mubarakpuri", genre: "biography", language: "english", price: "$15" },
    { title: "Tafsir Ibn Kathir", author: "Ibn Kathir", genre: "quran", language: "arabic", price: "$30" },
    { title: "Fiqh-us-Sunnah", author: "As-Sayyid Sabiq", genre: "fiqh", language: "english", price: "$20" },
    { title: "History of Islam", author: "Ibn Khaldun", genre: "history", language: "english", price: "$18" }
];

// Listen for the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve values from the form
    const genre = document.getElementById('genre').value;
    const scholar = document.getElementById('scholar').value.toLowerCase();
    const language = document.getElementById('language').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    
    // Validate price range: min should not exceed max
    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
        alert('Minimum Price cannot be greater than Maximum Price.');
        return;
    }
    
    // Filter books based on selected criteria
    const filteredBooks = books.filter(book => {
        // Convert the book's price (string) to a number for comparison
        const price = parseInt(book.price.replace('$', ''));
        
        // Check if the book meets the price criteria
        let meetsPrice = true;
        if (minPrice) {
            meetsPrice = meetsPrice && (price >= parseInt(minPrice));
        }
        if (maxPrice) {
            meetsPrice = meetsPrice && (price <= parseInt(maxPrice));
        }
        
        return (
            (genre === 'all' || book.genre === genre) &&
            (language === 'all' || book.language === language) &&
            (scholar === '' || book.author.toLowerCase().includes(scholar)) &&
            meetsPrice
        );
    });
    
    // Get the container element for the search results and clear previous results
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    
    // If no books match, display a friendly message
    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<p>No books match your criteria. Please try different filters.</p>';
        return;
    }
    
    // Display each filtered book with an "Add to Wishlist" button
    filteredBooks.forEach((book, index) => {
        const div = document.createElement('div');
        div.classList.add('book');
        // Highlight the first result as the best match
        if (index === 0) {
            div.classList.add('best-match');
        }
        div.innerHTML = `<strong>${book.title}</strong> by ${book.author} - ${book.language} - ${book.price} 
            <button onclick="addToWishlist('${book.title}')">Add to Wishlist</button>`;
        bookList.appendChild(div);
    });
});

// Function to add a book to the wishlist using localStorage
function addToWishlist(bookTitle) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(bookTitle)) {
        wishlist.push(bookTitle);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${bookTitle} added to wishlist!`);
    } else {
        alert(`${bookTitle} is already in your wishlist.`);
    }
}
