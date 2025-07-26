'use client';

import {
  FaUser
} from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="">
      <main className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-white flex items-center gap-2">
          <FaUser className="text-purple-300  mr-1" /> ABOUT
        </h2>
        <p className="text-lg leading-relaxed text-gray-200">
          안녕하세요! 저는 백엔드에 특화된 개발자이며, 안정적인 시스템 아키텍처 설계와
          효율적인 API 개발에 관심이 많습니다. 최근에는 GPS 기반 출퇴근 시스템과 백오피스 자동화 도구들을 만들었습니다.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          NestJS, PostgreSQL, Redis 등을 활용하며 DevOps 파이프라인도 직접 구축해보았습니다.
          실용성과 확장성을 고려한 백엔드 시스템을 설계하고, 협업과 코드 품질을 중요하게 생각합니다.
        </p>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-purple-300">기본 정보</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">이름</span>
              <span className="text-xl font-bold text-white">홍길동</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">생년월일</span>
              <span className="text-xl font-bold text-white">1990년 1월 1일</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">학력</span>
              <span className="text-xl font-bold text-white">서울대학교 컴퓨터공학과 졸업</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">전화번호</span>
              <span className="text-xl font-bold text-white">010-1234-5678</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">이메일</span>
              <span className="text-xl font-bold text-white">honggildong@example.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
