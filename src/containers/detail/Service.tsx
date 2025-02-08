import Image from 'next/image'

import { InstagramIcon, ServiceIcon } from '@public/icons'
import { getProductDetail } from '@src/apis/getProductDetail'
import { ServiceCard } from '@src/containers/detail/ServiceCard'

interface ServiceProps {
  productId: string
}

export const Service = async ({ productId }: ServiceProps) => {
  const product = await getProductDetail(productId)

  return (
    <section className="px-6">
      <section className="mb-6 flex flex-wrap justify-between gap-x-20 gap-y-3">
        <div>
          <div className="mb-1 flex flex-wrap-reverse items-center gap-x-6 gap-y-1">
            <h2 className="text-l font-semibold text-gray-5 mobile:text-h2">{product.name}</h2>
            <p className="h-fit w-fit rounded-xl bg-primary-1 px-3 py-[6px] text-b3 font-semibold text-white mobile:text-c1">
              {product.category}
            </p>
          </div>
          <h3 className="text-b1 font-normal text-gray-30 mobile:text-b3">
            {product.introduction}
          </h3>
        </div>
        <div className="flex gap-4">
          {product.instagramUrl && (
            <a
              href={product.instagramUrl}
              target="_blank"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-90 p-[6px] mobile:h-10 mobile:w-10"
            >
              <InstagramIcon width={24} height={24} />
            </a>
          )}
          {product.serviceUrl && (
            <a
              href={product.serviceUrl}
              target="_blank"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-90 p-[6px] mobile:h-10 mobile:w-10"
            >
              <ServiceIcon width={24} height={24} />
            </a>
          )}
        </div>
      </section>
      <div className="w-full overflow-hidden rounded-lg bg-gray-90">
        <Image
          src={product.thumbnailUrl}
          alt={product.name}
          width={1920}
          height={1080}
          priority
          className="mx-auto aspect-video bg-gray-80 desktop:max-w-[736px]"
        />
      </div>
      <p className="mt-6 whitespace-pre-wrap text-b3 font-normal text-gray-20">
        {product.description}
      </p>
      <section className="grid-rows-auto mt-10 grid grid-cols-3 gap-3 mobile:grid-cols-1">
        <ServiceCard type="target" content={product.target} />
        <ServiceCard type="problem" content={product.problem} />
        <ServiceCard type="solution" content={product.solution} />
      </section>
    </section>
  )
}
