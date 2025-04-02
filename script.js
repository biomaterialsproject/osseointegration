<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biomateriali - Osteointegrazione</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Stile per la voce di navigazione attiva */
        .active {
            font-weight: bold;
            color: #007bff; /* Aggiungi il colore che preferisci */
        }

        /* Stile per i contenuti testuali giustificati */
        .content-text {
            max-width: 600px;
            word-wrap: break-word;
            margin: 0 auto;
            text-align: justify;
        }
    </style>
</head>
<body>
    <!-- Barra superiore -->
    <div class="header">
        <h1>Biomaterials - Group M4</h1>
    </div>

    <!-- Barra di navigazione -->
    <div class="nav">
        <a href="#" class="nav-item" id="nav1" onclick="loadPage(1)">Home</a>
        <a href="#" class="nav-item" id="nav2" onclick="loadPage(2)">Techniques</a>
        <a href="#" class="nav-item" id="nav3" onclick="loadPage(3)">New Researches</a>
        <a href="#" class="nav-item" id="nav4" onclick="loadPage(4)">Podcast</a>
    </div>

    <!-- Contenuto dinamico -->
    <div id="content">
        <!-- Il contenuto dinamico sarà caricato qui -->
    </div>

    <script>
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

        // Carica la pagina "Home" e evidenzia la voce "Home" al caricamento della pagina
        window.onload = function() {
            loadPage(1); // Carica la pagina "Home" al caricamento
        };
    </script>
</body>
</html>
