export const sendCart = (cart) => {
    fetch('https://fakestoreapi.com/cart',{
        method:"POST",
        body:JSON.stringify(cart)
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}