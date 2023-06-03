import Image from 'next/image'
import styles from './page.module.css'
import { sriracha, merriweather } from './layout.js';

export default function Home() {
  return (
    <html className={[sriracha.variable, merriweather.variable].join(" ")}>
      <body>
        <div className={styles.main}>
          <Title first="Matthew" last="Oley" />
          <Divider announces="summary" comesBefore="1" />
          <Summary />
        </div>
      </body>
    </html>
  )
}

export function Divider( {announces, comesBefore} ) {
  const prevIndex = parseInt(comesBefore) - 1;
  const nextIndex = parseInt(comesBefore);
  return (
    <svg id={announces} className={styles.divider} viewBox='0 0 1000 100' preserveAspectRatio='none' style={{backgroundColor: "var(--main-colors-"+prevIndex+")"}}>
      <polygon x="1" y="1" points='0,100 300,0 500,50 700,0 1000,100' style={{fill: "var(--main-colors-"+nextIndex+")"}} />
      </svg>
  );
}

export function Title( {first, last} ) {
  return (
    <div id="title" style={{width: "100%", flex: "0 0 500px", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-0)"}}>
      <div style={{display: "flex", position: "relative", width: "80%", left: "10%", right: "10%", margin: "100px 0px 0px 0px", padding: "15px", justifyContent: "center", flexDirection: "column"}}>
          <span style={{fontSize: "100pt", fontFamily: "var(--font-sriracha)", textAlign: "center"}}>{first}</span>
          <span style={{fontSize: "50pt", fontFamily: "var(--font-sriracha)", textAlign: "center", transform: "translateY(-50pt)"}}>{last}</span>
      </div>
    </div>
  )
}

export function Summary() {
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-1)", display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", position: "relative", width: "max-content", maxWidth: "80%", margin: "70px 0px 100px 0px", flexWrap: "wrap", padding: "30px", backgroundColor: "#71c1de", borderRadius: "27px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Image src="/assets/Oley_Matthew_profile.png" width={400} height={400} alt='profile picture' className={styles.circle_picture} />
        <div style={{width: "calc(100% - 300px)"}}>
          <div className={styles.body}>
            <ul>
              <li data-icon="major" className={styles.list}>BS Software Engineering</li>
              <li data-icon="location" className={styles.list}>Dallas, Pennsylvania</li>
              <li data-icon="school" className={styles.list}>Rochester Institute of Technology</li>
              <li data-icon="gpa" className={styles.list}>3.85 GPA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
