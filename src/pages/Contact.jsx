import React from 'react'



const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
       <h1>Contact Us</h1>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQex8Yru1B7JT0tgCqSsj81AZmN-HxsNddmhg&s' className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gary-500'>Our Store</p>
          <p className='text-gray-500'>Indian mart </p>
          <p className='text-gray-500'></p>
          <p className='text-gray-500'>54709 willms station <br /> Suit 656 wasigotorn</p>
          <p className='text-gray-500'> tel : 9570523445 <br /> Email : admin@forver.com</p>
          <p className='font-semibold text-xl text-gray-500'>Carreers at Forver</p>
          <p className='text-gray-500 '>Learn more about our teams and jobs oppeing </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explor Jobs
          </button>

        </div>

      </div>
    
    </div>
  )
}

export default Contact
