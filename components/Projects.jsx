export default function Projects({ projects }) {
  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-4 text-xl font-bold">Projects</h2>
      {projects.map((p) => (
        <div key={p.name} className="mb-4">
          <h3 className="font-semibold">
            {p.name}
            {!p.highlight && (
              <span className="text-muted-foreground"> - UI Framework</span>
            )}
          </h3>
          <p className="mt-1 text-sm">{p.description}</p>
          <div className="mt-2 flex gap-2 text-xs text-muted-foreground">
            {p.tech.join(" • ")}
          </div>
        </div>
      ))}
    </section>
  );
}
