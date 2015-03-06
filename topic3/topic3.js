
function movie(moviename) {
    this.name = moviename;
 
}

function director(directorname) {
    this.name = directorname;
    this.speak = speak;
    this.quotes = [];
}

function speak() {

    for (i=0;i< this.quotes.length;i++)
{
  console.log("says:" + this.quotes);
}

}


function Quote(quote) {
    this.quote = quote;
}

 director.prototype.AddQuote = function(Quote){
                this.quotes.push(Quote);
            };
          
          

module.exports.movie = movie;
module.exports.director = director; 
