function loadHome() {
    document.getElementById('contenuto').innerHTML = `
        <section id="intro">
            <h2>Benvenuti nel nostro progetto di Osteointegrazione</h2>
            <p>Il progetto si concentra sulle tecniche avanzate per valutare l'osteointegrazione, un aspetto cruciale nell'implantologia medica.</p>
            <img src="https://via.placeholder.com/800x400" alt="Osteointegrazione" class="img-responsive">
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
                <p>Descrizione delle principali tecniche utilizzate per valutare l'osteointegrazione.</p>
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
