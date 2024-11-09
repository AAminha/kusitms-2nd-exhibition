interface SectionTitleProps {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <>
      <h2 className="text-h1 font-semibold text-gray-5 mobile:text-h2">{title}</h2>
      <h3 className="text-b3 font-normal text-gray-30">{subtitle}</h3>
    </>
  )
}
