import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTelegram, FaXTwitter } from "react-icons/fa6"
import { useRef } from "react"

export default function SocialMedia() {
    const socialMedia = useRef([
        {icon: FaFacebookF, href: "https://www.facebook.com/sharer/sharer.php?u=https://demoes.aramis-co.ir/petshop/shop/"},
        {icon: FaXTwitter, href: "https://x.com/share?url=https://demoes.aramis-co.ir/petshop/shop/"},
        {icon: FaPinterest, href: "https://pinterest.com/pin/create/button/?url=https://demoes.aramis-co.ir/petshop/shop/&media=https://demoes.aramis-co.ir/petshop/wp-content/uploads/2023/12/Cat-Food-Ragu-with-Lamb-Whiskas-1-12-Months.jpg&description=%D8%BA%D8%B0%D8%A7%DB%8C+%D8%AE%D8%B4%DA%A9+%DA%AF%D8%B1%D8%A8%D9%87+%D9%86%D9%88%D8%B9+%DB%B1"},
        {icon: FaLinkedinIn, href: "https://www.linkedin.com/shareArticle?mini=true&url=https://demoes.aramis-co.ir/petshop/shop/"},
        {icon: FaTelegram, href: "https://telegram.me/share/url?url=https://demoes.aramis-co.ir/petshop/shop/"},
    ])
    return (
        <div className="social-media">
            {socialMedia.current.map((item, i) => (
                <a href={item.href} key={i} className="social-media-link mx-2">
                    <item.icon />
                </a>
            ))}
        </div>
    )
}