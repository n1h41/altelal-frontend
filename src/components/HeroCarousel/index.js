import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './index.css'

function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 2000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 2500)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    const bannerData = [
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/files/web_banner_1512x.jpg?v=1622876828',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/files/first_10_1512x.jpg?v=1596701336',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/files/banner_1512x.jpg?v=1597906314',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/files/Banner_Arabic_500172d4-e18b-4d9c-ab71-33bfcff660d7_1512x.jpg?v=1593850300',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/files/Banner_2_Arabic_94010912-29bb-4fe1-9564-affcd70e9b1e_1512x.jpg?v=1593850168',
    ]
    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {bannerData.map((item) => <div key={item} className="keen-slider__slide d-flex justify-content-center">
                        <img key={item} src={`${item}`} alt="Banner" className="w-100" />
                    </div>)}
                </div>
                {slider && (
                    <>
                        <ArrowLeft
                            onClick={(e) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </>
                )}
            </div>
            {slider && (
                <div className="dots">
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}

function ArrowLeft(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabled}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    )
}

function ArrowRight(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabled}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    )
}

export default HeroCarousel
