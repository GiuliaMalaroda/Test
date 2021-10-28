import Button from 'react-bootstrap/Button';

const CustomButton = ({ as, size, value, type, variant, disabled, active, icon }) => {
    let extraClasses;

    if (icon) {
        if (icon[0] === "only") {
            extraClasses = `btn-icon-${icon[0]}`;
        } else {
            extraClasses = `btn-icon-${icon[0]}`;
        }
    }

    return (
        <Button 
            as={as}
            type={type ? type : "button"}
            variant={variant ? variant : "venetian-red"}
            size={size}
            value={value}
            disabled={disabled}
            active={active}
            className={extraClasses} >
            {icon && icon[0] === "left" && (
                <span className="material-icons">
                    {icon[1]}
                </span>
            )}  
            {as !== "input" && value !== "" ? value : null}
            {icon && icon[0] === "only" && (
                <span className="material-icons">
                    {icon[1]}
                </span>
            )}
            {icon && icon[0] === "right" && (
                <span className="material-icons">
                    {icon[1]}
                </span>
            )}  
        </Button>
    )
}

export default CustomButton;