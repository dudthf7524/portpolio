// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
// FaBars 아이콘을 추가로 임포트합니다.
import { FaHome, FaUser, FaTools, FaLaptopCode, FaEnvelope, FaTimes, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsContactOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black backdrop-blur-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-purple-400">디자인을담다</div>

      {/* 데스크탑용 메뉴 (이 부분은 변경 없음) */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase text-white">
        <NavLink href="/" icon={FaHome}>Home</NavLink>
        <NavLink href="/about" icon={FaUser}>About</NavLink>
        <NavLink href="/skills" icon={FaTools}>Skills</NavLink>
        <NavLink href="/projects" icon={FaLaptopCode}>Projects</NavLink>
        <NavLink href="/#contact" icon={FaEnvelope}>Contact</NavLink>
      </nav>

      {/* 모바일 햄버거/닫기 아이콘 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl z-50 transition-transform duration-300 ease-in-out" // 애니메이션 추가
        aria-label="메뉴 토글"
      >
        {isOpen ? <FaTimes /> : <FaBars />} {/* isOpen 상태에 따라 아이콘 변경 */}
      </button>

      {/* 모바일 전체 화면 오버레이 메뉴 (이 부분은 변경 없음) */}
      <div
        className={`min-h-screen fixed top-0 left-0 w-full h-full bg-black/90 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-start py-8 md:hidden text-white font-semibold uppercase text-xl z-40
          transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* 닫기 버튼 (이 부분은 기존 'X' 버튼을 유지하거나 삭제 가능. 여기서는 햄버거 버튼이 'X'로 변하므로 중복될 수 있어 주석 처리하거나 제거를 고려) */}
        {/* <button
          onClick={handleLinkClick}
          className="absolute top-6 right-6 text-white text-3xl z-50"
          aria-label="메뉴 닫기"
        >
          <FaTimes />
        </button> */}
        {/*
          참고: 햄버거 버튼 자체가 'X'로 변하는 형태이므로,
          여기 오버레이 안에 있는 '닫기' 버튼은 중복될 수 있습니다.
          사용자 경험을 위해 둘 중 하나만 선택하는 것이 좋습니다.
          만약 오버레이 내부의 'X' 버튼을 유지하려면,
          위의 햄버거 버튼을 단순히 FaBars로 고정하고,
          여기서는 FaTimes를 계속 사용하면 됩니다.
          지금은 햄버거 버튼이 'X'로 변하므로 이 내부 버튼은 주석 처리하겠습니다.
        */}


        {/* 메뉴 항목 컨테이너 (이 부분은 변경 없음) */}
        <nav className="flex flex-col w-full mt-16 px-8 text-2xl">
          <Link href="/about" onClick={handleLinkClick} className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200">
            ABOUT
          </Link>
          <Link href="/projects" onClick={handleLinkClick} className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200">
            projects
          </Link>
          <Link href="/skills" onClick={handleLinkClick} className="w-full text-left py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200">
            skills
          </Link>

          {/* CONTACT 아코디언 섹션 (이 부분은 변경 없음) */}
          <div className="w-full">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-full flex justify-between items-center py-4 border-b border-gray-700 hover:text-purple-400 transition-colors duration-200"
            >
              <span>CONTACT</span>
              {isContactOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isContactOpen ? "max-h-[500px] opacity-100 mt-4 visible" : "max-h-0 opacity-0 invisible"
                }`}
            >
              {/* 이미지에 보이는 '견적문의'와 '수정요청'을 별도 메뉴 항목처럼 배치 */}
              <Link href="/contact/quote" onClick={handleLinkClick} className="w-full text-left py-3 pl-4 text-xl border-b border-gray-800 hover:text-purple-400 transition-colors duration-200 block">
                견적문의
              </Link>
              <Link href="/contact/revision" onClick={handleLinkClick} className="w-full text-left py-3 pl-4 text-xl border-b border-gray-800 hover:text-purple-400 transition-colors duration-200 block">
                수정요청
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

// 데스크탑 메뉴 링크를 위한 보조 컴포넌트 (변경 없음)
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