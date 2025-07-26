export default function SkillsPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-900 text-white">
        <main className="px-8 py-16 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-white">🧠 My Skills</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:bg-white/20 transition">
              <h3 className="text-xl font-bold text-purple-300 mb-2">💻 Backend</h3>
              <p className="text-gray-200">Node.js, NestJS, Express, REST API</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:bg-white/20 transition">
              <h3 className="text-xl font-bold text-purple-300 mb-2">🗄️ Database</h3>
              <p className="text-gray-200">PostgreSQL, MongoDB, Redis, Prisma</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:bg-white/20 transition">
              <h3 className="text-xl font-bold text-purple-300 mb-2">⚙️ DevOps</h3>
              <p className="text-gray-200">Docker, AWS EC2/S3, GitHub Actions</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  