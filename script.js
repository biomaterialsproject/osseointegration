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
    // Reindirizza sempre alla pagina "uno.html" alla ricarica
    if (window.location.pathname === '/quattro.html' || window.location.pathname === '/tre.html' || window.location.pathname === '/due.html') {
        window.location.replace('uno.html'); // Reindirizza a "uno.html"
    } else {
        // Se siamo già su "uno.html", evidenziamo il link corrispondente
        activateLink('uno');
    }
}
