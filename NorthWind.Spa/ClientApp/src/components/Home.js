import React, { Component } from 'react'
import SimpleDataTable from './SimpleDataTable'
import ShowProductForm from './ShowProductForm'

class Home extends Component {
    // contendra propiedades
    state = {
        products: [
            { id: 1, name: 'Azucar', unitPrice: 19.50, unitInStock: 50 },
            { id: 2, name: 'Leche', unitPrice: 8, unitInStock: 150 },
            { id: 3, name: 'Frijol', unitPrice: 8, unitInStock: 300 },
        ]
    }

    //agregar un producto nuevo
    addProduct = product => {
        this.setState(previous => ({
            products: [...previous.products, product]
        }))
    }

    //modificar creando una copia del arreglo en la propiedad
    updateProduct = product => {
        const newProducts = this.state.products.slice();
        const index = newProducts.findIndex(p => p.id === product.id);
        newProducts[index] = product;
        this.setState({
            products: newProducts
        })
    }

    // Filter devuelve los datos bajo la condicción definida
    // En este caso muestra todos los que tienen un id distinto
    removeProduct = productId => {
        const newProducts =
            this.state.products.filter((product, i) => {
                return productId !== product.id
            })
        //actualizar el estado
        this.setState({
            products: newProducts
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

