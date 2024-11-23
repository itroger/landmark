export default function Header() {

    return <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-center p-6 lg:px-8">
            { window.location.pathname !== '/' && <a href='/' className="lg:flex lg:gap-x-12">樱花之旅</a> }
        </nav>
    </header>
}