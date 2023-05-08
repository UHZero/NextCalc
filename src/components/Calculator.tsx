import Display from './Display'
import Button from './Button'
import Home from '@/hooks/Home'

export default function Calculator() {
    
    const {HandlerNumberInput, handlerClear, handlerDecimalInput, handlerEvaluate, handlerOperatorInput, value} = Home()

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='grid h-20 w-80'>
                <Display  value={ value }/>
            </div>
            <div className='grid grid-cols-4'>
                <Button onClick={handlerClear} value={"AC"} triple />
                <Button onClick={handlerOperatorInput} value={"/"} />
                <Button onClick={HandlerNumberInput} value={"7"} />
                <Button onClick={HandlerNumberInput} value={"8"} />
                <Button onClick={HandlerNumberInput} value={"9"} />
                <Button onClick={handlerOperatorInput} value={"*"} />
                <Button onClick={HandlerNumberInput} value={"6"} />
                <Button onClick={HandlerNumberInput} value={"5"} />
                <Button onClick={HandlerNumberInput} value={"4"} />
                <Button onClick={handlerOperatorInput} value={"-"} />
                <Button onClick={HandlerNumberInput} value={"3"} />
                <Button onClick={HandlerNumberInput} value={"2"} />
                <Button onClick={HandlerNumberInput} value={"1"} />
                <Button onClick={handlerOperatorInput} value={"+"} />
                <Button onClick={HandlerNumberInput} value={"0"} double />
                <Button onClick={handlerDecimalInput} value={"."} />
                <Button onClick={handlerEvaluate} value={"="} />
            </div>
        </div>
    )
}