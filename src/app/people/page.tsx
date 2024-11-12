import { Card } from '@src/containers/people/Card'

export default function PeoplePage() {
  return (
    <section className="grid-rows-auto mx-auto grid w-full max-w-[1064px] grid-cols-3 gap-x-4 gap-y-10 mobile:max-w-[600px] mobile:grid-cols-2 desktop:px-10">
      <Card
        information={{
          name: '김철수',
          role: 'PM / Planner',
          github: 'https://www.github.com',
          instagram: 'https://www.naver.com',
        }}
      />
      <Card
        information={{
          name: '이영희',
          role: 'Designer',
          github: 'https://www.github.com',
          instagram: '',
        }}
      />
    </section>
  )
}
