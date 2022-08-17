import Link from 'next/link'

import{ useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { user} from "../assets/username";


export const getStaticProps = ()=>{


  // function getCookie(name){
  //   const cDecoded = decodeURIComponent(document.cookie);
  //   const cArrey = cDecoded.split("; ");
  //   let result = null;
  //   cArrey.forEach(e =>{
  //       if(e.indexOf(name) == 0){
  //           result = e.substring(name.length + 1)
  //       }
  //   })
  //   return result;
  // }


  // if (Cookies.get('password')!=='1234') {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {  },
  }
}


export default function Home() {

  const [valid, setValid] = useState(false);
  
  const round =useRouter();
  
  useEffect(()=>{
    if(localStorage.getItem("token") === `${user.id}_${user.password}_valid` ){
      setValid(true);
      console.log(valid);
    }else{
      round.push('/login');
    }
  },[]);

  function onLogout (){
    console.log('onLogout');
    localStorage.removeItem("token");
    round.push('/login');
  }

  // setValid.set(true);
  // Cookies.set('boom','1');
  // console.log(Cookies.get('password'));
  if(valid){
    return (
    <div className="max-w-[720px] w-[720px] p-10 bg-neutral-50 overflow-auto">
       Home
       <button className='bg-neutral-900 text-neutral-50 my-2 p-2 w-full' onClick={()=>onLogout()}>Logout</button>
    </div>
  );
  }
  return (
    <div className="max-w-[720px] w-[720px] p-10 bg-neutral-50 overflow-auto">
    
    </div>
  )
  
}
