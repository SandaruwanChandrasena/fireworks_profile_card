import { useState } from "react";

export default function ProfileCard() {
  const [fireworks, setFireworks] = useState([]);

  const triggerFirework = () => {
    const id = Math.random().toString(36);
    const particles = ["✨", "💖", "💜", "🌟", "🔥", "💥"];

    const newObject = {
      id,
      items: Array.from({ length: 8 }).map(() => ({
        emoji: particles[Math.floor(Math.random() * particles.length)],
        left: Math.random() * 70 + 15,
        top: Math.random() * 20 + 60,
        rotate: Math.random() * 360,
      })),
    };

    setFireworks((prev) => [...prev, newObject]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((f) => f.id !== id));
    }, 1200);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="relative w-72 rounded-2xl bg-white p-6 shadow-lg transform transition hover:scale-105 border-t-4 border-purple-500 overflow-hidden">
        {/* Fireworks */}
        {fireworks.map((fw) =>
          fw.items.map((p, idx) => (
            <span
              key={fw.id + idx}
              className="firework-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                transform: `rotate(${p.rotate}deg)`,
              }}
            >
              {p.emoji}
            </span>
          ))
        )}

        <div className="mx-auto w-32 h-32 rounded-full p-1 bg-linear-to-br from-purple-500 to-pink-500 shadow-xl">
          <img
            src="dp.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover hover:scale-105 transition-all duration-300"
          />
        </div>

        <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
          Sandaruwan Chandrasena
        </h2>

        <p className="text-center text-gray-500">Frontend Developer</p>

        <button
          onClick={triggerFirework}
          className="mt-4 w-full bg-purple-500 text-white rounded-lg py-2 font-semibold shadow hover:bg-purple-600 transition"
        >
          Follow me❤️
        </button>
      </div>
    </div>
  );
}
