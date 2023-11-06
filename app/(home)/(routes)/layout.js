import Header from "../_components/Header"
import SideBarNav from "../_components/SideBarNav"

function homeLayout({children}) {
  return (
    <div>
        <div className="h-full w-64 hidden md:flex flex-col fixed inset-y-0 z-50 ">
            <SideBarNav />
        </div>
        <Header />
        <div className="ml-64 p-5">
        {children}
        </div>
    </div>
  )
}

export default homeLayout