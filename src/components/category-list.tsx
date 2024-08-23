"use client";

import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/977380/pexels-photo-977380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
