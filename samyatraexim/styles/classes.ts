// ============================================================
// classes.ts — Shared CSS class utility (Tailwind-like)
// Usage: import { cx } from "@/styles/classes"
// ============================================================

/** Merge class names (filters falsy values) */
export function cx(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}

// ────────────────────────────────────────────────────────────
// Layout
// ────────────────────────────────────────────────────────────
export const layout = {
    section: "w-full px-6 py-16 md:px-12 lg:px-24",
    container: "max-w-6xl mx-auto",
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex items-center justify-between",
    flexCol: "flex flex-col",
    grid2: "grid grid-cols-1 md:grid-cols-2 gap-8",
    grid3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    grid4: "grid grid-cols-2 lg:grid-cols-4 gap-6",
    fullScreen: "min-h-screen w-full",
} as const;

// ────────────────────────────────────────────────────────────
// Typography
// ────────────────────────────────────────────────────────────
export const text = {
    hero: "text-3xl lg:text-5xl md:text-7xl font-black tracking-tight leading-none",
    h1: "text-2xl lg:text-5xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    body: "text-base text-gray-700 leading-relaxed",
    bodyLg: "text-lg text-gray-700 leading-relaxed",
    small: "text-sm text-gray-500",
    label: "text-xs font-semibold uppercase tracking-widest text-gray-400",
    center: "text-center",
} as const;

// ────────────────────────────────────────────────────────────
// Colors (backgrounds)
// ────────────────────────────────────────────────────────────
export const bg = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900",
    primary: "bg-blue-600",
    primaryLight: "bg-blue-50",
    accent: "bg-amber-400",
    gradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
    gradientWarm: "bg-gradient-to-br from-orange-500 to-rose-600",
} as const;

// ────────────────────────────────────────────────────────────
// Text colors
// ────────────────────────────────────────────────────────────
export const color = {
    white: "text-white",
    dark: "text-gray-900",
    muted: "text-gray-500",
    primary: "text-blue-600",
    accent: "text-amber-500",
} as const;

// ────────────────────────────────────────────────────────────
// Cards & Surfaces
// ────────────────────────────────────────────────────────────
export const card = {
    base: "rounded-2xl bg-white shadow-sm border border-gray-100",
    elevated: "rounded-2xl bg-white shadow-lg border border-gray-100",
    dark: "rounded-2xl bg-gray-800 border border-gray-700",
    hover: "transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl",
    padding: "p-6",
    paddingLg: "p-10",
} as const;

// ────────────────────────────────────────────────────────────
// Buttons
// ────────────────────────────────────────────────────────────
export const btn = {
    base: "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer",
    primary: "bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 active:scale-95",
    outline: "border-2 border-blue-600 text-blue-600 px-6 py-3 hover:bg-blue-50",
    ghost: "text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-lg",
    accent: "bg-amber-400 text-gray-900 px-6 py-3 hover:bg-amber-500 active:scale-95",
    sm: "text-sm px-4 py-2",
    lg: "text-lg px-8 py-4",
} as const;

// ────────────────────────────────────────────────────────────
// Spacing
// ────────────────────────────────────────────────────────────
export const space = {
    stackSm: "space-y-2",
    stack: "space-y-4",
    stackLg: "space-y-8",
    gap: "gap-4",
    gapLg: "gap-8",
} as const;

// ────────────────────────────────────────────────────────────
// Dividers & Borders
// ────────────────────────────────────────────────────────────
export const border = {
    base: "border border-gray-200",
    top: "border-t border-gray-200",
    bottom: "border-b border-gray-200",
    rounded: "rounded-xl",
    roundedFull: "rounded-full",
} as const;

// ────────────────────────────────────────────────────────────
// Images & Media
// ────────────────────────────────────────────────────────────
export const media = {
    cover: "w-full h-full object-cover",
    rounded: "rounded-2xl overflow-hidden",
    aspect169: "aspect-video",
    aspectSquare: "aspect-square",
} as const;

