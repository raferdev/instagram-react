import { suggests } from "../../data/SuggestsData"
import Suggest from "./Suggest"
export default function Suggests() {
    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {suggests.map(suggest => (
              <Suggest name={suggest.name} img={suggest.img} razao={suggest.razao}/>
            ))}
          </div>
    )
}