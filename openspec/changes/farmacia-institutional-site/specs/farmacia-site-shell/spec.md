## ADDED Requirements

### Requirement: SPA routes and layout

The application SHALL expose client-side routes for home, about, product listing, product detail, promotions, contact, FAQ, and a catch-all not-found page.

#### Scenario: User navigates between main sections

- **WHEN** the user clicks a primary navigation link in the header or footer
- **THEN** the browser URL updates without full page reload and the corresponding page content is shown within a shared layout that includes header and footer

### Requirement: Document language and primary meta

The HTML document SHALL use `lang="pt-BR"` and include a concise meta description suitable for the institutional pharmacy brand.

#### Scenario: Initial page load metadata

- **WHEN** the site root document is loaded
- **THEN** the title and meta description reflect the pharmacy brand and purpose
