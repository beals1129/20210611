// 복습 연습
import React, { useState } from 'react'

function SigninEditor() {
    const [signin, setSignin] = useState({

    })

    const { id, password, checkPassword} = signin

    const SignInSubmit = () => {
        console.log(signin)
    }

    //onChange 로 input 창 안의 내용이 바뀌는 것을 감지, 
    const handleSignin = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value) //console 창에 띄움
        setSignin({
            ...signin,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div>
            <input  
            placeholder='아이디'
            name= "id"
            onChange ={handleSignin}
            style={{
                display : "block",
            }}/>

            <input 
            placeholder='비밀번호'
            name= "password"
            onChange ={handleSignin}
            style={{
                display : "block",
            }}/>

            <input
            placeholder='비밀번호 재입력'
            name= "checkPassword"
            onChange ={handleSignin}
            style={{
                display : "block",
            }}/>
            <button onClick={SignInSubmit}>등록</button>
        </div>
    )
}

export default SigninEditor