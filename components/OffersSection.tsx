export default function OffersSection({ offers }: { offers: any[] }) {
  if (!offers.length) return null
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
        🔥 Active Offers
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="min-w-[260px] bg-[#D4622A] text-white rounded-2xl p-4 shadow-md"
          >
            <p className="text-xs uppercase tracking-wide opacity-80 mb-1">
              {offer.cafes?.name}
            </p>
            <h3 className="font-bold text-lg leading-tight">{offer.title}</h3>
            <p className="text-sm opacity-90 mt-1">{offer.discount_text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
