import { useState } from 'react'
import {
  ArrowUpRight,
  Battery,
  Bell,
  Bot,
  Car,
  Check,
  ChevronDown,
  CircleHelp,
  Cpu,
  Gauge,
  Menu,
  MoreHorizontal,
  Navigation,
  Radio,
  ShieldCheck,
  Thermometer,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const signals = [
  { label: 'Engine temperature', value: '94', unit: '°C', icon: Thermometer, tone: 'orange', note: 'Stable' },
  { label: 'Battery voltage', value: '12.6', unit: 'V', icon: Battery, tone: 'green', note: 'Healthy' },
  { label: 'Engine speed', value: '2,400', unit: 'RPM', icon: Gauge, tone: 'blue', note: 'Cruising' },
  { label: 'Vehicle speed', value: '64', unit: 'km/h', icon: Navigation, tone: 'green', note: 'In motion' },
]

const fleet = [
  { id: 'GQ-019', model: '2022 Atlas Sport', health: '94%', risk: 'Low', tone: 'green' },
  { id: 'GQ-028', model: '2021 Civic Touring', health: '82%', risk: 'Medium', tone: 'orange' },
  { id: 'GQ-036', model: '2020 Transit Cargo', health: '61%', risk: 'High', tone: 'red' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Overview')
  const [showAllFleet, setShowAllFleet] = useState(false)

  const navigate = (section) => {
    setActiveSection(section)
    setMenuOpen(false)
    document.getElementById(section.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#overview" onClick={() => navigate('Overview')}>
          <span className="brand-mark"><Zap size={16} strokeWidth={2.6} /></span>
          <span>garage<span>iq</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['Overview', 'How it works', 'Fleet'].map((item) => (
            <button key={item} className={activeSection === item ? 'nav-link active' : 'nav-link'} onClick={() => navigate(item)}>{item}</button>
          ))}
          <button className="nav-link" onClick={() => navigate('Technology')}>Technology</button>
          <button className="demo-button mobile-demo" onClick={() => navigate('Overview')}>Open demo <ArrowUpRight size={15} /></button>
        </nav>
        <button className="demo-button desktop-demo" onClick={() => navigate('Overview')}>Open demo <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse-dot" /> Predictive maintenance platform</div>
            <h1>Your vehicle tells a story. <em>Read it early.</em></h1>
            <p className="hero-lede">GarageIQ turns live sensor data into clear, actionable maintenance decisions, before a warning light becomes a breakdown.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}>Explore the live demo <ArrowUpRight size={17} /></button>
              <button className="text-button" onClick={() => navigate('How it works')}>See how it works <span>↓</span></button>
            </div>
            <div className="trust-line"><ShieldCheck size={16} /> Using simulated OBD-II data <span>·</span> Random Forest model</div>
          </div>
          <div className="hero-visual reveal delay-one">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="car-silhouette"><Car size={142} strokeWidth={1} /></div>
            <div className="data-chip chip-one"><span className="chip-dot green" /> Live signal <strong>connected</strong></div>
            <div className="data-chip chip-two"><span className="chip-dot orange" /> Risk trend <strong>−12.4%</strong></div>
            <div className="data-chip chip-three"><Radio size={14} /> 64 <small>km/h</small></div>
            <div className="visual-caption"><span>01</span><span>Vehicle signal map</span><span className="caption-line" /></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Key product metrics">
          <div><span className="metric-number">12</span><span className="metric-label">vehicles monitored</span></div>
          <div><span className="metric-number">94<span className="metric-unit">%</span></span><span className="metric-label">fleet health average</span></div>
          <div><span className="metric-number">−31<span className="metric-unit">%</span></span><span className="metric-label">unexpected repairs</span></div>
          <div className="strip-status"><span className="pulse-dot green-fill" /> Model status: <strong>online</strong></div>
        </section>

        <section className="dashboard-section section-block" id="dashboard">
          <div className="section-heading">
            <div><div className="section-kicker">Live environment <span /></div><h2>A clearer view of vehicle health.</h2></div>
            <p>The signals that matter, made legible. This is the GarageIQ command center.</p>
          </div>
          <div className="dashboard-grid">
            <div className="panel health-panel">
              <div className="panel-top"><span className="panel-label">Vehicle health</span><button className="icon-button" aria-label="More options"><MoreHorizontal size={19} /></button></div>
              <div className="health-content">
                <div className="health-score"><strong>92</strong><span>%</span></div>
                <div className="health-ring"><div><span>GOOD</span><small>overall state</small></div></div>
              </div>
              <div className="health-footer"><span><i className="status-dot green-fill" /> Running normally</span><span>Updated 2 min ago</span></div>
            </div>
            <div className="panel recommendation-panel">
              <div className="panel-top"><span className="panel-label"><span className="warning-icon">!</span> AI recommendation</span><span className="priority">HIGH PRIORITY</span></div>
              <h3>Brake system requires attention</h3>
              <p>Brake wear risk has climbed above the safe threshold. Schedule an inspection within 7 days.</p>
              <div className="recommendation-bottom"><div className="risk-meter"><span>Predicted risk</span><strong>78%</strong><div><i /></div></div><button className="round-arrow" aria-label="View recommendation"><ArrowUpRight size={17} /></button></div>
            </div>
            <div className="signals-panel">
              <div className="panel-top"><span className="panel-label">Live signals</span><span className="live-label"><span className="pulse-dot green-fill" /> LIVE</span></div>
              <div className="signals-grid">{signals.map(({ label, value, unit, icon: Icon, tone, note }) => <div className="signal-card" key={label}><div className={`signal-icon ${tone}`}><Icon size={16} /></div><span>{label}</span><strong>{value}<small>{unit}</small></strong><em className={tone}>{note}</em></div>)}</div>
            </div>
            <div className="panel chart-panel">
              <div className="panel-top"><div><span className="panel-label">Failure risk trend</span><span className="chart-period">Last 7 days</span></div><span className="trend-down">↓ 12.4%</span></div>
              <div className="chart-wrap"><div className="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart"><div className="grid-lines" /><svg viewBox="0 0 620 170" preserveAspectRatio="none" aria-label="Failure risk chart"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e7a969" stopOpacity=".25" /><stop offset="1" stopColor="#e7a969" stopOpacity="0" /></linearGradient></defs><path d="M0 132 C48 126 67 120 100 124 S150 99 182 108 S222 91 260 95 S304 62 345 77 S386 65 418 74 S464 42 500 54 S550 35 620 22 V170 H0Z" fill="url(#chartFill)" /><path d="M0 132 C48 126 67 120 100 124 S150 99 182 108 S222 91 260 95 S304 62 345 77 S386 65 418 74 S464 42 500 54 S550 35 620 22" fill="none" stroke="#e7a969" strokeWidth="3" /></svg><div className="chart-x"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></div>
            </div>
          </div>
        </section>

        <section className="process-section section-block" id="how-it-works">
          <div className="process-intro"><div className="section-kicker">The intelligence layer <span /></div><h2>From raw signals<br />to the right action.</h2><p>One connected loop for every vehicle in your garage. No specialist required.</p><button className="text-button" onClick={() => navigate('Technology')}>Explore the model <ArrowUpRight size={16} /></button></div>
          <div className="process-steps">{[
            ['01', 'Collect', 'OBD-II & sensor data', Car], ['02', 'Process', 'Normalize every signal', Cpu], ['03', 'Predict', 'Random Forest analysis', Bot], ['04', 'Act', 'A clear next step', Wrench],
          ].map(([number, title, subtitle, Icon], index) => <div className="process-step" key={number}><span className="step-number">{number}</span><div className="step-icon"><Icon size={20} /></div><h3>{title}</h3><p>{subtitle}</p>{index < 3 && <span className="step-connector">→</span>}</div>)}</div>
        </section>

        <section className="fleet-section section-block" id="fleet">
          <div className="section-heading"><div><div className="section-kicker">Fleet overview <span /></div><h2>One signal for every vehicle.</h2></div><button className="filter-button"><span>All vehicles</span><ChevronDown size={15} /></button></div>
          <div className="fleet-table"><div className="fleet-head"><span>Vehicle</span><span>Health</span><span>Risk level</span><span>Status</span><span /></div>{(showAllFleet ? [...fleet, { id: 'GQ-041', model: '2023 Sprinter Van', health: '97%', risk: 'Low', tone: 'green' }] : fleet).map((vehicle) => <div className="fleet-row" key={vehicle.id}><div className="vehicle-cell"><span className="vehicle-avatar"><Car size={16} /></span><div><strong>{vehicle.id}</strong><small>{vehicle.model}</small></div></div><strong className="health-value">{vehicle.health}</strong><span className={`risk-tag ${vehicle.tone}`}>{vehicle.risk} risk</span><span className="status-cell"><i className={`status-dot ${vehicle.tone === 'green' ? 'green-fill' : vehicle.tone === 'orange' ? 'orange-fill' : 'red-fill'}`} />{vehicle.tone === 'green' ? 'Healthy' : vehicle.tone === 'orange' ? 'Attention' : 'Critical'}</span><button className="row-arrow" aria-label={`Open ${vehicle.id}`}><ArrowUpRight size={16} /></button></div>)}</div>
          <button className="load-button" onClick={() => setShowAllFleet(!showAllFleet)}>{showAllFleet ? 'Show less' : 'View all vehicles'} <ArrowUpRight size={15} /></button>
        </section>

        <section className="final-cta section-block" id="technology"><div className="cta-grid"><div><div className="section-kicker">Built for the road ahead <span /></div><h2>Know before<br /><em>it breaks.</em></h2></div><div><p>GarageIQ gives your team the confidence to move from reactive repairs to predictive care.</p><button className="primary-button" onClick={() => navigate('Overview')}>Open the live demo <ArrowUpRight size={17} /></button></div></div><div className="footer-meta"><span>garageiq / 2026</span><span>Current scope: simulated sensor data + ML demo</span><span>System ready <span className="pulse-dot green-fill" /></span></div></section>
      </main>
    </div>
  )
}

export default App
