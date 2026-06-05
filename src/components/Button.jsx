import PropTypes from "prop-types"

export function Button({ onClick, children }){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}