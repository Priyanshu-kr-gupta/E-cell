import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import teamImgFallback from '/assets/user.jpg';
import sponsorImg from '/assets/speaker/dummyimage.jpg';

const SECTIONS = [
  'Faculty',
  'Lead',
  'Sponsorship',
  'Web',
  'CRN',
  'PR',
  'Creative',
  'Operation',
];

// Sponsor data with names
const SPONSORS = [
  { name: "abc", image: sponsorImg },
  { name: "dummy", image: sponsorImg },
  { name: "hello", image: sponsorImg },
  { name: "world", image: sponsorImg }
];

export default function Team() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeamMembers = useCallback(async (designation) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/public/get-team-members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ designation }),
      });
      if (!res.ok) throw new Error('Fetch failed');
      const json = await res.json();
      setTeamMembers(json.teamMembers || []);
    } catch (err) {
      setError(err.message);
      setTeamMembers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeamMembers(activeSection);
  }, [activeSection, fetchTeamMembers]);

  return (
    <section className="min-h-screen">
      {/* Hero Header Section - Pure Black Background */}
      <div className="relative bg-black h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-1"></div>
        <div className="absolute inset-0 bg-[url('/assets/team-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-2 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight text-white">Meet The Team</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The dedicated individuals behind our success
          </p>
        </div>
      </div>

      {/* Navigation Tabs - Different Color (Dark Gray) */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {SECTIONS.map(sec => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg transition-all duration-300 transform ${
                  activeSection === sec 
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {sec}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Team Members Section - Darker Gray */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading && (
            <div className="flex justify-center py-12">
              <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <div className="inline-block bg-red-900/50 text-red-300 px-6 py-3 rounded-lg">
                {error}
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {teamMembers.map(member => (
                <div key={member.email} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src={member.image || teamImgFallback}
                      alt={member.name}
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-pink-400 font-medium">{member.designation}</p>
                        
                        <div className="flex space-x-4 mt-4">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-white hover:text-pink-400 transition-colors"
                            >
                              <AiOutlineLinkedin size={24} />
                            </a>
                          )}
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-white hover:text-pink-400 transition-colors"
                            >
                              <MdOutlineEmail size={24} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sponsors Section - Black Again */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-8 md:mb-12 text-white relative">
            <span className="inline-block px-4 relative z-2">
              Our Sponsors
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-purple-600"></span>
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {SPONSORS.map((sponsor, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-36 h-36 md:w-48 md:h-48 flex flex-col items-center justify-center transition-transform duration-300 hover:transform hover:scale-105"
              >
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className="max-w-full max-h-24 md:max-h-32 p-2 md:p-4" 
                />
                <p className="text-white font-medium text-sm md:text-base mt-2">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}