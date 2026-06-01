"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ListYourCafePage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    cafe_name: "",
    owner_name: "",
    whatsapp_number: "",
    address: "",
    area: "",
    instagram_handle: "",
    couple_friendly: "no",
    has_rooftop: "no",
    has_wifi: "no",
    opening_time: "",
    closing_time: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.from("submissions").insert([{
        cafe_name: form.cafe_name,
        owner_name: form.owner_name,
        whatsapp_number: form.whatsapp_number,
        address: form.area + ", " + form.address,
        instagram_handle: form.instagram_handle,
        status: "pending",
      }])
      if (error) throw error
      setSubmitted(true)
    } catch (err) {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F5F3EF] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-sm">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Request Submitted!</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Thank you for submitting your cafe. We will review your request and get back to you on WhatsApp within 48 hours.
          </p>
          <a href="/" className="block bg-[#D4622A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c5571f] transition">
            Back to Home
          </a>
        </div>
      </main>
    )
  }

  const inputClass = "w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#D4622A] focus:ring-2 focus:ring-[#D4622A]/10 transition placeholder:text-gray-400"
  const labelClass = "block text-sm font-semibold text-[#1A1A1A] mb-2"
  const selectClass = "w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#D4622A] transition"

  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#D4622A]/10 border border-[#D4622A]/20 text-[#D4622A] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Free Listing
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            List Your Cafe
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Get your cafe discovered by thousands of students, couples and food lovers in Aligarh. Completely free.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Cafe Name */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1A1A1A] mb-5">Cafe Information</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Cafe Name *</label>
                <input name="cafe_name" value={form.cafe_name} onChange={handleChange} required placeholder="e.g. ThrusTea Cafe" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Area *</label>
                <select name="area" value={form.area} onChange={handleChange} required className={selectClass}>
                  <option value="">Select Area</option>
                  <option value="Civil Lines">Civil Lines</option>
                  <option value="Ramghat Road">Ramghat Road</option>
                  <option value="Marris Road">Marris Road</option>
                  <option value="AMU Gate">AMU Gate</option>
                  <option value="Centre Point">Centre Point</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Full Address *</label>
                <input name="address" value={form.address} onChange={handleChange} required placeholder="e.g. Ground Floor, Mahajan Plaza, Ramghat Road" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Instagram Handle</label>
                <input name="instagram_handle" value={form.instagram_handle} onChange={handleChange} placeholder="e.g. thrustea_cafe" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1A1A1A] mb-5">Owner Information</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Your Name *</label>
                <input name="owner_name" value={form.owner_name} onChange={handleChange} required placeholder="e.g. Rahul Sharma" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number *</label>
                <input name="whatsapp_number" value={form.whatsapp_number} onChange={handleChange} required placeholder="e.g. +91 9999999999" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Cafe Features */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1A1A1A] mb-5">Cafe Features</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Couple Friendly</label>
                <select name="couple_friendly" value={form.couple_friendly} onChange={handleChange} className={selectClass}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Rooftop</label>
                <select name="has_rooftop" value={form.has_rooftop} onChange={handleChange} className={selectClass}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>WiFi</label>
                <select name="has_wifi" value={form.has_wifi} onChange={handleChange} className={selectClass}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Timing */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1A1A1A] mb-5">Opening Hours</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Opening Time</label>
                <input type="time" name="opening_time" value={form.opening_time} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Closing Time</label>
                <input type="time" name="closing_time" value={form.closing_time} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <label className={labelClass}>Additional Message (Optional)</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any special features or information about your cafe..." className={inputClass + " resize-none"} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4622A] hover:bg-[#c5571f] disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all duration-300 text-base"
          >
            {loading ? "Submitting..." : "Submit Cafe Listing — Its Free!"}
          </button>

          <p className="text-center text-gray-400 text-xs">
            We will review your cafe and get back to you on WhatsApp within 48 hours.
          </p>

        </form>
      </div>
    </main>
  )
}