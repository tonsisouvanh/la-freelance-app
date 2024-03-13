import { useState } from 'react'
import {Button, DatePicker} from "antd";

function App() {
  const [count, setCount] = useState(0)
    const [isshow, setIsshow] = useState(
        false
    )
console.log(isshow)
  return (
    <>
        <div>
            <div>
                <h1>
                    Login
                </h1>
            </div>
            <div>
                <input className={"border"} />
                <button onClick={() =>
                    setIsshow(!isshow)}>rrrrrrrrr</button>

                {isshow && (<p>
                    hi
                </p>)}
            </div>
        </div>
    </>
  )
}

export default App
