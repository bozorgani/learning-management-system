import SideBarNav from "../_components/SideBarNav"

function homeLayout({children}) {
  return (
    <div>
        <div className="h-full w-64">
            <SideBarNav />
        </div>
    {children}
    </div>
  )
}

export default homeLayout