'use strict';

const quoteContainer = document.querySelector('.quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterButton = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
console.log(quoteText);

let apiQuote;

function newQuote(){
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
  if(quote.author){
    quoteAuthor.textContent = quote.author;
  }else{
    quoteAuthor.textContent = 'Author unknown';
  }

  if(quote.text.length > 50){
    quoteText.classList.add('long-quote');
  }else{
    quoteText.classList.remove('long-quote')
  }

  console.log(quote);
}
async function getQuotes() {
  try{
    const response = await fetch("https://type.fit/api/quotes");
  const quoteData = await response.json();
  console.log(quoteData);
  } catch{
    console.log('some error');
  }
}

// function eventFn(){
//   console.log('I am clicked!');
// }
// newQuoteBtn.addEventListener('click',eventFn);

function tweetQuote(){
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.text} :- ${quoteAuthor.textContent}`;
  window.open(twitterURL,'_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

console.dir(newQuoteBtn);    //console.dir() is used to display propertites of parameter passed in.


getQuotes();
