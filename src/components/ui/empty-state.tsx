export function EmptyState({ title, desc }) {
    return (
      <div className="text-center py-12 md:py-20 space-y-2">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    );
  }
