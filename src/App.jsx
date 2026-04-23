import { useEffect, useRef, useState } from 'react'
import {
  heroLanding,
  runnerIcon,
  wocLogo,
  woc2Logo,
  csicBrochurePdf,
  toaLogo,
  tnasLogo,
  societyLogo,
  moaLogo,
  welcomeDrSassendar,
  welcomeDrNavaladi,
  welcomeDrVishnu,
  welcomeDrSamundeeswari,
  welcomeWocPresident,
  welcomeWocTreasurer,
  welcomeWocSecretary,
  international_fac1,
  international_fac2,
  international_fac3,
  international_fac4,
  international_fac5,
  international_fac6,
  international_fac7,
  national_fac1,
  national_fac2,
  national_fac3,
  national_fac4,
  national_fac5,
  national_fac6,
  national_fac7,
  national_fac8,
  national_fac9,
  national_fac10,
  national_fac11,
  national_fac12,
  national_fac13,
  national_fac14,
  national_fac15,
  national_fac16,
  national_fac17,
  national_fac18,
  national_fac19,
  national_fac20,
  national_fac21,
  venue,
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  sponsor8,
  sponsor9,
  handsOn1,
  handsOn2,
  handsOn3,
  handsOn4,
  handsOn5,
  speciality1,
  speciality2,
  speciality3,
  speciality4,
} from './assets'

import './App.css'

const NAV_ITEMS = [
  { label: 'Overview', id: 'overview' },
  { label: 'About', id: 'about' },
  { label: 'Faculty', id: 'speakers' },
  { label: 'Program', id: 'why_we_should_attend' },
  { label: 'Traiff', id: 'passes' },
  { label: 'Venues', id: 'venues' },
  { label: 'Contact', id: 'contact' },
]

const REGISTRATION_DEADLINE = new Date('2026-06-13T12:00:00+05:30').getTime()
const REGISTRATION_LINK = 'https://www.wocintl.org/register.html'
const NAV_SCROLL_OFFSET = 128
const LIMITED_AUDIENCE_TIMER_OFFSET = 24 * 60 * 60 * 1000

const AUDIENCE_OPTIONS = [
  { id: 'Doctors', label: 'Doctors'},
  { id: 'Physiotherapist', label: 'Physiotherapist'},
  { id: 'Coaches/Athelets', label: 'Coaches/Athelets'},
]

