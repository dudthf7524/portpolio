// src/app/layout.tsx
import './globals.css'; // tailwind import 포함
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: '디자인을담다 포트폴리오',
  description: '내 백엔드/프론트엔드 프로젝트 소개',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-black text-white">
        <Navbar /> {/* ✅ 모든 페이지 상단에 고정 */}
        {children}
      </body>
    </html>
  );
}
