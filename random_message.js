// Function to read quotes and returns
function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]
}

// Read file in browser mode using Fetch API
fetch('./quotes.txt')
.then(response => response.text())
.then(data => {
    // Extract just the array part and parse it
    const quotesArray = data.replace('const quotes = ', '');
    const quotes = JSON.parse(quotesArray);

    // Display quote on the webpage
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = getRandomQuote(quotes);

})
.catch(error => console.error('Error fetching quotes:', error));