const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000/api/products';

async function testProductsAPI() {
  try {
    console.log('=== Testing Products API ===');
    
    // GET all products
    console.log('\n1. Getting all products:');
    const getAllResponse = await axios.get(API_BASE_URL);
    console.log(getAllResponse.data);
    
    // POST a new product
    console.log('\n2. Creating a new product:');
    const newProduct = {
      name: 'Tablet',
      price: 299.99,
      category: 'Electronics'
    };
    const createResponse = await axios.post(API_BASE_URL, newProduct);
    console.log('Created:', createResponse.data);
    const productId = createResponse.data.id;
    
    // GET the new product
    console.log('\n3. Getting the new product:');
    const getOneResponse = await axios.get(`${API_BASE_URL}/${productId}`);
    console.log(getOneResponse.data);
    
    // PUT (update) the product
    console.log('\n4. Updating the product:');
    const updatedProduct = {
      name: 'Premium Tablet',
      price: 399.99
    };
    const updateResponse = await axios.put(`${API_BASE_URL}/${productId}`, updatedProduct);
    console.log('Updated:', updateResponse.data);
    
    // DELETE the product
    console.log('\n5. Deleting the product:');
    const deleteResponse = await axios.delete(`${API_BASE_URL}/${productId}`);
    console.log('Deleted:', deleteResponse.data);
    
    // Verify deletion
    console.log('\n6. Verifying deletion:');
    try {
      await axios.get(`${API_BASE_URL}/${productId}`);
    } catch (error) {
      console.log('Product not found (as expected)');
    }
    
    console.log('\n=== API test completed ===');
  } catch (error) {
    console.error('API test failed:', error.message);
  }
}

testProductsAPI();