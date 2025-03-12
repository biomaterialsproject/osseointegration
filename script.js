// Funzione per caricare dinamicamente il contenuto
function loadContent(content) {
    let contentDiv = document.getElementById('contenuto');
    
    // Carica il contenuto in base al valore passato
    if (content === 'pagina1') {
        contentDiv.innerHTML = `
            <div id="pagina1-contenuto">
                <h2>Pagina 1: Introduzione</h2>
                <p>Benvenuti nella prima sezione del sito. Qui potete trovare una panoramica generale dei temi trattati.</p>

                <h3>Cos'è questo sito?</h3>
                <p>Questo sito è un esempio di come strutturare una pagina HTML con collegamenti interni per navigare facilmente tra le diverse sezioni.</p>
            </div>
        `;
    } else if (content === 'sezione2') {
        contentDiv.innerHTML = `
            <h2>Sezione 2: Dettagli</h2>
            <p>Contenuti di esempio per la sezione 2...</p>
        `;
    }
}
