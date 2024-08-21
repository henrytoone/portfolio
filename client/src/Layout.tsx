import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="bg-slate-800 min-h-screen text-white">
            <Outlet />
        </div>
    )
}

export default Layout