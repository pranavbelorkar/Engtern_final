"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import training from "../asset/img/training.jpg"
import discussion from "../asset/img/GD.jpg"
import third from "../asset/img/third.jpg"
import forth from "../asset/img/forth.jpg"
import fifth from "../asset/img/5th.jpg"
import six from "../asset/img/6th.jpg"
import seven from "../asset/img/7th.jpg"
import eight from "../asset/img/8th.jpg"
import nine from "../asset/img/9th.jpg"
import ten from "../asset/img/10th.jpg"
import engtern from "../asset/img/engtern.jpg"
import ss from "../asset/img/ss.png"

// Import your video file
import sampleVideo from "../asset/img/video.mp4"
import { Helmet } from "react-helmet"

const heroSectionStyles = `
  .hero-section {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    .hero-section {
      height: 300px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-section {
      height: 200px;
    }
  }
`

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedItem, setSelectedItem] = useState(null)

  const galleryItems = [
    {
      type: "image",
      src: training,
      alt: "Engtern Public Speaking Training Session",
      title: "Intensive Public Speaking Training Session",
    },
    {
      type: "image",
      src: discussion,
      alt: "Group Discussion at Engtern",
      title: "Interactive Group Discussion Workshop",
    },
    {
      type: "image",
      src: third,
      alt: "Personality Development Workshop Group Photo",
      title: "Hemvati Nandan Bahuguna Garhwal University Workshop on Personality Development & Soft Skills",
    },
    {
      type: "image",
      src: forth,
      alt: "Soft Skills Training Program",
      title: "Comprehensive Soft Skills Training Program at HNBGU",
    },
    {
      type: "image",
      src: fifth,
      alt: "Alumni Interaction Session",
      title: "Alumni Interaction: Skill Up, Stand Out - Pre-Graduation Career Strategies",
    },
    {
      type: "image",
      src: six,
      alt: "Career Development Workshop",
      title: "Stellar Career Development Workshop with Industry Experts",
    },
    {
      type: "image",
      src: seven,
      alt: "One-on-One Live Training Session",
      title: "Personalized 1:1 Live Public Speaking Coaching",
    },
    {
      type: "image",
      src: eight,
      alt: "Online Individual Coaching Session",
      title: "Virtual 1:1 Communication Skills Enhancement Session",
    },
    {
      type: "image",
      src: nine,
      alt: "Small Group Live Training",
      title: "Intimate 1:2 Live Public Speaking Practice Session",
    },
    {
      type: "image",
      src: ten,
      alt: "Online Presentation Skills Coaching",
      title: "Remote 1:1 Presentation Skills Mastery Session",
    },
    {
      type: "image",
      src: engtern,
      alt: "Engtern Training Program Overview",
      title: "Engtern: Comprehensive Public Speaking and Soft Skills Training",
    },
    {
      type: "video",
      src: sampleVideo,
      thumbnail: ss,
      alt: "Engtern Training Methodology Video",
      title: "Exclusive Insight: Engtern's Innovative Training Approach",
    },
  ]

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.type === activeTab)

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal()
    }
  }

  const seoTitle = "Engtern Public Speaking Training Gallery | Communication Skills Development"
  const seoDescription =
    "Explore Engtern's comprehensive public speaking training gallery. View our workshops, one-on-one sessions, and group discussions designed to enhance your communication skills and boost your career prospects."
  const seoKeywords =
    "public speaking, communication skills, soft skills, presentation skills, career development, Engtern, training gallery, workshops, one-on-one coaching, group discussions"

  useEffect(() => {
    // Add schema markup
    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Engtern Public Speaking Training Gallery",
      description: seoDescription,
      image: galleryItems.filter((item) => item.type === "image").map((item) => item.src),
      about: {
        "@type": "Thing",
        name: "Public Speaking Training",
        description: "Comprehensive public speaking and communication skills training programs by Engtern.",
      },
    })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [galleryItems]) // Added galleryItems to dependencies

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-100">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={engtern} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={engtern} />
        <link rel="canonical" href="https://www.engtern.com/gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Engtern" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <style>{heroSectionStyles}</style>
      <div className="relative hero-section w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galleryimg-ttIbGwueNV66dkDjPGk1BlOysZg2Ah.png')`,
            backgroundSize: "cover",
          }}
        />

        {/* Overlay with diagonal shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-7xl font-bold text-[#00ffff] border-b-4 border-[#00ffff]"
            style={{
              fontSize: "7rem",
              "@media (max-width: 768px)": {
                fontSize: "4rem",
              },
              "@media (max-width: 480px)": {
                fontSize: "3rem",
              },
            }}
          >
            
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex gap-4 mb-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === "all" ? "bg-indigo-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            ALL
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("video")}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === "video" ? "bg-indigo-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            VIDEOS
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          style={{
            "@media (max-width: 640px)": {
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            },
            "@media (min-width: 641px) and (max-width: 768px)": {
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            },
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => handleItemClick(item)}
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300"
                      >
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-transparent group-hover:text-white font-bold text-lg text-center px-4 py-2 bg-black bg-opacity-75 rounded-lg"
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
            onClick={handleModalClick}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full mx-4"
              style={{
                "@media (max-width: 768px)": {
                  maxWidth: "90%",
                },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-50"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className=" rounded-lg overflow-hidden"
              >
                {selectedItem.type === "video" ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-[580px]"
                    style={{
                      "@media (max-width: 768px)": {
                        height: "400px",
                      },
                      "@media (max-width: 480px)": {
                        height: "300px",
                      },
                    }}
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedItem.src || "/placeholder.svg"} alt={selectedItem.alt} className="w-full h-auto" />
                )}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 "
                >
                  <h2 className="text-xl font-semibold text-gray-800">{selectedItem.title}</h2>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Gallery

