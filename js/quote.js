var quoteThemeUl = document.getElementById('quoteThemeList');
var quoteMain = document.getElementById('quoteMain');
//quotes
var quoteArr = [
    'True wisdom comes not from knowledge, but from understanding.',
    'Be yourself; everyone else is already taken.',
    'So many books, so little time',
    'A room without books is like a body without a soul.',
    'You only live once, but if you do it right, once is enough.',
    'Be the change that you wish to see in the world',
    'In three words I can sum up everything I\'ve learned about life: it goes on.',
    'No one can make you feel inferior without your consent.'
]
function insertQuote(){
    //generating a random index less than the length of the quote array. 
    const arrIndex = Math.floor((Math.random() * quoteArr.length ));
    //changing the DOM content with the random quote from quoteArray.
    quoteMain.querySelector('p').textContent = quoteArr[arrIndex];
}
function handleQuoteTheme(e){
    if(e.target.tagName == 'LI'){
        quoteMain.className = e.target.dataset.theme;
        quoteThemeUl.querySelectorAll('li').forEach(function(list){
            list.classList.remove('active');
        });
        e.target.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded',insertQuote);
quoteThemeUl.addEventListener('click',handleQuoteTheme);