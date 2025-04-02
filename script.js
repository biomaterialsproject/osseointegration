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

    if (page === 1) {
        content.innerHTML = `
            <h2>Benvenuto nella sezione Home!</h2>
            <p>Questa è la sezione Home. Clicca sulle altre sezioni per vedere contenuti differenti.</p>
        `;
    } else if (page === 2) {
        content.innerHTML = `
            <h2>Sezione Due</h2>
            <p>Questa è la sezione due. Qui discuteremo degli aspetti avanzati dell'osteointegrazione.</p>
        `;
    } else if (page === 3) {
        content.innerHTML = `
            <h2>Sezione Tre</h2>
            <p>Questa è la sezione tre. Qui esploreremo le tecniche moderne utilizzate per valutare l'osteointegrazione.</p>
        `;
    } else if (page === 4) {
        content.innerHTML = `
            <h2>Sezione Quattro</h2>
            <p>Questa è la sezione quattro. Qui parleremo dei recenti sviluppi nella tecnologia dei biomateriali.</p>
        `;
    }
}
