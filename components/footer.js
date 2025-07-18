import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-300 bg-opacity-10 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-lg font-semibold">Made by Praneeth</p>

        <div className="text-gray-700 space-y-1">
          <p>📞 +1 (512) 956-8437</p>
          <p>✉️ gpraneeth.dev39@gmail.com</p>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-gray-800 text-2xl">
          <a
            href="https://www.linkedin.com/in/praneethg39/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/PraneethBunny123" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
