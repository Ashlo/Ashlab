'use client';

import { motion } from 'framer-motion';

const DataArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
        <div className="relative h-[400px]">
          {/* Data Sources Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 flex justify-around"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-gray-300 text-sm">Mobile App</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-gray-300 text-sm">Web App</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-gray-300 text-sm">Third Party</span>
            </div>
          </motion.div>

          {/* ETL Layer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
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
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📈</span>
              </div>
              <span className="text-gray-300 text-sm">Analytics</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-gray-300 text-sm">ML Models</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2D2D2D] rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-gray-300 text-sm">BI Tools</span>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              d="M100 80 L240 200"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              d="M380 80 L240 200"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              d="M240 200 L100 320"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              d="M240 200 L380 320"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DataArchitectureDiagram; 