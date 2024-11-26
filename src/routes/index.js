import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/user/home";
import CarList from "../page/user/carlist"

export const routes = [
  {
    path:"/",
    element: <LayoutDefault/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/carlist",
        element: <Home />
      },
      {
        path:"/car-list",
        element: <CarList />
      }
    ]
  }
]