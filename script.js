// Funzione per attivare il link cliccato
function activateLink(id) {
    // Rimuovi la classe 'active' da tutti i link
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => link.classList.remove('active'));

    // Aggiungi la classe 'active' al link cliccato
    document.getElementById(id).classList.add('active');
}

// Attiva il primo link al caricamento della pagina
window.onload = function() {
    activateLink('uno'); // Imposta "Uno" come attivo all'inizio
}
