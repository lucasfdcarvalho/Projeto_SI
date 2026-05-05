## ADDED Requirements

### Requirement: Contact page content

The contact page SHALL display address, phone, email, opening hours, an embedded map when a map URL is configured in site mock data, and a contact form.

#### Scenario: View institutional contact details

- **WHEN** the user opens the contact route
- **THEN** institutional contact fields from mock site data are visible

### Requirement: Mock form submission

The contact form SHALL validate required fields client-side and, on success, show user feedback without persisting to a backend when no API is configured.

#### Scenario: Successful simulated submit

- **WHEN** the user submits valid form data and no contact API is configured
- **THEN** the UI SHALL confirm success using non-destructive feedback (e.g. toast) and SHALL NOT claim server persistence
