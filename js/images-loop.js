export default function imagesLoop() {

    const imageLogo = document.querySelector('[data-logo="images"]');
    const imagesContainer = document.querySelector('[data-container="container"]');
    const images = document.querySelectorAll('[data-logo="images"] img');

    let totalWidth = 0;
    images.forEach((image)  => {
        totalWidth += image.clientWidth;
    });

    imageLogo.style.width = `${totalWidth}px`;

    let currentPosition = 0;

    function animate() {
        currentPosition -= 1;
        if(Math.abs(currentPosition) >= totalWidth) {
            currentPosition = imagesContainer.clientWidth;
        }
        imageLogo.style.transform = `trasnlateX(${currentPosition}px)`;
        requestAnimationFrame(animate);
    }

    animate();

}