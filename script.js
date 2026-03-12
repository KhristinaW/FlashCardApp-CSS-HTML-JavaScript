let flashCards = [];
let terms = [];

function saveTerm(){
    let input = document.getElementById('input').value
    let define = document.getElementById('definition').value

    if(input === "" || define === ""){
     alert("Please enter term and definition");

    }
        terms = {
            term:input,
            definition:define
        };

    flashCards.push(terms);
    console.log(flashCards);
   
};

function generateFlashcards(){
     let grid = document.getElementById('flashcardGrid');
     let html ="";
      for(let i = 0; i < flashCards.length; i++){
        html += 
        `
        <div class='flashcard' onclick= "flipCard(${i})">

            <div class="flashcard-inner" id='card${i}'>
                <div class='front face'>${flashCards[i].term}</div>
                <div class='back face'>${flashCards[i].definition}</div>
            </div>
        </div>
        `
       grid.innerHTML = html
      }  
    }


function flipCard(index){

    card = document.getElementById('card' + index) ;
    if(card.style.transform === 'rotateY(180deg)')
    {
        card.style.transform  = 'rotateY(0deg)';
    }else{
        card.style.transform = 'rotateY(180deg)';
    }

}

function clearAll(){
 flashCards = [];
 document.getElementById('flashcardGrid').innerHTML = ''
}
