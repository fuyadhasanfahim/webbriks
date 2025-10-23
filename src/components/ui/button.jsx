import React from 'react';

export default function Button({
    children,
    variant = 'orange',
    leftIcon = null,
    rightIcon = null,
    className = '',
    ...props
}) {
    const base =
        'group relative inline-flex items-center justify-center gap-1 sm:gap-1.5 font-medium text-white tracking-wide transition-all duration-500 ease-out rounded-md sm:rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-opacity-30 select-none active:scale-95';

    // ⬇️ Reduced padding & height for each breakpoint
    const sizes =
        'text-sm px-4 py-2.5 min-h-[38px] ' +
        'md:text-base md:px-5 md:py-3 md:min-h-[42px]';

    const variants = {
        teal: 'bg-gradient-to-br from-[#00A6A6] to-[#008c8c] hover:from-[#00bfbf] hover:to-[#00A6A6] focus:ring-[#00A6A6] shadow-sm shadow-teal-500/20 hover:shadow-md hover:shadow-teal-500/30 hover:scale-[1.03]',
        orange: 'bg-gradient-to-br from-[#FF6A00] to-[#e65f00] hover:from-[#ff7f26] hover:to-[#FF6A00] focus:ring-[#FF6A00] shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 hover:scale-[1.03]',
    };

    return (
        <button
            {...props}
            className={[base, sizes, variants[variant], className].join(' ')}
        >
            {/* Hover overlay */}
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"></span>

            {/* Left icon */}
            {leftIcon && (
                <span className="relative z-10 text-sm sm:text-base transition-transform duration-300 group-hover:scale-110">
                    {leftIcon}
                </span>
            )}

            {/* Text */}
            <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px] sm:max-w-none">
                {children}
            </span>

            {/* Right icon */}
            {rightIcon && (
                <span className="relative z-10 text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-0.5">
                    {rightIcon}
                </span>
            )}

            {/* Bottom line */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
        </button>
    );
}
