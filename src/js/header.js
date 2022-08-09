let activedItem = document.querySelector('.actived')
activedItem.style.color = "#a30000"

const navItemList = document.querySelectorAll('.nav-menu__link')
navItemList.forEach(item => {
    item.addEventListener('click', event => {
        navItemList.forEach(_item => {
            _item.classList.remove("actived");
            if (window.scrollY < 800) {
                _item.style.color = "#fafafa"
            } else {
                _item.style.color = "#fec8cd"
            }
        })
        event.target.classList.add("actived")
        event.target.style.color = "#a30000"
    })
    item.addEventListener('mouseover', event => {
        event.target.style.color = "#a30000"
    })
    item.addEventListener('mouseout', event => {
        navItemList.forEach(_item => {
            if (window.scrollY < 800) {
                _item.style.color = "#fafafa"
            } else {
                _item.style.color = "#fec8cd"
            }
        })
        activedItem = document.querySelector('.actived')
        activedItem.style.color = "#a30000"
    })
})

const topButton = document.querySelector('.scroll-top__btn')
const header = document.querySelector('.header')
const subBrandlogo = document.querySelector('.brandlogo__span')

document.addEventListener('scroll', () => {
    activedItem = document.querySelector('.actived')
    activedItem.style.color = "#a30000"
    if (window.scrollY < 800) {
        header.style.backgroundColor = "#fec8cd";
        topButton.style.visibility = "hidden";
        navItemList.forEach(item => {
            item.style.color = "#fafafa";
        })
        document.querySelector('.phone__btn').style.display = "block";
        activedItem.style.color = "#a30000"
        subBrandlogo.style.color = "#fafafa"
    } else {
        header.style.backgroundColor = "#fafafa"
        topButton.style.visibility = "visible"
        navItemList.forEach(item => {
            item.style.color = "#fec8cd";
        })
        document.querySelector('.phone__btn').style.display = "none";
        activedItem.style.color = "#a30000"
        subBrandlogo.style.color = "#ff7d8a"
    }
})

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})