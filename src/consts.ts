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
