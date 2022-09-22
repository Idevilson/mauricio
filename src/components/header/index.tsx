import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.socialIconsContainer}>
            </div>

                <div className={styles.navAndLogoContainer}>
                    <nav>
                            <Link className={styles.active} href="#sobre"><a> SOBRE MIM </a></Link>

                        <div
                            className={styles.divider}
                        />

                            <Link className={styles.active} href="#posicionamento"><a> POSICIONAMENTOS </a></Link>

                        <div
                            className={styles.divider}
                        />

                            <Link className={styles.active} href="#footer"><a> CONTATOS </a></Link>

                    </nav>

                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/header/psdb.png"
                            alt="Logo do partido PSDB"
                            width={127}
                            height={29}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}