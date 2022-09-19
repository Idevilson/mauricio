import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'


export function FourthSection() {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.peopleFourthSection}>
                    <Image
                        src="/assets/fourthSection/people.png"
                        alt="people"
                        layout={"fill"}
                        objectFit={"fill"}
                        quality={100}
                    />
                </div>


                <div className={styles.images}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/fourthSection/valtonia.png"
                            alt="people"
                            width={269}
                            height={486}
                            quality={100}
                        />
                    </div>

                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/fourthSection/PSDB.png"
                            alt="people"
                            width={350}
                            height={327}
                            quality={100}
                        />
                    </div>

                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/fourthSection/mantoan.png"
                            alt="people"
                            width={269}
                            height={486}
                            quality={100}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile}>
                <div className={styles.backgroundAbstractMobile}>
                    <Image
                        src="/assets/fourthSection/bgAbstractMobile.png"
                        alt="people"
                        height="3117"
                        width="1080"
                        layout="fixed"

                        quality={100}
                    />
                </div>



                <div className={styles.imagesMobile}>
                    <div className={styles.imageContainerMobile}>
                        <Image
                            src="/assets/fourthSection/logoAndTextMobile.png"
                            alt="people"
                            width={930}
                            height={331}
                            quality={100}
                        />
                    </div>

                    <div className={styles.imageContainerMobile}>
                        <Image
                            src="/assets/fourthSection/valtoniaMobile.png"
                            alt="people"
                            width={556}
                            height={1003}
                            quality={100}
                        />
                    </div>



                    <div className={styles.imageContainerMobile}>
                        <Image
                            src="/assets/fourthSection/mantoanMobile.png"
                            alt="people"
                            width={556}
                            height={1003}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}