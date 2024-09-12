import Header from "@/components/Header"

export default function Home() {
  const name = "Oskar Podrucki"
	return (
		<div>
			<Header name={name}/>
			<p>Test</p>
		</div>
	);
}
