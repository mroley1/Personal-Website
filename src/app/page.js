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
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-1)", display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", position: "relative", width: "max-content", maxWidth: "80%", margin: "70px 0px 100px 0px", flexWrap: "wrap", padding: "30px", backgroundColor: "#71c1de", borderRadius: "27px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Image src="/assets/Oley_Matthew_profile.png" width={400} height={400} alt='profile picture' className={styles.circle_picture} />
        <div style={{width: "calc(100% - 300px)"}}>
          <div className={styles.body}>
            <ul>
              {summaryData.map(el => <li data-icon={el.icon} className={styles.list}>{el.label}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  function TimelineStart() {
    return (
      <tr style={{margin: "0px", height: "100px", overflow: "hidden"}}>
            <td style={{padding: "0px"}}>&nbsp;</td>
            <td style={{width: "100px", height: "100px", padding: "0px", lineHeight: "normal", textAlign: "start", whiteSpace: "normal", fontWeight: "400", fontSize: "16px", fontStyle: "normal"}}><Image alt='timeline start' width={100} height={100} src="/assets/timeline_svgs/timeline_beg.svg" /></td>
            <td style={{padding: "0px"}}>&nbsp;</td>
        </tr>
    )
  }
  function TimelineEntry(date, title, content) {
    return (
      <>
        <tr style={{margin: "0px"}}>
          <td id="timelineEntryTemplate_date" style={{height: "100px", padding: "0px", textAlign: "right", fontSize: "20pt", fontFamily: "var(--font-sriracha)", color: "rgb(34, 34, 34)", whiteSpace: "nowrap"}}>{date}</td>
          <td id="timelineEntryTemplate_barExtension" rowspan="2" style={{width: "100px", height: "100px", padding: "0px", verticalAlign: "top", overflow: "hidden"}}>
            <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
              <img src="./assets/timeline_svgs/timeline_entry.svg" />
              <svg style={{width: "100px", height: "100%"}} preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" width="20" height="100" fill="black"/>
              </svg>
            </div>
          </td>
          <td id="timelineEntryTemplate_title" style={{fontSize: "45pt", fontFamily: "var(--font-merriweather)"}}>{title}</td>
        </tr>
        <tr style={{margin: "0px"}}>
          <td style={{width: "100px", padding: "0px"}}>&nbsp;</td>
          <td id="timelineEntryTemplate_content" style={{verticalAlign: "top"}}></td>
        </tr>
      </>
    )
  }
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-2)", display: "flex", justifyContent: "center"}}>
      <div className={styles.timeline_container}>
        <table style={{borderCollapse: "collapse", borderSpacing: "0px"}}>
          {TimelineStart()}
          {TimelineEntry("Sept 2023", "Carpenter", null)}
        </table>
    </div>
  </div>
  )
}
