/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            // ۱. اینجا فونت‌های قبلی شما هست
			fontFamily: {
				sans: ['Vazirmatn', 'sans-serif'],
			},
            // ۲. اینجا رنگ‌های جدید دورامد را اضافه کردیم
            colors: {
                doramed: {
                    white: '#E0E1DD',    // رنگ متون روشن
                    gray: '#778DA9',     // آبی خاکستری
                    muted: '#415A77',    // آبی نفتی روشن
                    primary: '#023E8A',  // آبی اصلی (دکمه‌ها)
                    dark: '#1B263B',     // سرمه‌ای تیره (بخش‌ها)
                    darker: '#0D1B2A',   // سرمه‌ای خیلی تیره (پس‌زمینه اصلی)
                }
            },
		},
	},
	plugins: [],
}