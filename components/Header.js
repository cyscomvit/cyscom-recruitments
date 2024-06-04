import { PageHeader } from 'antd';
export default function Header() {
	return (
		<PageHeader
			title='Cyscom Recruit'
			subTitle='A simple web application to help you learn about OWASP'
			style={{
				background: '#fff',
				padding: 0,
				marginBottom: '1rem',
			}}
		></PageHeader>
	);
}
