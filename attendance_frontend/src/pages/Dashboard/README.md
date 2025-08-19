# Dashboard Page

This folder contains the React implementation of the provided Dashboard HTML/CSS.

- Dashboard.js: React functional component rendering the dashboard.
- Dashboard.module.css: Scoped styles converted from dashboard-page-1-805.css into CSS Modules (no global leak).
- common.module.css: Design tokens and small utility styles converted from common.css to be reused across dashboard components.

Interaction:
- The Schedule tabs are interactive via local state in Dashboard.js.
- The time range "Select" is a placeholder and shows an alert; connect to real options later.

Accessibility:
- Buttons and tabs use role, aria-selected and labels consistent with the static assets.

Integration:
- App.js imports and renders the <Dashboard /> as the main view.

Public API:
- Dashboard (default export) is intended to be used as a page-level component.

Notes:
- If you later split Dashboard into smaller components (Breadcrumbs, KPIGrid, AttendanceOverview, ProjectOverview, ScheduleList),
  preserve CSS Module imports and pass state via props to keep modularity.
