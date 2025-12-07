interface Product5 {
  readonly id1: number;
  name: string;
  price1?: number;
  description?: string;
}

const product5: Product5 = {
  id1: 1,
  name: "Laptop",
  price1: 320000,
  description: "Laptop is at best price",
};

const product6: Product5 = {
  id1: 2,
  name: "Car",
};
function printProductDetails(product: Product5) {
  console.log(`ID:${product.id1}, Name:${product.name}`);
  if (product.price1 !== undefined) {
    console.log(`Price:${product.price1}`);
  }
  if (product.description) {
    console.log(`Description:${product.description}`);
  }
}
//printProductDetails(product5);
//printProductDetails(product6);

const inventory: Product5[] = [product5, product6];

inventory.push({
  id1: 3,
  name: "keyboard",
  price1: 2000,
});

inventory.forEach(printProductDetails);
