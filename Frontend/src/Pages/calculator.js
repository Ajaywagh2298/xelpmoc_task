import React from "react";
import axios from "axios";
import "./CSS/calculator.css";

let series;

class Fibonacci extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num1: '', num2: '', len: '', fib: []};
        this.handleNum1Change = this.handleChange.bind(this, 'num1');
        this.handleNum2Change = this.handleChange.bind(this, 'num2');
        this.handleLenChange = this.handleChange.bind(this, 'len');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const obj = {
            num1: parseInt(this.state.num1),
            num2: parseInt(this.state.num2),
            len: parseInt(this.state.len)
        };
        series = {
            first: obj.num1,
            second: obj.num2,
        };
        axios
            .post(`http://localhost:9000/fibonacci-series`, obj)
            .then((res) => {
                console.log(res.data);
                this.setState({fib: res.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleChange = (key, event) => {
        this.setState({[key]: event.target.value});
    };

    render() {
        return (
            <>
                <div className={"b-vox"}>
                    <div className={"space"}/>
                    <div className={"container-box"}>
                        <div className="cally-box">
                            <h1>Fibonacci Series Calculator</h1>
                            <div className={"divider"}/>
                            <form onSubmit={this.handleSubmit}>
                                <div className={"d-flex"}>
                                <input
                                    type="text"
                                    name={"num1"}
                                    placeholder="Number 1"
                                    onChange={this.handleNum1Change}
                                />
                                <input
                                    type="text"
                                    name={"num2"}
                                    placeholder="Number 2"
                                    onChange={this.handleNum2Change}
                                />
                                <select className={"cal-slt"} name={"len"} onChange={this.handleLenChange}>
                                    <option className={"slt-op"} value={"#"}>
                                        Range Of Series
                                    </option>
                                    <option className={"cal-slt-op"} value={"5"}>
                                        5
                                    </option>
                                    <option className={"cal-slt-op"} value={"10"}>
                                        10
                                    </option>
                                    <option className={"cal-slt-op"} value={"15"}>
                                        15
                                    </option>
                                    <option className={"cal-slt-op"} value={"20"}>
                                        20
                                    </option>
                                    <option className={"cal-slt-op"} value={"25"}>
                                        25
                                    </option>
                                    <option className={"cal-slt-op"} value={"100"}>
                                        100
                                    </option>
                                </select>
                                </div>
                                <div className={"divider"}/>
                                <input type="submit" value="Calculat"/>
                            </form>

                            <div className={"cal-ques"}>
                               The First Number Is :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.num1}
                            </div>
                            <div className={"cal-ques"}>
                                The Second Number Is :&nbsp;&nbsp;&nbsp;&nbsp;{this.state.num2}
                            </div>
                            <div className={"cal-ques"}>
                                The Range of Series :&nbsp;&nbsp;&nbsp;&nbsp;{this.state.len}
                            </div>
                            <div className={"divider"}/>
                            <div className={"cal-result"}>
                                {this.state.fib.map(l => (l + ", \n"))}
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Fibonacci;