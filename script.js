// Funzione per caricare il contenuto dinamico per ogni sezione
function loadContent(section) {
    // Aggiungi la classe 'active' alla sezione selezionata
    setActiveSection(section);

    // Carica il contenuto specifico per la sezione
    const contentDiv = document.getElementById("content");
    if (section === 'uno') {
        contentDiv.innerHTML = "<h2>Contenuto della sezione Uno</h2><p>Questo è il contenuto della pagina uno.</p>";
    } else if (section === 'due') {
        contentDiv.innerHTML = "<h2>Contenuto della sezione Due</h2><p>Questo è il contenuto della pagina due.</p>";
    } else if (section === 'tre') {
        contentDiv.innerHTML = "<h2>Contenuto della sezione Tre</h2><p>Questo è il contenuto della pagina tre.</p>";
    } else if (section === 'quattro') {
        contentDiv.innerHTML = "<h2>Contenuto della sezione Quattro</h2><p>Questo è il contenuto della pagina quattro.</p>";
    }

    // Salva la sezione attiva nel localStorage
    localStorage.setItem('activeSection', section);
}

// Funzione per gestire l'aggiornamento della classe 'active'
function setActiveSection(section) {
    // Rimuovi la classe 'active' da tutte le sezioni
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Aggiungi la classe 'active' alla sezione selezionata
    const activeItem = document.getElementById(section);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Funzione che viene chiamata quando la pagina viene caricata
window.onload = function() {
    // Controlla se c'è una sezione memorizzata nel localStorage
    const activeSection = localStorage.getItem('activeSection') || 'uno'; // Default a 'uno' se non è presente

    // Carica il contenuto della sezione attiva
    loadContent(activeSection);
};
