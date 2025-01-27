'use client';

import { motion } from 'framer-motion';

const DataArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-2xl border border-gray-800 p-12">
        <div className="relative h-[120px] flex items-center justify-between">
          {/* Extract */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-[#2D2D2D] rounded-lg flex flex-col items-center justify-center mb-2">
              <span className="text-sm text-gray-400 mb-2">Extract</span>
              <span className="text-2xl">📤</span>
            </div>
          </motion.div>

          {/* Transform */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex flex-col items-center justify-center mb-2">
              <span className="text-sm text-white mb-2">Transform</span>
              <span className="text-2xl">⚡</span>
            </div>
          </motion.div>

          {/* Load */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-[#2D2D2D] rounded-lg flex flex-col items-center justify-center mb-2">
              <span className="text-sm text-gray-400 mb-2">Load</span>
              <span className="text-2xl">📥</span>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              d="M96 60 L384 60"
              stroke="#A855F7"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DataArchitectureDiagram; 