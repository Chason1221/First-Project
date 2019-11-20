

/*** 
 * This holds my Quotes Array. 
***/
var quotes = [
{
  quote: "May the Force be with you.",
  source: "– Obi-Wan Kenobi", 
  citation: " Movie: Star Wars",
  year: 1977
},
{
  quote: "That which does not kill us makes us stronger.",
  source: "– Friedrich Nietzsche"
},
{
  quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
  source: "– Bernard M. Baruch"
},
{
  quote: "We must not allow other people’s limited perceptions to define us.",
  source: "– Virginia Satir"
},
{
  quote: "Do what you can, with what you have, where you are.",
  source: "– Theodore Roosevelt  "
},
{
  quote: "Be yourself; everyone else is already taken.",
  source: "– Oscar Wilde  "
},
{
  quote: "If you cannot do great things, do small things in a great way.",
  source: "– Oscar Wilde "
}

]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length); //random number created by multiplying 1 by length of quotes
  var anotherVariable1 = quotes[randomNum];
  return anotherVariable1;
}


/***
 * this function prints the quote in html.
***/
function printQuote() {
  var quoteStringer = '';
  var anotherVariable = getRandomQuote();
   quoteStringer = '<p class = "quote">' + anotherVariable.quote + '</p>';
   quoteStringer += '<p class = "source">' + anotherVariable.source +',';
  
   if (anotherVariable.year) {
     quoteStringer += `<span class = "year"> ${anotherVariable.year} </span>`;
   }
 
  if (anotherVariable.tag) {
     quoteStringer += `<span class = "tag"> ${anotherVariable.tag} </span>`;
  }
  if (anotherVariable.citation) {
     quoteStringer += `<span class = "citation"> ${anotherVariable.citation} </span>`;
     
  }   document.getElementById("quote-box").innerHTML = quoteStringer; }
 
  

  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
