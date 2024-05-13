

console.log('abood welcome');





function changeIndex() {
    quotes = 
        [
            '“Be yourself; everyone else is already taken.”',
            '“So many books, so little time.”',
            '“A room without books is like a body without a soul.”',
            '“You only live once, but if you do it right, once is enough.”',
            "“If you tell the truth, you don't have to remember anything.”",
            "“A friend is someone who knows all about you and still loves you.”"
        ];
    var index = Math.floor(Math.random() * quotes.length);
    console.log(index);
    x = document.getElementById('quote').innerHTML 
    console.log(x);
    // quotes[index];    
}

