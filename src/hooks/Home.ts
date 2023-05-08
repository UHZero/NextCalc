import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState("0")
    const [prev, setPrev] = useState("")
    const [operator, setOperator] = useState("")

    function HandlerNumberInput (n: string) {
        if(value === "0") {
            setValue(n)
        } else {
            setValue(value + n)
        }
    }

    function handlerDecimalInput () {
        if(!value.includes(".")) {
            setValue(value + ".")
        }
    }

    function handlerOperatorInput (op: string) {
        setPrev(value)
        setValue("0")
        setOperator(op)
    }

    function handlerEvaluate() {
        const current = parseFloat(value)
        const prevValue = parseFloat(prev)

        if(operator === "+") {
            setValue((prevValue + current).toString())
        } else if (operator === "-") {
            setValue((prevValue - current).toString())
        } else if (operator === "/") {
            setValue((prevValue / current).toString())
        } else if (operator === "*") {
            setValue((prevValue * current).toString())
        }

        setPrev("")
        setOperator("")
    }

    function handlerClear() {
        setOperator("")
        setValue("0")
        setPrev("")
    }

    return {
        value,
        handlerClear,
        handlerDecimalInput,
        handlerEvaluate,
        handlerOperatorInput,
        HandlerNumberInput
    }
}