import React, { Component } from 'react'
import SimpleDataTable from './SimpleDataTable'
import ShowProductForm from './ShowProductForm'
import ProductsClient from '../ProductClient'

class Home extends Component {
    // contendra propiedades
    state = {
        products: []
    }

    //Operaciones CRUD
    async componentDidMount() {
        const productsData = await ProductsClient.getProducts();
        this.setState({ products: productsData});
    }

    // equivalente
    //componentDidMount() {
    //    ProductsClient.getProducts()
    //        .then(products => 
    //            this.setState({
    //                products: productsData
    //            }))
    //}

    

    //agregar un producto nuevo
    addProduct = product => {
        ProductsClient.addProducts({
            name: product.name,
            unitPrice: parseFloat(product.unitPrice),
            unitInStock: parseInt(product.unitInStock)
        })
            //cuando regrese
            .then(newProduct => this.setState(previous => ({
                products: [...previous.products, newProduct]
            })))       
    }

    //modificar creando una copia del arreglo en la propiedad
    updateProduct = product => {
        ProductsClient.updateProducts({
            id: product.id,
            name: product.name,
            unitPrice: parseFloat(product.unitPrice),
            unitInStock: parseInt(product.unitInStock)
        })
            .then(() => {
                const newProducts = this.state.products.slice();
                const index = newProducts.findIndex(p => p.id === product.id);
                newProducts[index] = product;
                this.setState({ products: newProducts })
            });
    }

    // Filter devuelve los datos bajo la condicción definida
    // En este caso muestra todos los que tienen un id distinto
    removeProduct = productId => {
        ProductsClient.removeProduct(productId)
            .then(() => {
                const newProducts =
                    this.state.products.filter((product, i) => {
                        return productId !== product.id
                    })
                this.setState({
                    products: newProducts
                })
            })       
    }
    render() {
        return (
            <div className='container'>
                <SimpleDataTable
                    productsData={this.state.products}
                    removeProduct={this.removeProduct}
                    updateProduct={this.updateProduct} />
                <ShowProductForm isNew={true}
                    addProduct={this.addProduct} />
            </div>
        )
    }
}

export default Home

