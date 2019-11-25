import React, {Component, Fragment} from 'react'
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
import ProductForm from './ProductForm'


class ShowProductForm extends Component{
    // estado que indica si modal esta abierto o cerrado
    state={
        isOpen: false
    }

    // sera pasado como props al form
    toggleModal = () => {
        this.setState(previousState => ({
        isOpen: !previousState.isOpen
    }))
    
    }

    //renderizar un boton junto un componente modal
    render(){
        let button ='';
        let title ='Editar datos del producto';
        
        if(this.props.isNew){
            title = 'Agregar un nuevo producto'
            button = <Button color='success' onClick={this.toggleModal}
            style ={{ minWidth:'90px'}}>Agregar</Button> 
        }else{
            button = <Button color='warning' onClick={this.toggleModal}
            style ={{ minWidth:'90px'}}>Editar</Button>
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.isOpen}
                toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    <ProductForm
                    addProduct={this.props.addProduct}
                    updateProduct={this.props.updateProduct}
                    toggle={this.toggleModal}
                    product ={this.props.product}/>
                </ModalBody>
            </Modal>
        </Fragment>
    
    }
        
}

export default ShowProductForm



