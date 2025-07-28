# Development Guide

This document outlines the development setup, tools, and workflows for the portfolio website.

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd louisphilip.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run type-check` - Run TypeScript type checking

## 🔧 Development Tools

### Pre-commit Hooks

The project uses Husky to run pre-commit hooks that ensure code quality:

- **ESLint**: Checks for code quality and potential errors
- **Prettier**: Ensures consistent code formatting
- **TypeScript**: Performs type checking
- **Commitlint**: Validates commit message format

### Conventional Commits

All commits must follow the conventional commit format:

```
type(scope): description

Examples:
feat(resources): add new resources page
fix(books): correct book title typos
docs(readme): update development guide
style(components): format component files
```

### Commit Types

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks
- `revert`: Reverting previous commits

## 🚀 GitHub Actions

### CI/CD Pipeline

The project includes several GitHub Actions workflows:

1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)
   - Runs on push to main/develop and PRs
   - Linting, formatting, type checking
   - Build verification
   - Security audit
   - Automatic deployment to GitHub Pages

2. **Pull Request Checks** (`.github/workflows/pr.yml`)
   - Quality checks for PRs
   - Automated PR comments with results

3. **Dependency Updates** (`.github/workflows/dependencies.yml`)
   - Weekly dependency update checks
   - Automated issue creation for outdated packages

## 📁 Project Structure

```
louisphilip.github.io/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── books/             # Books page
│   ├── contact/           # Contact page
│   ├── github/            # GitHub page
│   ├── portfolio/         # Portfolio page
│   ├── resources/         # Resources page
│   ├── resume/            # Resume page
│   └── layout.jsx         # Root layout
├── components/            # React components
│   ├── about/             # About components
│   ├── books/             # Books components
│   ├── contact/           # Contact components
│   ├── github/            # GitHub components
│   ├── headers/           # Header components
│   ├── menus/             # Menu components
│   ├── personalInfo/      # Personal info components
│   ├── portfolio/         # Portfolio components
│   ├── resources/         # Resources components
│   └── resume/            # Resume components
├── data/                  # Data files
│   ├── books.js          # Books data
│   ├── blogs.js          # Blog data
│   ├── features.js       # Features data
│   ├── menu.js           # Navigation menu
│   ├── portfolioData.js  # Portfolio data
│   ├── resources.js      # Resources data
│   └── ...               # Other data files
├── public/               # Static assets
│   └── assets/           # Images, CSS, fonts
└── .github/              # GitHub Actions workflows
```

## 🎨 Styling

### CSS Architecture

- **Global Styles**: `public/assets/css/main.css`
- **SCSS**: `public/main.scss` (with deprecation warnings)
- **Component Styles**: Inline styles in components
- **Theme Variables**: CSS custom properties for theming

### Color Palette

The project uses a modern color palette defined in CSS variables:

- Primary colors for branding
- Dark/light theme support
- Consistent spacing and typography

## 🔍 Code Quality Standards

### ESLint Rules

- Next.js recommended rules
- Prettier integration
- Unused variable warnings
- Console statement warnings
- Prefer const over var

### Prettier Configuration

- Single quotes
- 80 character line width
- 2 space indentation
- Trailing commas
- Semicolons required

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages when:

- Code is pushed to the `main` branch
- All CI checks pass
- Build is successful

### Manual Deployment

```bash
# Build the project
npm run build

# The build output is in .next/ directory
# GitHub Actions handles the deployment
```

## 🐛 Troubleshooting

### Common Issues

1. **Pre-commit hooks failing**
   - Run `npm run lint:fix` to auto-fix issues
   - Run `npm run format` to format code
   - Check commit message format

2. **Build failures**
   - Check for TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Check for missing dependencies

3. **Development server issues**
   - Clear `.next` directory: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`
   - Check port conflicts

### Getting Help

- Check the GitHub Actions logs for detailed error information
- Review the ESLint and Prettier output
- Ensure all dependencies are up to date

## 📝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the coding standards
3. Run quality checks locally: `npm run lint && npm run format:check`
4. Commit with conventional commit format
5. Push and create a pull request
6. Ensure all CI checks pass

## 🔄 Workflow

### Daily Development

1. Pull latest changes: `git pull origin main`
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Run quality checks before committing
5. Commit with conventional format
6. Push and create PR

### Release Process

1. Ensure all tests pass
2. Update version in `package.json` if needed
3. Merge to `main` branch
4. GitHub Actions will automatically deploy
5. Verify deployment on GitHub Pages
