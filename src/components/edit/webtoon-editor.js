import React, { useState } from 'react'



function WebtoonEditor() {
    const [webtoon, setWebtoon] = useState({
        title: '',
        author: '',
        description: '',
        imageUrl: ''
    }) 





    // const [title, setTitle] =useState('')
    // 이런식으로 하나하나 쓸수 있지만 이런경우 중복이 많아짐 같은 변화이기에 묶어도 된다.





    const {title, author , description, imageUrl} = webtoon





    //1대1매칭을 해주면 리셋이 되면  
    //webtoon.title webtoon.description 이런식으로 사용되는것을 쉽게 보기위해 이렇게 작성





    const handleWebtoon = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value) //console 창에 띄움
        setWebtoon({
            ...webtoon,
            [event.target.name]: event.target.value,
        })
    }


    const handleSubmit = () => {
        console.log(webtoon)
    }



    // const onChangeDefault=() => {
    //     setWebtoon('')
    //     // console.log(webtoon)
    // } // 각각의 것을 기본으로 만들어주려면 어떻게해야하지..?


    // 핸들 웹툰에대한 변화를 주는 함수 이름

    return(
        <div>
            <input placeholder="타이틀" 
            name="title" 
            onChange={handleWebtoon} 
            onChangeDefault={onChangeDefault}

            value={webtoon.title} />

            <input placeholder="작가" 
            name="author" 
            onChange={handleWebtoon} 
            value={author}/>

            <input placeholder="소개" 
            name="description"
            onChange={handleWebtoon} 
            value={description}/>

            <input placeholder="이미지" 
            name="imageUrl"
            onChange={handleWebtoon} 
            value={imageUrl}/>

            <button onClick={handleSubmit}>등록</button>
            
        </div>

    )
}

export default WebtoonEditor