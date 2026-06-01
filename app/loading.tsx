export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Offers Skeleton */}
        <div className="mb-8">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="flex gap-4">
            <div className="min-w-[260px] h-24 bg-orange-100 rounded-2xl animate-pulse"></div>
            <div className="min-w-[260px] h-24 bg-orange-100 rounded-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Area Pills Skeleton */}
        <div className="mb-6">
          <div className="h-6 w-40 bg-gray-200 rounded mb-3 animate-pulse"></div>
          <div className="flex gap-3">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="h-9 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Cafe Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-5 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-3 animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-100 rounded-full animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-100 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}