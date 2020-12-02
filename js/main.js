/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */

/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/
let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';    

let inputText = document.getElementById('inputText');
let inputNumb = document.getElementById('inputNumb');
let button    = document.getElementById('button');
let year      = document.getElementById('year');
let container = document.getElementById('container');


button.addEventListener('click', fetchData);

async function fetchData() {

    try{
        console.log(this.id);
    
        let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ee2bebbc&s=' + inputText.value);
        let data     = await response.json();
        
        console.log(this);
    
        /* 
        0:
            Poster: "https://m.media-amazon.com/images/M/MV5BMTU1MTkxNzc5NF5BMl5BanBnXkFtZTgwOTM2Mzk3MTI@._V1_SX300.jpg"
            Title: "Power Rangers"
            Type: "movie"
            Year: "2017"
            imdbID: "tt3717490"
        */

        console.log(data['Search']);
        console.log(data['Search']);
        let movie ='';
    
            
        for(let base of data['Search']){
            movie += '<article>';
            movie += '<h2>'  + base.Title     + '</h2>'  + '<br>';
            movie += '<i>'   + base.Year      + '</i>'   + '<br>';
            movie += '<i>'   + base.Type      + '</i>'   + '<br>';
            movie += '<i>'   + base.imdbID    + '</i>'   + '<br>';  
            

            movie += '<aside class="img">';
            movie += '<img  src="' + base.Poster + '"alt="imagen">';
            movie += '</aside>';
    
            movie += '<hr>';
            
                          
            movie += '</article>';
        }
        
        container.innerHTML= movie;  


        year.addEventListener('click', fetchDataNumb);
    
    async function fetchDataNumb(){
    
        let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ee2bebbc&s=' + inputText.value + '&y=' + inputNumb.value);
        let data     = await response.json();
    
        console.log(data);
    
        let movieYear = '';
    
        for (let start of data['Search'] ){
            
            movieYear += '<article>';
    
            movieYear += '<h2>' + start.Title  + '</h2>' + '<br>';
            movieYear += '<i>'  + start.Year   +  '</i>' + '<br>';            
            movieYear += '<i>'  + start.Type   + '</i>'  + '<br>';
            movieYear += '<i>'  + start.imdbID + '</i>'  + '<br>';
            movieYear += '<img class="img" src="' + start.Poster + '"alt="imagen">';
    
            movieYear += '<hr>';
    
    
            movieYear += '</article>';
        }  
        container.innerHTML = movieYear;

    } 
   
    }catch(message) {
    throw new Error(message);
    
    }
}

