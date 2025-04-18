import React, { useEffect, useState } from 'react'
import Herobar from '../components/Herobar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Poemcard from '../components/Poemcard';

const GetPoem = () => {
  const [poemdata, setPoemdata] = useState(null);

  useEffect(() => {
    const displayfunction = async () => {
      const response = await fetch("https://backend.vikram-blaxsquad.workers.dev/api/user/getpoem");
      if (response.ok) {
        const data = await response.json(); 
        // console.log(data)
        setPoemdata(data);
      } else {
        console.log("response not ok");
      }
    };
    displayfunction();
  }, []);

  const featuredArray = poemdata ? [
    { title: poemdata[0]?.title, text: poemdata[0]?.text,id:poemdata[0].id },
    { title: poemdata[2]?.title, text: poemdata[2]?.text,id:poemdata[2].id },
    { title: poemdata[4]?.title, text: poemdata[4]?.text,id:poemdata[4].id },
    { title: poemdata[8]?.title, text: poemdata[8]?.text,id:poemdata[8].id },
  ] : [];

  return (
    <div className="m-6 bg-white rounded-3xl shadow-xl p-8">
  <h2 className="mb-8 text-4xl font-bold font-serif text-orange-500 border-b-2 border-orange-200 pb-3">
    Featured
  </h2>
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    spaceBetween={50}
    slidesPerView={2}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    // navigation={true}
    className="w-full mt-8 mb-12"
  >
    {featuredArray.map((poem, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-orange-100 transform hover:-translate-y-1">
          <Herobar title={poem.title} text={poem.text} id={poem.id} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
    {poemdata &&
      poemdata.map((poem,index) => (
        <Poemcard key={index} id={poem.id} title={poem.title} text={poem.text}/>
      ))}

  </div>
</div>
  );
};

export default GetPoem;
