import Image from 'next/image';

export default function Card({ title, body, vSrc, imgSrc }) {
    return (
        <div className='text-white first:mt-0 mt-2 text-center mx-auto bg-black py-12 w-screen'>
            <h1 className='text-[2em] font-medium font-bold'>{title}</h1>
            <p className='text-lg md:text-xl p-3 font-medium'>{body}</p>
            <div>
                {vSrc ?
                    <div>
                        <video autoPlay playsInline muted loop
                            className='object-cover absolute top-[1008px] lg:top-[1008px] xl:top-[1010px] 2xl:top-[1140px] left-[60px] md:left-[100px] lg:left-[265px] xl:left-[525px] 2xl:left-[718px] w-[310px] md:w-[480px]'>
                            <source src={vSrc} type='video/mp4' />
                        </video>
                        <div className='relative'>
                            <Image src={imgSrc} alt='tv' width={650} height={650} className='mx-auto' />
                        </div>
                    </div>
                    : <Image src={imgSrc} alt='tv' width={650} height={650} className='mx-auto' />
                }
            </div>
            <hr className='mt-24 h-[10px] border-black bg-stone-800' />
        </div>
    )

}