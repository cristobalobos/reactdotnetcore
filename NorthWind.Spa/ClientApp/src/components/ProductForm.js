import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

class ProductForm extends Component {
    state = {
        id:0,
        name: '',
        unitPrice:0,
        unitInStock:0
    }

    //cuando el componente ya se monto
    componentDidMount(){
        //quiere modificar los datos de un producto
        if(this.props.product)
        this.setState({
            id: this.props.product.id,
            name: this.props.product.name,
            unitPrice: this.props.product.unitPrice,
            unitInStock: this.props.product.unitInStock
        })}


        //con esto detectamos los cambios que haya hecho el usuario
        onChange = e => {
            this.setState({
                [e.target.name] :e.target.value
            })
        }

        //capturar producto nuevo
        onSubmitNew = e => {
            e.preventDefault();
            this.props.addProduct(this.state);
            this.props.toggle();
        }

        //capturar cuando es una edicion
        onSubmitUpdate = e => {
            e.preventDefault();
            this.props.updateProduct(this.state);
            this.props.toggle();
        }

        render(){
            return(
                <Form onSubmit={this.props.product ? 
                    this.onSubmitUpdate : this.onSubmitNew}>
                        <FormGroup>
                            <Label for='id'>Id: </Label>
                            <Input type='text' name='id' 
                                onChange={this.onChange}
                                value={this.state.id}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Nombre: </Label>
                            <Input type='text' name='name' 
                                onChange={this.onChange}
                                value={this.state.name}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='unitPrice'>Precio unitario: </Label>
                            <Input type='text' name='unitPrice' 
                                onChange={this.onChange}
                                value={this.state.unitPrice}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='unitInStock'>Unidades en existencia: </Label>
                            <Input type='text' name='unitInStock' 
                                onChange={this.onChange}
                                value={this.state.unitInStock}/>        
                        </FormGroup>
                        <button>
                            {this.props.product ? 'Guardar' : 'Crear'}
                        </button>
                    </Form>            
            )
        }    

    }


export default ProductForm