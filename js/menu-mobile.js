export function toggleMenu() {
    
    document.querySelector('[data-menu="mobile"]').addEventListener('click', () => {
        document.querySelector(['[data-menu="menu-mobile"]']).classList.add('show');
    });

    document.querySelector('[data-close="close"]').addEventListener('click', () => {
        document.querySelector(['[data-menu="menu-mobile"]']).classList.remove('show');
    });

}

