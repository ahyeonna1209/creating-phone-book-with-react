import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id : 0 ,
        name : 'Ahyeon Diny Na',
        phone :'111-111-111'
      },
      {
        id : 1 ,
        name : 'Cardi B',
        phone :'222-222-222'
      },
      {
        id : 2 ,
        name : 'Nicki Minaj',
        phone :'333-333-3333'
      }
    ],

    keyword : ''
  }
  //keyword 문자열 바꿔줄 함수
  handleKeyword = (e) =>{
    this.setState({
      keyword:e.target.value,
    })
  }
  handleCreate = (data) => {
    //data 값을 information에 넣으려고 함
    //react 에서 값 수정할 때 setstate언제나 수정
    //내부에 있는 객제, 배열 수정할 때는 새로운 객체 concat 사용
    const { information } = this.state;
    this.setState({
      //information:this.state.information.concat(data)
      information: information.concat({
        ...data, //save previous data
        id: this.id++, //id++ when new data is created
      })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  // 현제 information 에다가 filter 를 걸어서 information 안에 있는 info 값이 
  // info.id가 parameter 로 받은 id 가 아닌것만 filter 를 해달라 
  // 즉, Remove 된 id 값이 아닌 다른 information 들을 display 하면 됨

  handleUpdate=(id, data)=>{
    const {information} =this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id == id ) {
            return {
              id,
              ...data, //name, phone 값을 불러옴
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input value={this.state.keyword} onChange={this.handleKeyword} placeholder="Search..." />
          
        <PhoneInfoList
          data={this.state.information.filter(
            info=> info.name.indexOf(this.state.keyword)> -1
          )} // filter 를 통해서 한단어 이상 같은 거 나오면 search 에서 나옴
          /* data={this.state.information} 을 하면서 registration누르면 화면에 뜸*/
          onRemove={this.handleRemove}
          /* handleRemove 를 눌리면 id 다른애들만 리스트에 보이게 됨 */
          onUpdate = {this.handleUpdate} 
        />
      </div>
    );
  }
}

export default App;
