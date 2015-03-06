var mymodule = require("./topic3.js");
MOVIE1 = new mymodule.movie ("The Unexpected Virtue of Ignorance");
DIRECTOR1 = new mymodule.director("Alejandro González Iñárritu");
//DIRECTOR1.AddQuote(new mymodule.Quote("la vida esta llena de buenos momentos"));
console.log("La pelicula '"+MOVIE1.name+"' creada por: "+DIRECTOR1.name);
console.log( DIRECTOR1.speak());


