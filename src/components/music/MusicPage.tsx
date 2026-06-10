import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-warm-darkest overflow-hidden">
      <iframe
        src="https://open.spotify.com/embed/playlist/..."
        className="absolute inset-0 w-full h-full"
        title="Musique"
        allow="clipboard-read; clipboard-write"
      />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 p-2 rounded-full bg-warm-dark/60 backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-colors"
      >
        <FiArrowLeft className="text-gold" size={22} />
      </motion.button>
    </div>
  );
}
