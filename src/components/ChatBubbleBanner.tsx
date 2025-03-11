export function ChatBubbleBanner() {
  return (
    <div className="fixed bottom-7 right-28 z-50">
      <div className="relative">
        <div className="flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-primary shadow-lg transition-transform">
          <span className="font-medium">Vraag je gratis offerte aan</span>
        </div>
        {/* Chat bubble triangle */}
        <div className="absolute -right-1 bottom-1/2 h-4 w-4 translate-y-1/2 rotate-45 transform bg-primary-foreground"></div>
      </div>
    </div>
  );
}
