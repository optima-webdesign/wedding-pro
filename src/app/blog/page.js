"use client";

import { useState } from "react";

const ideas = [
  { id: 1, category: "Decor", title: "Royal Mandap Setup", image: "🌸", color: "bg-red-100" },
  { id: 2, category: "Outfit", title: "Sabyasachi Lehenga Red", image: "💃", color: "bg-orange-100" },
  { id: 3, category: "Photography", title: "Pre-wedding at Taj", image: "📸", color: "bg-blue-100" },
  { id: 4, category: "Food", title: "Live Chaat Counter", image: "pani_puri", color: "bg-green-100" }, // Text fallback
  { id: 5, category: "Decor", title: "Floral Entryway", image: "🌹", color: "bg-pink-100" },
  { id: 6, category: "Groom", title: "Sherwani Gold Edition", image: "🤵", color: "bg-yellow-100" },
];

export default function IdeasPage() {
  const [filter, setFilter] = useState("All");

  const filteredIdeas = filter === "All" 
    ? ideas 
    : ideas.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Wedding Inspiration Gallery</h1>
          <p className="text-lg text-gray-600">Trending ideas for your big day.</p>
          
          {/* Filters */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            {["All", "Decor", "Outfit", "Photography", "Food"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition ${
                  filter === cat 
                    ? "bg-pink-600 text-white border-pink-600" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid (Pinterest Style) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
              {/* Image Placeholder */}
              <div className={`h-64 ${item.color} flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110`}>
                {item.image === "pani_puri" ? "🥘" : item.image}
              </div>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-white bg-pink-600 px-2 py-1 rounded w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}