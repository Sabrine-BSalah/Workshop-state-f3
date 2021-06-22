import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Counter.css'

class Counter extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    //     console.log("initialisation")
    // }


    state = {
        count: 0,
        inputText: ""
    }

    handleClickAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClickMinus = () => {
        this.state.count > 0 &&
            this.setState({
                count: this.state.count - 1
            })
    }

    // Component life cycle
    componentDidMount = () => {
        console.log("Component did mount")
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component did update")
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount = () => {
        console.log("Component will unmout")
    }

    render() {
        console.log("Render")
        return (
            <div className="counterContainer" >
                <h1>This is a Counter :</h1>
                <div className="counterContent">
                    <Button variant="success"
                        className="counterBtns"
                        onClick={this.handleClickAdd}
                    >+</Button>
                    <h2>{this.state.count}</h2>
                    <Button variant="success"
                        className="counterBtns"
                        onClick={this.handleClickMinus}
                    >-</Button>
                </div>
                <Form.Control type="text"
                    onChange={(e) => this.setState({ inputText: e.target.value })}
                    placeholder="Enter text .." />
                <h3>{this.state.inputText}</h3>
            </div>
        )
    }
}

export default Counter
