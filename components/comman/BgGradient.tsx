interface BGGradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BGGradient({ children, className }: BGGradientProps) {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
          bg-gradient-to-br from-green-400 via-green-500 to-emerald-400 opacity-20 
          sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: `polygon(
              74.1% 44.1%, 100% 61.6%, 97.5% 92.9%, 
              85.5% 96.9%, 80.7% 72%, 72.5% 32.5%, 
              60.2% 20.4%, 52.4% 44.8%, 47.5% 58.3%, 
              45.2% 32.4%, 26.9% 20.4%, 18.4% 45.7%, 
              0% 64.9%, 17.7% 92.9%, 38.3% 100%, 
              60.3% 97.8%, 75.1% 89.5%, 74.1% 44.1%
            )`,
          }}
        />
      </div>
      {children}
    </div>
  );
}
