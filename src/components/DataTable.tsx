import type { DataTable as DataTableType } from "../types";

export default function DataTable({ table }: { table: DataTableType }) {
  return (
    <figure className="my-6">
      <p className="font-serif text-base font-semibold text-ink">{table.title}</p>
      <div className="mt-2 overflow-x-auto rounded-lg border border-ink/10">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-beige/70 text-xs font-semibold uppercase tracking-wide text-charcoal">
              <th className="w-28 border-b border-ink/10 px-4 py-2.5" />
              <th className="w-14 border-b border-ink/10 px-3 py-2.5">{table.columnLabels.score}</th>
              <th className="border-b border-ink/10 px-4 py-2.5">{table.columnLabels.adult}</th>
              <th className="border-b border-ink/10 px-4 py-2.5">{table.columnLabels.pediatric}</th>
            </tr>
          </thead>
          <tbody>
            {table.sections.flatMap((section) =>
              section.rows.map((row, rowIndex) => (
                <tr key={`${section.label}-${row.score}`} className="odd:bg-white even:bg-ivory/40">
                  {rowIndex === 0 && (
                    <th
                      scope="rowgroup"
                      rowSpan={section.rows.length}
                      className="border-b border-r border-ink/10 px-4 py-2 align-top text-sm font-semibold text-ink"
                    >
                      {section.label}
                    </th>
                  )}
                  <td className="border-b border-ink/5 px-3 py-2 text-charcoal">{row.score}</td>
                  <td className="border-b border-ink/5 px-4 py-2 text-charcoal">{row.adult}</td>
                  <td className="border-b border-ink/5 px-4 py-2 text-charcoal">{row.pediatric}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {table.source && <figcaption className="mt-1.5 text-xs text-charcoal/70">Source: {table.source}</figcaption>}
    </figure>
  );
}
