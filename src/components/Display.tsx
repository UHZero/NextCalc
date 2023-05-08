interface DisplayProps {
    value: number | string
}
export default function Display(props: DisplayProps) {
    return (
        <div className="flex justify-end items-center bg-lime-400 p-2 rounded-lg overflow-hidden">
            { props.value }
        </div>
    )
}