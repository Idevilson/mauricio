import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {

    return(
        <>
            <footer className={styles.footerContainer} id="footer">
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/footer/footerBG.png"

                        alt="abstract"
                        layout={"fill"}
                        objectFit={"cover"}
                        quality={100}
                    />
                </div>
                <div className={styles.footerTop}>
                    <Image
                        src="/assets/footer/siga.png"
                        alt="Siga as Redes Sociais"
                        width={590}
                        height={27}
                        quality={100}
                    />
                    <div className={styles.socialIconsContainer}>
                    </div>
                </div>

                <div className={styles.nameAndNumber}>
                    <Image
                        src="/assets/footer/nameAndNumber.png"
                        alt="Nome e número da candidata"
                        width={854}
                        height={100}
                        quality={100}
                    />
                </div>


                <div className={styles.textBottom}>
                    <h1>
                        LEI N°9.504/97 - FEDERAÇÃO PSDB - CIDADANIA. CNPJ: 47.547.956/0001-71 / 11.274.042/0001-37                    </h1>
                    <Image
                        src="/assets/footer/PSDB.png"
                        alt="Nome e número da candidata"
                        width={127}
                        height={29}
                        quality={100}
                    />
                </div>
            </footer>

            <footer className={styles.footerContainerMobile} id="footer">
                <div className={styles.nameAndNumberMobile}>
                    <Image
                        src="/assets/footer/valtoniaNumberTypeMobile.png"
                        alt="Nome e número da candidata"
                        width={978}
                        height={256}
                        quality={100}
                    />
                </div>

                <div className={styles.imageContainerMobile}>
                    <Image
                        src="/assets/footer/footerBGMobile.png"

                        alt="abstract"
                        layout="fill"
                        objectFit={"cover"}
                        quality={100}
                    />
                </div>
                <div className={styles.footerTopMobile}>
                    <Image
                        src="/assets/footer/sigaMobile.png"
                        alt="Siga as Redes Sociais"
                        width={952}
                        height={43}
                        quality={100}
                    />
                </div>
                <div className={styles.socialIconsContainerMobile}>

                </div>

                <div className={styles.logoDoPartido}>
                    <Image
                        src="/assets/footer/PSDB.png"
                        alt="Nome e número da candidata"
                        width={211}
                        height={48}
                        quality={100}
                    />
                </div>

                <div className={styles.textBottomMobile}>
                    <h1>
                        LEI N°9.504/97 - FEDERAÇÃO PSDB - CIDADANIA. CNPJ: 47.547.956/0001-71 / 11.274.042/0001-37                    </h1>
                </div>
            </footer>
        </>
    )
}