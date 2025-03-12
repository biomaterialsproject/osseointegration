function loadHome() {
    document.getElementById('contenuto').innerHTML = `
        <h2 class="titolo-riquadrato">Benvenuto nella pagina iniziale!</h2>
        <p>Seleziona una sezione dal menu per visualizzarne il contenuto.</p>
    `;
}

function loadContent(page) {
    if (page === 'pagina1') {
        document.getElementById('contenuto').innerHTML = `
            <h2 class="titolo-riquadrato">Pagina 1: Introduzione</h2>
            <div class="immagine">
                <img src="https://github.com/biomaterialsproject/osteointegration/blob/main/Fratture-Collo-Femore-Osteosintesi.jpg?raw=true" alt="Frattura collo del femore" class="img-contenuto">
            </div>
            <div class="testo">
                <p>Benvenuti nella prima sezione del sito.</p>
                <p>Testo</p>
            </div>
        `;
    } else if (page === 'sezione2') {
        document.getElementById('contenuto').innerHTML = `
            <h2 class="titolo-riquadrato">Sezione 2: Approfondimenti</h2>
            <p>Testo</p>
            
            <h3>Ascolta il file audio:</h3>
            <audio controls>
                <source src="audioprova.mp3" type="audio/mpeg">
                Il tuo browser non supporta l'audio HTML5.
            </audio>
        `;
    }
}
