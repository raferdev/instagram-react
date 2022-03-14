export default function SideUser(props) {
  const {name,user:login,img} = props;
  return (
    <div class="usuario">
      <img src={img}  alt="img" />
      <div class="texto">
        <strong>{login}</strong>
        {name}
      </div>
    </div>
  );
}
