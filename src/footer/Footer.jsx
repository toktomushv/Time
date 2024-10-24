import React from 'react'
import imgBrend from '../img/Brends.png'
import imgTen from '../img/Footer.png'

function Footer() {
  return (
    <>
    <div className='bg-zinc-900 h-80 text-center flex gap-20  flex-col'>
        <h1 className='text-4xl mt-14 font-semibold'>НАШИ БРЕНДЫ</h1>
        <div className='flex justify-center gap-10'>
        <img src={imgBrend} alt="" />
        <img src={imgBrend} alt="" />
        <img src={imgBrend} alt="" />
        <img src={imgBrend} alt="" />
        </div>
    </div>


    <section className='flex bg-red-200'>
    <div style={{position: 'relative'}} className=''>
    <img src={imgTen} alt="" className='w-screen h-96'/>

    <div className='text-white flex justify-center gap-10 w-3/4' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center flex'}}>
       <div>
       <h1 className='text-3xl mb-5'>О МАГАЗИНЕ</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi <br /> semper viverra nunc cursus tortor lectus nunc nulla nibh. <br /> Egestas amet consectetur vel vitae aliquam dictum <br /> suspendisse. Lobortis eget consequat, tellus et et sed <br /> turpis. Pretium quisque vitae, amet, porttitor odio ultricies  massa pharetra leo. Et ipsum urna fames in sit mi ultrices  nisi, nunc.</p>
       </div>
        <div>
        <h1 className='text-3xl'>КАТЕГОРИИ</h1>
        <div className='flex flex-wrap gap-3 mt-12'>
        <h4 className='p-2 border border-black bg-black w-14'>часы</h4>
        <h4 className='p-2 border border-black bg-black w-24' > браслеты</h4>
        <h4 className='p-2 border border-black bg-black w-16'>ремни</h4>
        <h4 className='p-2 border border-black bg-black w-26'>ювелирный изделия</h4>
        <h4 className='p-2 border border-black bg-black w-20'>запонки</h4>
        </div>
        
    </div>
    <div className=''>
        <h1 className='text-3xl'>РАССЫЛКА</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus.</p>
        <div className=' mt-12 flex flex-row'> 
        <input type="text" placeholder='Ваша почта' className='w-30 h-8 text-black' />
        <button onClick={null} className='p-1 border border-black bg-black w-36  text-center   hover:bg-gray-600'>ПОДПИСАТЬСЯ</button>
        </div>
    </div>
    </div>
</div>
    </section>
{/* 
    <footer className='bg-black text-white flex justify-center h-12'>& 2023 Все права защишены</footer> */}
    </>
  )
}

export default Footer
