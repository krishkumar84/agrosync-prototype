import React from 'react'
import Slider from 'infinite-react-carousel';
import star from '../assets/star.png';
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import check from '../assets/checked.png'
import clock from '../assets/wall-clock.png'

function singlepost() {
  return (
    <div className="flex pt-20 justify-center">
    <div className="w-full flex-wrap flex-col-reverse sm:flex-row py-8 flex gap-10">
      <div className="flex-2 w-full sm:w-2/3 px-8 sm:px-12 flex flex-col gap-4">
        <span className="font-bold text-2xl text-gray-800"> Seasonal Crops</span>
        <h1 className='text-lg text-gray-600'>explore many seasonal crops</h1>
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span className='text-xl font-medium'>Anna Bell</span>
          <div className="flex items-center gap-2">
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <span className='font-bold text-lg text-yellow-400'>5</span>
          </div>
        </div>
        <Slider className='hover:cursor-pointer ' arrows={false} swipe={true}  autoplay={true} pauseOnHover={true}>
          <img className=' w-1/2 p-3 sm:p-16 ' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <img className=' w-1/2 p-3 sm:p-16 ' src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <img className=' w-1/2 p-3 sm:p-16 ' src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </Slider>
        <h2 className='text-lg font-medium '>About This Seller</h2>
        <p className='text-gray-700' >
          I use an AI program to create images based on text prompts. This
          means I can help you to create a vision you have through a textual
          description of your scene without requiring any reference images.
          Some things I've found it often excels at are: Character portraits
          (E.g. a picture to go with your DnD character) Landscapes (E.g.
          wallpapers, illustrations to compliment a story) Logos (E.g. Esports
          team, business, profile picture) You can be as vague or as
          descriptive as you want. Being more vague will allow the AI to be
          more creative which can sometimes result in some amazing images. You
          can also be incredibly precise if you have a clear image of what you
          want in mind. All of the images I create are original and will be
          found nowhere else. If you have any questions you're more than
          welcome to send me a message.
        </p>
        <div className="mt-12 flex flex-col gap-4">
          <h2 className='text-lg font-medium mb-4'>About The Seller</h2>
          <div className="flex items-center gap-4">
            <img className='w-[100px] h-[100px] rounded-full  object-cover'
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="info">
              <span className='text-xl font-medium'>Anna Bell</span>
              <div className="flex items-center gap-2">
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <span className='font-bold text-lg text-yellow-400'>5</span>
          </div>
              <button className='bg-green-500  text-white rounded-sm  p-2 cursor-pointer'>Contact Me</button>
            </div>
          </div>
          <div className="border-1 rounded-md p-5 mt-5">
            <div className="flex w-full flex-wrap justify-between">
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">From</span>
                <span className="font-bold text-gray-700">USA</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Member since</span>
                <span className="font-bold text-gray-700">Aug 2022</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Avg. response time</span>
                <span className="font-bold text-gray-700">4 hours</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Last delivery</span>
                <span className="font-bold text-gray-700">1 day</span>
              </div>
              <div className="w-[300px] flex flex-col gap-3 mb-3">
                <span className="text-gray-500 font-medium text-lg">Languages</span>
                <span className="font-bold text-gray-700">English</span>
              </div>
            </div>
            <hr  className='h-0 border border-gray-500 mt-5 mb-16'/>
            <p className='text-gray-700'>
              My name is Anna, I enjoy creating AI generated art in my spare
              time. I have a lot of experience using the AI program and that
              means I know what to prompt the AI with to get a great and
              incredibly detailed result.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h1 className='text-3xl font-bold'>Reviews</h1>
          <div className="flex flex-col gap-5 my-5">
            <div className=" items-center">
              <img
                 className="w-12 h-12 object-cover rounded-full"
                src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span className='font-bold text-lg'>Garner David</span>
                <div className="flex items-center gap-3 ">
                  <img className='w-5'
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt=""
                  />
                  <span className='text-gray-600'>United States</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <span className='font-bold text-lg text-yellow-400'>5</span>
          </div>
            <p className='text-gray-700'>
              I just want to say that art_with_ai was the first, and after
              this, the only artist . Communication was
              amazing, each and every day he sent me images that I was free to
              request changes to. They listened, understood, and delivered
              above and beyond my expectations. I absolutely recommend this
              gig, and know already that Ill be using it again very very soon
            </p>
            <div className="flex items-center gap-3">
              <span>Helpful?</span>
              <img className='w-5' src={like} alt="" />
              <span>Yes</span>
              <img className='w-5'src={dislike} alt="" />
              <span>No</span>
            </div>
          </div>
          <hr className='h-0 border border-gray-500 mt-5 mb-16' />
          <div className="item">
            <div className="user">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span className='font-bold text-lg'>Sidney Owen</span>
                <div className="flex items-center gap-3">
                  <img className='w-5'
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                    alt=""
                  />
                  <span>Germany</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <span className='font-bold text-lg text-yellow-400'>5</span>
          </div>
            <p className='text-gray-700'>
              The designer took my photo for my book cover to the next level!
              Professionalism and ease of working with designer along with
              punctuality is above industry standards!! Whatever your project
              is, you need this designer!
            </p>
            <div className="flex items-center gap-3">
              <span>Helpful?</span>
              <img className='w-5' src={like} alt="" />
              <span>Yes</span>
              <img className='w-5' src={dislike}  alt="" />
              <span>No</span>
            </div>
          </div>
          <hr className='h-0 border border-gray-500 mt-5 mb-16' />
          <div className="item">
            <div className="user">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span className='font-bold text-lg'>Lyle Giles </span>
                <div className="flex items-center gap-3">
                  <img className='w-5'
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt=""
                  />
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <img className='w-3 h-3' src={star} alt="" />
            <span className='font-bold text-lg text-yellow-400'>5</span>
          </div>
            <p className='text-gray-700'>
              Amazing work! Communication was
              amazing, each and every day he sent me images that I was free to
              request changes to. They listened, understood, and delivered
              above and beyond my expectations. I absolutely recommend this
              gig, and know already that Ill be using it again very very soon
            </p>
            <div className="flex items-center gap-3">
              <span>Helpful?</span>
              <img className='w-5' src={like} alt="" />
              <span>Yes</span>
              <img className='w-5' src={dislike}  alt="" />
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 border-3 border-gray-400 p-5 flex flex-wrap flex-col gap-5 sm:sticky  top-[50px] max-h-content max-h-[500px] ">
        <div className="flex items-center justify-between">
          <h3 className='font-medium text-xl'> AI generated crop</h3>
          <h2 className='font-normal text-xl'>$ 59.99</h2>
        </div>
        <p className='text-gray-600 mt-3'>
          I will create a unique high quality AI generated image based on a
          description that you give me
        </p>
        <div className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-3">
            <img className='w-5' src={clock} alt="" />
            <span>2 Days Delivery</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-medium text-gray-600 ">
            <img className='w-5' src={check} alt="" />
            <span>Prompt writing</span>
          </div>
          <div className="flex items-center gap-3 text-medium text-gray-600 ">
            <img className='w-5'src={check} alt="" />
            <span>Artwork delivery</span>
          </div>
          <div className="flex items-center gap-3 text-medium text-gray-600 ">
            <img className='w-5' src={check} alt="" />
            <span>Image upscaling</span>
          </div>
          <div className="flex items-center gap-3 text-medium text-gray-600 ">
            <img className='w-5' src={check} alt="" />
            <span>Additional design</span>
          </div>
        </div>
        <button className='bg-green-600 p-3 text-white rounded-md border-none font-medium text-lg cursor-pointer'>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default singlepost
