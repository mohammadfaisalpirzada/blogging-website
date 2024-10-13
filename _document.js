// components/Banner.js
import Image from 'next/image'; // Import from next/image

export default function Banner() {
  return (
    <div className="bg-blue-600 flex items-center justify-between p-4">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image 
          className='logo'
          src="/images/logo.png" 
          alt="Logo"
          width={80} 
          height={80}
        />
      </div>

      {/* Centered text with custom font */}
      <h1 className="text-3xl text-white text-center flex-grow font-bold">
        Welcome to Master Sahub Page!
      </h1>
    </div>
  );
}
