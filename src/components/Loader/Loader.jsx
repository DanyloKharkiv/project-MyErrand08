import { ThreeCircles } from "react-loader-spinner"
import './Loader.css'

export const Loader = () => {
  return (
    <div><ThreeCircles
  color="var(--accentColor)"
  wrapperClass={"loader"}
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/></div>
  )
}
