'use client';

import { motion } from 'framer-motion';

const DataArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-white/50 dark:bg-white/[.03] backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
        <div className="relative h-[400px]">
          {/* Data Sources Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 flex justify-around"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-sm">Mobile App</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-sm">Web App</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm">Third Party</span>
            </div>
          </motion.div>

          {/* ETL Layer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
              <div className="text-center">
                <span className="text-2xl">⚡</span>
                <div className="text-sm font-medium">ETL Pipeline</div>
              </div>
            </div>
          </motion.div>

          {/* Data Warehouse Layer */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-0 left-0 right-0 flex justify-around"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">📈</span>
              </div>
              <span className="text-sm">Analytics</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-sm">ML Models</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm">BI Tools</span>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              d="M100 80 L240 200"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              d="M380 80 L240 200"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
              d="M240 200 L100 320"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              d="M240 200 L380 320"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#DB2777" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DataArchitectureDiagram; 