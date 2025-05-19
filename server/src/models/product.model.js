// In-memory database
let products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 149.99, category: 'Electronics' }
];

let nextId = 4;

module.exports = {
  getAll: () => products,
  getById: (id) => products.find(p => p.id === id),
  create: (product) => {
    const newProduct = { id: nextId++, ...product };
    products.push(newProduct);
    return newProduct;
  },
  update: (id, product) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...product };
      return products[index];
    }
    return null;
  },
  delete: (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      return products.splice(index, 1)[0];
    }
    return null;
  }
};