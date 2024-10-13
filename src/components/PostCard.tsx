import Link from 'next/link';

interface PostCardProps {
  title: string;
  slug: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, slug, excerpt }) => {
  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-md transition-transform transform hover:scale-105 mb-4">
          <img 
        src={`/images/${slug}.jpg`}  // Correctly reference the images using backticks for interpolation
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4 bg-white">
        <Link href={`/post/${slug}`}>
          <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline transition duration-300">{title}</h2>
        </Link>
        <p className="text-gray-700">{excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
