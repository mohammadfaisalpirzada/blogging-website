import PostCard from '../components/PostCard';

const posts = [
  { title: 'Effective Study Techniques for Students', slug: 'study-techniques', excerpt: 'Explore various study methods that enhance learning.' },
  { title: 'How to Master Time Management', slug: 'time-management', excerpt: 'Manage your time effectively with these useful strategies.' },
  { title: 'The Importance of Lifelong Learning', slug: 'lifelong-learning', excerpt: 'Embrace continuous education for personal and professional growth.' },
  { title: 'Top Resources for Online Learning', slug: 'online-learning-resources', excerpt: 'Discover the best platforms for online education.' },
  { title: 'Creating a Positive Learning Environment', slug: 'learning-environment', excerpt: 'Tips for fostering a supportive atmosphere for learning.' },
  { title: 'The Role of Technology in Education', slug: 'technology-in-education', excerpt: 'How technology is reshaping the educational landscape.' },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
   
   


      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Latest Educational Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <PostCard key={post.slug} title={post.title} slug={post.slug} excerpt={post.excerpt} />
          ))}
        </div>
      </main>
     
     
    </div>
  );
};

export default Home;
