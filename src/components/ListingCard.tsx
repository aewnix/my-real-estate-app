import Image from "next/image";

export default function ListingCard({
  image,
  title,
  price,
  location,
  description,
}: {
  image: string;
  title: string;
  price: string;
  location: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-[#A36D4F] font-bold text-xl">{price}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-2 w-full bg-[#A36D4F] text-white rounded-xl py-2 hover:bg-[#BFA78A] transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}
