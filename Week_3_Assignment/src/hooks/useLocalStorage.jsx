import { useState, useEffect } from "react";
function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
    try {
        const storedValue = localStorage.getItem(key);
        
        if (storedValue === null || storedValue === "undefined" || storedValue === undefined) {
            return initialValue;
        } 
        return JSON.parse(storedValue);
    } catch (error) {
        console.error('localStorage parse error:', error);
        return initialValue;
    }
    });

    //  useEffect(() => { 
    //     const storedValue = localStorage.getItem(key); 
    //     if (storedValue){ 
    //         setValue(JSON.parse(storedValue)); 
    //     } 
    // }, [key]) 
    


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]

}
export default useLocalStorage