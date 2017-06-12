/*This section solves random quote generator with array od quotes
quotes =[
  "The Way Get Started Is To Quit Talking And Begin Doing. -Walt Disney",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty. -Winston Churchill",
  "Don’t Let Yesterday Take Up Too Much Of Today. -Will Rogers",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.- Unknown",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. – Inspirational Quote By Vince Lombardi",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.- Steve Jobs",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.- Rob Siltanen",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.- Og Mandino",
  "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That's The Classic Entrepreneur.- Mohnish Pabrai",
  "We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou"
]
function newQuote(){
  var twitter = document.getElementById('twitter');
  var randomNumber = Math.floor(Math.random() * (quotes.length));

  twitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI(quotes[randomNumber]);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

newQuote();
This section solves random quote generator with ajax request on api  https://market.mashape.com/andruxnet/random-famous-quotes*/

function newQuote(){
   $.ajax({
   url:  'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
   type: 'get',
   headers: {
     'X-Mashape-Key': 'pWgXHNjpyYmsh8tqMHdZ0QFjFkwBp1rlVAAjsnZY9scCal3tOg',
   },
    dataType: 'json',
    success: function(data){
      $('#quoteDisplay').text('"' + data.quote + '"');
      $('#quoteAuthor').text(data.author);
      let tweetData =  '"' + data.quote + '"' + '  by ' + data.author;
      let escapeSemicolon = tweetData.replace(';', '%3B');
      twitter.href = "https://twitter.com/intent/tweet?text=" + escapeSemicolon;
    }
   });
};


newQuote();
