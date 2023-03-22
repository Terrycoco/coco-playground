import ColorPicker from "coloreact";
import {useState, useEffect} from 'react';

const ColorPicker = (props) => {
    const [color, setColor] = useState(props.color);

    const handleChange = (clr) => {
       setColor(clr.hex);
    }


    return (
        <ColorPicker
            opacity={true}
            color={color}
            onChange={}
    )
}