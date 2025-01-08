import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
    { icons: <FaGithub />, path: '' },
    { icons: <FaLinkedin />, path: '' },
    { icons: <FaTwitter />, path: '' },
    { icons: <FaGithub />, path: '' }
]
interface SocialsProps {
    containerStyles?: string;
    iconStyles?: string;
}
const Socials = ({containerStyles,iconStyles}:SocialsProps
) => {
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
            })}
        </div>
    )
}

export default Socials
