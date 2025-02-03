import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"
import logozzzzzz from "../asset/img/Engtern_logo.png"
import { Helmet } from "react-helmet"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Helmet>
        <title>Engtern | Public Speaking Training Footer</title>
        <meta
          name="description"
          content="Explore Engtern's public speaking training resources, contact information, and social media presence. Improve your communication skills with our expert-led programs."
        />
        <meta
          name="keywords"
          content="public speaking, communication skills, presentation skills, Engtern, online courses, tutors, beginner speaking, intermediate speaking, advanced speaking"
        />
        <link rel="canonical" href="https://www.engtern.com" />
        <meta property="og:title" content="Engtern | Public Speaking Training Footer" />
        <meta
          property="og:description"
          content="Explore Engtern's public speaking training resources, contact information, and social media presence. Improve your communication skills with our expert-led programs."
        />
        <meta property="og:url" content="https://www.engtern.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engtern | Public Speaking Training Footer" />
        <meta
          name="twitter:description"
          content="Explore Engtern's public speaking training resources, contact information, and social media presence. Improve your communication skills with our expert-led programs."
        />
      </Helmet>
      <footer className="w-full bg-gray-100 text-gray-800">
        <style jsx>{`
          @media (max-width: 640px) {
            .max-w-7xl {
              padding: 0.5rem;
            }
            .gap-8 {
              gap: 0.5rem;
            }
            .mb-4 {
              margin-bottom: 0.25rem;
            }
            .space-y-2 {
              margin-top: 0.125rem;
            }
            .mt-8 {
              margin-top: 0.5rem;
            }
            .py-8 {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .logo-container {
              margin-top: -30px;
            }
            .logo-image {
              height: 160px;
              width: 160px;
            }
            .logo-text {
              margin-top: -30px;
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
            .max-w-7xl {
              padding: 1.5rem;
            }
            .gap-8 {
              gap: 1.5rem;
            }
            .mt-8 {
              margin-top: 1.5rem;
            }
            .py-8 {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="logo-container mt-0 sm:mt-[-60px] md:mt-[-120px]">
              <div className="mb-4">
                <img
                  src={logozzzzzz || "/placeholder.svg"}
                  alt="Engtern Public Speaking Training Logo"
                  className="logo-image h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
                />
              </div>
              <p className="logo-text text-sm mt-[-40px] sm:mt-[-50px] md:mt-[-70px]">
                {" "}
                Our beginner-friendly lessons break down English into simple, manageable steps, making it easy for you
                to start speaking confidently
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold mb-4 sm:ml-0 md:ml-10">Quick Links</h3>
              <ul className="space-y-2 sm:ml-0 md:ml-10">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Curriculum", href: "/curriculum" },
                  { name: "Testimonial", href: "/testimonial" },
                  { name: "Gallery", href: "/gallery" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-teal-600 text-black transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { name: "Online Courses", href: "/" },
                  { name: " Tutors", href: "/" },
                  { name: "Beginner", href: "/" },
                  { name: "Intermediate", href: "/" },
                  { name: "Advanced", href: "/" },
                ].map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="hover:text-teal-600 text-black transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Section */}
            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <address className="not-italic">
                <div className="flex items-start mb-2">
                  <FaMapMarkerAlt className="text-black mr-2 mt-1" />
                  <span>
                    Kamteshwar, Sonegaon Garhwal,Pauri,
                    <br />
                    Uttarakhand, 246174
                  </span>
                </div>
                <div className="flex items-center mb-2 mt-4">
                  <FaEnvelope className="text-black mr-2 flex-shrink-0" />
                  <a
                    href="mailto:engtern2025@gmail.com"
                    className="hover:text-teal-600 transition-colors text-gray-800 break-all"
                  >
                    engtern2025@gmail.com
                  </a>
                </div>
                <div className="flex items-center mt-4">
                  <FaPhoneAlt className="text-black mr-2 flex-shrink-0" />
                  <span>+91 6398542286</span>
                </div>
              </address>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570419377220"
                className="text-gray-800 hover:text-teal-600"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://x.com/engtern2025" className="text-gray-800 hover:text-teal-600">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.instagram.com/engtern2025/" className="text-gray-800 hover:text-teal-600">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-800 hover:text-teal-600">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.youtube.com/@Engtern2025" className="text-gray-800 hover:text-teal-600">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://in.pinterest.com/engtern2025/_pins/" className="text-gray-800 hover:text-teal-600">
                <span className="sr-only">Pinterest</span>
                <FaPinterest className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs sm:text-sm text-gray-800">
              <p>Project by PSK Technologies</p>
              <p className="mt-1">&copy; {currentYear} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Engtern",
            "description": "Public speaking training and communication skills development",
            "url": "https://www.engtern.com",
            "logo": "${logozzzzzz}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kamteshwar, Sonegaon Garhwal",
              "addressLocality": "Pauri",
              "addressRegion": "Uttarakhand",
              "postalCode": "246174",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 6398542286",
              "contactType": "customer service",
              "email": "engtern2025@gmail.com"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61570419377220",
              "https://x.com/engtern2025",
              "https://www.instagram.com/engtern2025/",
              "https://www.youtube.com/@Engtern2025",
              "https://in.pinterest.com/engtern2025/_pins/"
            ]
          }
        `}
      </script>
    </>
  )
}

export default Footer

