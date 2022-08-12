# Spread Operator
- **...** Variable Array

```
const newArr = [100,200,300];
const data = [10,20,...newArr];
console.log(data);
```
- variableArr.**push(...newArr)**;

```
const newArr = [100,200,300];
const data = [10,20];
data.push(...newArr);
console.log(data);
```