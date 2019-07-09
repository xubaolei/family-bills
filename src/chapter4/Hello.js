import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.timer = null;

        this.state = {
            date : new Date()
        };

        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.updateDate,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    updateDate(){
        this.setState({
            date : new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <h1>{this.state.date.toString()}</h1>
            </div>
        );
    }
}

export default Hello;