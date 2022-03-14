export default function Type(props) {
    if(props.type==="img") {
        return (
            <img src={props.post} alt="imgem" />
        )
    } else {
        return (
            <video width="100%" controls autoPlay>
                <source src={props.post + ".mp4"} type="video/mp4"/>
                <source src={props.post + ".ogv"} type="video/ogg"/>
            Your browser does not support HTML video. 
            </video>
             )
    }
}