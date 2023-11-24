import Logo from '../../image/footer-logo.svg';
import payme from '../../image/payme-footer.svg';
import click from '../../image/click-footer.svg';
import uzcard from '../../image/uzcard-footer.svg';
import humo from '../../image/humo-footer.svg';
import feezbook from '../../image/footer-facebook.svg';
// import instagramm from '../../image/instagram.svg';
import telegramm from '../../image/telegram.svg';
import styles from '../footer/Footer.module.css';
function Footer() {
  return (
    <div>
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_content}>
                    <div>
                        <img className={styles.footer1_img} src={Logo} alt="" />
                        <h5 className={styles.footer1_h5}>Raqamga qo`ng`iroq qiling - 1117</h5>
                    </div>
                    <div className=''>
                        <h4 className={styles.footer2_h4}>Biz haqimizda</h4>
                        <h4 className={styles.footer2_h4}>Ommoviy oferta</h4>
                        <h4 className={styles.footer2_h4}>Maxfiylik siyosati</h4>
                        <h4 className={styles.footer2_h4}>Halol sertifikat</h4>
                        <h4 className={styles.footer2_h4}>Restaranlar</h4>
                    </div>
                    <div>
                        <h4 className={styles.footer2_h4}>Franchayzi</h4>
                        <h4 className={styles.footer2_h4}>Bizning ish o`rinlarimiz</h4>
                    </div>
                    <div>
                        <img className={styles.img} src={payme} alt="" />
                        <br />
                        <img className={styles.img4} src={click} alt="" />
                    </div>
                    <div>
                        <img className={styles.img2} src={uzcard} alt="" />
                        <br />
                        <img className={styles.img3} src={humo} alt="" />
                    </div>
                    <div>
                        <h5 className={styles.footer4_h5}>Bizni kuzatib boring</h5>
                        <div className={styles.footer_img3}>
                            <img  src={feezbook} alt="" />
                            <img className={styles.img1} src="https://bellissimo.uz/images/instagram.svg" alt="" />
                            <img src={telegramm} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.foot}>
                    <h4 className={styles.foot_h4}>© 2016-2023 Bellissimo Pizza.</h4>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer