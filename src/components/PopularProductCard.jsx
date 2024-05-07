import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} rel="preload" fetchpriority="high" alt={name} className='w-[282px] h-[282px] bg-card bg-cover transition-transform duration-300 ease-in-out transform hover:scale-110' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} rel="preload" fetchpriority="high" alt='rating icon' width={24} height={24} className='object-contain m-0'/>
        <p className='font-montserrat text-xl leading-normal text-qualify-text'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-poppins'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-montagne-light text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
