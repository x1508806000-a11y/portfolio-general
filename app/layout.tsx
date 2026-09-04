import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xiujianhua-aigc-portfolio.x1508806000.chatgpt.site'),
  title: '修建华｜AIGC 视觉设计师',
  description: '修建华个人作品集：AIGC 短片视觉开发、角色场景设计、分镜与视觉资产。',
  openGraph: {
    title: '修建华｜AIGC 视觉设计师',
    description: 'AIGC 短片视觉开发、角色场景设计、分镜与视觉资产。',
    images: [{ url: '/og.png', width: 1719, height: 900, alt: '修建华 AIGC 视觉设计师' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '修建华｜AIGC 视觉设计师',
    description: 'AIGC 短片视觉开发、角色场景设计、分镜与视觉资产。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
