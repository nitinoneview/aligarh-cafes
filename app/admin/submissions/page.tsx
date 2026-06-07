import { supabaseAdmin } from '@/lib/supabase-admin'

async function getSubmissions() {
  const { data } = await supabaseAdmin
    .from('submissions')
    .select('*')
    .order('submitted_at', { ascending: false })
  return data || []
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions()
  const pending = submissions.filter((s) => s.status === 'pending')
  const others = submissions.filter((s) => s.status !== 'pending')

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Submissions</h1>
      <p className="text-gray-500 text-sm mb-8">{pending.length} pending review</p>

      {submissions.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-medium text-gray-500">No submissions yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={sub.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-bold text-[#1A1A1A] text-lg">{sub.cafe_name}</h2>
                  <p className="text-gray-500 text-sm">{sub.owner_name} • {sub.whatsapp_number}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  sub.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  sub.status === 'approved' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sub.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
                <div>
                  <p className="text-gray-400 text-xs">Area</p>
                  <p className="font-medium">{sub.area || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Address</p>
                  <p className="font-medium">{sub.address || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Instagram</p>
                  <p className="font-medium">@{sub.instagram_handle || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Hours</p>
                  <p className="font-medium">{sub.opening_time} - {sub.closing_time}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Couple Friendly</p>
                  <p className="font-medium">{sub.couple_friendly || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Rooftop</p>
                  <p className="font-medium">{sub.has_rooftop || 'N/A'}</p>
                </div>
              </div>

              {sub.message && (
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-400 mb-1">Message</p>
                  <p className="text-sm text-gray-700">{sub.message}</p>
                </div>
              )}

              <p className="text-xs text-gray-400">
                Submitted: {new Date(sub.submitted_at).toLocaleDateString('en-IN', {
                  day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
