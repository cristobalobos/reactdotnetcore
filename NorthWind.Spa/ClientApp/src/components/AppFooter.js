import React, { Component } from 'react'

class AppFooter extends Component {
    render() {
        return <>
            <hr />
            <footer style={{ padding: '10px 50px' }}
                className='navbar fixed-bottom bg-dark text-light'>
                <p>(C) 2019 Northwind></p>
            </footer>
            </>
    }
}

export default AppFooter