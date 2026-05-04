## ADDED Requirements

### Requirement: Typed mock catalog

The system SHALL maintain mock data modules for categories, products, promotions, and FAQ entries, plus TypeScript types describing those entities.

#### Scenario: Product listing uses mock catalog

- **WHEN** the products page loads without an API base URL configured
- **THEN** products and filters SHALL be satisfied from local mock data via an async service layer

### Requirement: Service layer prepared for HTTP

Catalog-related services SHALL accept an optional API base URL from environment configuration; when unset, they SHALL return mock data with simulated latency.

#### Scenario: Future API toggle

- **WHEN** `VITE_API_URL` is set at build time
- **THEN** catalog services SHALL attempt HTTP requests instead of returning only local mocks (contract aligned with future backend)

### Requirement: Product detail resolution

The system SHALL resolve a product by identifier on the detail route and show a not-found state when the identifier does not exist in mock data.

#### Scenario: Unknown product id

- **WHEN** the user visits a product detail URL with an unknown id
- **THEN** the UI SHALL indicate that the product was not found and offer navigation back to the listing
