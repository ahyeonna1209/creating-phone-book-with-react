import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
  
  static defaultProps={
    data : []
  }
  
  render(){
    const {data, onRemove, onUpdate } =this.props;
    console.log('rendering list');
    //3)만약 this.props 에 data 가 전달받지 않으면 const list =data.map 에서
    //data 가 map 이 아니기 때문에 error 가 뜸 따라서 render 앞에다가 Default 값 설정 해야함
    const list = data.map(
      info =>(
      <PhoneInfo onRemove={onRemove} onUpdate={onUpdate} info={info} key={info.id} />
      )
      // 1) info 들의 배열을 가지고 PhoneInfo Component 로 변환해줌
      //key 컴포넌트 여러개 랜더링할 때 고유값을 부여해서 업데이트 할 때 최적화 시킴
      //Key: by applying each of own value, it's easy to update when rendering several components
      //4) Props 로 받은 onRemove 를 onRemove 에 받아준다
    );
    return(
      <div> 
        {list}
        {/* 2)PhoneInfo 로 변환해준것을 렌더링 해줌*/}
      </div>
    );
  }
}

export default PhoneInfoList;
