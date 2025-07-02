const reaction = document.getElementById("js-reaction");
const memory = document.getElementById("js-memory");
const verbal = document.getElementById("js-verbal");
const visual = document.getElementById("js-visual");


const reactionScore = document.getElementById("js-reaction-score");
const memoryScore = document.getElementById("js-memory-score");
const verbalScore = document.getElementById("js-verbal-score");
const visualScore = document.getElementById("js-visual-score");






fetch('data.json')
.then(response => response.json())
.then(data => {
      data.forEach(item => {
        // Seleziona il div con data-category uguale a item.category
        if(item.category === "Reaction"){
            reactionScore.innerHTML = item.score;
        }

        if(item.category === "Memory"){
            memoryScore.innerHTML = item.score;
        }

        if(item.category === "Verbal"){
            verbalScore.innerHTML = item.score;
        }

        if(item.category === "Visual"){
            visualScore.innerHTML = item.score;
        }
      });
    })
    .catch(err => {
      console.error('Errore caricamento dati:', err);
    });

