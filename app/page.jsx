import prisma from '../lib/prisma';
import Posts from "@/components/Posts";

async function getPosts () {
  const posts = await prisma.post.findMany({
    where:{published: true},
    include:{
      author:{
        select:{name: true}
      }
    }
  });

  return posts;
}
export default async function Home() {
const posts = await getPosts();
console.log({posts});
  return (
    <main className="flex  flex-col items-center gap-10  p-24">
      <h1>Hello World</h1>
        {
          posts.map((post, index)=>(
            <Posts id={index} title={post.title} content={post.content} authorName={post.authorName}/>
          ))
        }
    </main>
  );
}
