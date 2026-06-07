export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">

      {/* Cover Skeleton */}
      <div className="relative h-64 md:h-80 bg-gray-200 animate-pulse">
        <div className="absolute bottom-6 left-6">
          <div className="h-8 w-48 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-4 w-32 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">

        {/* Tags Skeleton */}
        <div className="flex gap-2 mb-6">
          <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-8 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Info Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
            <div className="h-5 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-36 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-28 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
            <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
            {[1,2,3,4,5,6,7].map((i) => (
              <div key={i} className="flex justify-between py-1 border-b border-gray-50">
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Skeleton */}
        <div className="mb-6">
          <div className="h-6 w-24 bg-gray-200 rounded mb-3 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1,2,3].map((i) => (
              <div key={i} className="h-36 bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Menu Skeleton */}
        <div>
          <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse"></div>
          {[1,2,3].map((cat) => (
            <div key={cat} className="mb-6">
              <div className="h-5 w-32 bg-orange-100 rounded mb-3 animate-pulse"></div>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {[1,2,3,4].map((item) => (
                  <div key={item} className="flex justify-between items-center px-4 py-3 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}