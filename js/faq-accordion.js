export default function faqAccordion() {

    document.addEventListener('DOMContentLoaded', () => {

        const faqList = document.querySelector('[data-accordion="close"]');
        const faqItems = faqList.querySelectorAll('[data-accordion-item]');
 
        faqItems.forEach((item, index) => {

            const headerContent = item.querySelector("[data-accordion-header]");
            const content = item.querySelector('[data-accordion-content]');

            headerContent.addEventListener('click', () => {
                //Fecha todos os conteúdos abertos
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('[data-accordion-content]');
                    if(otherItem !== item) {
                        otherContent.classList.remove('open');
                        //otherContent.style.display = 'none';
                    }
                });

                // Alterna a exibição do conteúdo clicado
                    content.classList.toggle('open');

                /*if(content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }*/
                
            });

            // Inicializa o estado do conteúdo
            /*if(index === 0) {
                content.style.display = 'block'; // Abre o primeiro item
            }else {
                content.style.display = 'none'; // Fecha os demais itens
            }*/

            if (index === 0) {
                content.classList.add('open'); // Abre o primeiro item
            }
        });


        //console.log(faqList);
        console.log(faqItems);

    });
    
}