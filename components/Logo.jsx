import Link from 'next/link'

export default function Logo({ variant = 'light', fullWhite = false, className = '' }) {
  const isLight = variant === 'light'

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 min-w-0 shrink-0 group ${className}`}>
      {/* Icon Symbol */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M13 4C13 2.89543 13.8954 2 15 2H17C18.1046 2 19 2.89543 19 4V13H28C29.1046 13 30 13.8954 30 15V17C30 18.1046 29.1046 19 28 19H19V28C19 29.1046 18.1046 30 17 30H15C13.8954 30 13 29.1046 13 28V19H4C2.89543 19 2 18.1046 2 17V15C2 13.8954 2.89543 13 4 13H13V4Z" 
            fill="currentColor" 
            fillOpacity="0.25"
          />
          <path 
            d="M4 16H9.5L12 9L16 23L20 12L22.5 16H28" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <circle cx="16" cy="16" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Text Branding */}
      <div className="flex flex-col min-w-0">
        <span className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${isLight ? 'text-white' : 'text-slate-900'}`}>
          Novacore<span className={fullWhite ? 'text-white' : 'text-cyan-400'}>Life</span>
        </span>
        {/* Hide tagline on small screens to prevent pushing header elements */}
        <span className={`hidden sm:block text-[10px] uppercase font-semibold tracking-widest mt-1 ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
          Health & Innovation
        </span>
      </div>
    </Link>
  )
}
