import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=hh3LmglUbjo' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/boy.png"
                                    alt="Ícone de um menino"
                                    width={85}
                                    height={143}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        is simply dummy <br/>
                                        text of the printing
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={85}
                                height={143}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={120}
                                height={143}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={85}
                                height={143}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url='https://www.youtube.com/watch?v=hh3LmglUbjo'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/boyMobile.png"
                                    alt="Ícone de um menino"
                                    width={214}
                                    height={273}
                                    objectFit='contain'
                                    quality={100}
                                />
                            </div>


                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/handMobile.png"
                                    alt="Ícone de uma mão"
                                    width={201}
                                    height={334}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/moneyMobile.png"
                                    alt="Ícone do dinheiro"
                                    width={273}
                                    height={273}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/heartMobile.png"
                                alt="Ícone do dinheiro"
                                width={239}
                                height={401}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    is simply dummy <br/>
                                    text of the printing
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}