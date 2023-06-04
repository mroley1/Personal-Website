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
    type: "start"
  },
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
  },
  {
    type: "end"
  }
]

const skillsData = [
  {
    title: "Javascript",
    skill: 10,
    image: "/assets/skillslogos_pngs/JavaScript_logo.png",
    slips: [
      {name: "Web", Link: "https://www.merriam-webster.com/dictionary/recursion"},
      {name: "Node", Link: "https://nodejs.org/en/about"},
      {name: "Firebase", Link: "https://firebase.google.com/"},
      {name: "Discord API", Link: "https://discord.js.org/"},
      {name: "Pteridactyl API", Link: "https://pterodactyl.io/"},
      {name: "ECMAScript Modules", Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"}
    ]
  },
  {
    title: "Python",
    skill: 8,
    image: "/assets/skillslogos_pngs/Python_logo.png",
    slips: [
      {name: "Discord API", Link: "https://discordpy.readthedocs.io/en/stable/"},
      {name: "tkinter", Link: "https://docs.python.org/3/library/tkinter.html"}
    ]
  },
  {
    title: "C/C++",
    skill: 6,
    image: "/assets/skillslogos_pngs/Cpp_logo.png",
    slips: [
      {name: "Make", Link: "https://linuxhandbook.com/using-make/"},
      {name: "GDB", Link: "https://sourceware.org/gdb/"},
      {name: "Gitlab CI/CD Testing", Link: "https://about.gitlab.com/topics/ci-cd/"},
      {name: "Vim editor", Link: "https://www.vim.org/about.php"}
    ]
  },
  {
    title: "Java",
    skill: 5,
    image: "/assets/skillslogos_pngs/Java_logo.png",
    slips: [
      {name: "JavaFX", Link: "https://openjfx.io/"},
      {name: "Networking", Link: "https://docs.oracle.com/javase/tutorial/networking/overview/networking.html"}
    ]
  }
]

const projectsData = [
  {
    title: "Online Grimoire",
    description: "The Grimore is a tool used by the storyteller in the game Blood on the Clocktower. This is an online implementation of that game tool. The website works best on a touchscreen laptop or other large screen in portrait mode.",
    image: "/assets/grimoire.png",
    link: "https://grimoire.csh.rit.edu/",
    github: "https://github.com/mroley1/Online-Grimoire"
  },
  {
    title: "Personal Website",
    description: "Written in pure HTML, CSS, and JavaScript. Using Figma to draft elements. Currently being converted over to React.",
    image: "/assets/personal_site.PNG",
    link: null,
    github: "https://github.com/mroley1/mroley1.github.io"
  }
]

function * iter() {
  var i = 1;
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
  let keyGen = iter();
  let rowGen = iter();
  function drawSection(element) {
    switch (element.type) {
      case "start": return TimelineStart(element);
      case "entry": return TimelineEntry(element);
      case "note": return TimelineNote(element);
      case "end": return TimelineEnd(element);
    }
  }
  function TimelineStart() {
    let row = rowGen.next().value;
    return (
      <div key={keyGen.next().value} style={{width: "100px", height: "100px", gridArea: row+" / 2 / "+(row+1)+" / 3"}}>
        <Image src="/assets/timeline_svgs/timeline_beg.svg" width={100} height={100} alt='Timeline beginning' />
      </div>
    )
  }
  function TimelineEntry(element) {
    let row1 = rowGen.next().value;
    let row2 = rowGen.next().value;
    let pointKeyGen = iter();
    return (
      <>
        <div key={keyGen.next().value} style={{height: "100px", width: "min-content", gridArea: row1+" / 1 / "+(row1+1)+" / 2", textAlign: "right", fontSize: "20pt", fontFamily: "var(--font-sriracha)", color: "rgb(34, 34, 34)", whiteSpace: "nowrap", lineHeight: "100px"}}>
          <span style={{display: "inline-block", verticalAlign: "middle"}}>{element.date}</span>
        </div>
        <div key={keyGen.next().value} style={{width: "100px", height: "100px", gridArea: row1+" / 2 / "+(row1+1)+" / 3"}}>
          <Image src="/assets/timeline_svgs/timeline_entry.svg" width={100} height={100} alt='Timeline entry' />
        </div>
        <div key={keyGen.next().value} style={{height: "100px", width: "min-content", gridArea: row1+" / 3 / "+(row1+1)+" / 4", textAlign: "left", fontSize: "45pt", fontFamily: "var(--font-merriweather)", whiteSpace: "nowrap", lineHeight: "100px"}}>
          <span style={{display: "inline-block", verticalAlign: "middle"}}>{element.title}</span>
        </div>
        
        <div key={keyGen.next().value} style={{width: "100px", gridArea: row2+" / 2 / "+(row2+1)+" / 3"}}>
          <svg style={{width: "100px", height: "100%"}}viewbox="0 0 100 100" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" width="20" height="100" fill="black"/>
          </svg>
        </div>
        <div key={keyGen.next().value} style={{height: "100%", gridArea: row2+" / 3 / "+(row2+1)+" / 4", textAlign: "left", fontSize: "45pt", fontFamily: "var(--font-merriweather)", lineHeight: "100px"}}>
          <ul style={{fontSize: "20pt", fontFamily: "var(--font-merriweather)", lineHeight: "normal", margin: "0px 0px 25px 0px"}}>
            {element.points.map(el => <li key={pointKeyGen.next().value}>{el}</li>)}
          </ul>
        </div>
      </>
    )
  }
  function TimelineNote(element) {
    let row = rowGen.next().value;
    return (
      <>
        <div key={keyGen.next().value} style={{height: "100px", width: "min-content", gridArea: row+" / 1 / "+(row+1)+" / 2", textAlign: "right", fontSize: "20pt", fontFamily: "var(--font-sriracha)", color: "rgb(34, 34, 34)", whiteSpace: "nowrap", lineHeight: "100px"}}>
          <span style={{display: "inline-block", verticalAlign: "middle"}}>{element.date}</span>
        </div>
        <div key={keyGen.next().value} style={{width: "100px", height: "100px", gridArea: row+" / 2 / "+(row+1)+" / 3"}}>
          <Image src="/assets/timeline_svgs/timeline_note.svg" width={100} height={100} alt='Timeline note' />
        </div>
        <div key={keyGen.next().value} style={{height: "100px", width: "min-content", gridArea: row+" / 3 / "+(row+1)+" / 4", textAlign: "left", fontSize: "30pt", fontFamily: "var(--font-merriweather)", whiteSpace: "nowrap", lineHeight: "100px"}}>
          <span style={{display: "inline-block", verticalAlign: "middle"}}>{element.title}</span>
        </div>
      </>
    )
  }
  function TimelineEnd() {
    let row = rowGen.next().value;
    return (
      <div key={keyGen.next().value} style={{width: "100px", height: "100px", gridArea: row+" / 2 / "+(row+1)+" / 3"}}>
        <Image src="/assets/timeline_svgs/timeline_end.svg" width={100} height={100} alt='Timeline end' />
      </div>
    )
  }
  return (
    <div style={{width: "100%", margin: "0px 0px -1px 0px", backgroundColor: "var(--main-colors-2)", display: "flex", justifyContent: "center"}}>
      <div className={styles.timeline_container}>
        {experienceData.map(el => drawSection(el))}
    </div>
  </div>
  )
}
