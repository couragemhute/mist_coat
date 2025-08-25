'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-24 px-4 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
				>
					Highlighted Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{[
						{
							title: 'WhatsApp Chatbot',
							description:
								'Developed a chatbot using the Meta Cloud API to handle real-time customer support, automated responses, and transaction workflows for businesses.',
							features: [
								'Real-time messaging & response automation',
								'Meta Cloud API integration',
								'Multi-language support',
								'Logging & analytics dashboard',
							],
							tech: ['Django & Python backend', 'RESTful APIs', 'PostgreSQL & Redis'],
							color: 'blue',
						},
						{
							title: 'Agriculture Marketplace',
							description:
								'Created a digital marketplace connecting farmers with buyers, enabling transparent transactions, product listings, and secure payments.',
							features: [
								'Product listing & bidding system',
								'Secure payment integration',
								'Order tracking system',
								'Multi-role access control',
							],
							tech: ['Django + DRF', 'MySQL database', 'Tailwind CSS frontend', 'Git & CI/CD pipelines'],
							color: 'purple',
						},
						{
							title: 'School Management System',
							description:
								'Built a full-fledged school management solution covering academics, attendance, libraries, and administration workflows.',
							features: [
								'Student enrollment & attendance tracking',
								'Library management module',
								'Course & timetable scheduling',
								'Certificate issuance & grading system',
							],
							tech: [],
							color: 'teal',
						},
						{
							title: 'Leave Management System',
							description:
								'Engineered a robust leave management application with HR automation, complex leave rules, and payroll integration.',
							features: [
								'Leave accrual & carry-forward automation',
								'Public holiday & non-business day rules',
								'Sage Payroll integration',
								'Real-time HR dashboards',
							],
							tech: [],
							color: 'green',
						},
						{
							title: 'Branch Profitability Analysis',
							description:
								'Developed an analytics system to measure profitability across multiple branches, integrating financial data and generating insights.',
							features: [
								'Real-time financial data integration',
								'Interactive charts & reports',
								'Business intelligence dashboards',
								'Automated decision-support tools',
							],
							tech: [],
							color: 'orange',
						},
						{
							title: 'Online Library System',
							description:
								'Designed a digital library management solution for tracking, borrowing, and returning books with user notifications.',
							features: [
								'Book catalog search & categorization',
								'Borrowing & return management',
								'Late return notifications',
								'User access levels',
							],
							tech: [],
							color: 'pink',
						},
						{
							title: 'Travel Claims Portal',
							description:
								'Implemented a claims processing portal to calculate trip reimbursements based on vehicle type, distance, and tariffs, improving finance efficiency.',
							features: [
								'Trip claim calculations',
								'Tariff & vehicle-type integration',
								'Prevents overlapping claims',
								'Automated claim approvals',
							],
							tech: [],
							color: 'red',
						},
					].map((project, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							className={`bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
						>
							<div className="p-8">
								<h3
									className={`text-2xl md:text-3xl font-bold mb-4 text-${project.color}-400`}
								>
									{project.title}
								</h3>
								<p className="text-gray-400 mb-6">{project.description}</p>

								<div className="grid grid-cols-1 gap-6">
									<div>
										<h4
											className={`text-sm font-semibold mb-3 text-${project.color}-300`}
										>
											Features
										</h4>
										<ul className="space-y-2 text-gray-300 text-sm">
											{project.features.map((feat, i) => (
												<li key={i}>• {feat}</li>
											))}
										</ul>
									</div>
									{project.tech.length > 0 && (
										<div>
											<h4
												className={`text-sm font-semibold mb-3 text-${project.color}-300`}
											>
												Tech Stack
											</h4>
											<ul className="space-y-2 text-gray-300 text-sm">
												{project.tech.map((tech, i) => (
													<li key={i}>• {tech}</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
