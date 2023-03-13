export default function Thumb(props) {
    return (
        <div className="Thumb">
                <div className="Thumb-ghost"></div>
                <span>{ props.children }</span>
            </div>
    )
}