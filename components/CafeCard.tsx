import Link from 'next/link'
import Image from 'next/image'

export default function CafeCard({ cafe }: { cafe: any }) {
  const coverPhoto = cafe.cafe_photos?.find((p: any) => p.is_cover)
  const activeOffer = cafe.offers?.find((o: any) => o.is_active)
  const priceTier = ['', '₹', '₹₹', '₹₹₹'][cafe.price_tier] || '₹₹'

  return (
    <Link href={`/cafes/${cafe.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer w-full">
        <div className="relative h-44 sm:h-48 md:h-52 bg-gray-100">
          {coverPhoto ? (
            <Image
              src={coverPhoto.image_url}
              alt={cafe.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={75}
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
              ☕
            </div>
          )}
          {activeOffer && (
            <span className="absolute top-3 left-3 bg-[#D4622A] text-white text-xs px-3 py-1 rounded-full font-medium">
              🔥 Offer
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-[#1A1A1A] text-lg leading-tight">
              {cafe.name}
            </h3>
            <span className="text-sm text-gray-500 font-medium">{priceTier}</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            📍 {cafe.areas?.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {cafe.vibe_tags?.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="bg-[#E8F5F0] text-[#0F6E56] text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
