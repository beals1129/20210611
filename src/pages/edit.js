import React, { useState } from 'react'

// import BoxEditor from '../components/edit/box-editor'
import WebtoonEditor from '../components/edit/webtoon-editor'
import Webtoon from '../components/shared/webtoon'

export default function EditPage() {
   return(
   <div><WebtoonEditor />
        <Webtoon />
   </div>)
    //상태변경 ( 색상이 바뀐다던지 ) 배열을 return  [1, 2]첫번째인자는 값 두번째는 함수
    // 함수이름은 state(color) 앞에 set 을 붙인다. setColor
    //useState > 기본 색상 상태값
    // return (
    //     <div>
    //        <BoxEditor />
    //        <div> e다른컨텐츠</div>
    //     </div>
    //     )
        //바뀌지 않을 아이들]
        //상태캆이 아래에잇는곳 아레애엣 있는것들은 전부 바뀔때마다 바뀐다
        //> 적저하게 배치해야한다.

}