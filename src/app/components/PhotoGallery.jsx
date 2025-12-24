"use client"

import { motion } from "motion/react"
import { Camera, ArrowRight, Heart } from "lucide-react"

export default function PhotoGallery({ onNext }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/20"
            initial={{ y: "110%", x: `${10 + i * 15}%`, opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            <Heart className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-10 z-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="mb-6"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Camera className="w-16 h-16 text-pink-400 mx-auto" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
          Moments with You
        </h1>

        <p className="text-xl text-purple-300 mb-2">
          Beautiful moments with You 📸
        </p>

        <p className="text-sm text-white/60 italic">
          Every memory here holds a piece of my heart 💖
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="flex items-center space-x-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="w-3 h-3 rounded-full bg-pink-400"></span>
        <span className="w-8 h-[2px] bg-white/30"></span>
        <span className="w-3 h-3 rounded-full bg-purple-400"></span>
        <span className="w-8 h-[2px] bg-white/30"></span>
        <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
      </motion.div>

      {/* Memory Note */}
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-center max-w-sm mb-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white/90 text-sm">
          “Some moments don’t need photos…
          <br /> they live forever in the heart.”
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600
          text-white text-lg px-8 py-4 rounded-full shadow-xl
          border border-white/60 hover:scale-105 transition-all duration-300"
        >
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ x: 6 }}
          >
            <span>One Last Thing</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-white/30 italic">
        Made with ❤️ only for you
      </p>

    </motion.div>
  )
}
