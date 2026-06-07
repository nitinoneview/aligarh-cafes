export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="bg-[#1A1A1A] py-10 px-4 text-center">
        <div className="h-8 w-48 bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 w-32 bg-gray-700 rounded mx-auto animate-pulse"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-orange-200 px-5 py-4 animate-pulse">
                <div className="h-5 w-40 bg-orange-300 rounded mb-2"></div>
                <div className="h-4 w-56 bg-orange-300 rounded"></div>
              </div>
              <div className="px-5 py-4">
                <div className="flex justify-between mb-4">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded-xl animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
