document.addEventListener('DOMContentLoaded',()=>{
    const productContainer = document.getElementById('product-container');

    //fetching

    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(e=>{
        e.forEach(y=>{
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
            <img src="${y.image}" alt="${y.title}">
            <h2>${y.title}</h2>
             <p>${y.price}</p>
            <p>${y.description}</p>`;
            
            productContainer.appendChild(productElement);

        })
    })
    .catch(error=> consoler.error(error));
})