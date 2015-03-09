MOVIEView = Backbone.View.extend({  //single movie view 

    Model: Movie,
    tagName: 'li',
    template: Handlebars.compile($("#singlemovie-template").html()),
    initialize: function () {

        this.render();
    },
    render: function () {

        //  var template = _.template( $("#movietemplate").html(), {} );
        //  this.$el.html( template );
        //  this.$el.html(this.template({ }));
        // $('ul.MovieData').append(template(data));
    }

});



var Movie = Backbone.Model.extend({//model
    defaults: {
        Title: '<u>Oceans Eleven</u>',
        Year: '(2001)',
        Genre: 'Crime/Thriller',
        Plot: 'Danny Ocean wants to score the biggest heist in history.\n\\n\
        He combines an eleven member team,<br> including Frank Catton, Rusty Ryan \n\
        and Linus Caldwell. Their target? The Bellagio, the Mirage<br> and the MGM Grand.\n\
        All casinos owned by Terry Benedict.Its not going to be easy, as they plan <br>to get in\n\
        secretly and out with $150 million.',
        Director: '<u>Director:</u> Steven Soderbergh',
        Writers: '<u>Writers:</u> George Clayton Johnson, Jack Golden Russell, 3 more credits',
        Stars: '<u>Stars:</u> George Clooney, Brad Pitt, Julia Roberts | See full cast and crew '
    },
    initialize: function () {
        console.log("new movie");
    }
});



var movcol = Backbone.Collection.extend({//colecc
    model: Movie
});

//   var movie1 = new Movie({ title: "cenicienta"}); crea un elemento solo

var movcol1 = new movcol([
    {
        title: 'Rapido y furioso'

    },
    {
        title: 'Kill bill'
    },
    {
        title: 'Kill bill 2'
    },
    {
        title: 'Zoolander'
    },
    {
        title: 'Piratas del caribe'
    }
]);  //crea colec


//  movcol1.add(Movie);  
//   console.log(movcol1);


MoviesdddView = Backbone.View.extend({  //collection view 

    tagName: "ul"

});


