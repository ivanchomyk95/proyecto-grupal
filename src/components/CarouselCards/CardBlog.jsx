import React from 'react';

export const CardBlog = ({ blog }) => {
    return (
        <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer overflow-hidden'>
            <div className='rounded-3xl overflow-hidden relative h-[250px] transition-transform duration-300 transform hover:scale-105'>
                <img src={blog.imageSrc} alt={blog.name} className='w-full h-full object-cover' />
                <span className='absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-100'>
                    {blog.name}
                </span>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
                    {blog.name}
                </h3>
                <div className='flex gap-4'>
                    <p className='text-sm text-gray-500 font-normal'>
                        {blog.price}
                    </p>
                </div>
            </div>
        </div>
    );
};
