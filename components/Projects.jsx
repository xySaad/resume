"use client";
import { useEffect, useState } from "react";

export default function Projects({ projects }) {
  const [prCounts, setPrCounts] = useState({});

  useEffect(() => {
    projects.forEach(async (p) => {
      if (!p.link) return;

      try {
        const repoPath = p.link.replace("https://github.com/", "");
        const resp = await fetch(
          `https://api.github.com/repos/${repoPath}/pulls?state=all`
        );
        const prs = await resp.json();
        setPrCounts((prev) => ({ ...prev, [p.name]: prs.length }));
      } catch (err) {
        console.error("Failed to fetch PRs for", p.name, err);
      }
    });
  }, [projects]);

  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-4 text-xl font-bold">Projects</h2>
      {projects.map((p) => (
        <div key={p.name} className="mb-4">
          <h3 className="font-semibold">
            {p.name}
            {p.highlight && (
              <span className="text-muted-foreground"> - {p.highlight}</span>
            )}
          </h3>
          <p className="mt-1 text-sm">{p.description}</p>
          <div className="mt-2 flex gap-2 text-xs text-muted-foreground">
            {p.tech.join(" • ")}
          </div>
          {p.link && (
            <div className="mt-1 text-xs">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Repo Link
              </a>
              {prCounts[p.name] !== undefined && (
                <span className="ml-2">• PRs: {prCounts[p.name]}</span>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
