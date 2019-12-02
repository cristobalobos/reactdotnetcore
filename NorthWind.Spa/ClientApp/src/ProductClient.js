const baseApiUrl = '../../api/products'

class ProductsClient {
    static async getProducts() {
        let products = [];
        try {
            const response = await fetch(baseApiUrl);
            products = await response.json();
        }
        catch (error) {
            console.log("el error es"+error);
        }
        return products;
    }

    static async addProducts(product) {
        let newProduct = {};
        try {
            const response = await fetch(baseApiUrl, {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(product)
            });
            newProduct = await response.json();
        }
        catch (error) {
            console.log("el error es"+error);
        }
        return newProduct;
    }

    static async updateProducts(product) {       
        try {
          await fetch(`${baseApiUrl}/${product.id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });          
        }
        catch (error) {
            console.log("el error es"+error);
        }       
    }

    static async removeProduct(id) {
        try {
            await fetch(`${baseApiUrl}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch (error) {
            console.log("el error es"+error);
        }
    }
}

export default ProductsClient