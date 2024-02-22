import React from 'react'
import { MoreOnMainoneCard } from './MoreOnMainoneCard'
import { FaArrowRight, FaLightbulb, FaRegLightbulb, FaSolarPanel, FaStreetView } from 'react-icons/fa'
import { CgSmartHomeLight } from 'react-icons/cg'

export const MoreOnMainone = () => {

    const services = [
        {
            title: 'Solar Inverter Services',
            content: 'We install and sell a wide variation of solar inverters for different load sizes, environments and use cases',
            icon: <FaSolarPanel />,
            points: [
                "Optimized for long usage",
                "Designed for etreme conditions",
                "Designed for home and commercial use"
            ]
        },
        {
            title: 'Solar Street Light Installation',
            content: 'We install and sell a wide variation of solar inverters for different load sizes, environments and use cases',
            icon: <CgSmartHomeLight />,
            points: [
                "Automated Controls",
                "Designed for extreme weather conditions",
                "Long battery life"
            ]
        },
        {
            title: 'Electrical Design and Wiring',
            content: 'We install and sell a wide variation of solar inverters for different load sizes, environments and use cases',
            icon: <FaRegLightbulb />,
            points: [
                "Electrical Wiring Plan Design",
                "Implementation of Electrical Design",
                "Opimized for Efficient usage"
            ]
        }
    ]

    return (
        <div className='w-full py-5 my-4'>
            <div className='w-full md:w-[70%] mx-auto flex flex-col flex-wrap md:flex-row justify-between px-10 py-5'>
                <div className='w-full md:w-full lg:w-1/2 p-2 md:p-[20pt]'>
                    <div className='w-1/3 md:w-1/2 h-1 border-t-4 border-t-green-500 mb-5'></div>
                    <h1 className='text-3xl font-bold '>
                        We Are A Leading Supplier, Manufacturer, and Installer of Solar Equipment and Materials
                    </h1>
                </div>

                <div className='w-full lg:w-1/2 p-[10pt] flex flex-col md:flex-row justify-around space-x-2'>
                    <div className='w-full md:w-1/2'>
                        <h3 className='font-bold text-lg'>
                            We have build trust and partnership with top players in the solar installation, manufacture, and supply space
                        </h3>

                        <div className='w-full my-10'>
                            <a href="/pricing" className='w-full py-6 '>
                                <div className='w-fit py-5 bg-green-600 text-white rounded px-8 hover:bg-green-100 hover:text-green-600 border-2 border-green-600 transition flex space-x-3 justify-around items-center'>
                                    <span>
                                        Our Pricing
                                    </span>
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 font-light'>
                        <p>
                            "Our sales team and experts have a clear understanding of the model of operation, rating and optimization. This eneables us to provide you with in-depth material sourcing and supply chain expertise for every production & installation process"
                        </p>
                    </div>
                </div>
            </div>

            <div className='md:w-[70%] h-full mx-auto my-5 flex flex-wrap overflow-auto px-5 py-3'>
                {   services.map(service => <MoreOnMainoneCard key={service.title} title={service.title} content={service.content} icon={service.icon} points={service.points} />)  }
            </div>
        </div>
    )
}
