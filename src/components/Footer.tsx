import { AsanLogo, KusitmsLogo } from '@public/logos'

export const Footer = () => {
  return (
    <footer className="bg-gray-90">
      <section className="max-w-1440 flex items-center justify-between px-20 py-[23px] mobile:w-fit mobile:flex-col mobile:gap-10">
        <KusitmsLogo />
        <div className="flex w-fit items-center gap-[60px] mobile:flex-wrap mobile:justify-between mobile:gap-4">
          <AsanLogo />
        </div>
      </section>
    </footer>
  )
}
