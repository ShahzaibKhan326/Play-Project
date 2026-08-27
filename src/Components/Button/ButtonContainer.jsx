import "./Button.css"
import Button from "./Button"

export default function ButtonContainer({children}) {
  return (
    <div className='buttonContainer' >
      {children}
    </div>
  )
}

