import { useState } from 'react';
import BtnBar from './Buttons/BtnBar';
import Display from './Display/Display';

function App() {

    const [count, setCount] = useState('')
    const [res, setRes] = useState('')

    const operations = ['+', '-', '*', '/', '.']

    const displayShow = (value) => {

        setCount((num) => {

            if (operations.includes(value) && (num === '')) return num

            if (operations.includes(value) && operations.includes(num.slice(-1))) {
                const newNum = num.slice(0, -1)
                return num = newNum + value
            }

            if (count === res && !operations.includes(value)) {
                return num = value
            }

            return num += value
        })

    }

    const orerationGo = (value) => {
        if (value === "reset") setCount((num) => num = '')
        if (value === "=") {
                setCount((num) => num = eval(num).toString())
                setRes(eval(count).toString())
        }
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <Display count={count}/>
                <BtnBar displayShow ={displayShow } orerationGo={orerationGo} />
            </div>
        </div>
    );
}


export default App;
