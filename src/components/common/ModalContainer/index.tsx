import type { ModalContainerProps } from './types'

export const ModalContainer: React.FC<ModalContainerProps> = ({
  showMenu,
  setShowMenu,
  children
}) => {
  return (
    <div className="animate__animated animate__fadeInDown fixed right-0 z-20 mt-[25px] h-[565px] w-[325px] translate-y-2 rounded-sm border border-[#f7f7f7] bg-[#fff] shadow-sm transition-all sm:mt-[25px] sm:h-[560px] lg:left-[9%]">
      {children}
    </div>
  )
}

export default ModalContainer
