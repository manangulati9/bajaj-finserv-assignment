import { HomeForm } from "@/components/HomeForm";

export default function Home() {
	return (
		<main className="flex flex-col gap-24 items-center p-36">
			<h1 className="text-4xl font-bold underline text-primary">
				Bajaj Finserv Health Dev Challenge
			</h1>
			<HomeForm />
		</main>
	);
}
