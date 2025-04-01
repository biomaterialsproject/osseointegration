// Funzione per attivare il link selezionato
function activateLink(selected) {
    // Rimuovi la classe "active" da tutti i link
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Aggiungi la classe "active" al link selezionato
    document.getElementById(selected).classList.add('active');
}

// Funzione per mantenere attivo il link alla pagina iniziale
window.onload = function() {
    // Ottieni il nome della pagina corrente
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0]; // Ottieni il nome del file senza l'estensione

    // Se la pagina è la homepage (index.html), attiva 'uno'
    if (page === 'index' || page === '') {
        activateLink('uno'); // Se la home page è caricata, attiva 'uno'
    } else {
        activateLink(page); // Altrimenti, attiva il link della pagina attuale
    }
}
