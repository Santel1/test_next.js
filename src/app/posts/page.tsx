import List from "@/src/components/list";
import { getPosts, Posts } from "../../lib/api";
import PostsItem from "@/src/components/post-item";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-5xl">Posts</h1>
      <List className="flex-col gap-4">
        {posts.map((post: Posts) => (
          <PostsItem
            key={post.id}
            title={post.title}
            content={post.content}
            src={post.image}
            alt={post.category}
          />
        ))}
      </List>
    </div>
  );
}
