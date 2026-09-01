import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"

export const SITE = {
  title: "Yash Agarwal",
  description:
    "MS student in Intelligent Information Systems at Carnegie Mellon's School of Computer Science, working on machine learning systems.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

/* Umami analytics. The website ID is a public identifier (it ships in the
   page source), so it lives here rather than in a secret. Leave the id empty
   to disable tracking entirely. Both values come from the "Tracking code"
   panel in the Umami dashboard. */
export const ANALYTICS: {
  umamiWebsiteId: string
  umamiScriptUrl: string
} = {
  umamiWebsiteId: "1ff6a735-d7b2-40f6-98fc-2c6240d7e5a2",
  umamiScriptUrl: "https://cloud.umami.is/script.js",
}

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "/", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/yashagar-cmu", label: "GitHub", icon: GitHub },
  {
    href: "https://linkedin.com/in/yashagarwalcs",
    label: "LinkedIn",
    icon: LinkedIn,
  },
  { href: "mailto:yashagar@cs.cmu.edu", label: "Email", icon: Email },
]
