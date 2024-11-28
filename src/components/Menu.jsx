import React from 'react'

const Menu = (props) => {
    const { onSectionChange, MenuOpened, setMenuOpened } = props;
    return (<>
        <button className='z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md'
            onClick={() => setMenuOpened(!MenuOpened)}
        >
            <div
                className={`bg-white h-0.5 rounded-md w-full transition-all ${MenuOpened ? "rotate-45 translate-y-0.5" : ""}`}
            />
            <div
                className={`bg-white h-0.5 rounded-md w-full my-1 ${MenuOpened ? "hidden" : ""}`}
            />
            <div
                className={`bg-white h-0.5 rounded-md w-full transition-all ${MenuOpened ? "-rotate-45" : ""}`}
            />
        </button>
        <div
            className={`fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col z-10 ${MenuOpened ? "w-80" : "w-0"}`}>
            <div className="flex flex-col items-start p-8 gap-6 justify-center ">
                <MenuButton label="About" onClick={() => onSectionChange(0)} />
                <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
                <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
                <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
            </div>
        </div>
    </>
    )
}

export default Menu


const MenuButton = (props) => {
    const { label, onClick } = props;
    return (<>
        <button className='text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors'
            onClick={onClick}
        >
            {label}
        </button>
    </>)
}