const dropdownMenu = (function(){
    console.log('dropdown menu loaded')
    const menuElements = document.querySelectorAll('#dropdown-container li');
    menuElements.forEach(element => {
        element.addEventListener('click', toggleDropdown)
    })

    function toggleDropdown(event){
        const closeAllDropdown = (function(){
            menuElements.forEach(element => {
                if(element.dataset.menu !== event.target.dataset.menu){
                    document.querySelector(`#menu-${element.dataset.menu}`).classList.remove('shown')
                }
            })
        })()
        
        let currentMenu = event.target.dataset.menu;
        let menuContent = document.querySelector(`#menu-${currentMenu}`)
        menuContent.classList.toggle('shown')
    }
})()

export default dropdownMenu