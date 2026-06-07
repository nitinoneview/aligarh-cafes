export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="bg-[#1A1A1A] py-10 px-4 text-center">
        <div className="h-8 w-64 bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 w-24 bg-gray-700 rounded mx-auto animate-pulse"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6 flex-wrap">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="h-9 w-28 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
        <div className="flex gap-2 mb-8 flex-wrap">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="h-9 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-36 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
