"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";

export default function Carousel({slides, carouselType} : {slides: any, carouselType: string}) {

    const [current, setCurrent] = useState(0);

    if (slides.length == 0) return (<div>Nothing to see here ✅</div>)
    
    const previousSlide = () => {
        if(current === 0) {
            setCurrent(slides.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const nextSlide = () => {
        if(current === slides.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className="overflow-hidden relative h-full m-auto">
            <div className={`flex transition duration-700 h-full`} style={{transform: `translateX(-${current * 100}%)`}}>
                {slides.map((s:any) => {
                    if(carouselType === "images") {
                        return (
                            <div key={s.id} className="min-w-full min-h-full m-auto">
                                <Link href={`/dashboard/reports/${s.id}`}><Image className="transition ease-in object-fill m-auto hover:scale-75" src={s.imageUrl} height={100} width={100} alt={`Uploaded histopathological image`}/></Link>
                            </div>
                        )
                    } else if (carouselType === "patients") {
                        return (
                            <div key={s.id} className="group flex flex-col items-center justify-center text-center text-sm mx-auto px-10 min-w-full">
                                <Link href={`/dashboard/patients/${s.id}`}>
                                    <h1 className="text-4xl group-hover:text-sm transition-all duration-500 ease-in-out">
                                            <strong>Name:</strong> <br></br>
                                            {s.firstName}{s.middleName && ` ${s.middleName.substring(0,1)}.`} {s.lastName}
                                    </h1>
                                    <p className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-500 group-hover:2000 transition-opacity duration-500">
                                        <strong>Date of Birth:</strong><br/>
                                        {s.dateOfBirth.toLocaleDateString()}<br/>
                                        <strong>Sex:</strong><br/>
                                        {s.sex}
                                    </p>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>

            <div className='absolute top-0 left-0 h-full w-[20%]items-center flex px-10 text-3xl text-hblue-light'>
                <button onClick={previousSlide}>
                    <BsArrowLeftCircleFill/>
                </button>
            </div>
            <div className='absolute top-0 right-0 h-full w-[20%]items-center flex px-10 text-3xl text-hblue-light'>
                <button onClick={nextSlide}>
                    <BsArrowRightCircleFill/>
                </button>
            </div>

            <div className="absolute bottom-0 py-1 flex justify-center gap-3 w-full">
                {slides.map((s:any, i:number) => {
                    return (
                        <div onClick={()=> setCurrent(i)} key={"circle" + i} className={`rounded-full w-5 h-5 cursor-pointer ${i == current ? "bg-hblue-dark" : "bg-hblue-light"}`}></div>
                    )
                })}
            </div>
        </div>
    )
}