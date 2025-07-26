// src/components/ProjectCard.tsx

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-105 transition transform duration-300 shadow-md">
      <img
        src={image}
        alt={title}
        className="rounded-md h-40 w-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-purple-300 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-purple-700/30 px-2 py-1 rounded-full text-purple-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
