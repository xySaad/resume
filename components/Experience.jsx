"use client";
import { useEffect, useState } from "react";
import experience_impact from "@/data/experience/";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MTg1IiwiaWF0IjoxNzY2MTc5NTkyLCJpcCI6IjE3Mi4xOC4wLjIiLCJleHAiOjE3NjYyNjU5OTIsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWNhbXB1c2VzIjoie30iLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjQxODUiLCJ4LWhhc3VyYS10b2tlbi1pZCI6IjY5NDAzNDFmLTg5NzAtNDQxYy1iYWM3LTA3Mjc1NjZhMDc0YyJ9fQ.63i5gkVYd8DLXOu1-PuJG7tkzH8ak4csv-3z4qSrPB4";

const QUERY = `{
  group(where: {status: {_eq: finished}, captain: {login: {_eq: "srm"}}}) {
    path
    members {
      userLogin
    }
    results(order_by: [{updatedAt: desc}], limit: 1) {
      grade
    }
  }
}`;

export default function Experience({ experience }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const resp = await fetch(
        "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${JWT}` },
          body: JSON.stringify({ query: QUERY }),
        }
      );

      const json = await resp.json();
      const groups = json?.data.group || [];

      const totalProjects = groups.length;

      const groupProjects = groups.filter((g) => g.members.length > 1).length;

      const succeededProjects = groups.filter((g) =>
        g.results?.some((r) => r.grade >= 1)
      ).length;

      const peopleSet = new Set(
        groups.flatMap((g) => g.members.map((m) => m.userLogin))
      );

      const distinctPeople = peopleSet.size;

      setData({
        totalProjects,
        groupProjects,
        succeededProjects,
        distinctPeople,
      });
    })();
  }, []);

  return (
    <section className="border-b border-border py-6">
      <h2 className="mb-4 text-xl font-bold">Experience</h2>
      {experience.map((e) => {
        const impact = experience_impact[e.id];
        return (
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
              <li key={"succeededProjects"} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                succeeded {impact?.succeededProjects} among{" "}
                {impact?.totalProjects} project
              </li>
              <li key={"groupProjects"} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                collaborated in {impact?.groupProjects} project with{" "}
                {impact?.distinctPeople} peers
              </li>
            </ul>
          </div>
        );
      })}
    </section>
  );
}
