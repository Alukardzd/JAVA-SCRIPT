let total = 0;

const products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99',
  ];

  for(const product of products) {
    const subArray = product.split(':');
    const name = subArray[0];
    const price = Number(subArray[1]);
    total += price;
    const itemText = `${name} - $${price}`;
    console.log(itemText)
  }
  console.log(`E a fatura total é de ${total.toFixed(2)}`)