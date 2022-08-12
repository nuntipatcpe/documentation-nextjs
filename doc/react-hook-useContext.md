## useContext

- Component 1

```
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
```
- Component 2

```
function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
```
- Component 3

```
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
    </>
  );
}


```
