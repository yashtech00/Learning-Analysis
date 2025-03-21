import Image from "next/image";


export function NavBar() {
    return (
        <div>
            <div className=" flex justify-between bg-white border-1">
                <div className="bg-transparent">
                    <Image src={"https://media.licdn.com/dms/image/v2/D5616AQF3tmMnxiM1og/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1729600126657?e=2147483647&v=beta&t=Htnj8z24bgb7hWrFPDST5QUu5Xd6PTPGkDnF3LybV3s"} alt="Logo" width={300} height={300} />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-10 p-6 rounded-xl border-3 border-blue-100 h-[50px] ">
                        <div className=""></div>
                        Yash gupta
                    </div>
                </div>
            </div>
        </div>
    )
}