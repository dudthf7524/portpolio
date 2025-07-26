import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-900 text-white">
        {/* Main */}
        <main className="px-8 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-white">🛠 내가 만든 프로젝트</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="근태 관리 시스템"
              description="GPS 기반 출퇴근 기록, 관리자 승인, 리포트 자동화 기능"
              tags={["React", "Node.js", "MongoDB"]}
              image="/images/project1.png"
            />
            <ProjectCard
              title="쇼핑몰 백오피스"
              description="상품 등록/수정, 주문 처리, 통계 대시보드"
              tags={["Next.js", "NestJS", "PostgreSQL"]}
              image="/images/project2.png"
            />
            {/* 추가 프로젝트들 */}
          </div>
        </main>
      </div>
    );
  }
  