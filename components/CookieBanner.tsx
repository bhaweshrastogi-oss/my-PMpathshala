interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="#" className="text-primary-600 hover:underline">Learn more</a>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onAccept}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium text-sm transition-all"
            >
              Accept
            </button>
            <button
              onClick={onDecline}
              className="border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 px-6 py-2 rounded-full font-medium text-sm transition-all"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
