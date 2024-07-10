const data = [
    { href: '', text: 'Home' },
    { href: 'about-us', text: 'About' },
    { href: 'chat', text: 'Chat' },
    { href: 'contact', text: 'Contact' },
    { href: 'products', text: 'Products' },
    { href: 'sportas', text: 'Sparta' },
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';
    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <img src="#" alt="Logo">
            <nav>${navHTML}</nav>
        </header>`);
}