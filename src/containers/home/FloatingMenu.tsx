import { FloatingButton } from '@src/components/FloatingButton'
import { BUTTON } from '@src/constants/home'

export const FloatingMenu = () => {
  return (
    <aside className="fixed left-6 top-[50%] z-20 flex translate-y-[-50%] flex-col gap-5">
      {BUTTON.map((button) => (
        <FloatingButton
          key={button.explanation}
          explanation={button.explanation}
          link={button.link}
        >
          {button.icon}
        </FloatingButton>
      ))}
    </aside>
  )
}
