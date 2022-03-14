import Posts from "./Posts";
let posts = [{
  profileName:"meowed",
  profileImg:"assets/img/meowed.svg",
  post:"assets/img/gato-telefone.svg",
  lastLikeImg:"assets/img/respondeai.svg",
  lastLikeProfile:"respondeai",
  likes: '101.523'},{
    profileName:"barked",
    profileImg:"assets/img/barked.svg",
    post:"assets/img/dog.svg",
    lastLikeImg:"assets/img/adorable_animals.svg",
    lastLikeProfile:"adorable_animals",
    likes:"99.159"
  }];
export default function Post() {
  return (
    <div class="posts">
      {posts.map((post) => (
      <Posts profileName={post.profileName} profileImg={post.profileImg} post={post.post} lastLikeImg={post.lastLikeImg} lastLikeProfile={post.lastLikeProfile} likes={post.likes}/>
      ))}
    </div>
    )
}
