
const Footer = () => {
  return (
    <div className="w-full">
        <div className="max-w-screen-xl py-10 mx-auto flex gap-10">
            <div className="basis-1/2">
                <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">refokus.</h1>
            </div>
            <div className="ml-14 flex gap-4">
                <div className="basis-1/2">
                    <h4 className="mb-10 text-zinc-500">Socials</h4>
                    {["instagram", "twitter", "facebook", "linkedin"].map((item) => <a key={item} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
                </div>
            </div>
            <div className="basis-1/6">
                <h4 className="mb-10 text-zinc-500">Sitemap</h4>
                {["Home", "Work", "Careers", "Contact"].map((item) => <a key={item} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
            </div>
            <div className="basis-1/2 mt-16 flex flex-col items-end">
                <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                <img className="w-32 mt-6" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Footer