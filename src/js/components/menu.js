const header = document.querySelector('.site-header')
const subMenu = document.querySelectorAll('.sub-menu')
const linksSubMenu = document.querySelectorAll('.menu-item-has-children a')
const btnMenuBack = document.querySelector('.btn-toogle__back')
const btnMenuOpen = document.querySelector('.primary-menu__actions .btn-toogle__open')
const btnMenuClose = document.querySelector('.primary-menu__actions .btn-toogle__close')
const btnSubMenuClose = document.querySelector('.btn-toogle__submenu-wrapper .btn-toogle__close')

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < linksSubMenu.length; i++) {
        const element = linksSubMenu[i]
        element.insertAdjacentHTML('afterbegin', '<button class="btn-submenu"><span class="sr-only">Read More</span></button>')
    }

    const btnSubMenu = document.querySelectorAll('.btn-submenu')

    for (let i = 0; i < btnSubMenu.length; i++) {
        const element = btnSubMenu[i]

        element.addEventListener('click', function() {
            element.parentElement.nextElementSibling.classList.add('active')
            header.classList.add('menu-level-2')
        })
    }

    btnMenuOpen.addEventListener('click', (e) => {
        e.target.style.display = 'none'
        btnMenuClose.style.display = 'flex'
        header.classList.add('menu-level-1')
    })

    btnMenuClose.addEventListener('click', (e) => {
        e.target.style.display = 'none'
        btnMenuOpen.style.display = 'flex'
        header.classList.remove('menu-level-1')
        header.classList.remove('back-menu-level-1')
    })

    btnSubMenuClose.addEventListener('click', () => {
        btnMenuOpen.style.display = 'flex'
        btnMenuClose.style.display = 'none'
        header.classList.remove('menu-level-1')
        header.classList.remove('menu-level-2')

        subMenu.forEach((e) => {
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
    })

    btnMenuBack.addEventListener('click', () => {
        header.classList.add('back-menu-level-1')
        header.classList.remove('menu-level-2')

        subMenu.forEach((e) => {
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
    })
})
