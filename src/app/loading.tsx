export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-card/80 px-8 py-10 shadow-lg">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="text-sm text-foreground/70">Loading…</p>
      </div>
    </div>
  );
}
