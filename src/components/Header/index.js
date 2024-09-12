import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";

export default function Header(props) {
	return (
		<header>
			<Logo />
            {props.name}
            <div>Header Item</div>
			<Menu />
		</header>
	);
}
