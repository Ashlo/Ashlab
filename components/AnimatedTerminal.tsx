'use client'

import { useEffect, useState } from 'react';

export default function AnimatedTerminal() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  const [showCursor4, setShowCursor4] = useState(false);
  const [showCursor5, setShowCursor5] = useState(false);

  const line1 = '$ initialize data_pipeline.py';
  const line2 = '> Configuring cloud resources...';
  const line3 = '> Setting up data transformations';
  const line4 = '> Establishing secure connections';
  const line5 = '> Pipeline deployed successfully! ✨';

  useEffect(() => {
    const typeText = (
      text: string,
      setText: React.Dispatch<React.SetStateAction<string>>,
      setCurrentCursor: (show: boolean) => void,
      setNextCursor: (show: boolean) => void,
      speed: number = 50
    ): Promise<void> => {
      return new Promise((resolve) => {
        let i = 0;
        const typing = setInterval(() => {
          if (i < text.length) {
            setText((prev: string) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(typing);
            setCurrentCursor(false);
            setNextCursor(true);
            resolve();
          }
        }, speed);
      });
    };

    const animateSequence = async () => {
      await typeText(line1, setText1, setShowCursor1, setShowCursor2, 100);
      await typeText(line2, setText2, setShowCursor2, setShowCursor3);
      await typeText(line3, setText3, setShowCursor3, setShowCursor4);
      await typeText(line4, setText4, setShowCursor4, setShowCursor5);
      await typeText(line5, setText5, setShowCursor5, () => {});
    };

    animateSequence();

    return () => {};
  }, []);

  return (
    <div className="w-full max-w-2xl bg-black/75 backdrop-blur-sm rounded-lg border border-gray-800 p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-500 text-xs">bash - "data-pipeline"</div>
      </div>
      <div className="space-y-2">
        <div className="text-gray-300">
          {text1}
          {showCursor1 && <span className="animate-pulse">▋</span>}
        </div>
        {text2 && (
          <div className="text-blue-400">
            {text2}
            {showCursor2 && <span className="animate-pulse">▋</span>}
          </div>
        )}
        {text3 && (
          <div className="text-blue-400">
            {text3}
            {showCursor3 && <span className="animate-pulse">▋</span>}
          </div>
        )}
        {text4 && (
          <div className="text-blue-400">
            {text4}
            {showCursor4 && <span className="animate-pulse">▋</span>}
          </div>
        )}
        {text5 && (
          <div className="text-green-400">
            {text5}
            {showCursor5 && <span className="animate-pulse">▋</span>}
          </div>
        )}
      </div>
    </div>
  );
} 