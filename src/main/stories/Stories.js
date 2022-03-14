import Story from "./Story"
import { story } from "../../data/storiesData"
export default function Stories() {
    return (
        <div class="stories">
        {story.map(story => (
          <Story img={story.img} name={story.name}/>
        ))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}