const getRemainingTime = (targetTime) => {
  const distance = Math.max(targetTime - Date.now(), 0)

  return {
    isExpired: distance === 0,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

const formatTimerUnit = (value) => String(value).padStart(2, '0')

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedAudience, setSelectedAudience] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedScheduleCategory, setExpandedScheduleCategory] = useState('doctor')
  const [countdown, setCountdown] = useState(() => getRemainingTime(REGISTRATION_DEADLINE))
  const pendingScrollTargetRef = useRef(null)
  const scrollEndFallbackTimerRef = useRef(null)
  const activeSectionRef = useRef('overview')

  const featureCards = [
    {
      title: 'Organizing Chairman',
      name: 'Dr.Saseendar S',
      text: 'Vice President, WOC India Editor, WOC International',
      img: welcomeDrSassendar,
    },
    {
      title: 'Organizing Chairman',
      name: 'Dr. Navaladi Shankar',
      text: '',
      img: welcomeDrNavaladi,
    },
    {
      title: 'Organizing Secretary ',
      name: 'Dr. Vishnu Senthil',
      text: 'EC, WOC India',
      img: welcomeDrVishnu,
    },
    {
      title: 'Organizing Secretary',
      name: 'Dr Samundeeswari S',
      text: 'Joint Secretary, WOC India',
      img: welcomeDrSamundeeswari,
    },
  ]

  const featureCards2 = [
    {
      title: 'PRESIDENT',
      name: 'Dr. Arindam Banerjee',
      text: 'President WOC International & WOC India',
      img: welcomeWocPresident,
    },
    {
      title: 'HON. SECRETARY',
      name: 'Dr. Chinmay Narh',
      text: 'EC, WOC India',
      img: welcomeWocSecretary,
    },
    {
      title: 'TREASURER',
      name: 'Dr. Sidhant Goyal',
      text: 'EC, WOC India',
      img: welcomeWocTreasurer,
    },
  ]


  const renownedInternationalFaculty = [
    [
      {name: 'Prof. Dr. David Figueroa', img: international_fac1}, 
      {name: 'Prof. Dr. Vikas Khanduja', img: international_fac2}, 
      {name: 'Dr. Alberto Gregori', img: international_fac3}, 
      {name: 'Dr. Christos Koukos', img: international_fac4}
    ],
    [
      {name: 'Dr. Ramnadh Pulavarti', img: international_fac5}, 
      {name: 'Dr.Rajkumar Gangadharan', img: international_fac6}, 
      {name: 'Dr.Rameez A. Qudsi', img: international_fac7}
    ],
  ]

  const expertNationalFaculty = [
    [{name: 'Dr. Arindam Banerjee', img: national_fac1}, {name: 'Dr. Ashok Selvaraj', img: national_fac2}, {name: 'Dr. Ayyappan V. Nair', img: national_fac3}, {name: 'Dr. Chinmay Nath', img: national_fac4}],
    [{name: 'Dr. Jujhar Singh', img: national_fac5}, {name: 'Dr. Kaustav Mukherjee', img: national_fac6}, {name: 'Dr. Mithin Aachi', img: national_fac7}, {name: 'Dr. Navaladi Shankar', img: national_fac8}],
    [{name: 'Dr. Ram Chidambaram', img: national_fac9}, {name: 'Dr. K.N. Subramanian', img: national_fac10}, {name: 'Dr. Satish R Goyal', img: national_fac11}, {name: 'Dr. Satish Mutha', img: national_fac12}],
    [{name: 'Dr. Saseendar S', img: national_fac13}, {name: 'Dr. Sumit Banerjee', img: national_fac14}, {name: 'Dr. Sarthak Patnaik', img: national_fac15}, {name: 'Dr. Samundeeswari Saseendar', img: national_fac16}],
    [{name: 'Dr. Saubhik Das', img: national_fac17}, {name: 'Dr. Senthilvelan. R', img: national_fac18}, {name: 'Dr. Sidhant Goyal', img: national_fac19}, {name: 'Dr. Vaibhav Bagaria', img: national_fac20}],
    [{name: 'Dr. Vishnu Senthil', img: national_fac21}],
  ]

  const sessions = {
    session1: [
      { day: 'Session 1', topic: 'Sports Injuries in Routine Orthopedic Practice', speaker: 'Dr. Saubhik Das' },
      { day: 'Session 1', topic: 'Complications & Failures in Sports Surgery', speaker: 'Dr. Sathish Kumar' },
    ],
    session2: [
      { day: 'Session 2', topic: 'Sports-Related Spine Injuries', speaker: 'Dr. Chinmay Nath' },
      { day: 'Session 2', topic: 'Disc, Pars & Stress Injuries', speaker: 'Dr. Kaustav Mukerjee' },
      { day: 'Session 2', topic: 'Panel Discussion – Spine Injuries', speaker: 'Dr. Chinmay Nath' },
    ],
    session3: [
      { day: 'Session 3', topic: 'Handling Shoulder Instability in various sports injuries', speaker: 'Dr. Senthilvelan' },
      { day: 'Session 3', topic: 'Rotator Cuff Tear Management in various Overhead Athletes', speaker: 'Dr. KN Subramanian' },
      { day: 'Session 3', topic: 'Elbow Instabilities in Athletes [PLENARY LECTURE]', speaker: 'Dr. Christos Koukos' },
      { day: 'Session 3', topic: 'Pectoralis Major Reconstruction in Athletes', speaker: 'Dr. Ramnadh Pulavarti' },
      { day: 'Session 3', topic: 'Shoulder injuries in Kalari and other Martial Arts', speaker: 'Dr. Ayyappan Nair' },
      { day: 'Session 3', topic: 'Panel Discussion', speaker: 'Dr. Ram Chidambaram' },
    ],
    session4: [
      { day: 'Session 4', topic: 'Groin Pain in Athletes', speaker: 'Dr. Sidhant Goyal' },
      { day: 'Session 4', topic: 'Handling FAI IN Athletes [PLENARY LECTURE]', speaker: 'Dr. Vikas Khanduja' },
      { day: 'Session 4', topic: 'Hip Preservation vs Arthroplasty in Athletes', speaker: 'Dr. Mithin Achi' },
      { day: 'Session 4', topic: 'Panel Discussion', speaker: 'Dr. Mithin Achi' },
    ],
    session5: [
      { day: 'Session 5', topic: 'ACL Surgery in Athletes [PLENARY LECTURE]', speaker: 'Dr. David Figueroa' },
      { day: 'Session 5', topic: 'Meniscus Repair vs Meniscectomy', speaker: 'Dr. Sarthak Patnaik' },
      { day: 'Session 5', topic: 'Patellofemoral Instability', speaker: 'Dr. Ashok Selvaraj' },
      { day: 'Session 5', topic: 'MLKI in athletes [PLENARY LECTURE]', speaker: 'Dr. Rajkumar Gangadharan' },
      { day: 'Session 5', topic: 'Knee injuries in Kabaddi/Kambala', speaker: 'Dr. Jujhar Singh' },
      { day: 'Session 5', topic: 'Panel Discussion', speaker: 'Dr. Saseendar' },
    ],
    session6: [
      { day: 'Session 6', topic: 'Cartilage Surgery in Athletes', speaker: 'Dr. Navaladi Shankar'},
      { day: 'Session 6', topic: 'Orthobiologics in Athletes', speaker: 'Dr. Manish Khanna' },
      { day: 'Session 6', topic: 'Panel Discussion', speaker: 'Dr. Manish Khanna' },
    ],
    session7: [
      { day: 'Session 7', topic: 'Physeal Injuries in Children Sports', speaker: 'Dr. Rameez Qudsi' },
      { day: 'Session 7', topic: 'ACL tears in the Skeletally Immature Athlete', speaker: 'Dr. Clement Joseph' },
      { day: 'Session 7', topic: 'Overuse Injuries', speaker: 'Dr. Satish Goyal' },
      { day: 'Session 7', topic: "Little Leaguer's Elbow", speaker: 'Dr. Samundeeswari' },
      { day: 'Session 7', topic: 'Panel Discussion', speaker: 'Dr. Samundeeswari'}
    ],
    session8: [
      { day: 'Session 8', topic: 'Arthroplasty and Sports [PLENARY', speaker: 'Dr. Vaibhav Bagaria'},
      { day: 'Session 8', topic: 'Sports after Shoulder Arthroplasty', speaker: 'Dr. Sivaraman' },
    ],
    session9: [
      { day: 'Session 9', topic: 'Chronic Ankle Instability', speaker: 'Dr. Parthiban' },
      { day: 'Session 9', topic: 'Achilles Tendon Rupture', speaker: 'Dr. Satish Mutha' },
      { day: 'Session 9', topic: 'Return to Sports After Foot & Ankle Surgery', speaker: 'Dr. Vishnu Senthil' },
    ]

  }

  const whyWeShouldAttend = [
    {title: 'Hands-on Surgical Workshop', text: 'Participate in hands-on surgical workshops led by expert faculty, providing practical experience in advanced surgical techniques for sports injuries.'},
    {title: 'Expert-led Lectures', text: 'Gain insights from internationally renowned experts in sports medicine, who will share their knowledge and experience on the latest advancements in the field.'},
    {title: 'Interactive Panel Discussions', text: 'Engage in interactive panel discussions that encourage critical thinking and foster collaborative learning among attendees, promoting the exchange of ideas and best practices.'},
    {title: 'Best Paper Awards', text: 'Showcase your research and clinical work in sports injury management, with the opportunity to win prestigious awards for outstanding contributions to the field.'},
    {title: 'National & International Faculty', text: 'Learn from a diverse group of national and international faculty members who are experts in various aspects of sports medicine, providing a comprehensive learning experience.'},
    {title: 'Medical Students Session', text: 'Encourage the next generation of sports medicine professionals by participating in dedicated sessions for medical students, fostering early interest and engagement in the field.'},
  ]

  const handsOnWorkshop = [
    {title: 'Resverse shoulder arthroplasty', img: handsOn1},
    {title: 'Resverse shoulder arthroplasty virtual planning', img: handsOn2},
    {title: 'High tibial osteotomy', img: handsOn3},
    {title: 'ACL reconstruction', img: handsOn4},
    {title: 'Meniscus repair', img: handsOn5},
  ]

  const specialities = [
    {title: 'Trauma', img: speciality4},
    {title: 'Arthroplasty', img: speciality1},
    {title: 'Arthroscopy', img: speciality2},
    {title: 'Spine', img: speciality3},
  ]

  const scheduleCategories = [
    { id: 'Morning Session', label: 'Morning Session', sessions: [sessions.session1, sessions.session2, sessions.session3, sessions.session4], pdf: csicBrochurePdf },
    { id: 'Afternoon Session', label: 'Afternoon Session', sessions: [sessions.session5, sessions.session6, sessions.session7, sessions.session8, sessions.session9], pdf: "" },
  ]


  const pricing = [
    {
      title: 'Consultant',
      time1: `Until 31st March 2026 ₹4,000`,
      time2: `1st April - 30th April ₹4,500`,
      time3: `1st May - 31st May ₹5,000`,
      time4: `1st June - 14th June ₹5,500`,
      perks: ['Full event entry', 'Printed resources', 'Meals and breaks'],
    },
    {
      title: 'Resident',
      time1: `Until 31st March 2026 ₹1,000`,
      time2: `1st April - 30th April ₹1,000`,
      time3: `1st May - 31st May ₹1,500`,
      time4: `1st June - 14th June ₹1,500`,
      perks: ['Full event entry', 'Printed resources', 'Meals and breaks'],
    },
  ]

  const processSteps = [
    { number: '01', title: 'Personal Details', body: 'Fill demo profile fields and contact details.' },
    { number: '02', title: 'Choose Plan', body: 'Select a pass category and optional add-ons.' },
    { number: '03', title: 'Payment Stub', body: 'Use placeholder transfer flow and fake reference ID.' },
    { number: '04', title: 'Confirmation', body: 'Upload a mock receipt and receive dummy confirmation.' },
  ]

  const contactBlocks = [
    { title: 'Organizing Chairman', name:'Dr Saseendar S', details: 'Cons. Sports Surgeon CARE Sports Injury Centre &  SRM Global Hospitals, Chennai  90432 32493' },
    { title: 'Organizing Chairman', name:'Dr Navaladi Shankar', details: 'Cons. Spine &  Arthroplasty Surgeon  Apollo Hospitals, Chennai  98400 89932' },
    { title: 'Organizing Secretary', name:'Dr Vishnu Senthil', details: 'Govt. Royapettah Hospital, Chennai 99720 17290' },
    { title: 'Organizing Secretary', name:'Dr Samundeeswari S', details: 'Cons. Arthroscopy Surgeon  CARE Sports Injury Centre &  SRM Global Hosp 73388 66392' },
  ]

  const fakeClick = () => {}
  const isLimitedAudience = selectedAudience === 'Physiotherapist' || selectedAudience === 'Coaches/Athelets'
  const hasSelectedAudience = selectedAudience !== ''
  const countdownTarget = REGISTRATION_DEADLINE - (isLimitedAudience ? LIMITED_AUDIENCE_TIMER_OFFSET : 0)

  const updateActiveSection = (nextSection) => {
    if (activeSectionRef.current !== nextSection) {
      activeSectionRef.current = nextSection
      setActiveSection(nextSection)
    }
  }

  useEffect(() => {
    const syncViewportState = () => {
      setIsScrolled(window.scrollY > 24)

      const sections = NAV_ITEMS
        .map((item) => document.getElementById(item.id))
        .filter((section) => section !== null)

      if (sections.length === 0) {
        return
      }

      if (pendingScrollTargetRef.current) {
        return
      }

      const currentScrollPosition = window.scrollY + NAV_SCROLL_OFFSET + 1
      const currentSection = sections.reduce(
        (selectedSection, section) => {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY

          if (currentScrollPosition >= sectionTop) {
            return section.id
          }

          return selectedSection
        },
        sections[0].id,
      )

      updateActiveSection(currentSection)
    }

    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsMenuOpen(false)
      }

      syncViewportState()
    }

    const handleScrollEnd = () => {
      pendingScrollTargetRef.current = null

      if (scrollEndFallbackTimerRef.current) {
        clearTimeout(scrollEndFallbackTimerRef.current)
        scrollEndFallbackTimerRef.current = null
      }

      syncViewportState()
    }

    syncViewportState()
    window.addEventListener('scroll', syncViewportState, { passive: true })
    window.addEventListener('scrollend', handleScrollEnd)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', syncViewportState)
      window.removeEventListener('scrollend', handleScrollEnd)
      window.removeEventListener('resize', handleResize)

      if (scrollEndFallbackTimerRef.current) {
        clearTimeout(scrollEndFallbackTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setCountdown(getRemainingTime(countdownTarget))

    const timer = setInterval(() => {
      setCountdown(getRemainingTime(countdownTarget))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [countdownTarget])

  const selectAudience = (nextAudience) => {
    setSelectedAudience(nextAudience)
    setIsMenuOpen(false)

    window.scrollTo({ top: 0, behavior: 'smooth' })
    updateActiveSection('overview')
  }

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (!target) {
      return
    }

    const rawTargetY = target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET
    const maxScrollY = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
    const y = Math.min(Math.max(rawTargetY, 0), maxScrollY)
    pendingScrollTargetRef.current = { id, y }

    if (scrollEndFallbackTimerRef.current) {
      clearTimeout(scrollEndFallbackTimerRef.current)
      scrollEndFallbackTimerRef.current = null
    }

    // Fallback for environments where scrollend is not emitted reliably.
    scrollEndFallbackTimerRef.current = setTimeout(() => {
      pendingScrollTargetRef.current = null
      scrollEndFallbackTimerRef.current = null
    }, 1600)

    window.scrollTo({ top: y, behavior: 'smooth' })
    updateActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <div className={`page-shell ${hasSelectedAudience ? '' : 'is-selection-pending'}`}>
      {!hasSelectedAudience && (
        <div className="audience-gate" role="dialog" aria-modal="true" aria-label="Audience selection dialog">
          <p>Select Your Preference</p>
          <div className="audience-gate-actions">
            {AUDIENCE_OPTIONS.map((option) => (
              <button key={option.id} type="button" onClick={() => selectAudience(option.id)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={`header-stack ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="announcement-bar">
          <header className={`primary-header ${isScrolled ? 'is-scrolled' : ''}`}>
            <button type="button" className="brand-lockup" onClick={() => scrollToSection('overview')}>
              <span className="brand-box" aria-hidden="true">
              <img src={runnerIcon} alt="WOC logo" id="hero-woc" />
              </span>
              <span className="brand-name">CSIC 2026 <br></br>CHENNAI SPORTS INJURY CONCLAVE</span>
              <span className="brand-name"></span>
            </button>

            {!isLimitedAudience && (
              <nav className="primary-nav" aria-label="Primary desktop sections">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={`desktop-${item.id}`}
                    type="button"
                    className={activeSection === item.id ? 'is-active' : ''}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}

            <div className="topbar-actions">
              <button type="button" className="mini-btn" onClick={() => window.location.href = REGISTRATION_LINK}>
                Register
              </button>
              {!isLimitedAudience && (
                <button
                  type="button"
                  className={`mini-btn menu-btn ${isMenuOpen ? 'is-open' : ''}`}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-sections"
                  aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <span className="menu-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              )}
            </div>
          </header>
        </div>

        {!isLimitedAudience && (
          <nav
            id="mobile-sections"
            className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Primary mobile sections"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={`mobile-${item.id}`}
                type="button"
                className={activeSection === item.id ? 'is-active' : ''}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      <div className="role-selector" role="group" aria-label="Select your role">
        {AUDIENCE_OPTIONS.map((option) => (
          <button
            key={`role-card-${option.id}`}
            type="button"
            className={`role-card${selectedAudience === option.id ? ' is-active' : ''}`}
            onClick={() => selectAudience(option.id)}
            aria-pressed={selectedAudience === option.id}
          >
            <span className="role-card-label">{option.label}</span>
          </button>
        ))}
      </div>

      <main>
        <section id="overview" className="hero panel">
          <div className="hero-landing" style={{ backgroundImage: `url(${heroLanding})` }}>
            <div className="hero-overlay">
              <div className="hero-brand-row">
                <img src={woc2Logo} alt="WOC 2 logo" className="hero-woc-logo" />
                <img src={runnerIcon} alt="Runner icon" className="hero-runner-icon" />
                <img src={wocLogo} alt="WOC logo" className="hero-woc-logo" />
              </div>

              <div className="hero-copy">
                <h1>
                  <span>WOC INDIA 2026</span>
                  <span>2nd Annual Congress</span>
                  <span>CHENNAI SPORTS INJURY CONCLAVE</span>
                </h1>

                <p className="hero-description">
                  A focused two-day gathering of experts, live discussions, and advanced learning tracks.
                </p>

                <div className="hero-actions">
                  <button type="button" className="primary-btn" onClick={() => window.location.href = REGISTRATION_LINK}>
                    Register Now
                  </button>
                  {isLimitedAudience ? (
                    <button type="button" className="ghost-btn is-disabled" onClick={fakeClick} aria-disabled="true">
                      Download Brochure
                    </button>
                  ) : (
                    <a className="ghost-btn" href={csicBrochurePdf} download>
                      Download Brochure
                    </a>
                  )}
                </div>
                <div className="hero-timer">
                  <p>{countdown.isExpired ? 'Registration closed' : 'Registration closes in:'}</p>
                  <p>
                    {formatTimerUnit(countdown.days)} : {formatTimerUnit(countdown.hours)} : {formatTimerUnit(countdown.minutes)} : {formatTimerUnit(countdown.seconds)}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {isLimitedAudience ? (
          <section className="panel coming-soon">
            <h2>Comming soon</h2>
            {/* <p>Comming soon</p> */}
          </section>
        ) : (
          <>
        <section id="authorizedby" className="panel authorizedby">
          <h2 className="authorizedby-title">Authorized By</h2>
          <div className="authorizedby-logos">
            <img src={societyLogo} alt="Society logo" />
            <img src={toaLogo} alt="TOA logo" />
            <img src={moaLogo} alt="MOA logo" />
            <img src={tnasLogo} alt="TNAS logo" />
          </div>
        </section>

        <section id="about" className="panel about">
          <h2>WELCOME MESSAGE BY ORGANIZERS</h2>
          <p>
            This conclave brings together leading experts, experienced surgeons, and passionate clinicians in the field of sports medicine to share contemporary advances in the management of sports injuries. With a strong emphasis on evidence-based practice, innovation, and multidisciplinary care, the scientific program has been thoughtfully curated to deliver practical insights that can be directly translated into everyday clinical practice.
            Through a combination of expert-led lectures, interactive discussions, and case-based learning, we aim to provide a comprehensive academic experience that enhances both knowledge and clinical decision-making. The program is designed not only to update you on the latest developments but also to encourage critical thinking and collaborative learning.
            We hope this platform fosters meaningful academic exchange, inspires new ideas, and strengthens professional connections among peers.
            We are confident that the conclave will be both intellectually stimulating and professionally rewarding, and we look forward to your active participation and valuable contributions.
          </p>
          <div className="feature-grid">
            {featureCards.map((card) => (
              <article key={card.name} className="feature-card">
                <img src={card.img} alt={card.title} />
                <h3>{card.name}</h3>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel about">
          <h2>WELCOME MESSAGE BY WOC BOARD MEMBERS</h2>
          <p>
            We are delighted to welcome you to the 2nd WOC Annual Congress in Chennai, themed Chennai Sports Injury Conclave.
            <br></br>
            On behalf of World Orthopaedic Concern (WOC) India, it is our privilege to host this gathering of orthopaedic professionals. We remain committed to advancing education, promoting global standards of care, and fostering collaboration across healthcare communities.
            <br></br>
            This conclave highlights our shared vision of improving musculoskeletal health through knowledge exchange, innovation, and capacity building. As sports injury management continues to evolve, such platforms are essential for sharing current evidence, refining surgical techniques, and encouraging multidisciplinary care.
            <br></br>
            We commend the organizing team for designing a comprehensive scientific program that blends core principles with modern advancements.
            <br></br>
            We are confident this event will offer valuable opportunities for learning, networking, and collaboration. We wish the conclave great success and hope you have a rewarding experience.
          </p>
          <div className="feature-grid">
            {featureCards2.map((card) => (
              <article key={card.name} className="feature-card">
                <img src={card.img} alt={card.title} />
                <h3>{card.name}</h3>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="speakers" className="panel speakers">
          <h2>Learn From Experienced Renowned International Faculty</h2>
          {renownedInternationalFaculty.map((row, rowIndex) => (
            <div className="speaker-row" key={`row-${rowIndex}`}>
              {row.map((speaker) => (
                <article className="speaker-card facultyImage" key={speaker.name}>
                  <img src={speaker.img} alt={speaker.name} />
                  <h3>{speaker.name}</h3>
                </article>
              ))}
            </div>
          ))}
        </section>

        <section className="panel speakers">
          <h2>Learn From Experienced Expert National Faculty</h2>
          {expertNationalFaculty.map((row, rowIndex) => (
            <div className="speaker-row" key={`row-${rowIndex}`}>
              {row.map((speaker) => (
                <article className="speaker-card facultyImage" key={speaker.name}>
                  <img src={speaker.img} alt={speaker.name} />
                  <h3>{speaker.name}</h3>
                </article>
              ))}
            </div>
          ))}
        </section>

        <section id="why_we_should_attend" className="panel contact">
          <h2>Why we should attend</h2>
          <div className="contact-grid">
            {whyWeShouldAttend.map((block) => (
              <article key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hands_on_workshop" className="panel contact">
          <h2>Hands On Workshop</h2>
          <div className="contact-grid hands-on-grid">
            {handsOnWorkshop.map((block) => (
              <article key={block.title}>
                <img src={block.img} alt={block.title} />
                <h3>{block.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="panel schedule">
          <h2>SCIENTIFIC PROGRAM</h2>
          <p>A focused academic agenda featuring expert talks, case-based discussions, and panel sessions on sports injury diagnosis, treatment, and rehabilitation, designed to deliver practical insights for everyday orthopedic practice.</p>
          <div className="schedule-categories">
            {scheduleCategories.map((category) => {
              const isOpen = expandedScheduleCategory === category.id

              return (
                <article key={category.id} className={`schedule-category ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="schedule-category-btn"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setExpandedScheduleCategory((current) =>
                        current === category.id ? '' : category.id,
                      )
                    }
                  >
                    <span>{category.label}</span>
                    <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
                  </button>

                  {isOpen && (
                    <div className="schedule-intro">
                      {category.sessions.map((session, index) => (
                        <div className="timeline" key={`${category.id}-session-${index}`}>
                          {session.map((item) => (
                            <article key={`${category.id}-${item.topic}`} className="timeline-card">
                              <p className="timeline-day">{item.day}</p>
                              <h3>{item.topic}</h3>
                              <p>{item.speaker}</p>
                            </article>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="specialities" className="panel contact">
          <h2>Specialities</h2>
          <div className="contact-grid specialities-grid">
            {specialities.map((block) => (
              <article key={block.title}>
                <img src={block.img} alt={block.title} />
                <h2>{block.title}</h2>
              </article>
            ))}
          </div>
        </section>

        <section id="passes" className="panel pricing">
          <h2>Orthopedician Category & date</h2>
          <p>The Non-Residential Tariff applies to electricity consumers using power for commercial, industrial, or public service purposes.  This includes businesses, shops, offices, industries, educational institutions, hospitals, and other non-household establishments. Rates under this tariff are typically higher than domestic tariffs and may vary based on factors like connected load, consumption patterns, and time-of-use. The tariff structure often includes energy charges, fixed charges, and sometimes demand charges to reflect the higher infrastructure and operational costs associated with non-residential supply</p>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.title} className="price-card">
                <h3>{plan.title}</h3>
                <p>{plan.time1}</p>
                <p>{plan.time2}</p>
                <p>{plan.time3}</p>
                <p>{plan.time4}</p>
                <ul>
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="venues" className="panel venues">
          <h2>Event Location</h2>
          <div className="venue-grid">
            <article>
              <img src={venue} alt={"venue"} />
              <h3>Primary Venue</h3>
              <p>Hyatt Regency | Chennai | India</p>
            </article>
          </div>
        </section>

        <section id="contact" className="panel contact">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            {contactBlocks.map((block) => (
              <article key={block.name}>

                <h3>{block.title}</h3>
                <h4>{block.name}</h4>
                <p>{block.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sponsorsBy" className="panel sponsorsBy">
          <h2 className="sponsorsBy-title">SPONSORS & PARTNERS</h2>
          <div className="sponsorsBy-logos">
            <img src={sponsor1} alt="TOA logo" />
            <img src={sponsor2} alt="TNAS logo" />
            <img src={sponsor3} alt="Society logo" />
            <img src={sponsor4} alt="MOA logo" />
            <img src={sponsor6} alt="MOA logo" />
            <img src={sponsor8} alt="MOA logo" />
            <img src={sponsor9} alt="MOA logo" />
          </div>
        </section>
          </>
        )}
      </main>

      <footer style={{fontFamily: "math"}} className="footer panel">
        <p>&copy; 2026 World Orthopaedic Concern (WOC) India. All rights reserved.</p>
        <p >Designed and developed by Nirmalkumar.R</p>
      </footer>
    </div>
  )
}

export default App
