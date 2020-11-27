import React, {useState, useMemo} from 'react';
import useOnMount from '../useOnMount';
import {Totp} from './otp';

export default ({secret, EXPIRY, timeout = 1000}) => {
    const totp = useMemo(() => new Totp(EXPIRY), [EXPIRY]);
    const [countDown, setCountDown] = useState(EXPIRY);
    const [countDownMillSecond, setCountMillSecond] = useState(EXPIRY);
    const [code, setCode] = useState(totp.getOtp(secret));

    const timeLoop = React.useCallback(() => {
        const epochMillSecond = new Date().getTime() / 1000.0;
        const epoch = Math.round(epochMillSecond);
        const _countDown = EXPIRY - (epoch % EXPIRY);
        setCountDown(_countDown);
        setCountMillSecond(EXPIRY - (epochMillSecond % EXPIRY));
        if (epoch % EXPIRY === 0) {
            setCode(totp.getOtp(secret));
        }
    }, [secret]);

    useOnMount(() => {
        const flag = setInterval(timeLoop, timeout);
        return () => {
            clearInterval(flag);
        };
    });

    return {code, countDown, countDownMillSecond};
};
