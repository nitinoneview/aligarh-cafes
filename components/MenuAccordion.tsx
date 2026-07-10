"use client"

import { useState } from "react"

type MenuItem = {
  id: string
  name: string
  description: string | null
  price_regular: number | null
  price_medium: number | null
  price_large: number | null
  is_veg: boolean
  category_id: string
}

type MenuCategory = {
  id: string
  name: string
  sort_order: number
}

function getCategoryIcon(name: string) {
  const lower = name.toLowerCase()
  if (lower.includes("cold") || lower.includes("iced") || lower.includes("shake")) return "ti-glass-full"
  if (lower.includes("tea")) return "ti-cup"
  if (lower.includes("coffee") || lower.includes("hot")) return "ti-coffee"
  if (lower.includes("pizza")) return "ti-pizza"
  if (lower.includes("burger")) return "ti-burger"
  if (lower.includes("dessert") || lower.includes("sweet")) return "ti-ice-cream"
  return "ti-tools-kitchen-2"
}

function getItemPrice(item: MenuItem) {
  return item.price_regular ?? item.price_medium ?? item.price_large ?? 0
}

function getStartingPrice(items: MenuItem[]) {
  const prices = items
    .map((item) => item.price_regular || item.price_medium || item.price_large)
    .filter((price): price is number => price != null)
  if (prices.length === 0) return null
  return Math.min(...prices)
}

export default function MenuAccordion({
  categories,
  items,
}: {
  categories: MenuCategory[]
  items: MenuItem[]
}) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div>
      {categories.map((cat) => {
        const catItems = items
          .filter((item) => item.category_id === cat.id)
          .sort((a, b) => getItemPrice(a) - getItemPrice(b))

        if (catItems.length === 0) return null

        const isOpen = openId === cat.id
        const startingPrice = getStartingPrice(catItems)
        const icon = getCategoryIcon(cat.name)

        return (
          <div
            key={cat.id}
            className="border border-gray-200 rounded-2xl overflow-hidden mb-3"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : cat.id)}
              className={
                "w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors " +
                (isOpen ? "bg-[#FFF7F2]" : "bg-white")
              }
            >
              <span className="flex items-center gap-3">
                <span
                  className={
                    "w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 " +
                    (isOpen ? "bg-[#FDECE3]" : "bg-[#FDECE3]")
                  }
                >
                  <i
                    className={"ti " + icon + " text-[19px] text-[#D4622A]"}
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span
                    className={
                      "block font-medium text-[15px] " +
                      (isOpen ? "text-[#D4622A]" : "text-[#1A1A1A]")
                    }
                  >
                    {cat.name}
                  </span>
                  <span
                    className={
                      "block text-xs mt-0.5 " +
                      (isOpen ? "text-[#C87F5C]" : "text-gray-400")
                    }
                  >
                    {catItems.length} item{catItems.length !== 1 ? "s" : ""}
                    {startingPrice !== null && (
                      <>
                        {" · from "}
                        <span className="font-bold">{"₹" + startingPrice}</span>
                      </>
                    )}
                  </span>
                </span>
              </span>
              <i
                className={
                  "ti ti-chevron-down text-lg transition-transform " +
                  (isOpen ? "rotate-180 text-[#D4622A]" : "text-gray-400")
                }
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="border-t border-[#F0E4DC]">
                {catItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-start pl-[66px] pr-4 py-3">
                      <div className="flex-1">
                        <p className="text-sm text-[#1A1A1A]">
                          <span className="mr-1.5">{item.is_veg ? "🟢" : "🔴"}</span>
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="text-xs text-gray-400 mt-0.5 ml-[22px]">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        {item.price_regular && (
                          <p className="text-sm font-bold text-[#1A1A1A]">{"₹" + item.price_regular}</p>
                        )}
                        {item.price_medium && (
                          <p className="text-xs text-gray-500">{"M: ₹" + item.price_medium}</p>
                        )}
                        {item.price_large && (
                          <p className="text-xs text-gray-500">{"L: ₹" + item.price_large}</p>
                        )}
                      </div>
                    </div>
                    {index !== catItems.length - 1 && (
                      <div className="h-px bg-gray-100 ml-[66px]" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
