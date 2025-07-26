// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsContactOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-10 py-10 bg-black/30 text-white sticky top-0 z-50">
      <div className="text-3xl font-bold text-purple-400">CYS</div>

      {/* 데스크탑 메뉴 */}
      <nav className="hidden lg:flex space-x-6 text-xl font-bold uppercase text-white">
        <NavLink href="/" icon={FaHome}>Home</NavLink>
        <NavLink href="/about" icon={FaUser}>About</NavLink>
        <NavLink href="/skills" icon={FaTools}>Skills</NavLink>
        <NavLink href="/projects" icon={FaLaptopCode}>Projects</NavLink>
        <NavLink href="/#contact" icon={FaEnvelope}>Contact</NavLink>
      </nav>

      {/* 모바일 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white text-2xl z-50 transition-transform duration-300 ease-in-out"
        aria-label="메뉴 토글"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 모바일 전체 화면 메뉴 */}
      {
        isOpen ? (
          <>
            <div
              className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col items-center justify-start py-8 lg:hidden text-white font-semibold uppercase text-xl z-40
  transition-transform duration-500 ease-in-out transform translate-x-full"
                }`}
            >
              <nav className="flex flex-col w-full mt-16 px-8 text-2xl">
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={handleLinkClick}
                  className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/skills"
                  onClick={handleLinkClick}
                  className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200"
                >
                  Skills
                </Link>

                {/* CONTACT 아코디언 */}
                <div className="w-full">
                  <button
                    onClick={() => setIsContactOpen(!isContactOpen)}
                    className="w-full flex justify-between items-center py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200"
                  >
                    <span>Contact</span>
                    {isContactOpen ? (
                      <FaChevronUp className="text-xl" />
                    ) : (
                      <FaChevronDown className="text-xl" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isContactOpen
                      ? 'max-h-[500px] opacity-100 mt-4 visible'
                      : 'max-h-0 opacity-0 invisible'
                      }`}
                  >
                    <Link
                      href="/contact/quote"
                      onClick={handleLinkClick}
                      className="w-full text-left py-3 pl-4 text-xl border-b border-gray-800 hover:text-purple-400 transition-colors duration-200 block"
                    >
                      견적문의
                    </Link>
                    <Link
                      href="/contact/revision"
                      onClick={handleLinkClick}
                      className="w-full text-left py-3 pl-4 text-xl border-b border-gray-800 hover:text-purple-400 transition-colors duration-200 block"
                    >
                      수정요청
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </>
        ) : (
          <></>
        )
      }

    </header>
  );
}

// 데스크탑용 NavLink 컴포넌트
interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

function NavLink({ href, icon: Icon, children }: NavLinkProps) {
  return (
    <Link href={href} className="relative group flex items-center space-x-2">
      <Icon className="inline-block" />
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </Link>
  );
}
