import type React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

interface FooterProps {
  name: string
  email: string
  github: string
  linkedin: string
}

const Footer: React.FC<FooterProps> = ({ name, email, github, linkedin }) => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-400">Web Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors duration-300">
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

