import Image from 'next/image'

export default function NewsCard({ title, excerpt, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{excerpt}</p>
      </div>
    </div>
  )
}
