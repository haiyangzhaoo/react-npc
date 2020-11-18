import Home from '@/pages/Home'
import Cate from '@/pages/Cate'
import CateAdd from '@/pages/Cate/Add'
import Tag from '@/pages/Tag'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/tag',
    component: Tag
  },
  {
    path: '/cate',
    component: Cate,
    routes: [
      {
        path: '/cate/add',
        component: CateAdd,
      }
    ]
  }
]
