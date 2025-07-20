import Head from 'next/head'
import Image from 'next/image'
import NewsCard from '@/components/NewsCard'

export default function Home() {
  const news = [
    { title: "Upcoming Sci-Fi Thriller Announced", excerpt: "A new sci-fi thriller is set to release next year with an exciting cast and groundbreaking visuals.", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4" },
    { title: "Oscar Predictions for This Year", excerpt: "Film analysts are predicting the Oscar frontrunners as award season heats up.", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66" },
    { title: "Indie Film Breaks Box Office Records", excerpt: "An independent film has taken the box office by storm, outperforming expectations.", image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe" }
  ];

  return (
    <>
      <Head>
        <title>Film News</title>
        <meta name="description" content="Latest film news and updates" />
      </Head>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <section className="relative w-full h-96">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Film News</h1>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, idx) => (
            <NewsCard key={idx} title={item.title} excerpt={item.excerpt} image={item.image} />
          ))}
        </section>
      </main>
    </>
  )
}
