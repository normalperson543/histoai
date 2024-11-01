"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from 'react';

// export type Images = {
//   id: number,
//   url: string
// };

// export type Patient = {
//   name: string,
//   dob: Date,
//   sex: string
// };

// export type PatientRecord = {
//   id: number,
//   info: Patient
// }

export default function Carousel({slides, carouselType}) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if(current === 0) {
            setCurrent(slides.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    let nextSlide = () => {
        if(current === slides.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className="group overflow-hidden relative h-full m-auto">
            <div className={`flex transition duration-700 h-full`} style={{transform: `translateX(-${current * 100}%)`}}>
                {slides.map((s) => {
                    if(carouselType === "images") {
                        return <div key={s.id} className="min-w-full min-h-full m-auto"><img className="object-fill m-auto" src = {s.imageUrl}/></div>
                    } else if (carouselType === "patients") {
                        return (
                            <div key={s.id} className="flex flex-col items-center justify-center text-center text-sm mx-auto px-10 min-w-full">
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
                            </div>
                        )
                    }
                })}
            </div>

            <div className='absolute top-0 h-full w-full justify-between items-center flex px-10 text-3xl text-hblue-light'>
                <button onClick={previousSlide}>
                    <BsArrowLeftCircleFill/>
                </button>
                <button onClick={nextSlide}>
                    <BsArrowRightCircleFill/>
                </button>
            </div>

            <div className="absolute bottom-0 py-1 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div onClick={()=> setCurrent(i)} key={"circle" + i} className={`rounded-full w-5 h-5 cursor-pointer ${i == current ? "bg-hblue-dark" : "bg-hblue-light"}`}></div>
                    )
                })}
            </div>
        </div>
    )
}