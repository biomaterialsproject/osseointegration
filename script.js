// Funzione per mostrare o nascondere i sottotitoli di un episodio
function toggleSubtitles(subtitleId) {
    var subtitle = document.getElementById(subtitleId);
    if (subtitle.style.display === "none" || subtitle.style.display === "") {
        subtitle.style.display = "block"; // Mostra i sottotitoli
    } else {
        subtitle.style.display = "none"; // Nascondi i sottotitoli
    }
}

// Funzione per caricare il contenuto in base alla sezione cliccata
function loadPage(page) {
    // Rimuovi la classe "active" da tutte le voci di navigazione
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Aggiungi la classe "active" alla voce cliccata
    document.getElementById('nav' + page).classList.add('active');

    // Cambia il contenuto in base alla sezione selezionata
    const content = document.getElementById('content');

    let fileToLoad = '';

    if (page === 1) {
        fileToLoad = 'uno.html'; 
    } else if (page === 2) {
        fileToLoad = 'due.html'; 
    } else if (page === 3) {
        fileToLoad = 'tre.html'; 
    } else if (page === 4) {
        fileToLoad = 'quattro.html'; 
    }

    // Carica il contenuto usando fetch
    fetch(fileToLoad)
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento del file");
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data; 

            // Se abbiamo caricato "tre.html", colleghiamo di nuovo gli eventi
            if (page === 3) {
                setTimeout(attachClickHandlers, 100);
            }
        })
        .catch(error => {
            console.error('Errore nel caricamento del file:', error);
            content.innerHTML = '<p>Impossibile caricare il contenuto. Riprova più tardi.</p>';
        });
}

// Funzione per aggiungere gli event listener alle immagini di "tre.html"
function attachClickHandlers() {
    const researchBoxes = document.querySelectorAll('.research-box');
    researchBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const contentId = this.getAttribute('data-target');
            showContent(contentId);
        });
    });
}

// Funzione per mostrare il contenuto delle ricerche
let lastClicked = null;

function showContent(id) {
    const selectedContent = document.getElementById(id);
    if (!selectedContent) {
        console.error(`Elemento con ID '${id}' non trovato.`);
        return;
    }

    // Nasconde tutti gli altri contenuti prima di mostrare il nuovo
    document.querySelectorAll('.research-content').forEach(content => {
        content.classList.remove('active');
    });

    selectedContent.classList.add('active');
    selectedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Carica la Home di default
window.onload = function () {
    loadPage(1);
};
