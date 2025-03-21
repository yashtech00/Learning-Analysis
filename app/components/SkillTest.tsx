import Image from "next/image";


export function SkillTest() {







    return (
        <div className="p-4 sm:ml-64">
            <div className="mt-14">
                Skill Test
                <div className="flex mt-4 ">
                    <div className="">
                        <div className="flex items-center justify-between h-24 rounded-lg border-1 border-gray-200 p-4 w-[700px] m-4">
                            <div className="flex gap-4 ">
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"} alt="" width={50} height={50}></Image>
                            <div>
                                <span className=" font-bold"> Hyper Text Markup Language</span>
                                <div className="text-gray-600">Questions:80 | Duration: 15 mins | Submitted on 5 june 2021 </div>
                                </div>
                            </div>
                            <div>
                                <button className="bg-blue-900 text-white px-8 py-2 rounded-lg">Update</button>
                                </div>

                        </div>
                        <div className="m-4">
                        <div className="flex items-center justify-between rounded-lg border-1 border-gray-200 p-4 w-[700px] h-[170px]">
                            Quick Statistics
                            </div>
                        </div>
                        <div className="m-4">
                        <div className="flex items-center justify-between rounded-lg border-1 border-gray-200 p-4 w-[700px] h-[400px]">
                            Comparision Graph
                            </div>
                            </div>
                    </div>
                    <div>
                        <div className="m-4">
                        <div className="flex items-center justify-between rounded-lg border-1 border-gray-200 p-4 w-[400px] h-[400px]">
                            Syllabus
                            </div>
                        </div>
                        <div className="m-4">
                        <div className="flex items-center justify-between rounded-lg border-1 border-gray-200 p-4 w-[400px] h-[180px]">
                            Question Analysis
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}