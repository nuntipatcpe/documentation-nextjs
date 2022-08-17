Cookie
```
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

```
