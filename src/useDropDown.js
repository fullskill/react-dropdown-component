import React, {useState} from "react";

// Default icon
import IconCaretDown from "./assets/caret-down-solid.svg";

const useDropDown = ({label, Icon, defaultColor, items}) => {
    // Default dropdown state: open/close
    const [state, setState] = useState(false);
    // Button color state
    const [color, setColor] = useState(defaultColor);

    // Update dropdown state: open/close
    function handleClickButton() {
        setState( !state );
    }

    // Basic function: Change button color state
    function handleChangeBTColor(e) {
        e.preventDefault();
        const newColor = Math.floor(Math.random()*16777215).toString(16);
        // update button color
        setColor(newColor);
        // close dropdown menu
        setState(!state);
    }

    const Dropdown = () => (
        <div className="button-container">
            <button
                onClick={handleClickButton}
                className={`${state? ' showmenu' : ' hidemenu'}`}
                style={{backgroundColor: '#' + color}}>
                    {Icon && <Icon />}{label}<IconCaretDown />
            </button>
            {items && (
                <div className={`button-submenu${state? ' showmenu' : ' hidemenu'}`}>
                    {items.map(item => (
                        <a key={item.id} onClick={handleChangeBTColor}>{item.Icon && <item.Icon />}{item.label}</a>
                    ))}
                </div>
            )}
        </div>
    );
    return [Dropdown, state, setState];
};

export default useDropDown;