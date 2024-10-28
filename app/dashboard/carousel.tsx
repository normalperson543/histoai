"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import { useState } from 'react';

export default function Carousel({slides}) {

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
        <div className="overflow-hidden relative h-full">
            <div className={`flex transition ease-out duration-40 h-full`} style={{transform: `translateX(-${current * 100}%)`}}>
                {slides.map((s) => {
                    if("imageUrl" in s) {
                        return <img className="min-w-full" src = {s.imageUrl}/>
                    } else if ("info" in s) {
                        return (
                            <div className="text-center text-sm content-center mx-auto px-10 min-w-full">
                                <h1><strong>Name:</strong><br/>{s.info.name}</h1>
                                <h1><strong>Date of Birth:</strong><br/>{s.info.dOB.toLocaleDateString()}</h1>
                                <h1><strong>Sex:</strong><br/>{s.info.sex}</h1>
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

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div onClick={()=> setCurrent(i)} key={"circle" + i} className={`rounded-full w-5 h-5 cursor-pointer ${i == current ? "bg-hblue-dark" : "bg-hblue-light"}`}></div>
                    )
                })}
            </div>
        </div>
    )
}