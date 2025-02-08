import PeopleLayoutContent from '@src/containers/people/LayoutContent'

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PeopleLayoutContent>{children}</PeopleLayoutContent>
}
