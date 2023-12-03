import React from 'react';

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Create Listing
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required />
          <textarea type='text' placeholder='Description' className='border p-3 rounded-lg' id='description' required />
          <input type='text' placeholder='Address' className='border p-3 rounded-lg' id='address' required />
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input name="" type="checkbox" value="" id='sell' className='w-5' />
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input name="" type="checkbox" value="" id='rent' className='w-5' />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input name="" type="checkbox" value="" id='parking' className='w-5' />
              <span>Parking Spot</span>
            </div>
            <div className='flex gap-2'>
              <input name="" type="checkbox" value="" id='furnished' className='w-5' />
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input name="" type="checkbox" value="" id='offer' className='w-5' />
              <span>Offer</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap'>
            <div className='flex items-center gap-2'><input type='number' id='bedrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' /><p>Beds</p></div>
            <div className='flex items-center gap-2'><input type='number' id='bathrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' /><p>Baths</p></div>
            <div className='flex items-center gap-2'><input type='number' id='regularPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' />
              <div className='flex flex-col items-center'>
                <p>Regular Price</p></div>
              <span className='text-xs'>($ / month)</span>
            </div>
            <div className='flex items-center gap-2'><input type='number' id='discountPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' />
              <div className='flex flex-col items-center'>
                <p>Discounted price</p></div>
              <span className='text-xs'>($ / month)</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 flex-1'>
          <p className='font-semibold'>Images:
            <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
          </p>
          <div className='flex gap-4'>
            <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple/>
            <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>
        <button className='p-3 uppercase rounded-lg hover:shadow-lg disabled:opacity-80 bg-slate-700 text-white'>Create listing</button>
        </div>
      </form>
    </main>
  );
}
