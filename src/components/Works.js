import HonorCard from "./WorksCard"

import hr from "../assets/curve-hr.svg"

export default function Works(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Works Experience</h1>
            <p className="font-light text-gray-400">Here are some of my work experience</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Digital Marketing & Web Developer" issued="CV. Uno Media Indonesia" desc="January 2020 - May 2020" />
                <HonorCard name="Embedded System Programmer" issued="PT. Cipta Karya Inovasi Teknologi" desc="September 2021 - December 2021" />
                <HonorCard name="Core Developer & Web Developer" issued="PT.  Assist Software Indonesia Pratama" desc="January 2022 - May 2022" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
