import math from "mathjs";
import { useCallback, useState } from "react";

export default function useCalcFunctions() {
    const [expression, setExpression] = useState("");
    const [valor, setValor] = useState("")


    const handlerClick = (event: any) => {
        setValor(event)
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
        valor,
        expression,
        handleClear,
        handleEvaluate,
        handlerClick
    }
}