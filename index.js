const ProductManager = require("./products/products")
const productManager = new ProductManager();
productManager.addProduct('Lona Zonda 900', 'Descripción del producto 1', 10, '.jpg', '001', 100);
productManager.addProduct('Lona Trasnparente', 'Descripción del producto 2', 20, 'jpg', '002', 50);
productManager.addProduct('Coversol', 'Descripción del producto 3', 30, 'jpg', '003', 200);

const productList = productManager.getProducts();

for (const product of productList) {
  console.log(`ID: ${product.id}`);
  console.log(`Título: ${product.title}`);
  console.log(`Descripción: ${product.description}`);
  console.log(`Precio: ${product.price}`);
  console.log(`Thumbnail: ${product.thumbnail}`);
  console.log(`Código: ${product.code}`);
  console.log(`Stock: ${product.stock}`);
  console.log('---------------------');
}



    
  