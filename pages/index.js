import Link from 'next/link'

import { Aut } from '../assets/username';

import Cookies from 'js-cookie';

export const getStaticProps = ()=>{

  const user = Aut().id

  
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


  if (Cookies.get('password')!=='1234') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
}


export default function Home({ user }) {

  Cookies.set('boom','1');
  console.log(Cookies.get('password'));

  return (
    <div className="max-w-[720px] w-[720px] p-10 bg-neutral-50 overflow-auto">
       Home
    </div>
  );
}
