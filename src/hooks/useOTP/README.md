## useOTP

## 作用

根据 secret 生成对应校验码
```jsx
const {countDownMillSecond, code} = useOtp({secret, EXPIRY, timeout: 100});
```
- secret：密钥
- EXPIRY：过期时间，一般为30，单位为秒
- timeout：每间隔 timeout 秒，更新 countDownMillSecond 和 code
- countDownMillSecond: 将要失效的时间，单位为秒的小数、
- code：根据 secret 生成的码

## 示例

```jsx
import React from "react";
import { useOtp } from "s-hooks";

function App() {
    const secret = "secret"
    const EXPIRY = 30
    const {countDownMillSecond, code} = useOtp({secret, EXPIRY, timeout: 100});
    return (
        <div style={{textAlign: 'left', margin: 20}}>
            <h2>code:{code}</h2>
            <h2>countDownMillSecond:{countDownMillSecond.toFixed(2)}</h2>
        </div>
    );
}

export default App;

```
