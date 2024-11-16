interface SectionTitleProps {
  title: string
  additional?: string
  subtitle: string
}

export const SectionTitle = ({ title, additional, subtitle }: SectionTitleProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <h2 className="text-h1 font-semibold text-gray-5 sm:text-b1">{title}</h2>
        <p className="text-b3 font-normal text-gray-40 sm:text-b4">{additional}</p>
      </div>
      <h3 className="text-b3 font-normal text-gray-30 mobile:whitespace-pre-wrap sm:text-b4">
        {subtitle}
      </h3>
    </>
  )
}
