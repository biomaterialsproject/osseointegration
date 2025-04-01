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

// Funzione per caricare il contenuto in base alla sezione selezionata
function loadContent(section) {
    const contentArea = document.getElementById('content'); // Aggiungi un id per l'area di contenuto

    if (section === 'uno') {
        contentArea.innerHTML = `
            <h2>Sezione 1: Introduzione</h2>
            <p>Questo è il contenuto della sezione 1...</p>
        `;
    } else if (section === 'due') {
        contentArea.innerHTML = `
            <h2>Sezione 2: Dettagli</h2>
            <p>Questo è il contenuto della sezione 2...</p>
        `;
    } else if (section === 'tre') {
        contentArea.innerHTML = `
            <h2>Sezione 3: Approfondimenti</h2>
            <p>Questo è il contenuto della sezione 3...</p>
        `;
    } else if (section === 'quattro') {
        contentArea.innerHTML = `
            <h2>Sezione 4: Conclusioni</h2>
            <p>Questo è il contenuto della sezione 4...</p>
        `;
    }
}

// Funzione per mantenere attivo il link alla pagina iniziale
window.onload = function() {
    // Reindirizza sempre alla pagina "uno.html" alla ricarica
    if (window.location.pathname === '/quattro.html' || window.location.pathname === '/tre.html' || window.location.pathname === '/due.html') {
        window.location.replace('uno.html'); // Reindirizza a "uno.html"
    } else {
        // Se siamo già su "uno.html", evidenziamo il link corrispondente e carichiamo il contenuto
        activateLink('uno');
        loadContent('uno');
    }
}
