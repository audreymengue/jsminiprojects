const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        authors: "Walt Disney"
    },

    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        authors: "Steve Jobs"
    },

    {
       quote: "If life were predictable it would cease to be life, and be without flavor.",
       authors: "Eleanor Roosevelt" 
    },

    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        authors: "Oprah Winfrey"
    }, 

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        authors: "James Cameron"
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        authors: "John Lennon"
    }
   
];

const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const author = document.querySelector("#author");

btn.addEventListener("click", function() {
    let index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index].quote;
    author.textContent = quotes[index].authors;
})