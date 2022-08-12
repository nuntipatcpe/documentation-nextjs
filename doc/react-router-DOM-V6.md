# React Router DOM V6

## install
```
npm install react-router-dom
```

- import

```
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
```
- Create **Router**

```
<Router>
    <></>
</Router>
```
- Create **Routes**

```
<Routes>
    <Route path="/pathname" element={<></>}/>
</Routes>
```
- Create **Link**

```
<Link to="/pathname"> </Link>
```

**Usage**

- App.js

```
import { BrowserRouter,Routes,Route} from "react-router-dom";
```
```
return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/pathname" element={</component>}/>
            </Routes>
        </BrowserRouter>
    </>
)
```
- Component.js

```
import { Link} from "react-router-dom";
```
```
return (
    <>
        <nav>
            <Link to="/pathname">link</Link>
        </nav>
    </>
)
```
## useParams

- set Route **:id**

```
<Route path='/Products/:id' element={<Products/>} />
```

- Usage **{id}**

```
import{useParams} from 'react-router-dom'
``` 
```
const {id} = useParams();
```