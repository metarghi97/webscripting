/*
    wishlist.js
    Manages the wishlist: loading saved items, displaying them, and allowing removal.
*/
document.addEventListener("DOMContentLoaded", function() {
    const wishlistContainer = document.getElementById("wishlist");
    // Retrieve wishlist from localStorage or initialize an empty array
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to display wishlist items
    function displayWishlist() {
        wishlistContainer.innerHTML = "";
        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
            return;
        }
        
        wishlist.forEach((book, index) => {
            const div = document.createElement("div");
            div.classList.add("book");
            div.innerHTML = `<strong>${book}</strong> <button onclick="removeFromWishlist(${index})">Remove</button>`;
            wishlistContainer.appendChild(div);
        });
    }
    // Wrap localStorage operations in try-catch
try {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(bookTitle);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
} catch (e) {
    console.error("Storage error:", e);
    alert("Wishlist unavailable in private mode or storage full.");
}

    // Function to remove an item from the wishlist
    window.removeFromWishlist = function(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        displayWishlist();
    }

    displayWishlist();
});
