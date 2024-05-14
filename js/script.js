var pastIndex;

function changeIndex() {
    quotes = 
        [
            {
                name: "Oscar Wilde",
                quote: "“Be yourself; everyone else is already taken.”",
            },
            {
                name: "Frank Zappa",
                quote: "“So many books, so little time.”",
            },
            {
                name: "Marcus Tullius Cicero",
                quote: "“A room without books is like a body without a soul.”",
            },
            {
                name: "Mae West",
                quote: "“You only live once, but if you do it right, once is enough.”",
            },
            {
                name: "Mark Twain",
                quote: "“If you tell the truth, you don't have to remember anything.”",
            },
            {
                name: "Elbert Hubbard",
                quote: "“A friend is someone who knows all about you and still loves you.”"
            },
        ];

    var index;

    // this for don't repeat one quote in next click on button
    do{
        index = Math.floor(Math.random() * quotes.length);
    }while( index == pastIndex);
    
    document.getElementById('quote').innerHTML = quotes[index].quote; 
    document.getElementById('name').innerHTML = quotes[index].name; 
    pastIndex = index;
}

