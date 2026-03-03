export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-xs px-4 py-2 rounded-2xl bg-white/10 text-white rounded-bl-none flex items-center gap-1.5">
        <span className="text-sm">ZORROW AI is typing</span>
        <div className="flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '1.4s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce"
            style={{ animationDelay: '0.2s', animationDuration: '1.4s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce"
            style={{ animationDelay: '0.4s', animationDuration: '1.4s' }}
          />
        </div>
      </div>
    </div>
  )
}
