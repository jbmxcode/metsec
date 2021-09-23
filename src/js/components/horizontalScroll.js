const scrollContainer = document.querySelectorAll('h-scroll')

scrollContainer.forEach((e) => {
    e.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    })
})
