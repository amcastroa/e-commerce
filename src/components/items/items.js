function items (){
    /// profe //
    const itemsDiv = document.getElementById("items__div")
    const ulItem = document.createElement("ul")
    ulItem.classList.add("items__ul")

    itemsDiv.appendChild(ulItem)


    let ref = window.localStorage.category
    console.log(ref);

    async function productApi() {
        const url = 'https://ecommercebackend.fundamentos-29.repl.co/'
        const res = await fetch(url)
        try {
            const data = await res.json()
            console.log(data);

            for (const product of data) {

                const li = document.createElement('li')
                li.classList.add('items__li')
                if (product['category'] === ref) {
                    li.innerHTML += `
        
                    <img src=${product.image} alt=${product.name} class = 'items__img'>
                    
                    <div class = 'items__li--div'>
                    <h2 class='items__li--h2' >${product.name}</h2>
                    
                
                    <h3 class='items__li--h3'>$${product.price}.00</h3>
                    </div>
                    `
                    ulItem.appendChild(li)
                }
                
                li.addEventListener('click', () => {
                    console.log(`Me has pillado con tu clic y soy if: ${product.id}`);
                    localStorage.setItem('productModal', `${product.id}`)
                    window.location.href = `../../../detail.html?id=${product.id}`
                })
            }




        } catch (error) {
            console.log(error);
        }


    }
    productApi()




}

export default items