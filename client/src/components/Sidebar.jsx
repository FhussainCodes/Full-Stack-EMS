import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets';
import { MenuIcon, UserIcon, XIcon } from 'lucide-react';
const Sidebar = () => {
    const { pathname } = useLocation();
    const [userName, setUserName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])

    // close mobile sidebar pn route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname])

    const sideBarContent = (
        <>
            {/* brand header */}
            <div className='px-5 pt-6 pb-5 border-b border-white/6' >
                <div className='flex items-center justify-betweenS' >
                    <div className='flex items-center gap-3' >
                        <UserIcon className='text-white size-7' />
                        <div className='' >
                            <p className='font-semibold text-[13px] text-white tracking-wide' >Employee MS</p>
                            <p className='text-[11px] text-slate-700 font-medium' >Management System</p>
                        </div>

                    </div>
                    {/* close button on mobile */}
                    <button className='lg:hidden text-slate-400 hover:text-white p-1' onClick={() => setMobileOpen(false)} >
                        <XIcon size={20} />
                    </button>

                </div>

            </div>

            {/* user profile card */}
            {userName}
            {/* section label */}
            {/* navigation list */}
            {/* logout */}

        </>
    )
    return (
        <>
            <button onClick={() => setMobileOpen(true)} className='lg-hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10 ' >
                <MenuIcon size={20} />
            </button>
            {/* mobile overlay */}
            {mobileOpen && <div
                className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40:' onClick={() => setMobileOpen(false)} />}
            {/* sidebar desktop */}
            <aside className='hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4 '>
                {sideBarContent}
            </aside>

            {/* sidebar mobile */}

            <aside className={`lg:hidden fixed inset-y-0 left-0 w-2 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"} `}>
                {sideBarContent}
            </aside>

        </>
    )
}

export default Sidebar
