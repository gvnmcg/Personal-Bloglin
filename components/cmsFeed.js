
import CMSPost from './CMSPost';

export default function CMSFeed({ posts }) {
  
  return (
    <div>
      {/* <Feed /> */}
      {posts.map((post, ix) => (
        <div key={ix}>
          <CMSPost post={post}/>
        </div>
      ))} 
    </div>
  );
}
