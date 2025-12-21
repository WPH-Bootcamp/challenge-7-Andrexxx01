type ButtonProps = {
  label:string,
  href?:string,
  className?:string,
  id?:string,
  onClick?: () => void,
}

const Button:React.FC<ButtonProps> = ({label, href = "#", className = "", onClick, id = ""}) => {
  return (
    <a id = {id} onClick = {onClick} href = {href} className={`rounded-full flex items-center justify-center ${className}`}>{label}</a>
  )
};

export default Button;
