import type { ImageConfigComplete } from "next/dist/shared/lib/image-config"

// Image configuration for Next.js
export const imageConfig: ImageConfigComplete = {
  deviceSizes: [320, 375, 414, 640, 750, 828, 1024, 1280, 1440, 1920, 2048, 2560, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: "/_next/image",
  loader: "default",
  loaderFile: "",
  domains: [],
  disableStaticImages: false,
  minimumCacheTTL: 60,
  formats: ["image/webp"],
  dangerouslyAllowSVG: false,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  contentDispositionType: "inline",
  remotePatterns: [],
  unoptimized: false,
  localPatterns: undefined,
  qualities: undefined,
}

// Placeholder image generator utility
const createPlaceholder = (width: number, height: number, text?: string) => {
  const params = new URLSearchParams({
    height: height.toString(),
    width: width.toString(),
    ...(text && { text }),
  })
  return `/placeholder.svg?${params.toString()}`
}

// ===== LOGO IMAGES =====
export const logoImages = {
  main: "/assets/img/logo/logo.png",
  mobile: "/assets/img/logo/logo.png",
  footer: "/assets/img/logo/logo.png",
}

// ===== HERO SECTION IMAGES =====
export const heroImages = {
  background: "/assets/img/banner/banner_bg.jpg",
  fireIcon: "/assets/img/icon/fire.png",
  shapes: {
    shape1: "/assets/img/banner/banner_shape01.png",
    shape2: "/assets/img/banner/banner_shape02.png",
    shape3: "/assets/img/banner/banner_shape03.png",
  },
}

// ===== ABOUT SECTION IMAGES =====
export const aboutImages = {
  main: "/assets/img/images/about_img01.png",
  secondary: "/assets/img/images/about_img02.png",
}

// ===== PARTNER IMAGES =====
export const partnerImages = [
  "/assets/img/partner/partner_img01.png",
  "/assets/img/partner/partner_img02.png",
  "/assets/img/partner/partner_img03.png",
  "/assets/img/partner/partner_img04.png",
  "/assets/img/partner/partner_img05.png",
  "/assets/img/partner/partner_img06.png",
  "/assets/img/partner/partner_img07.png",
  "/assets/img/partner/partner_img08.png",
  "/assets/img/partner/partner_img09.png",
  "/assets/img/partner/partner_img10.png",
]

// ===== FEATURE ICONS =====
export const featureIcons = {
  mobile: "/assets/img/icon/choose_icon01.svg",
  transaction: "/assets/img/icon/choose_icon02.svg",
  identity: "/assets/img/icon/choose_icon03.svg",
  security: "/assets/img/icon/choose_icon04.svg",
  lifetime: "/assets/img/icon/choose_icon01.svg",
  protect: "/assets/img/icon/choose_icon02.svg",
  control: "/assets/img/icon/choose_icon03.svg",
}

// ===== CHART SECTION IMAGES =====
export const chartImages = {
  background: "public/assets/img/bg/chart_bg.jpg",
  pieChart: "/assets/img/images/chart.png",
}

// ===== ROADMAP IMAGES =====
export const roadmapImages = {
  background: "/assets/img/bg/roadmap_bg.jpg",
}

// ===== DOCUMENT IMAGES =====
export const documentImages = {
  whitepaper: "/assets/img/images/document_img.png",
}

// ===== TEAM MEMBER IMAGES =====
export const teamImages = [
  "/assets/img/team/team_img01.png",
  "/assets/img/team/team_img02.png",
  "/assets/img/team/team_img03.png",
  "/assets/img/team/team_img04.png",
  "/assets/img/team/team_img05.png",
  "/assets/img/team/team_img06.png",
  "/assets/img/team/team_img07.png",
  "/assets/img/team/team_img08.png",
]

// ===== CONTACT SECTION IMAGES =====
export const contactImages = {
  background: "/assets/img/bg/contact_bg.jpg",
  connectorLine: "/assets/img/icon/connector.png",
}

// ===== CRYPTOCURRENCY ICONS =====
export const cryptoIcons = {
  bitcoin: "/assets/img/crypto/bitcoin.png",
  ethereum: "/assets/img/crypto/ethereum.png",
  litecoin: "/assets/img/crypto/litecoin.png",
  ripple: "/assets/img/crypto/ripple.png",
  cardano: "/assets/img/crypto/cardano.png",
  polkadot: "/assets/img/crypto/polkadot.png",
  chainlink: "/assets/img/crypto/chainlink.png",
  stellar: "/assets/img/crypto/stellar.png",
}

// ===== BACKGROUND IMAGES =====
export const backgroundImages = {
  area: "/assets/img/bg/area_bg.png",
  chart: "/assets/img/bg/chart_bg.jpg",
  contact: "/assets/img/bg/contact_bg.png",
}

// ===== ICON COLLECTIONS =====
export const iconCollections = {
  features: [
    createPlaceholder(60, 60, "Mobile"),
    createPlaceholder(60, 60, "Transaction"),
    createPlaceholder(60, 60, "Identity"),
    createPlaceholder(60, 60, "Security"),
    createPlaceholder(60, 60, "Lifetime"),
    createPlaceholder(60, 60, "Protect"),
    createPlaceholder(60, 60, "Control"),
  ],
  social: {
    facebook: createPlaceholder(20, 20, "Facebook"),
    twitter: createPlaceholder(20, 20, "Twitter"),
    instagram: createPlaceholder(20, 20, "Instagram"),
    linkedin: createPlaceholder(20, 20, "LinkedIn"),
    youtube: createPlaceholder(20, 20, "YouTube"),
    skype: createPlaceholder(20, 20, "Skype"),
  },
  contact: {
    email: createPlaceholder(28, 28, "Email"),
    phone: createPlaceholder(28, 28, "Phone"),
    location: createPlaceholder(28, 28, "Location"),
  },
}

// ===== IMAGE UTILITIES =====
export const imageUtils = {
  // Get responsive image props
  responsive: (src: string, alt: string, sizes?: string) => ({
    src,
    alt,
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    style: { width: "100%", height: "auto" },
  }),

  // Common image sizes
  sizes: {
    logo: { width: 150, height: 50 },
    logoMobile: { width: 120, height: 40 },
    heroIcon: { width: 60, height: 60 },
    aboutMain: { width: 350, height: 400 },
    aboutSecondary: { width: 80, height: 100 },
    partnerLogo: { width: 120, height: 60 },
    featureIcon: { width: 60, height: 60 },
    chartImage: { width: 300, height: 300 },
    documentImage: { width: 600, height: 500 },
    teamMember: { width: 200, height: 200 },
    bannerShape: { width: 200, height: 200 },
    socialIcon: { width: 20, height: 20 },
    contactIcon: { width: 28, height: 28 },
  },

  // Image optimization settings
  optimization: {
    quality: 85,
    priority: false,
    loading: "lazy" as const,
    placeholder: "blur" as const,
  },

  // Generate placeholder with custom text
  placeholder: createPlaceholder,
}

// ===== COMPLETE IMAGE EXPORT =====
export const allImages = {
  logos: logoImages,
  hero: heroImages,
  about: aboutImages,
  partners: partnerImages,
  features: featureIcons,
  chart: chartImages,
  roadmap: roadmapImages,
  documents: documentImages,
  team: teamImages,
  contact: contactImages,
  crypto: cryptoIcons,
  backgrounds: backgroundImages,
  icons: iconCollections,
  utils: imageUtils,
}

// ===== DEFAULT EXPORT =====
export default allImages

// ===== NAMED EXPORTS FOR EASY ACCESS =====
export {
  logoImages as logos,
  heroImages as hero,
  aboutImages as about,
  partnerImages as partners,
  featureIcons as features,
  chartImages as chart,
  roadmapImages as roadmap,
  documentImages as documents,
  teamImages as team,
  contactImages as contact,
  cryptoIcons as crypto,
  backgroundImages as backgrounds,
  iconCollections as icons,
}

// ===== TYPE DEFINITIONS =====
export type ImageCollection = typeof allImages
export type LogoImages = typeof logoImages
export type HeroImages = typeof heroImages
export type AboutImages = typeof aboutImages
export type FeatureIcons = typeof featureIcons
export type ChartImages = typeof chartImages
export type TeamImages = typeof teamImages
export type ContactImages = typeof contactImages
export type CryptoIcons = typeof cryptoIcons
export type BackgroundImages = typeof backgroundImages
export type IconCollections = typeof iconCollections

// ===== IMAGE PRELOADER =====
export const preloadImages = (imageUrls: string[]) => {
  if (typeof window !== "undefined") {
    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }
}

// ===== CRITICAL IMAGES FOR PRELOADING =====
export const criticalImages = [
  logoImages.main,
  heroImages.background,
  heroImages.fireIcon,
  aboutImages.main,
  chartImages.background,
]
