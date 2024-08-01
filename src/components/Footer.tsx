const Footer = () => {
return (
    <div className="bg-orange-500 py-10">
        <div className="container flex flex-col mx-auto md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tighter">
                The Foodie
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
)
}

export default Footer;