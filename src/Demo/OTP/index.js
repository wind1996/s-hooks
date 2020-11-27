import useOtp from "../../hooks/useOTP/useOTP";
import React from "react";

function App() {
    const secret = "hello"
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
