import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>HELLOOOOO</h1>
                <p>welcome to Paris</p>
                <p>{this.props.aminee}</p>
            </div>
        )
    }
}

export default Hello;