/* Renders a single JSON-LD <script> tag. The object is always our own
   static data (never user input), so JSON.stringify is sufficient —
   no HTML-escaping needed since none of our schema values contain markup. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
