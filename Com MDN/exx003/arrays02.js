let total = 0;

const products = [
    'Calças:6.99',
    'Meias:5.99',
    'Camisas:14.99',
    'Moletons:31.99',
    'Shorts:23.99',
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