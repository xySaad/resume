export default function Skills({ skills }) {
  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-4 text-xl font-bold">Skills</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-2 text-sm font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {items.map((i) => (
                <span key={i} className="rounded bg-muted px-2 py-1">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
