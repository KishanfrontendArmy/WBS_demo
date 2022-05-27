import './Button.css'

const Button = (props) => {
    return (
        <div className={`a_btn ${props.type}`}>
            {props.target ?
                <a href={props.href} target="_blank" rel="noreferrer">
                    {props.name}
                </a>
            :
                <a href={props.href}>
                    {props.name}
                </a>
            }
        </div>
    )
}

export default Button;