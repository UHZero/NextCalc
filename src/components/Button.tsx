interface LabelProps {
    span?: string 
    value: number | string
    double?: boolean
    triple?: boolean
    onClick: any
}

export default function Button (props: LabelProps) {
    return (
        <div className={`
            flex flex-col
            ${props.double ? 'w-40 col-span-2' : 'w-20' }
            ${props.triple ? 'w-60 col-span-3' : 'w-20' }
            
            bg-zinc-600 h-20

            justify-center text-center text-lg

            border-r border-b border-lime-950
            
        `} onClick={() => props.onClick(props.value)}>
            { props.value }
        </div>
    )
}