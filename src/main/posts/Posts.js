import Post from "./Post";
import { posts } from "../../data/postsData";
export default function Posts() {
  return (
    <div class="posts">
      {posts.map((post) => (
      <Post profileName={post.profileName} profileImg={post.profileImg} post={post.post} lastLikeImg={post.lastLikeImg} lastLikeProfile={post.lastLikeProfile} likes={post.likes}/>
      ))}
    </div>
    )
}
