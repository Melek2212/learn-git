document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    navigateTo('home'); // Load the home page content by default
});

function setupNavigation() {
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            navigateTo(pageId);
        });
    });
}

function navigateTo(pageId) {
    const mainContent = document.getElementById('main-content');
    switch (pageId) {
        case 'home':
            mainContent.innerHTML = `
                <section class="hero">
                    <div class="container">
                        <h2>Bienvenue sur TechVista</h2>
                        <p>Votre portail vers les dernières tendances en technologie.</p>
                    </div>
                </section>`;
            break;
        case 'article':
            mainContent.innerHTML = `
                <article class="container">
                    <header>
                        <h2>Les dernières avancées en intelligence artificielle</h2>
                        <p class="meta">Publié le 20 janvier 2024 par Jean Dupont</p>
                    </header>
                    <figure>
                        <img src="https://th.bing.com/th/id/R.bd05e192e847290cd9e4c9e93e97e4e5?rik=HVk4PCpet5vuqg&riu=http%3a%2f%2fdebuglies.com%2fwp-content%2fuploads%2f2017%2f10%2f160516_CC_AI_P.jpg&ehk=twbuJxKptYNQEpKsd8HiBqkI71pTQcs59kRPXDpEwOY%3d&risl=&pid=ImgRaw&r=0" alt="Révolution de l'intelligence artificielle">
                        <figcaption>L'intelligence artificielle transforme notre façon de vivre et de travailler.</figcaption>
                    </figure>
                    <section class="content">
                        <p>L'intelligence artificielle (IA) continue de progresser à un rythme sans précédent...</p>
                    </section>
                </article>`;
            break;
        case 'about':
            mainContent.innerHTML = `
                <section class="about container">
                    <h2>À propos de TechVista</h2>
                    <p>TechVista est une plateforme dédiée à partager des connaissances et des actualités by malek ...</p>
                </section>`;
            break;
        case 'contact':
            mainContent.innerHTML = `
                <section class="contact container">
                    <h2>Contactez-nous</h2>
                    <form id="contactForm" onsubmit="submitContactForm(event)">
                        <input type="text" id="name" name="name" placeholder="Votre nom" required>
                        <input type="email" id="email" name="email" placeholder="Votre email" required>
                        <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </section>`;
            break;
        default:
            mainContent.innerHTML = `
                <section class="container">
                    <p>Page non trouvée.</p>
                </section>`;
    }
}

function submitContactForm(event) {
    event.preventDefault();
    // Assume form submission logic is here.
    alert('Le formulaire a été soumis!');
}
