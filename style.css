function loadHome() {
    // Cambia il contenuto della home
    document.getElementById('contenuto').innerHTML = `
        <h2 class="titolo-riquadrato">Benvenuto nella pagina iniziale!</h2>
        <p>Introduzione al progetto e agli obiettivi.</p>
    `;

    // Reset colore titoli
    resetMenu();
    document.getElementById('home').classList.add('active');
}

function loadContent(page) {
    let content = '';
    
    if (page === 'pagina1') {
        content = `
            <h2 class="titolo-riquadrato">Sezione 1: Introduzione</h2>
            <div class="immagine">
                <img src="https://raw.githubusercontent.com/biomaterialsproject/osteointegration/main/Fratture-Collo-Femore-Osteosintesi.jpg" alt="Frattura collo del femore" class="img-contenuto">
            </div>
            <div class="testo">
                <p>Benvenuti nella prima sezione del sito. Qui parliamo dell'importanza della struttura di un sito web.</p>
            </div>
        `;
    } else if (page === 'sezione2') {
        content = `
            <h2 class="titolo-riquadrato">Sezione 2: Dettagli Tecnici</h2>
            <p>Questa sezione tratta le tecniche per la valutazione dell'osteointegrazione.</p>
        `;
    } else if (page === 'podcast') {
        content = `
            <h2 class="titolo-riquadrato">Podcast: Osteointegrazione</h2>
            <p>Qui mettiamo la descrizione per il nostro podcast.</p>
            <audio controls>
                <source src="audioprova.mp3" type="audio/mpeg">
                Il tuo browser non supporta l'audio HTML5.
            </audio>
        `;
    }

    document.getElementById('contenuto').innerHTML = content;

    // Cambia il colore del titolo
    resetMenu();
    document.getElementById(page).classList.add('active');
}

function resetMenu() {
    // Rimuovi il colore verde da tutti i link
    const links = document.querySelectorAll('.sottotitoli a');
    links.forEach(link => {
        link.classList.remove('active');
    });
}
