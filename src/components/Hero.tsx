import hero from "../assets/hero.png"

const Hero = () => {
return(
    <div>
        <img 
            src={hero} 
            alt="burgerImage"
            className="w-full max-h-[500px] object-cover"   
        />
    </div>
)
}

export default Hero;