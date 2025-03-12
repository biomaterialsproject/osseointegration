function loadHome() {
    document.getElementById('contenuto').innerHTML = `
        <h2 class="titolo-riquadrato">Benvenuto nella pagina iniziale!</h2>
        <p>Breve introduzione: Qual è il contesto? Qual è il problema? 
Parte principale: Quali metodi vengono utilizzati per studiare o prevedere la capacità di favorire 
osteointegrazione? Collegate i metodi ai diversi aspetti dell’osteointegrazione e alle caratteristiche del 
dispositivo. Quali sono gli aspetti critici nel valutare l’osteointegrazione? </p>
<p> 1. un documento organizzato a vostro piacere, che risponda alle domande del paragrafo “contenuti”. 
Il documento deve essere curato, con riferimenti bibliografici, figure e schemi. 
2. Una figura/schema che riassuma il messaggio del vostro documento, che metterete subito sotto il 
titolo, come “graphical abstract”, riassunto grafico. 
3. Un “tweet” che usereste per lanciare sul social il vostro documento. In tutto due brevi frasi, che 
metterete subito sotto la figura riassuntiva (graphical abstract) <p>
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
