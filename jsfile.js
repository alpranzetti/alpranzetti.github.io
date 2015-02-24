function MOVIE (moviename)
{ 
    this.name = moviename ;
    this.play = play; 
    this.stop = stop; 
    this.get = get;
    this.set = set; 
}

MOVIE1 = new MOVIE ( "The Unexpected Virtue of Ignorance");
MOVIE2= new MOVIE ( "The Theory of Everything");
MOVIE3= new MOVIE ( "The Imitation Game");



function play()
{
    document.write(MOVIE1.name); 
}

function stop()
{

}

function set(string , value)
{
    
}

function get(string)
{
    
}

