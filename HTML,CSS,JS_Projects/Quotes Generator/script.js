const quoteBox = document.querySelector(".quote-box blockquote");
const authorBox = document.querySelector(".quote-box span");
const newQuoteButton = document.querySelector(".quote-box button:first-child");
const tweetButton = document.querySelector(".quote-box button:last-child");

function fetchQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteBox.textContent = `"${data.content}"`;
            authorBox.textContent = `- ${data.author}`;
        })
        .catch(error => {
            quoteBox.textContent = "An error occurred. Please try again.";
            authorBox.textContent = "";
            console.error("Error fetching quote:", error);
        });
}

// Load an initial quote
fetchQuote();

// New Quote button click event
newQuoteButton.addEventListener("click", fetchQuote);

// Tweet button click event
tweetButton.addEventListener("click", () => {
    const quoteText = quoteBox.textContent;
    const authorText = authorBox.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + " " + authorText)}`;
    window.open(tweetUrl, "_blank");
});
