import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import common from './common.module.css';

/**
 * PUBLIC_INTERFACE
 * Dashboard
 * This component renders the Attendance Management dashboard UI converted from provided HTML/CSS.
 * It includes interactive tab selection for the Schedule section.
 */
function Dashboard() {
  const [activeTab, setActiveTab] = useState('Meetings');

  // PUBLIC_INTERFACE
  const handleTabClick = (tab) => {
    /** Handles schedule tab selection state. */
    setActiveTab(tab);
  };

  return (
    <div className={styles['dashboard-page'] + ' ' + common['container']}>
      {/* Background dark hero */}
      <div className={styles['dashboard-hero']}>
        <div className={styles['top-area']}>
          {/* Breadcrumbs row */}
          <div className={styles['breadcrumbs']}>
            <div className={`${styles['breadcrumb']} ${styles['dashboard']}`} role="button" aria-label="Dashboard breadcrumb">
              <div className={styles['icon']} aria-hidden="true"></div>
              <div className={common['text-76']}>Dashboard</div>
            </div>
            <div className={`${styles['breadcrumb']} ${styles['employees']}`} role="button" aria-label="Employees breadcrumb">
              <div className={styles['icon']} aria-hidden="true"></div>
              <div className={`${common['text-76']} ${common['text-77']}`}>Employees</div>
            </div>
            <div className={`${styles['breadcrumb']} ${styles['payroll']}`} role="button" aria-label="Payroll breadcrumb">
              <div className={styles['icon']} aria-hidden="true"></div>
              <div className={`${common['text-76']} ${common['text-78']}`}>Payroll</div>
            </div>

            {/* Right controls */}
            <div className={styles['top-controls']}>
              <div className={styles['control-square']} title="Add" aria-label="Add"></div>
              <div className={styles['control-square']} title="Settings" aria-label="Settings"></div>
              <div className={styles['control-square']} title="Search" aria-label="Search"></div>
              <div className={styles['profile-pill']} aria-label="User profile">
                <div style={{ width: 40, height: 40, borderRadius: 20, background: '#d9d9d9' }}></div>
                <div style={{
                  fontWeight: 'var(--typo-79-weight)',
                  fontSize: 'var(--typo-79-size)',
                  lineHeight: 'var(--typo-79-lh)',
                  fontFamily: 'var(--typo-79-family)',
                  color: 'var(--typo-79-color)'
                }}>
                  Subashree
                </div>
              </div>
            </div>
          </div>

          {/* Greeting row */}
          <div className={styles['greeting-row']}>
            <div className={styles['greet-left']}>
              <div className={styles['hello']}>Hello Nithya,</div>
              <div className={styles['good']}>Good Morning</div>
            </div>
            <div className={styles['greet-date']}>06 January 2025</div>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className={styles['kpi-row']}>
        {/* Total Employees */}
        <div className={styles['kpi-tile']}>
          <div className={`${styles['kpi-card']} ${common['card']}`}>
            <div className={`${styles['kpi-icon-circle']} ${styles['e1d4fa']}`}></div>
            <div className={styles['kpi-picto']} aria-hidden="true"></div>
            <div className={styles['kpi-texts']}>
              <div className={styles['kpi-title']}>Total Employees</div>
              <div className={styles['kpi-value']}>50</div>
            </div>
          </div>
        </div>

        {/* Present */}
        <div className={styles['kpi-tile']}>
          <div className={`${styles['kpi-card']} ${common['card']}`}>
            <div className={`${styles['kpi-icon-circle']} ${styles['badcff']}`}></div>
            <div className={styles['kpi-picto']} aria-hidden="true"></div>
            <div className={styles['kpi-texts']}>
              <div className={styles['kpi-title']} style={{ textAlign: 'center', font: 'var(--typo-97-weight) var(--typo-97-size)/31px var(--typo-97-family)' }}>Present</div>
              <div className={styles['kpi-value']} style={{ textAlign: 'center' }}>43/50</div>
            </div>
          </div>
        </div>

        {/* Absent */}
        <div className={styles['kpi-tile']}>
          <div className={`${styles['kpi-card']} ${common['card']}`}>
            <div className={`${styles['kpi-icon-circle']} ${styles['ffb3b3']}`}></div>
            <div className={styles['kpi-picto']} aria-hidden="true"></div>
            <div className={styles['kpi-texts']}>
              <div className={styles['kpi-title']}>Absent</div>
              <div className={styles['kpi-value']}>7/50</div>
            </div>
          </div>
        </div>

        {/* Overtime */}
        <div className={styles['kpi-tile']}>
          <div className={`${styles['kpi-card']} ${common['card']}`}>
            <div className={`${styles['kpi-icon-circle']} ${styles['ffdab9']}`}></div>
            <div className={styles['kpi-picto']} aria-hidden="true"></div>
            <div className={styles['kpi-texts']}>
              <div className={styles['kpi-title']} style={{ textAlign: 'center' }}>Overtime</div>
              <div className={styles['kpi-value']}>+3hours</div>
            </div>
          </div>
        </div>

        {/* Donut Employees */}
        <div className={styles['kpi-tile']}>
          <div className={`${styles['kpi-card']} ${common['card']}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className={styles['kpi-donut-outer']}></div>
            <div className={styles['kpi-donut-inner']}></div>
            <div className={styles['kpi-donut-center']}>50</div>
            <div style={{
              position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center',
              font: 'var(--typo-100-weight) var(--typo-100-size)/18px var(--typo-100-family)'
            }}>
              Employees
            </div>
            {/* Legend right (Remote/In Office) */}
            <div style={{ position: 'absolute', right: 16, top: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-c9b7eb)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ font: 'var(--typo-101-weight) var(--typo-101-size)/19px var(--typo-101-family)' }}>32%</div>
                  <div style={{ font: 'var(--typo-102-weight) var(--typo-102-size)/16px var(--typo-102-family)' }}>Remote</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-5f5f5f)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ font: 'var(--typo-101-weight) var(--typo-101-size)/19px var(--typo-101-family)' }}>68%</div>
                  <div style={{ font: 'var(--typo-102-weight) var(--typo-102-size)/16px var(--typo-102-family)' }}>In Office</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overviews */}
      <div className={styles['overview-wrapper']}>
        <div className={styles['overview-grid']}>
          {/* Attendance Overview */}
          <div className={`${styles['att-card']} ${common['card']}`}>
            <div className={styles['att-head']}>
              <div className={styles['att-title']}>Attendance Overview</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className={styles['att-legend']}>
                  <div className={styles['legend-item']}>
                    <span className={`${styles['legend-dot']} ${styles['on-time']}`}></span>
                    <span className={styles['legend-text']}>On Time</span>
                  </div>
                  <div className={styles['legend-item']}>
                    <span className={`${styles['legend-dot']} ${styles['late']}`}></span>
                    <span className={styles['legend-text']}>Late Arrival</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles['att-select']}
                  title="Select time range"
                  onClick={() => window.alert('Time range selector clicked (placeholder).')}
                >
                  <span style={{ font: 'var(--typo-83-weight) var(--typo-83-size)/12px var(--typo-83-family)' }}>Select</span>
                  <span aria-hidden="true">▾</span>
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className={styles['chart-area']}>
              <div className={styles['chart-y']}>
                <div className={styles['tick']}>200</div>
                <div className={styles['tick']}>150</div>
                <div className={styles['tick']}>100</div>
                <div className={styles['tick']}>50</div>
                <div className={styles['tick']}>0</div>
              </div>
              <div>
                <div className={styles['chart-bars']}>
                  {/* 12 months bars */}
                  {[
                    [46, 148], [25, 169], [46, 148], [48, 146], [15, 179], [20, 174],
                    [61, 133], [70, 124], [60, 134], [68, 126], [95, 99], [109, 84]
                  ].map(([top, bottom], idx) => (
                    <div className={styles['bar']} key={idx}>
                      <div className={`${styles['bar-top']} ${styles['yellow']}`} style={{ height: `${top}px` }}></div>
                      <div className={`${styles['bar-bottom']} ${styles['violet']}`} style={{ height: `${bottom}px` }}></div>
                    </div>
                  ))}
                </div>
                <div className={styles['chart-x']}>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                    <div className={styles['label']} key={m}>{m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className={`${styles['proj-card']} ${common['card']}`}>
            <div className={styles['proj-title']}>Project Overview</div>

            <div className={styles['proj-total']}>
              <div className={styles['label']}>Total Projects</div>
              <div style={{ position: 'relative', width: 145, height: 65 }}>
                <div className={styles['circle']}></div>
                <div className={styles['proj-rating']}>
                  <span className={styles['icon-circle']}><span className={styles['check']}></span></span> 8.5%
                </div>
                <div className={styles['proj-total-number']}>97</div>
              </div>
            </div>

            <div className={styles['prog-row']}>
              <div className={styles['prog-col']}>
                <div className={styles['title']}>62.88%</div>
                <div className={`${styles['prog-bar']} ${styles['blue']}`}></div>
              </div>
              <div className={styles['prog-col']}>
                <div className={styles['title']}>27.74%</div>
                <div className={`${styles['prog-bar']} ${styles['midblue']}`}></div>
              </div>
              <div className={styles['prog-col']}>
                <div className={styles['title']}>12.37%</div>
                <div className={`${styles['prog-bar']} ${styles['lightblue']}`}></div>
              </div>
            </div>

            <div className={styles['proj-kpis']}>
              <div className={`${styles['proj-badge']} ${styles['badge-blue']}`}></div>
              <div className={styles['proj-kpi-text']}>
                <div className={styles['proj-kpi-left']}>61 Projects</div>
                <div className={styles['proj-kpi-right']}>In Progress</div>
              </div>

              <div className={`${styles['proj-badge']} ${styles['badge-midblue']}`}></div>
              <div className={styles['proj-kpi-text']}>
                <div className={styles['proj-kpi-left']}>24 Projects</div>
                <div className={styles['proj-kpi-right']}>In Reviews</div>
              </div>

              <div className={`${styles['proj-badge']} ${styles['badge-lightblue']}`}></div>
              <div className={styles['proj-kpi-text']}>
                <div className={styles['proj-kpi-left']}>12 Projects</div>
                <div className={styles['proj-kpi-right']}>Finish</div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className={`${styles['schedule-card']} ${common['card']}`}>
          <div className={styles['schedule-title']}>Schedule</div>
          <div className={`${styles['schedule-tabs']} ${common['tabs']}`} role="tablist" aria-label="Schedule tabs">
            {['Meetings', 'Tasks', 'Events'].map(tab => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`${common['tab-pill']} ${activeTab === tab ? styles['active'] : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Task 1 */}
          <div className={styles['task-card']}>
            <div className={styles['accent']}></div>
            <div className={styles['task-top']}>
              <div>
                <div className={styles['task-title']}>Interview Candidate - UI/UX Designer</div>
                <div className={styles['task-meta']}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-c9b7eb)' }}></span>
                    Google Meet
                  </span>
                  <span>|</span>
                  <span>01:30PM - 03:00PM</span>
                </div>
              </div>
              <div className={styles['task-avatar']}>KS</div>
            </div>
            <div className={styles['task-footer']}>
              <a className={common['link']} href="#0">Go to link</a>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          {/* Task 2 */}
          <div className={`${styles['task-card']} ${styles['variant-2']}`}>
            <div className={styles['accent']}></div>
            <div className={styles['task-top']}>
              <div>
                <div className={styles['task-title']}>Fun Friday</div>
                <div className={styles['task-meta']}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-c9b7eb)' }}></span>
                    Google Meet
                  </span>
                  <span>|</span>
                  <span>3:30PM - 5:30PM</span>
                </div>
              </div>
              <div className={styles['task-avatar']}>KS</div>
            </div>
            <div className={styles['task-footer']}>
              <a className={common['link']} href="#0">Go to link</a>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          {/* Task 3 */}
          <div className={`${styles['task-card']} ${styles['variant-3']}`}>
            <div className={styles['accent']}></div>
            <div className={styles['task-top']}>
              <div>
                <div className={styles['task-title']}>Interview Candidate - Full Stack Developer</div>
                <div className={styles['task-meta']}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-c9b7eb)' }}></span>
                    Google Meet
                  </span>
                  <span>|</span>
                  <span>10:00AM - 11:30PM</span>
                </div>
              </div>
              <div className={styles['task-avatar']}>KS</div>
            </div>
            <div className={styles['task-footer']}>
              <a className={common['link']} href="#0">Go to link</a>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          {/* Task 4 */}
          <div className={`${styles['task-card']} ${styles['variant-4']}`}>
            <div className={styles['accent']}></div>
            <div className={styles['task-top']}>
              <div>
                <div className={styles['task-title']}>HR Meeting</div>
                <div className={styles['task-meta']}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-c9b7eb)' }}></span>
                    Google Meet
                  </span>
                  <span>|</span>
                  <span>11:45AM - 1:00PM</span>
                </div>
              </div>
              <div className={styles['task-avatar']}>KS</div>
            </div>
            <div className={styles['task-footer']}>
              <a className={common['link']} href="#0">Go to link</a>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
