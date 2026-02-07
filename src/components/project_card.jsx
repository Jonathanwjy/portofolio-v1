import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, onClick }) {
  const { title, description, image, tags, githubUrl, demoUrl } = project;
  const imageThumbnail = project.images ? project.images[0] : project.image;

  return (
    <Card
      onClick={onClick}
      className="flex flex-col h-full overflow-hidden group bg-card rounded-[2rem] border-none shadow-xl max-w-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
    >
      {/* Container Gambar */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageThumbnail}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          // Mencegah gambar pecah seperti di screenshot
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=Project+Image";
          }}
        />

        {/* Overlay Hover dengan Ikon GitHub & Link */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-all shadow-md"
            >
              <Github className="w-6 h-6" />
            </a>
          ) : (
            <button
              aria-disabled="true"
              className="p-3 bg-white rounded-full text-black opacity-50 cursor-not-allowed transition-all shadow-md"
              title="No GitHub link"
            >
              <Github className="w-6 h-6" />
            </button>
          )}

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-all shadow-md"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          ) : (
            <button
              aria-disabled="true"
              className="p-3 bg-white rounded-full text-black opacity-50 cursor-not-allowed transition-all shadow-md"
              title="No demo available"
            >
              <ExternalLink className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <CardHeader className="space-y-3 p-6 pb-4">
          <h3 className="text-2xl font-bold tracking-tight text-foreground line-clamp-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-[15px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </CardHeader>

        {/* Menampilkan semua tag tanpa batasan +2 */}
        <CardFooter className="mt-auto p-6 pt-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors px-3 py-1.5 text-xs font-medium rounded-full border-none cursor-default"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
}
