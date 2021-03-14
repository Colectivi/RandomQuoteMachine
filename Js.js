var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  
  function randomColor() {
    let colorSize = colors.length;
    let randColor = Math.floor(Math.random() * colorSize);
    let randColorData = colors[randColor];
  
    
    document.body.style.background = randColorData;
    document.getElementById("new-quote").style.background = randColorData;
    document.getElementById("tweet-quote").style.color = randColorData;
  
  }
  
  var QUOTEBANK = [
    {
     quote:"“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”",
     author: "– Winston Churchill"
    }, {
      quote:"“Don’t Let Yesterday Take Up Too Much Of Today.”",
      author: "– Will Rogers"
    }, {
      quote: "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”",
      author: "– Steve Jobs"
    }, {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "-Nelson Mandela"
    }, {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "-Walt Disney"
    }, {
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author: " -Steve Jobs"
    }, {
      quote: "If life were predictable it would cease to be life, and be without flavor." ,
      author: "Eleanor Roosevelt"
    }, { 
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "-Oprah Winfrey"
    }, {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "-James Cameron"
    }, {
      quote: "Life is what happens when you're busy making other plans.",
      author: " -John Lennon"
    }, {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "-Mother Teresa"
    }, {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      author: " -Franklin D. Roosevelt"
    }
  ];
  function generateQuote(){
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex]
    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
    
    // Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    
    //Quote Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += randomQuoteData;
    
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
  
    
  }
    
  
  window.onload = init;
  function init (){
    generateQuote();
    randomColor();
  }
  
  
  
  