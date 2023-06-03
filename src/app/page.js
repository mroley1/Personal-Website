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
        </div>
      </body>
    </html>
  )
}

export function Divider( {announces, comesBefore} ) {
  const prevIndex = parseInt(comesBefore) - 1;
  const nextIndex = parseInt(comesBefore);
  let divider = (
    <svg id={announces} className={styles.divider} viewBox='0 0 1000 100' preserveAspectRatio='none' style={{backgroundColor: "var(--main-colors-"+prevIndex+")"}}>
      <polygon x="1" y="1" points='0,100 300,0 500,50 700,0 1000,100' style={{fill: "var(--main-colors-"+nextIndex+")"}} />
      </svg>
  );
  return divider
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
