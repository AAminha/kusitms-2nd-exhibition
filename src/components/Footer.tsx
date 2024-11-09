import { AsanLogo, CodeitLogo, DcampLogo, SangSangUnivLogo } from '@public/logos'
import KusitmLogo from '@public/logos/kusitms.svg'

export const Footer = () => {
  return (
    <footer className="bg-gray-90">
      <section className="max-w-1440 flex items-center justify-between px-20 py-[23px] mobile:w-fit mobile:flex-col mobile:gap-10">
        <KusitmLogo />
        <div className="flex w-fit items-center gap-[60px] mobile:flex-wrap mobile:justify-between mobile:gap-4">
          <SangSangUnivLogo />
          <AsanLogo />
          <DcampLogo />
          <CodeitLogo />
        </div>
      </section>
    </footer>
  )
}
