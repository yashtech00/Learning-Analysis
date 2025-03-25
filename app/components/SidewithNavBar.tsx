import Image from "next/image";
import { MainBody } from "./MainBody";
import { Award, ChartNoAxesColumn, StickyNote } from "lucide-react";
import Link from "next/link";


export function SideNav() {
    return (
        <div>


            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Image src={"https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg?buster=1717832532"} alt="Logo" width={40} height={40} />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap px-2">WhatBytes</span>

                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div className="flex items-center border-2 border-gray-200 rounded-lg px-4 py-1">
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    <p className="text-sm text-gray-900 px-2 font-bold " role="none">
                                        Neil Sims
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-4 font-medium">
                        <li>
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                                <ChartNoAxesColumn />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li className="bg-gray-100 rounded-2xl ">
                            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                                <Award className="text-blue-800" />
                                <span className="ms-3 text-blue-800 font-bold ">Skill Test</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Internship" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                                <StickyNote />
                                <span className="ms-3">Internship</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

            <MainBody />

        </div>
    )
}