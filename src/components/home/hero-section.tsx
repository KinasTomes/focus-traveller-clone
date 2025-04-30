'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Play video when it's loaded
  useEffect(() => {
    if (videoRef.current && isVideoLoaded) {
      // Try to play the video
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video play failed:", error);
        });
      }
    }
  }, [isVideoLoaded]);

  return (
    <section className="py-16 md:py-24 bg-[#faf3eb] overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/3301080306/3121936827.png')`,
          opacity: 0.4,
        }}
      />

      <div className="container-flex relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="handwritten text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#5f635e]"
            >
              Quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8 text-[#5f635e] text-justify"
            >
              Tại Việt Nam, pháp luật về thụ tinh trong ống nghiệm (IVF) được
              quy định chủ yếu trong Hiến pháp 2013, Luật Hôn nhân và Gia đình
              2015, Nghị định 10/2015/NĐ-CP (sửa đổi bởi Nghị định
              98/2016/NĐ-CP), cùng với các quy định về thừa kế trong Bộ luật Dân
              sự 2015.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center md:justify-end items-center"
          >
            <div className="phone-horizontal-container scale-150">
              {/* Phone frame with video */}
              <div className="phone-frame">
                <div className="phone-screen">
                  <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    onLoadedData={handleVideoLoaded}
                    className="video-content"
                  >
                    <source
                      src="https://assets.mixkit.co/videos/preview/mixkit-trees-in-autumn-forest-with-sunshine-43822-large.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
