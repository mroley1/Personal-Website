import Image from 'next/image'
import styles from './page.module.css'
import { sriracha, merriweather } from './layout.js';



const summaryData = [
  {
    icon: "major",
    label: "BS Software Engineering"
  },
  {
    icon: "location",
    label: "Dallas, Pennsylvania"
  },
  {
    icon: "school",
    label: "Rochester Institute of Technology"
  },
  {
    icon: "gpa",
    label: "3.85 GPA"
  }
]

const experienceData = [
  {
    type: "entry",
    date: "Sept 2023",
    title: "Carpenter",
    points: [
      "Worked in National Technical Institute of the Deaf Performing Arts wood shop after completing theatre practicum course.",
      "Coordinated with both hearing and deaf co-workers.",
      "Assisted senior lighting and sound designers in multiple theatre productions."
    ]
  },
  {
    type: "note",
    date: "June 2022",
    title: "High school diploma"
  },
  {
    type: "entry",
    date: "May 2021",
    title: "Technology Aide",
    points: [
      "Prepared hardware for student and teacher use and solved connection and technology issues.",
      "Configured network connections for security system.",
      "Recorded instructional videos on use of hardware for faculty and staff.",
      "Managed small groups of aides through completion of IT projects."
    ]
  },
  {
    type: "entry",
    date: "Feb 2020",
    title: "Technology Intern",
    points: [
      "Solved technology and connection issues for students and faculty, maintain and repair equipment."
    ]
  }
]

function * iter() {
  var i = 0;
  while (true) {
    yield i++;
  }
}


export default function Home() {
  return (
    <html className={[sriracha.variable, merriweather.variable].join(" ")}>
      <body>
        <div className={styles.main}>
          <Title first="Matthew" last="Oley" />
          <Divider announces="summary" comesBefore="1" />
          <Summary />
          <Divider announces="experience" comesBefore="2" />
          <Experience />
          <Divider announces="skills" comesBefore="3" />
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
  let keyGen = iter();
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-1)", display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", position: "relative", width: "max-content", maxWidth: "80%", margin: "70px 0px 100px 0px", flexWrap: "wrap", padding: "30px", backgroundColor: "#71c1de", borderRadius: "27px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Image src="/assets/Oley_Matthew_profile.png" width={400} height={400} alt='profile picture' className={styles.circle_picture} />
        <div style={{width: "calc(100% - 300px)"}}>
          <div className={styles.body}>
            <ul>
              {summaryData.map(el => <li key={"item"+keyGen.next().value} data-icon={el.icon} className={styles.list}>{el.label}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-2)", display: "flex", justifyContent: "center"}}>
      <div className={styles.timeline_container}>
        
    </div>
  </div>
  )
}
