export default function Thumb(props) {
    function goTo(id) {
        window.location.href = "/location/"+id;
    }
    return (
        <div className="Card" data-id={ props.id } onClick={() => goTo(props.id)} style={{backgroundImage: `url(${props.url})`}}>
            <div className="Card-ghost"></div>
            <span>{ props.children }</span>
        </div>
    )
}