import React from "react";
import { Github, Mail, MapPin, Phone } from "lucide-react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              opacity: 0,
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Moazan Waheed
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">
            Software Engineer | Front-End Developer | TypeScript | React |
            React-Native
          </h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-3 contact-link bg-white/10 px-4 py-2 rounded-full">
              <MapPin size={18} />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-3 contact-link bg-white/10 px-4 py-2 rounded-full">
              <Mail size={18} />
              <a href="mailto:moazan139@gmail.com" className="hover:underline">
                moazan139@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 contact-link bg-white/10 px-4 py-2 rounded-full">
              <Phone size={18} />
              <span>0317-4440188</span>
            </div>
            <div className="flex items-center gap-3 contact-link bg-white/10 px-4 py-2 rounded-full">
              <Github size={18} />
              <a
                href="https://github.com/moazan-ad"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub / moazan-ad
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
            Front-End Developer with 3 years of industry experience in
            developing mobile and web applications using React Native,
            TypeScript, React.js, and Next.js. Skilled in leading front-end
            development teams to ensure effective and timely project delivery
            that reduced project time by 20%. Experience in Agile environments,
            collaborating with cross-functional teams to deliver high-quality
            solutions while staying updated with industry trends and best
            practices.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 animate-fadeInUp">
            Experience
          </h2>

          <div className="space-y-12">
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-fadeInUp">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600">Agile District</p>
                </div>
                <p className="text-gray-600 bg-blue-50 px-4 py-1 rounded-full">
                  2024 - Present
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  Led a team of front-end developers, ensuring development of
                  scalable JavaScript applications
                </li>
                <li>
                  Developed Govcon, an AI-powered web application that enhances
                  government contract proposals
                </li>
                <li>
                  Contributed to Capital Typing, a cloud-based employee and
                  services management system
                </li>
                <li>
                  Developed Stigma Learning, an AI-powered course and tutor
                  management system
                </li>
                <li>
                  Implemented sockets for real-time data communication across
                  projects
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-fadeInUp">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700">
                    Associate Software Engineer
                  </h3>
                  <p className="text-gray-600">Agile District</p>
                </div>
                <p className="text-gray-600 bg-blue-50 px-4 py-1 rounded-full">
                  2023 - 2024
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  Developed mobile applications using React Native for projects
                  like BorroUp, U4RIA, ATypicallyMe
                </li>
                <li>
                  Built clones of social media applications using React Native
                  and Next.js
                </li>
                <li>
                  Contributed to NowVPlay, encompassing Venue Manager, Talent
                  Portal, and User Portal
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-fadeInUp">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700">
                    Web Developer
                  </h3>
                  <p className="text-gray-600">
                    University of Management and Technology
                  </p>
                </div>
                <p className="text-gray-600 bg-blue-50 px-4 py-1 rounded-full">
                  2022 - 2023
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  Gained experience in web development using ReactJs, Bootstrap,
                  and Firestore
                </li>
                <li>
                  Used version control effectively to manage codebase and
                  implement bug fixes
                </li>
                <li>Revamped University's LMS portal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 animate-fadeInUp">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "React Js",
              "React Native",
              "Next Js",
              "HTML",
              "CSS/SASS",
              "RESTful web services",
              "Git/Github",
              "TypeScript",
              "Socket.io",
              "Material UI",
              "Tailwind css",
              "Expo",
              "Gradle",
              "AI prompts",
            ].map((skill) => (
              <div
                key={skill}
                className="skill-card bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center"
              >
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Education</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Bachelor's of Science in Software Engineering
                </h3>
                <p className="text-gray-600">
                  University of Management and Technology
                </p>
              </div>
              <p className="text-gray-600 bg-blue-50 px-4 py-1 rounded-full">
                2019 - 2023
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2025 Moazan Waheed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
