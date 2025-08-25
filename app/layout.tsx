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
	title: 'Courage Mhute - Software Engineer | Django & Python Specialist',
	description:
		'Portfolio of Courage Mhute, an innovative software engineer specializing in Python, Django, DevOps, Git, MySQL, and JavaScript. Explore projects including WhatsApp Chatbot, Agriculture Marketplace, Leave Management System, and more.',
	keywords: [
		'Software Engineer',
		'Django Developer',
		'Python Developer',
		'Full-Stack Developer',
		'JavaScript',
		'MySQL',
		'DevOps',
		'Cloud Solutions',
		'System Architecture',
		'Web Development',
		'Git',
		'Portfolio',
		'Courage Mhute',
	],
	authors: [{ name: 'Courage Mhute' }],
	creator: 'Courage Mhute',
	openGraph: {
		title: 'Courage Mhute - Software Engineer | Django & Python Specialist',
		description:
			'Portfolio of Courage Mhute, showcasing expertise in Django, Python, DevOps, Git, MySQL, and JavaScript. View projects such as WhatsApp Chatbot, Agriculture Marketplace, School Management System, and Travel Claims Portal.',
		url: 'https://couragemhute.github.io/mist_coat/',
		siteName: 'Courage Mhute - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Courage Mhute - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Courage Mhute - Software Engineer | Django & Python Specialist',
		description:
			'Explore the portfolio of Courage Mhute, an innovative software engineer skilled in Python, Django, DevOps, Git, MySQL, and JavaScript. Discover impactful projects across industries.',
		creator: '@mist_coat_zw',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
