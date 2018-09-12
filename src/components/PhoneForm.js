import React, { Component } from 'react';


class PhoneForm extends Component {

  input=null

  state = {
    name: '',
    phone: '',
  }

  /* When something change in named input, e.target catch it, and put the e.target.value in the state*/
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.onCreate({
          name: this.state.name,
          phone: this.state.phone
      });
      this.input.focus();
      //submit 이후에 input (name)에다가 focus
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> {/* onSubmt ={ tis.ahdleSubmit} when event happens page shoud be protect to be reloaded*/}
        
        {/*when using multiple input you should set input name ex) name="name", name="phone"*/}
        <input
          name="name"
          placeholder="NAME"
          onChange={this.handleChange}
          value={this.state.name}
          ref ={ ref => this.input = ref} //register 이후 name에 집중되게 //여기서 말하는 input 이 위에 input=null 의 input 과 같음
        />
        <input 
          name="phone"
          placeholder="PHONE"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">Registration</button>
        {/* when button typ="submit" is clicked, page is reloaded, and we should protect it by creating handlesubmit */}
        
      </form>
    );
  }
}

export default PhoneForm;