// ────────────────────────────────────────────────────────────
// Badges & Tags
// ────────────────────────────────────────────────────────────
export const badge = {
    base: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
    primary: "bg-blue-100 text-blue-700",
    accent: "bg-amber-100 text-amber-700",
    success: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-600",
} as const;

// ────────────────────────────────────────────────────────────
// Header
// ────────────────────────────────────────────────────────────
export const header = {
    // Root wrapper — fixed, full width, sits above everything
    root: "fixed top-0 left-0 w-full z-50 transition-all duration-300",

    // Scrolled state: frosted glass white background + shadow
    scrolled: "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.07),0_4px_24px_rgba(0,0,0,0.06)]",

    // At top of page: transparent (works over hero images)
    transparent: "bg-transparent",

    // Inner content row
    inner: "max-w-[1200px] mx-auto px-8 h-auto flex items-center justify-between py-4",

    // ── Logo ──
    logo: "flex items-center gap-[10px] no-underline cursor-pointer group",

    logoMark: "w-[72px] h-[72px] rounded-[24px] flex items-center justify-center flex-shrink-0 transition-all duration-200 ",
    logoImage: "w-full h-full object-fit rounded-lg transition-transform duration-200",
    logoText: "flex flex-col leading-none",

    logoName: "text-[18px] font-bold tracking-[-0.3px] transition-colors duration-300",
    logoNameDark: "text-[#1a3a2e]",   // when header is scrolled
    logoNameLight: "text-white",        // when header is transparent (over hero)

    logoTagline: "text-[9px] font-medium tracking-[2px] uppercase mt-[2px] transition-colors duration-300",
    logoTaglineDark: "text-[#2d6a4f]",
    logoTaglineLight: "text-white/65",

    // ── Desktop nav list ──
    navList: "flex items-center gap-1 list-none m-0 p-0",

    // Individual nav link (default)
    navLink: "relative px-[14px] py-2 text-[14px] font-normal rounded-lg transition-all duration-200 no-underline",
    navLinkDark: "text-[#1a3a2e] hover:bg-[#2d6a4f]/10 hover:text-[#2d6a4f]",
    navLinkLight: "text-white/85 hover:bg-white/12 hover:text-white",

    // Active nav link
    navLinkActive: "font-medium after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full",
    navLinkActiveDark: "text-[#2d6a4f] after:bg-[#2d6a4f]",
    navLinkActiveLight: "text-white after:bg-white",

    // CTA button (last nav item)
    navCta: "px-[22px] py-[9px] font-medium rounded-lg bg-amber-400 text-semibold text-gray-900 hover:bg-amber-500 active:scale-95 transition-all duration-200",

    // ── Hamburger (mobile) ──
    hamburger: "hidden md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-[6px] rounded-lg",
    hamburgerBar: "block w-[22px] h-[2px] rounded-sm transition-all duration-300",
    hamburgerBarDark: "bg-[#1a3a2e]",
    hamburgerBarLight: "bg-white",

    // ── Mobile dropdown menu ──
    mobileMenu: "absolute top-full left-0 w-full flex-col gap-1 " +
        "bg-white/97 backdrop-blur-md border-t border-black/[0.07] " +
        "shadow-[0_8px_32px_rgba(0,0,0,0.10)] py-4 pb-6",
    mobileMenuOpen: "flex",
    mobileMenuHidden: "hidden",

    mobileLink: "px-8 py-3 text-[15px] font-normal text-[#1a3a2e] no-underline transition-colors duration-200 " +
        "hover:bg-[#2d6a4f]/[0.07] hover:text-[#2d6a4f] hover:font-medium",
    mobileLinkActive: "bg-[#2d6a4f]/[0.07] text-[#2d6a4f] font-medium",

    mobileCta: "mx-8 mt-3 px-[22px] py-[13px] bg-[#2d6a4f] text-white rounded-lg text-center font-medium " +
        "hover:bg-[#1a3a2e] transition-colors duration-200",
} as const;