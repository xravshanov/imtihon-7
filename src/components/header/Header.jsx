import Bellissio from '../../image/logo.webp';
import Location from '../../image/location.svg';
// import Arrow1 from '../../image/arrow1.svg';
import Cub from '../../image/deliveryCub.svg';
// import Flag from '../../image/uzFlag.svg';
// import phone from '../../image/phone.svg';
// import Hala from '../../image/halal.webp';
import styles from  '../header/Header.module.css';
import { Link } from 'react-router-dom';
Link
function Header() {
  return (
    <div>
        <header>
          <div className='container'>
            <div className={styles.header1}>
              <div className={styles.header2}>
              <Link to='/'><img src={Bellissio} alt="" /></Link>
                <div className={styles.header2_content}>
                  <img className={styles.header2_img} src={Location} alt="" />
                    <form className='' >
                      <label className={styles.label} id ="viloyatlar">Shahar:</label>
                      <br />
                      <select className={styles.select} id="viloyatlar">
                        <option  className={styles.option} value="toshkent">Toshkent</option>
                        <option className={styles.option} value="sirdaryo">Sirdaryo</option>
                        <option className={styles.option} value="jizzax">Jizzax</option>
                        <option className={styles.option} value="navoiy">Navoiy</option>
                        <option className={styles.option} value="xorazm">Xorazm</option>
                      </select>
                    </form>
                </div>
                <div className={styles.header2_content1}>
                  <div className={styles.header2_content3}>
                    <img src="https://bellissimo.uz/images/phone.svg" alt="" />
                    <span className={styles.header2_span2}>1117</span>
                  </div>
                  <h5 className={styles.header2_h5}>Yagona aloqa markazi</h5>
                </div>
              </div>
              <div className={styles.header2_content2}>
                <img src={Cub} alt="" />
                <span className={styles.header2_span3}>40 daqiqa ichida tekin yetkazib beramiz yoki pitsa bepul</span>
              </div>
              <div className={styles.header3}>
                <Link to='/register'><button className={styles.header3_btn}>Kirish</button></Link>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header