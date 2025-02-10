import { useState } from "react"
import aboutgirls from "../asset/img/about_girl.png"
import diya from "../asset/img/diya.webp"
import prashantsir from "../asset/img/prashantsir.webp"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white">
      {/* Add SEO Meta Tags */}
      <head>
        <title>About Engtern | Professional English & Public Speaking Training Institute</title>
        <meta
          name="description"
          content="Engtern is a premier English language and public speaking training institute led by expert instructors. We offer personalized communication skills development, public speaking courses, and professional English training."
        />
        <meta
          name="keywords"
          content="English speaking course, public speaking training, communication skills development, professional English training, English language institute, public speaking classes, English fluency, personality development, spoken English, presentation skills ,Best English speaking institute in India,Top-rated public speaking courses,Where to learn English speaking online,Public speaking coaching near me,Online English fluency training for professionals,Best platform to improve communication skills,How to master public speaking easily,Affordable spoken English classes with experts,Public speaking tips for beginners,Top personal development courses in India,Expert-led public speaking sessions,Spoken English course for kids & adults,How to gain confidence in public speaking,Online English learning for career growth,Best communication skills trainer in India,Where to find one-on-one English classes,Best platform for professional English learning,Effective online public speaking coaching,English improvement training with experts,Best spoken English course for job seekers"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Engtern | Professional English & Public Speaking Training" />
        <meta
          property="og:description"
          content="Transform your communication skills with Engtern's expert-led English and public speaking training programs. Join our comprehensive courses for personal and professional growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engtern.com/about" />
        <meta property="og:image" content="https://www.engtern.com/og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@engtern" />
        <meta name="twitter:title" content="About Engtern | Professional English & Public Speaking Training" />
        <meta
          name="twitter:description"
          content="Transform your communication skills with Engtern's expert-led English and public speaking training programs. Join our comprehensive courses for personal and professional growth."
        />
        <meta name="twitter:image" content="https://www.engtern.com/twitter-image.jpg" />
      </head>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-scaleIn:hover {
            animation: scaleIn 0.3s ease-out forwards;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }
            .founder-content {
              flex-direction: column;
              align-items: center;
            }
            .founder-image {
              margin-left: auto;
              margin-right: auto;
            }
            h1, h3, p {
              text-align: center;
            }
            ul {
              text-align: left;
              padding-left: 1.5rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
              <span className="text-yellow-500">Engtern</span>: English, Your Gateway to a Brighter Future!
            </h1>
            <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
              ENGTERN, a team of amazing teachers—along with the management team, have a vision of providing quality and
              catering to the needs of everyone irrespective of the issues they have.
            </p>
            <p className="text-base text-teal-500 italic text-center md:text-left">
              <strong>"Prices won't make a hole in your pocket instead content will make you a whole person"</strong>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden animate-scaleIn">
              <img
                src={aboutgirls || "/placeholder.svg"}
                alt="Students learning English at Engtern - Professional English Training"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <section className="bg-gradient-to-b from-[#f5eeff] to-[white] py-12 animate-fadeIn">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet Our <span className="text-yellow-400">Founders</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Diya Pant */}
            <div className="w-full md:w-1/2 flex flex-col items-center founder-content">
              <div className="relative h-[350px] w-full max-w-[320px] rounded-lg overflow-hidden mb-4 founder-image animate-scaleIn">
                <img
                  src={diya || "/placeholder.svg"}
                  alt="Diya Pant - Co-Founder of Engtern, English Communication Expert"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diya Pant</h3>
              <p className="text-gray-600 mb-4 text-center">Co-Founder, English Communication & Public Speaker</p>
              <div className="flex justify-center space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61570419377220"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook Profile"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/engtern2025/"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/engtern-english-made-easy-749b7a343/"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Read Less About Diya Pant" : "Read More About Diya Pant"}
              </button>

              {isExpanded && (
                <div className="mt-8 text-gray-700 animate-fadeIn max-w-3xl mx-auto px-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-4 text-center">About Diya Pant</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-teal-500 text-center">
                        Multifaceted Professional Experience:
                      </h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>Content Writing Head</li>
                        <li>Public Speaking Instructor</li>
                        <li>HR and Coordinator</li>
                        <li>Guest Faculty at Central University, Uttarakhand</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-yellow-500 text-center">Academic Excellence:</h4>
                      <p className="mb-2 text-center">Presented research papers at:</p>
                      <ul className="list-disc list-inside mb-4">
                        <li>National Conferences: IIT, Ministry of Culture, IGNCA</li>
                        <li>International Conferences</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-yellow-500 text-center">Published Author:</h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>"Say Hi to Emotions"</li>
                        <li>"Love Yourself"</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-yellow-500 text-center">Founder of Engtern:</h4>
                      <p className="text-center">
                        Dedicated to empowering individuals through English language skills and personal development,
                        fostering growth and success.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Prashant Kadhao */}
            <div className="w-full md:w-1/2 flex flex-col items-center founder-content">
              <div className="relative h-[350px] w-full max-w-[320px] rounded-lg overflow-hidden mb-4 founder-image animate-scaleIn">
                <img
                  src={prashantsir || "/placeholder.svg"}
                  alt="Prashant Kadhao - Co-Founder and Technical Partner of Engtern"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prashant Kadhao</h3>
              <p className="text-gray-600 mb-4 text-center">Co-Founder Technical Partner Of Engtern</p>
              <div className="flex justify-center space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100089928126568"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook Profile"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/prashant_kadhao/"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashant-kadhao-544600a9/"
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Engtern",
          description:
            "Engtern is a premier English language and public speaking training institute led by expert instructors.",
          url: "https://www.engtern.com",
          logo: "https://www.engtern.com/logo.png",
          sameAs: [
            "https://www.facebook.com/profile.php?id=61570419377220",
            "https://www.instagram.com/engtern2025/",
            "https://www.linkedin.com/in/engtern-english-made-easy-749b7a343/",
          ],
          founder: [
            {
              "@type": "Person",
              name: "Diya Pant",
              jobTitle: "Co-Founder, English Communication & Public Speaker",
            },
            {
              "@type": "Person",
              name: "Prashant Kadhao",
              jobTitle: "Co-Founder Technical Partner",
            },
          ],
        })}
      </script>
    </div>
  )
}

export default About

