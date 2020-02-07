import React from 'react';
import './Main.css';
import ContentFont from './ContentFont';
import { Link } from 'react-router-dom';

class Page2 extends React.Component {
    state = {
        number: 0
    }
    changeText() {
        if(this.state.number >= 0){
            this.setState({
                number: this.state.number + 1,            
            })
        }
        if(this.state.number > 6){
            this.setState({
                number: 0
            })
        }
    }
    componentDidMount() {
        const interval = 4000;

        this.timer = setInterval(
            () => this.changeText(), interval
        );
    }
    render() {
        const arrText = [ 'React', 'Javascript', 'ES6', 'HTML', 'CSS', 'Bootstrap', 'JQuery'];
        return (
            <div className="page">
                <div className="row-div">
                    <div className="row-div tech-font blink-text orange-color width-90">
                        <ContentFont text="My Tech Stack : " />
                        <div className="tech-content-div column-div margin-3 width-15">
                            {arrText[this.state.number]}
                        </div>
                    </div>
                    <div className="orange-color content-font one-rem column-div margin-05">
                        <Link to="/3"><span className="orange-color">>></span></Link>
                        <Link to="/3"><span className="orange-color">Next</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page2;