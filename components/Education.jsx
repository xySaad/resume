export default function Education({ education }) {
  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-4 text-xl font-bold">Education</h2>
      {education.map((e) => (
        <div key={e.role} className="mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="text-muted-foreground">{e.place}</p>
            </div>
            <span className="text-sm text-muted-foreground">{e.period}</span>
          </div>
          <ul className="mt-3 space-y-1 text-sm">
            {e.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
