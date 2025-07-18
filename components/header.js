import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href={'/'}>
                    <p>Gemutly Clone</p>
                </Link>
            </nav>
        </header>
    )
}