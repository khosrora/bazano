import Logo from "@/components/shared/Logo";
import Image from "next/image";
import SliderBlogs from "./SliderBlogs";

import { PiPlayFill } from 'react-icons/pi'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row-reverse lg:justify-between">
        <Image
          src='/images/Group 631 4.png'
          width={300}
          height={400}
          alt='کسب و کارها'
        />
        <div className="space-y-8 lg:w-2/4">
          <Logo
            width={100}
            height={100}
          />
          <p className="text-xl font-bold">خدمتی نو برای تمامی کسب وکار ها</p>
          <p className="text-base font-light">
            با کلیک بر روی لینک زیر میتوانید شرکت های خدماتی درون
            پارک علم وفناوری را مشاهده کرده و با توجه به خدمت مورد نیاز خود ان را انتخاب کرده همین الان بر روی لینک زیر کلیک کنید و از خدمات شرکت ها استفاده کنید اراِئه خدمات , فروش عمده ای , فروش تکی , فناوران
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between">
        <Image
          src='/images/Group 632 (1).png'
          width={300}
          height={400}
          alt='کسب و کارها'
        />
        <div className="space-y-8 lg:w-2/4">
          <p className="text-xl font-bold">شرکت های خدماتی در پارک علم و فناوری</p>
          <p className="text-base font-light">
            با کلیک بر روی لینک زیر میتوانید شرکت های خدماتی درون
            پارک علم وفناوری را مشاهده کرده و با توجه به خدمت مورد نیاز خود ان را انتخاب کرده همین الان بر روی لینک زیر کلیک کنید و از خدمات شرکت ها استفاده کنید
          </p>
          <button className="btn btn-outline btn-primary">مشاهده خدمات</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row-reverse lg:justify-between">
        <Image
          src='/images/Group 635.png'
          width={300}
          height={400}
          alt='کسب و کارها'
        />
        <div className="space-y-8 lg:w-2/4">
          <p className="text-xl font-bold">شرکت های دارای محصول در پارک علم و فناوری</p>
          <p className="text-base font-light">
            با کلیک بر روی لینک زیر میتوانید شرکت های دارای محصول درون پارک علم وفناوری را مشاهده کرده و با توجه به محصول مورد نیاز خود ان را انتخاب کرده همین الان بر روی لینک زیر کلیک کنید و از محصولات شرکت ها استفاده کنید
          </p>
          <button className="btn btn-outline btn-primary">مشاهده خدمات</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between">
        <Image
          src='/images/Group 632.png'
          width={300}
          height={400}
          alt='کسب و کارها'
        />
        <div className="space-y-8 lg:w-2/4">
          <p className="text-xl font-bold">شرکت های فروش عمده</p>
          <p className="text-base font-light">
            با کلیک بر روی لینک زیر میتوانید شرکت های خدماتی درون
            پارک علم وفناوری را مشاهده کرده و با توجه به خدمت مورد نیاز خود ان را انتخاب کرده همین الان بر روی لینک زیر کلیک کنید و از خدمات شرکت ها استفاده کنید
          </p>
          <button className="btn btn-outline btn-primary">مشاهده خدمات</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row-reverse lg:justify-between">
        <Image
          src='/images/Group 612.png'
          width={300}
          height={400}
          alt='کسب و کارها'
        />
        <div className="space-y-8 w-1/2">
          <p className="text-xl font-bold">شرکت های فناوران</p>
          <p className="text-base font-light">
            با کلیک بر روی لینک زیر میتوانید شرکت های دارای محصول درون پارک علم وفناوری را مشاهده کرده و با توجه به محصول مورد نیاز خود ان را انتخاب کرده همین الان بر روی لینک زیر کلیک کنید و از محصولات شرکت ها استفاده کنید
          </p>
          <button className="btn btn-outline btn-primary">مشاهده خدمات</button>
        </div>
      </div>

      <div className="bg-[#FCFBF6] p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start items-center gap-x-2">
            <PiPlayFill size={28} color='#6E3FF3' style={{ transform: 'rotate(180deg)' }} />
            <p className="font-bold text-base">مقالات</p>
          </div>
          <button className="btn-sm btn-primary bg-[#6E3FF3] rounded-md">
            مشاهده همه
          </button>
        </div>
        <SliderBlogs />
      </div>
    </main>
  )
}
