import Link from "next/link";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src="/images/4.png"
        className="w-[400px]"
        alt="404 Not Found"
        width={300}
        height={800}
      />
      <h1 className="mt-4 text-2xl">Page Not Found</h1>
      <p className="mt-2 text-gray-700">
        404 - Lost? Let us help you find your way!
      </p>
      <Link href="/" className="mt-4 text-primary-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;
