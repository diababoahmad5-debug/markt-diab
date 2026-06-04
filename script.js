function addToCart(name, price) {
    const cartList = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = `${name} - ${price} ريال`;
    cartList.appendChild(li);
    alert('تمت إضافة ' + name + ' إلى السلة!');
}
