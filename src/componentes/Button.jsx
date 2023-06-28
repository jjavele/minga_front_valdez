export default function Button({title,href}) {

    function redirect(){
        console.log(href)
    }

    return (
        <button onClick={redirect} className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-[6px] w-[240px] text-[24px] text-[#FFF] [font-family:Roboto] items-center self-center">Let's go!</button>
    )
}

/*
<button onClick={redirect} className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-[6px] w-[240px] text-[24px] text-[#FFF] [font-family:Roboto] items-center hidden md:block self-center">Let's go!</button>
*/