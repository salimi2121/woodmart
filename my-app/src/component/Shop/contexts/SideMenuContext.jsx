import { createContext, useState } from "react";

export const SideMenuContext = createContext();

export function SideMenuContextProvider({children}) {
    const [isOpen , setIsOpen] = useState(false);
    const [content , setContent] = useState(null);

    return (
        <SideMenuContext.Provider value={{setIsOpen, setContent, isOpen, content}}>
            {children}
        </SideMenuContext.Provider>
    )
}