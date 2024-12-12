const accordionItems = document.querySelectorAll(".main-look");

accordionItems.forEach(item =>{
    const button = item.querySelector('.row');
    const content = item.querySelector('.discription');

        button.addEventListener('mouseover', () => {
        item.classList.toggle('active');
    })

    button.addEventListener('mouseout', () => {
        item.classList.remove('active');
    })
})