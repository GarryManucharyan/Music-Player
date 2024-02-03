import { ButtonPropsType } from "../../types";
import { Icon } from "../IconSVG/IconSVG";
import "./HeaderButton.css";
interface IHeaderButtonProps extends ButtonPropsType {
    iconPath?: string;
}

export const HeaderButton = ({ buttonName, onClick = () => { }, iconPath }: IHeaderButtonProps) => {
    return (
        <>
            <button type="button" className="header-button" onClick={onClick}>
                {
                    iconPath && (
                        <Icon path={iconPath} />
                    )
                }
                {buttonName}
            </button>
            <button type="button" className="dropdown">
                <Icon path="dropdown.svg" />
            </button>
        </>
    )
}
