import React from 'react'
import ReactDOM from 'react-dom'

import EditPage from './pages/signin'
//export defualt 로 내보내는애는 이름 막 쓰기 가능

ReactDOM.render(<EditPage />, document.getElementById('app'))
// 앞은 그릴것 , 뒤는 위치
// 앞은 html 처럼 보이지만 react 에서 약속된 문법으로 사용해야한다. class도 classname 으로 사용
// babel 을 만나면 함수로 @bable preset react 로 

//src  는 js 코드를 모아두는 파일로 약속되어있는 편이다.