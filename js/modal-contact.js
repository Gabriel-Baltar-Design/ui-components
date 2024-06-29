export default function openModal() {
    
    const contactButton = document.querySelector('[data-contact-button]');
    const contactModal = document.querySelector('[data-modal-contact]');
    const buttonCloseModal = document.querySelector('[data-moda-close]');

    /*console.log(contactButton);
    console.log(contactModal);
    console.log(buttonCloseModal);*/

    contactButton.addEventListener("click", () => {
        contactModal.classList.add("active");
        document.body.classList.add("no-scroll");
    });

    buttonCloseModal.addEventListener("click", () => {
        contactModal.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });

    contactModal.addEventListener("click", (event) => {
        const modalContent = document.querySelector('[data-modal-content]')
        if(!modalContent.contains(event.target)) {
            contactModal.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });

}