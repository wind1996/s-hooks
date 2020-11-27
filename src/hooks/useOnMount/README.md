## useOnMount

### 示例

```jsx
import React from "react";
import reactDom from "react-dom"
import { useOnMount } from "s-hooks"

function App(){
    useOnMount(()=>{
        console.log("componentDidMount")
    })
}

reactDom.render(<App/>,document.getElementById("root"))
```
