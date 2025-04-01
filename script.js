function loadHome() {
    document.getElementById('contenuto').innerHTML = `
        <section class="intro">
            <h2>Benvenuti nel progetto di Osteointegrazione</h2>
            <p>Esplora le tecniche avanzate per valutare l'osteointegrazione, una parte fondamentale nell'implantologia medica.</p>
            <img src="https://via.placeholder.com/800x400" alt="Osteointegrazione" class="image-responsive">
        </section>
    `;
    setActiveLink('home');
}

function loadContent(page) {
    let content = '';
    if (page === 'tecniche') {
        content = `
            <section>
                <h2>Tecniche di Osseointegrazione</h2>
                <p>Scopri le tecniche avanzate utilizzate per valutare l'osteointegrazione e la loro applicazione pratica.</p>
            </section>
        `;
    } else if (page === 'podcast') {
        content = `
            <section>
                <h2>Podcast: Approfondimenti sull'Osteointegrazione</h2>
                <p>Ascolta i nostri episodi per approfondire l'osteointegrazione.</p>
            </section>
        `;
    } else if (page === 'risorse') {
        content = `
            <section>
                <h2>Risorse e Ricerche</h2>
                <p>Accedi a articoli scientifici e risorse per approfondire la tua conoscenza sull'osteointegrazione.</p>
            </section>
        `;
    }
    document.getElementById('contenuto').innerHTML = content;
    setActiveLink(page);
}

function setActiveLink(page) {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav ul li a[href='#'][onclick="loadContent('${page}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
