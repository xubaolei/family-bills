import React,{Component} from 'react';

class ReactStackForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value :'modx'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        this.setState({
            value: target.value
        });
    }

    handleSubmit(event){
        console.log('picked' + this.state.value);
        console.log(this.state);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='React'>React</option>
                    <option value='redux'>redux</option>
                    <option value='modx'>modx</option>
                </select>
                <input type='submit' value='选择'/>
            </form>
        );
    };
}

export default ReactStackForm;