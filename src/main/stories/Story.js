export default function Story(props) {
    return (
        <div class="story">
        <div class="imagem">
          <img src={props.img}  alt="img"/>
        </div>
        <div class="usuario">{props.name}</div>
      </div>
    )
} 