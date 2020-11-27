import {useEffect} from "react";

export default function useOnMount(fn) {
    useEffect(() => {
        fn()
    }, [])
};
