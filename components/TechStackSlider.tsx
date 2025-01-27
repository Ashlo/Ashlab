'use client';

import { motion } from 'framer-motion';
import * as SimpleIcons from 'simple-icons';

const technologies = [
  // Row 1 - Cloud & Data Warehouse
  [
    { name: 'AWS', icon: SimpleIcons.siAmazon, color: '#FF9900' },
    //{  name: 'Azure', icon: SimpleIcons.siMicrosoftazure, color: '#0078D4' },
    { name: 'GCP', icon: SimpleIcons.siGooglecloud, color: '#4285F4' },
    { name: 'Snowflake', icon: SimpleIcons.siSnowflake, color: '#29B5E8' },
    { name: 'Databricks', icon: SimpleIcons.siDatabricks, color: '#FF3621' },
    { name: 'BigQuery', icon: SimpleIcons.siGooglecloud, color: '#669DF6' },
  ],
  // Row 2 - Languages & Frameworks
  [
    { name: 'Python', icon: SimpleIcons.siPython, color: '#3776AB' },
    { name: 'dbt', icon: SimpleIcons.siDbt, color: '#FF694B' },
    { name: 'Airflow', icon: SimpleIcons.siApacheairflow, color: '#017CEE' },
    { name: 'Spark', icon: SimpleIcons.siApachespark, color: '#E25A1C' },
    { name: 'Kubernetes', icon: SimpleIcons.siKubernetes, color: '#326CE5' },
    { name: 'Docker', icon: SimpleIcons.siDocker, color: '#2496ED' },
  ],
  // Row 3 - Tools & Services
  [
    { name: 'Terraform', icon: SimpleIcons.siTerraform, color: '#7B42BC' },
    { name: 'GitHub', icon: SimpleIcons.siGithub, color: '#181717' },
   // { name: 'Azure Functions', icon: SimpleIcons.siAzurefunctions, color: '#0062AD' },
    { name: 'AWS Lambda', icon: SimpleIcons.siAwslambda, color: '#FF9900' },
    //{ name: 'Tableau', icon: SimpleIcons.siTableau, color: '#E97627' },
    //{ name: 'PowerBI', icon: SimpleIcons.siPowerbi, color: '#F2C811' },
  ],
];

const TechStackSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-[#1A1A1A] rounded-2xl border border-gray-800 p-8">
      <div className="flex flex-col gap-12">
        {technologies.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-12"
            initial={{ x: rowIndex % 2 === 0 ? '100%' : '-100%' }}
            animate={{ 
              x: rowIndex % 2 === 0 ? '-100%' : '100%',
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Double the items to create seamless loop */}
            {[...row, ...row].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[100px]"
              >
                <div className="w-16 h-16 bg-white/5 rounded-xl p-3 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                    fill={tech.color}
                    style={{ opacity: 0.9 }}
                  >
                    <path d={tech.icon.path} />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlider; 