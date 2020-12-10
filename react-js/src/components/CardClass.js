import React, {Component} from 'react'; 

class CardC extends Component {
    state = {
        num: 0
    }

    changeNum (delta =1) {
        return (e) => { this.setState({ num: this.state.num + delta})}
    }


    render() {
        return (
            <div>
                <header>Elo</header>
                <div>{this.state.num}</div>
                <footer>
                    <button type = "button" onClick = { this.changeNum(-1)}>-</button>
                    <button type = "button" onClick = {this.changeNum(1)}>+</button>
                </footer>
            </div>
        ) 
    }
}; 

export default CardC