//전화번호 정보를 보여주는 component 설치
//components for displaying telephone information

import React, { Component, Fragment} from 'react';
//Fragment :  div 하나 이상 쓸 때 사용하는 경우

class PhoneInfo extends Component {
  
  state={
    editing : false,
    name:'',
    phone:''
    // editing 을 했을 때 원래 값이 아니라  edited 된 값을 보여주기 위한 것
  }
  
  //새로 업데이트 된 것만 렌더링 하면 됨, otherwise whole list would be randered
  shouldComponentUpdate(nextProps, nextState){
    if (this.state !== nextState){
      return true;
    }
    return this.props.info !== nextProps.info;
  }

  handleRemove =()=>{
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }
  
  //false 인 editing 값을 반전시켜주는 함수 false <-> true
  
  handleToggleEdit = () =>{
    // edit 하고 나서 이전 값이 placeholder 처럼 보이게 해주기
    // 1) true-> false 되는경우
    // 1-1) onUpdate 를 통해서 부모에게 update 된 것을 알리기
    // 2) false -> true
    //2-1) props 로 받아온  name 과 phone 값을 state 에 넣어야함
    const {info, onUpdate} = this.props;
    if ( this.state.editing){
      onUpdate(info.id, {
        name:this.state.name,
        phone: this.state.phone
      });
    }else{
        this.setState({
          name: info.name,
          phone: info.phone

        })
    } 
    this.setState({
      editing: !this.state.editing
    })
  } 
  //handleChange
  handleEdit = (e)=>{ 
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    const {name, phone} = this.props.info;
    const {editing}=this.state;

    const style={
      border: '1px solid black',
      padding:'8px',
      margin:'8px',
    }; 

    console.log(name);
    return(
      
      <div style={style}>

       {/*edit 걊이 true => 보여주기 edit 값 false => 기존거 보여주기*/}

        {
          editing ? (
            <Fragment>
              <div><input name="name" onChange={this.handleEdit} value={this.state.name}/></div>
              <div><input name="phone" onChange={this.handleEdit} value ={this.state.phone}/></div>
            </Fragment>  
          ) : (
              <Fragment>
                <div><b>{name}</b></div>
                <div>{phone}</div>
              </Fragment>
            )
        }

        
        <button onClick={this.handleRemove}>Remove</button>
        {/* 실제 수정 모드일 때는 수정이 아니라 '확인' 으로 나타나게 하기위해 3항 연산자 사용*/}
        <button onClick={this.handleToggleEdit}>
         {editing ? 'Okay': 'Edit'}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
