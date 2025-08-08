import React from 'react'
import Styles from '../../../Styles/centerHeading-Style.module.css';

const MidExperience = () => {
    return (
        <>
            <section className="midExperienceSection py-16">
                <div className="midExperienceHeading">
                    <h1 className={`text-4xl ${Styles.commonHeading}`} >
                        Experience the Power of Samavesh
                    </h1>
                    <h6 className={`text-lg ${Styles.cardSubHeading} mt-4`}>
                        Unlock the full potential of AI inferencing with features built to deliver speed, accuracy, and cost-efficiency.
                    </h6>
                </div>
            </section>
        </>
    )
}

export default MidExperience