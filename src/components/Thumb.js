export default function Thumb(props) {
    return (
        <div className="Thumb" style={{backgroundImage: `url(${props.url})`}}>
                <div className="Thumb-ghost"></div>
                <span>{ props.children }</span>
            </div>
    )
}