export default function Summary({ summary }) {
  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-3 text-xl font-bold">Who Am I?</h2>
      {summary.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {p}
        </p>
      ))}
    </section>
  );
}
