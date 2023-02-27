import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import sololearn_SQL from "../assets/certs/sololearn_SQL.png"
import sololearn_HTML from "../assets/certs/sololearn_HTML.png"
import sololearn_CSS from "../assets/certs/sololearn_CSS.png"
import sololearn_PHP from "../assets/certs/sololearn_PHP.png"
import sololearn_JavaScript from "../assets/certs/sololearn_JavaScript.png"
import jf_allcourse from "../assets/certs/jf_allcourse.jpg"
import jf_final from "../assets/certs/jf_final.jpg"
import jfun_allcourse from "../assets/certs/jfun_allcourse.jpg"
import jfun_final from "../assets/certs/jfun_final.jpg"
import df_allcourse from "../assets/certs/df_allcourse.jpg"
import df_final from "../assets/certs/df_final.jpg"
import java_jardiknas from "../assets/certs/java_jardiknas.jpg"


// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard img={sololearn_SQL} />
                <CertCard img={sololearn_HTML} />
                <CertCard img={sololearn_CSS} />
                <CertCard img={sololearn_PHP} />
                <CertCard img={sololearn_JavaScript} />
                <CertCard img={jf_allcourse} />
                <CertCard img={jf_final} />
                <CertCard img={jfun_allcourse} />
                <CertCard img={jfun_final} />
                <CertCard img={df_allcourse} />
                <CertCard img={df_final} />
                <CertCard img={java_jardiknas} />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
