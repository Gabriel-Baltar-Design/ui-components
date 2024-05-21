export default function hiddenMenu() {
    
    document.addEventListener("DOMContentLoaded", () => {

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    const menu = document.querySelector('[data-scroll="scroll-menu"]');

    console.log(menu);

    if(!menu) {
        console.log("Elemento não encontrado");
        return;
    }

    console.log('Elmento encontrado');

    window.addEventListener("scroll", () => {

        let scrollTop = window.scrollY|| document.documentElement.scrollTop;
        /*console.log('ScrollTop: ', scrollTop);*/

        if(scrollTop > lastScrollTop) {

            //scroll para baixo remove o menu

            //.log('Scroll para baixo');
            menu.classList.add("hidden");

        }else if(scrollTop < lastScrollTop){

            //scroll para cima volta com o menu
            //console.log('Scroll para cima');
            menu.classList.remove("hidden");

        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    }, false);

});

}