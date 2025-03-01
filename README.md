# dw-eatery-tracker

## DisneyWorld Eatery Tracker

This app is intended to be an easy-to-use progressive web app for helping people discover and track visits to eateries at Walt Disney World in Orlando, Florida. The app has restaurant descriptions, classifications, and allows users to rate each on food quality, experience, and service. The app allows users to create wishlists and track their experience at each eatery in their wishlist. Users can choose to have public and/or private reviews for each restaurant. Lists can be published and "subscribed to" by users of the app.

## Getting Started with the MVP

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dw-eatery-tracker.git
   cd dw-eatery-tracker
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Current Features (MVP)

- Basic welcome page
- Placeholder pages for eateries catalog
- Placeholder login page
- Responsive design

## CI/CD Workflows

The application uses GitHub Actions for continuous integration and deployment. The following workflows are configured:

### Main CI/CD Pipeline (`ci-cd.yml`)

This workflow runs on every push to main and feature branches, and handles:

1. **Branch Name Validation**: Ensures branch names follow the semantic versioning convention
   - `feature!/*` for major releases
   - `feature/*` for minor releases
   - `chore/*`, `fix/*`, `bugfix/*` for patch releases

2. **Semantic Versioning**: Automatically generates version numbers based on branch names

3. **Code Quality**: Runs ESLint and SonarQube analysis

4. **Security Scanning**: Performs npm audit and CodeQL analysis

5. **Build**: Creates production build artifacts

6. **Deployment**: Deploys to Cloudflare Pages (main branch only)

7. **Tagging**: Creates Git tags for releases (main branch only)

### Security Scan (`security-scan.yml`)

Runs weekly security scans using:
- npm audit
- CodeQL Analysis
- Snyk vulnerability scanning

### Dependency Updates (`dependency-updates.yml`)

Manages dependency updates using Dependabot, configured to:
- Check for updates weekly
- Create PRs for outdated dependencies
- Apply appropriate labels

## GitHub Secrets Required

To use these workflows, you need to set up the following GitHub secrets:

- `SONAR_TOKEN`: Token for SonarCloud analysis
- `CLOUDFLARE_API_TOKEN`: API token for Cloudflare deployment
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- `CLOUDFLARE_D1_DATABASE_ID`: ID of your Cloudflare D1 database
- `SNYK_TOKEN`: Token for Snyk vulnerability scanning

## Branch Naming Convention

When creating branches, follow these naming conventions:

- `feature!/{description}` - For major changes (breaking changes)
- `feature/{description}` - For new features (non-breaking)
- `chore/{description}` - For maintenance tasks
- `fix/{description}` or `bugfix/{description}` - For bug fixes

Example: `feature/add-user-authentication`

## Application Architecture

### Frontend

1. NodeJS based frontend with server-side-rendering to enhance initial load.
2. Heavily cached static assets.
3. Restaurant catalog available for browsing to non-logged-in users.
4. Users able to create as many lists as they would like.
5. Users able to create one private and one public review per restaurant.
6. Supports passkey authentication.
7. Non-logged in users can browse the catalog of eateries and reviews, but cannot see lists.

### Backend

1. Microservice API
2. Static content managed in Cloudflare R2
3. Dynamic content managed in Cloudflare D1

### Administrative Interface

1. Static Web App
2. Shared user database with frontend.

### Data Architecture

1. User
   1. User object identified by GUID
   2. User able to change username and email address.
      1. A secure process of approving the change-of-address from the original email address must be done.
   3. Email addresses must be confirmed.
   4. Users will be identified by Preferred name and Last Name.
   5. Users will be able to provide a short biography of themselves in plaintext limited to 500 characters.
   6. Users will have classifications:
      1. Super Admin - able to manage all data stored in the application
      2. Admin - able to manage app data, but not user data
         1. Eatery Admin - able to manage Eatery data
         2. User Admin - able to initiate user credential reset
      3. Moderators - able to manage restaurant reviews and other publicly-visible, user-generated content.
      4. Users - Default role - able to create lists, mark own list items as "done", create reviews
2. Disney Park
   1. Identified by a GUID
   2. Will have a display name
   3. Will have a location (City, State, Country)
   4. Will have a short description.
   5. Will be managed by a platform admin
3. Eatery Class
   1. Identified by a GUID
   2. Will have a display name
   3. will have a short description
   4. Will be managed by a platform admin
4. Menu Item Class
   1. Identified by a GUID
   2. Will have a display name
   3. Will have a short description
   4. Will be managed by a platform admin
5. Menu Item
   1. Identified by a GUID
   2. Will have a display name
   3. Will have a description
   4. Will have a Menu Item Class association
6. Eatery
   1. Identified by a GUID
   2. Will have a display name
   3. Will have a Disney Park association.
   4. Will have a location description within the Disney Park.
   5. Will have a description
   6. Will have an Eatery Class association
   7. Will have a link to menus (optional)
   8. Will have the ability to associate a dynamic number of menu items
7. List
   1. Identified by a GUID
   2. Will have a display name
   3. Will have a short description
   4. Will have an unlimited number of list items
8. UserList
   1. An in-the-moment copy of a List
   2. Identified by a GUID
   3. Will have the original List display name, but may be customized by the User.
   4. Will track "done" list items.
   5. Will have ability to sort list items by original list order, done/not-done, alphabetical, datetime added
9. Review
   1. Identified by a GUID.
   2. A review consists of two components:
      1. A rating from 1 to 5, with 1 being low and 5 being high.
      2. A text component of no more than 1000 characters of plain text.
   3. Can be attached to either an Eatery or a Menu Item.
   4. Can be marked as either Public or Private.
   5. Public reviews must be approved by a moderator.

### Application Orchestration

1. The application is hosted in GitHub.
2. GitHub workflows are created to:
   1. Enable SonarQube quality gates
   2. Perform static security analysis of code
   3. Automatically generate semantic version IDs based on branch names:
      1. Branches starting with feature! (with exclamation point) denote a major release
      2. Branches starting with feature (without exclamation point) denote a minor release
      3. Branches starting with chore, fix, bugfix denote a revision release
      4. All other branches are rejected
   4. Create build artifacts
   5. Deploy build artifacts to the appropriate Cloudflare service.
   6. All sensitive and configurable items use GitHub variables.

