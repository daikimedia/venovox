'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const promoMessages = [
  "New Here? Get Your FREE Background Check!",
  "First-Time Client? Unlock Your FREE Risk Assessment Now",
  "Claim Your FREE Custom Screening Strategy Session",
  "FREE Compliance Risk Review – Start Protecting Your Business",
  "KYB, KYC & Due Diligence? Your FREE Risk Assessment Awaits"
];

export default function StickyPromoBar() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % promoMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => window.open("https://wa.me/+60128008888", "_blank");

  return (
    <div className={`sticky-promo-bar ${isMobile && isScrolled ? 'bottom-0' : 'top-0'}`}>
      <style jsx global>{`
        body {
          padding-top: ${!isMobile || !isScrolled ? "70px" : "0"};
          padding-bottom: ${isMobile && isScrolled ? "70px" : "0"};
          transition: padding 0.3s ease;
        }
        
        header.fixed {
          top: ${!isMobile || !isScrolled ? "70px" : "0"} !important;
          transition: top 0.3s ease;
        }
        
        .sticky-promo-bar {
          position: fixed;
          left: 0;
          width: 100%;
          height: 70px;
          background: linear-gradient(90deg, #8b0000 0%, #2c2c2c 50%, #1a1a1a 100%);
          color: white;
          z-index: 999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid rgba(255,255,255,0.15);
        }
        
        .sticky-promo-bar.top-0 { top: 0; }
        .sticky-promo-bar.bottom-0 { bottom: 0; }
        
        .promo-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
        }
        
        .promo-message-container {
          flex: 1;
          min-width: 0;
          padding: 0 20px;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .promo-message {
          font-weight: 600;
          letter-spacing: 0.4px;
          font-size: 1.1rem;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          text-align: center;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
        
        .whatsapp-button {
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          border-radius: 30px;
          padding: 10px 24px;
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          flex-shrink: 0;
          font-size: 1rem;
        }
        
        .whatsapp-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
          background: linear-gradient(135deg, #25D366, #075E54);
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        
        /* Mobile specific styles */
        @media (max-width: 767px) {
          .sticky-promo-bar {
            height: 60px;
            background: linear-gradient(90deg, #8b0000 0%, #1a1a1a 100%);
          }
          
          .promo-container {
            padding: 0 15px;
          }
          
          .promo-message {
            font-size: 0.95rem;
            text-align: left;
            padding-right: 10px;
          }
          
          .whatsapp-button {
            padding: 8px 15px;
            font-size: 0;
            min-width: 50px;
          }
          
          .whatsapp-button span {
            display: none;
          }
          
          body {
            padding-top: ${!isMobile || !isScrolled ? "60px" : "0"};
            padding-bottom: ${isMobile && isScrolled ? "60px" : "0"};
          }
        }
      `}</style>

      <div className="promo-container">
        <div className="promo-message-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="promo-message"
            >
              {promoMessages[currentMessage]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={openWhatsApp}
          className="whatsapp-button pulse"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={25} strokeWidth={2.5} />
          {!isMobile && <span>Chat Now</span>}
        </button>
      </div>
    </div>
  );
}