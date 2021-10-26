const quotes = [
  {
    quote: "Sometimes Life is going to hit you in the head with a brick. Don't lose faith.",
    author: "- Steve Jobs -"
  }
  ,
  {
    quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
    author: "- Warren Buffet -"
  }
  ,
  {
    quote: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
    author: "- Brian Tracy -"
  }
  ,
  {
    quote: "Action is the foundational key to all success.",
    author: "- Pablo Picasso -"
  }
  ,
  {
    quote: "The first step to getting the things you want out of life is this: Decide what you want.",
    author: "- Ben Stein -"
  }
  ,
  {
    quote: "One must desire something to be alive.",
    author: "- Margaret Deland -"
  }
  ,
  {
    quote: "It's choice - not chance - that determines your destiny.",
    author: "- Jean Nidetch -"
  }
  ,
  {
    quote: "They that will not be counseled, cannot be helped. If you do not hear reason she will rap you on the knuckles.",
    author: "- Benjamin Franklin -"
  }
  ,
  {
    quote: "IThe superior man acts before he speaks, and afterwards speaks according to his action.",
    author: "- Confucius -"
  }
  ,
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    author: "- George Santayana -"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
