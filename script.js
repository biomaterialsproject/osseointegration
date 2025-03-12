function loadHome() {
    document.getElementById('contenuto').innerHTML = `
        <h2>Benvenuto nella pagina iniziale!</h2>
        <p>Seleziona una sezione dal menu per visualizzarne il contenuto.</p>
    `;
}

function loadContent(page) {
    if (page === 'pagina1') {
        document.getElementById('contenuto').innerHTML = `
            <h2>Pagina 1: Introduzione</h2>
            <div class="immagine">
                <img src="https://github.com/biomaterialsproject/osteointegration/blob/main/Fratture-Collo-Femore-Osteosintesi.jpg?raw=true" alt="Frattura collo del femore" class="img-contenuto">
            </div>
            <div class="testo">
                <p>Benvenuti nella prima sezione del sito. Qui potete trovare una panoramica generale dei temi trattati. Questa è la sezione in cui parleremo dell'importanza della struttura e dell'organizzazione dei contenuti in un sito web.</p>
                <p>Un sito ben strutturato aiuta gli utenti a navigare facilmente tra le diverse informazioni. La progettazione di un sito web deve considerare vari aspetti, tra cui l'aspetto estetico, la facilità di navigazione e la velocità di caricamento delle pagine.</p>
            </div>
        `;
    } else if (page === 'sezione2') {
        document.getElementById('contenuto').innerHTML = `
            <h2>Sezione 2: Approfondimenti</h2>
            <p>Questa sezione conterrà ulteriori dettagli sul progetto e approfondimenti tecnici.</p>
            
            <h3>Ascolta il file audio:</h3>
            <audio controls>
                <source src="audio.mp3" type="audio/mpeg">
                Il tuo browser non supporta l'audio HTML5.
            </audio>
        `;
    }
}
