// import Link from 'next/link'

// import ModalContainer from '@/components/common/ModalContainer'

// import { SideNavProps } from './types'
// import { SIDENAV_ITEMS } from '../../data'

// export const SideNav: React.FC<SideNavProps> = ({
//   setIsSidebarOpen,
//   isSidebarOpen
// // }) =>
//   return (
//     <ModalContainer setShowMenu={setIsSidebarOpen} showMenu={isSidebarOpen}>
//       <div className="flex w-full flex-col space-y-6">
//         <Link
//           className="flex h-12 w-full flex-row items-center justify-center space-x-3 border-b border-zinc-200 md:justify-start md:px-6"
//           href="/"
//         >
//           <span className="h-7 w-7 rounded-lg bg-zinc-300" />
//           <span className="hidden text-xl md:flex">Logo</span>
//         </Link>

//         <div className="flex flex-col space-y-2 md:px-6">
//           {SIDENAV_ITEMS.map((item, idx) => {
//             return <SidenavItem item={item} key={idx} />
//           })}
//         </div>
//       </div>
//     </ModalContainer>
//   )
// }
