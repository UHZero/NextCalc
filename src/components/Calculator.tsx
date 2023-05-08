import Display from './Display'
import Button from './Button'
import useCalcFunctions from '@/hooks/CalcFunction'

export default function Calculator() {
    
    const {handleClear, handleEvaluate, handlerClick, expression, valor} = useCalcFunctions()

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='grid h-20 w-80'>
                <Display  value={ valor }/>
            </div>
            <div className='grid grid-cols-4'>
                <Button onClick={handleClear} value={"AC"} triple />
                <Button onClick={handlerClick} value={"/"} />
                <Button onClick={handlerClick} value={7} />
                <Button onClick={handlerClick} value={8} />
                <Button onClick={handlerClick} value={9} />
                <Button onClick={handlerClick} value={"*"} />
                <Button onClick={handlerClick} value={6} />
                <Button onClick={handlerClick} value={5} />
                <Button onClick={handlerClick} value={4} />
                <Button onClick={handlerClick} value={"-"} />
                <Button onClick={handlerClick} value={3} />
                <Button onClick={handlerClick} value={2} />
                <Button onClick={handlerClick} value={1} />
                <Button onClick={handlerClick} value={"+"} />
                <Button onClick={handlerClick} value={0} double />
                <Button onClick={handlerClick} value={"."} />
                <Button onClick={handleEvaluate} value={"="} />
            </div>
        </div>
    )
}