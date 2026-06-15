// src/data/site.ts
// Single source of truth for site-wide content: contact info, nav, and social links.
// Used by Layout (schema/SEO), Navbar, and Footer so nothing drifts out of sync.

export const site = {
  name: "دورامد (نوین مدیا)",
  shortName: "دورامد",
  url: "https://kiosk.doramed.ir",
  description:
    "دورامد (نوین مدیا)، پیشگام در ارائه تجهیزات پزشکی هوشمند، کیوسک های پایش سلامت و خدمات پزشکی از راه دور در ایران.",
  slogan: "تلاقی نوآوری و درمان",
} as const;

export const contact = {
  phone: "051-91001115",
  phoneHref: "tel:05191001115",
  email: "info@doramed.ir",
  website: "https://doramed.ir",
  address:
    "مشهد، میدان پژوهش (کوثر شمالی ۲۹)، کارخانه نوآوری، ساختمان مرکزی",
} as const;

export type IconName =
  | "telegram"
  | "instagram"
  | "linkedin"
  | "phone"
  | "globe";

export interface SocialLink {
  name: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

// Brand/contact channels used in the navbar action buttons.
export const navSocials: SocialLink[] = [
  { name: "تلگرام", href: "https://t.me/doramedco", icon: "telegram", external: true },
  { name: "اینستاگرام", href: "https://www.instagram.com/doramed_ir", icon: "instagram", external: true },
  { name: "تماس", href: contact.phoneHref, icon: "phone" },
];

// Channels shown in the footer.
export const footerSocials: SocialLink[] = [
  { name: "اینستاگرام", href: "https://www.instagram.com/doramed_ir", icon: "instagram", external: true },
  { name: "لینکدین", href: "https://www.linkedin.com/in/amin-golrou-11235665/", icon: "linkedin", external: true },
  { name: "تلگرام", href: "https://t.me/doramedco", icon: "telegram", external: true },
];

export interface DropdownItem {
  text: string;
  href: string;
  desc?: string;
  icon?: string;
}

export interface NavLink {
  text: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const navLinks: NavLink[] = [
  { text: "خانه", href: "/" },
  { text: "وبلاگ", href: "/blog" },
  {
    text: "کیوسک پایش سلامت",
    href: "/kiosk/hse-pro",
    dropdown: [
      { text: "HSE Pro", href: "/kiosk/hse-pro", desc: "پایش سلامت کارکنان و صنایع", icon: "🏭" },
      { text: "Clinic Pro", href: "/kiosk/clinic-pro", desc: "کلینیک‌ها و داروخانه‌ها", icon: "🏥" },
      { text: "Fitness AI", href: "/kiosk/fitness-ai", desc: "آنالیز بدن و باشگاه‌ها", icon: "🏋️" },
    ],
  },
  { text: "درباره ما", href: "/about" },
];

// Primary call-to-action shown in the header.
export const navCta = {
  text: "ورود به داشبورد",
  href: "http://kiosk.doramed.ir/subusers/login",
};

export const quickLinks = [
  { text: "صفحه اصلی", href: "/" },
  { text: "کیوسک سلامت", href: "/kiosk/hse-pro" },
  { text: "وبلاگ", href: "/blog" },
  { text: "درباره ما", href: "/about" },
];
