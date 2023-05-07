import math from "mathjs";
import { useCallback, useState } from "react";

export default function useCalcFunctions() {
    const [expression, setExpression] = useState("");


    const handlerClick = (event: any) => {
        console.log(event)
    }

    const handleClear = () => {
        setExpression("")
    }

    const handleEvaluate = useCallback(() => {
        try {
            const result = math.evaluate(expression)
            setExpression(result.toString())
        } catch (err) {
            setExpression("Error")
        }
    }, [])

    return {
        expression,
        handleClear,
        handleEvaluate,
        handlerClick
    }
}