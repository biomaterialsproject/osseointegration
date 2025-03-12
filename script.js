// Funzione per caricare solo il titolo e il menu
function loadHome() {
    // Otteniamo la sezione contenuto e la svuotiamo
    let contentDiv = document.getElementById('contenuto');
    contentDiv.innerHTML = ''; // Pulisce il contenuto esistente
}

// Funzione per caricare dinamicamente il contenuto
function loadContent(content) {
    let contentDiv = document.getElementById('contenuto');
    
    // Contenuto per la Pagina 1
    if (content === 'pagina1') {
        contentDiv.innerHTML = `
            <div id="pagina1-contenuto">
                <h2>Pagina 1: Introduzione</h2>
                
                <!-- Immagine -->
                <div class="immagine">
                    <img src="https://via.placeholder.com/600x400" alt="Descrizione dell'immagine" class="img-contenuto">
                </div>
                
                <!-- Testo -->
                <div class="testo">
                    <p>Benvenuti nella prima sezione del sito. Qui potete trovare una panoramica generale dei temi trattati. Questa è la sezione in cui parleremo dell'importanza della struttura e dell'organizzazione dei contenuti in un sito web.</p>
                    
                    <p>Un sito ben strutturato aiuta gli utenti a navigare facilmente tra le diverse informazioni. La progettazione di un sito web deve considerare vari aspetti, tra cui l'aspetto estetico, la facilità di navigazione e la velocità di caricamento delle pagine.</p>
                </div>
            </div>
        `;
    } 
    // Contenuto per la Sezione 2
    else if (content === 'sezione2') {
        contentDiv.innerHTML = `
            <h2>Sezione 2: Dettagli</h2>
            <p>Contenuti di esempio per la sezione 2...</p>
        `;
    }
}
