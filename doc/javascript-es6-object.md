# Object
```
const customer = {
    id : "123",
    email : "nuntipatcpe@gmail.com",
    userName : "boom"
}

console.log(customer);
```

- same variable name

```
const email = "nuntipatcpe@gmail.com";
const id = "123";
const userName = "boom";

const customer = {
    id,
    email,
    userName 
}
console.log(customer);
```
- can set method

```
const email = "nuntipatcpe@gmail.com";

const customer = {
    id : "123",
    showEmail(name){
        console.log(`Email ${name} = ${email}`)
    },
    userName : "boom"
}
customer.showEmail("boom");
```