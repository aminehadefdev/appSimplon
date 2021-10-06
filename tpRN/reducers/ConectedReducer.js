import React, {useState} from 'react';

const CONECTED = "CONECTED"
const DISCONECTED = "DISCONECTED"

var isConected = false

const ConectedReducer = ({action})=>{
    const [isConected, setIsConected] = useState(isConected)
    switch (action) {
        case "CONECTED":
            isConected = true
            return isConected
            break;
        case "DISCONECTED":
            isConected = false
            return isConected
            break;
        case "GET":
            return isConected
            break;
    }
}

export {ConectedReducer, isConected}