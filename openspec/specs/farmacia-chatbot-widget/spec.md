## Requirements

### Requirement: Floating chat entry point

The application SHALL render a floating action button fixed on the viewport that toggles an assistant panel.

#### Scenario: Open and close assistant

- **WHEN** the user activates the floating button
- **THEN** an assistant panel opens and pressing Escape SHALL close it when documented behavior is implemented

### Requirement: Simulated conversation

The assistant SHALL display a configurable welcome message, quick-reply actions that append simulated bot responses, and a text input that produces deterministic canned replies or keyword-based replies without a remote AI service.

#### Scenario: Quick reply selection

- **WHEN** the user selects a quick reply option
- **THEN** the user message and corresponding bot reply appear in the transcript in order

### Requirement: WhatsApp handoff

The assistant UI SHALL expose a clearly labeled control that opens WhatsApp using the pharmacy mock number.

#### Scenario: WhatsApp launch

- **WHEN** the user chooses the WhatsApp action
- **THEN** a new browser tab opens pointing at `wa.me` with the configured phone number
