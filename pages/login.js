import React,{useState} from 'react'

import {Aut} from '../assets/username';

import { useRouter } from 'next/router';

function login() {
    const [username , setUserName]= useState('');
    const [password , setPassword]= useState('');


     function setCookie(name,value,dayTolive){
        const date = new Date();
        date.setTime(date.getTime()+dayTolive*24*60*60*1000);
        let expires = `exprires= ${date.toUTCString()}`;
        document.cookie = `${name}=${value}; path=/`;
        // console.log(document.cookie);

    }
     function deleteCookie(name){

        setCookie(name,null,null)
        // console.log(document.cookie);

    }


    function getCookie(name){
        const cDecoded = decodeURIComponent(document.cookie);
        const cArrey = cDecoded.split("; ");
        let result = null;
        cArrey.forEach(e =>{
            if(e.indexOf(name) == 0){
                result = e.substring(name.length + 1)
            }
        })
        return result;
    }

    const round = useRouter();
    function handleSubmit (e){
        e.preventDefault()
        console.log(Aut());
        setCookie('usernaem','boom',10);
        setCookie('password','1234',10);
        document.cookie="name=Martin; max-age=0";
        round.push('/')
    }

    
   


  return (
    <div className="max-w-[720px] w-[720px] p-10 h-[100vh] bg-neutral-50 overflow-auto flex justify-center items-center">
      <form action="" onSubmit={(e)=>handleSubmit(e)} >
            <div className='flex flex-col gap-y-2'>
                <input type="text" placeholder='usename' className='p-2' name={username} onChange={(e)=>setUserName(e.target.value)} required />
                <input type="password" placeholder='password'className='p-2' name={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <input type="submit" className='bg-neutral-900 text-neutral-50 my-2 p-2 w-full' value={'Login'}/>
      </form>
        {/* <form action="/">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <input type="submit"/>
        </form> */}

    </div>
  )
}

export default login