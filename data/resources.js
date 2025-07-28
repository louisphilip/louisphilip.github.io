export const resourcesData = [
  // Existing general categories
  {
    id: 1,
    category: "Development Tools",
    title: "VS Code Extensions",
    description: "Essential extensions for web development",
    link: "https://marketplace.visualstudio.com/",
    icon: "fa-brands fa-microsoft",
    tags: ["vscode", "development", "tools"]
  },
  {
    id: 2,
    category: "Learning Resources",
    title: "MDN Web Docs",
    description: "Comprehensive web development documentation",
    link: "https://developer.mozilla.org/",
    icon: "fa-brands fa-firefox-browser",
    tags: ["documentation", "web", "learning"]
  },
  {
    id: 3,
    category: "Design",
    title: "Figma",
    description: "Collaborative interface design tool",
    link: "https://www.figma.com/",
    icon: "fa-brands fa-figma",
    tags: ["design", "ui", "ux", "collaboration"]
  },
  {
    id: 4,
    category: "Development Tools",
    title: "GitHub",
    description: "Version control and collaboration platform",
    link: "https://github.com/",
    icon: "fa-brands fa-github",
    tags: ["git", "version-control", "collaboration"]
  },
  {
    id: 5,
    category: "Learning Resources",
    title: "freeCodeCamp",
    description: "Learn to code with free interactive tutorials",
    link: "https://www.freecodecamp.org/",
    icon: "fa-solid fa-code",
    tags: ["learning", "tutorials", "free"]
  },
  {
    id: 6,
    category: "Design",
    title: "Dribbble",
    description: "Discover and connect with designers worldwide",
    link: "https://dribbble.com/",
    icon: "fa-brands fa-dribbble",
    tags: ["design", "inspiration", "community"]
  },
  {
    id: 7,
    category: "Development Tools",
    title: "Stack Overflow",
    description: "Developer community for questions and answers",
    link: "https://stackoverflow.com/",
    icon: "fa-brands fa-stack-overflow",
    tags: ["q&a", "community", "development"]
  },
  {
    id: 8,
    category: "Learning Resources",
    title: "CSS-Tricks",
    description: "Tips, tricks, and techniques for CSS",
    link: "https://css-tricks.com/",
    icon: "fa-brands fa-css3-alt",
    tags: ["css", "frontend", "tips"]
  },
  {
    id: 9,
    category: "Design",
    title: "Behance",
    description: "Showcase and discover creative work",
    link: "https://www.behance.net/",
    icon: "fa-brands fa-behance",
    tags: ["design", "portfolio", "creative"]
  },
  {
    id: 10,
    category: "Development Tools",
    title: "CodePen",
    description: "Social development environment for front-end designers and developers",
    link: "https://codepen.io/",
    icon: "fa-brands fa-codepen",
    tags: ["frontend", "sandbox", "community"]
  },
  {
    id: 11,
    category: "Learning Resources",
    title: "Dev.to",
    description: "Community of software developers",
    link: "https://dev.to/",
    icon: "fa-brands fa-dev",
    tags: ["blog", "community", "development"]
  },
  {
    id: 12,
    category: "Design",
    title: "Canva",
    description: "Easy-to-use design tool for everyone",
    link: "https://www.canva.com/",
    icon: "fa-brands fa-canva",
    tags: ["design", "easy", "templates"]
  },

  // Google Cloud Engineers Resources
  {
    id: 13,
    category: "Google Cloud Engineers",
    title: "Google Cloud Documentation",
    description: "Official comprehensive documentation for all Google Cloud services",
    link: "https://cloud.google.com/docs",
    icon: "fa-brands fa-google",
    tags: ["gcp", "documentation", "cloud", "official"]
  },
  {
    id: 14,
    category: "Google Cloud Engineers",
    title: "Google Cloud Skills Boost",
    description: "Hands-on labs and learning paths for Google Cloud certification",
    link: "https://www.cloudskillsboost.google/",
    icon: "fa-solid fa-graduation-cap",
    tags: ["gcp", "certification", "labs", "training"]
  },
  {
    id: 15,
    category: "Google Cloud Engineers", 
    title: "Google Cloud Architecture Center",
    description: "Reference architectures, best practices, and guidance for cloud solutions",
    link: "https://cloud.google.com/architecture",
    icon: "fa-solid fa-building",
    tags: ["gcp", "architecture", "best-practices", "solutions"]
  },
  {
    id: 16,
    category: "Google Cloud Engineers",
    title: "Terraform Google Cloud Provider",
    description: "Infrastructure as Code for Google Cloud using Terraform",
    link: "https://registry.terraform.io/providers/hashicorp/google/latest",
    icon: "fa-solid fa-code-branch",
    tags: ["gcp", "terraform", "iac", "automation"]
  },
  {
    id: 17,
    category: "Google Cloud Engineers",
    title: "GCP Professional Cloud Architect Certification",
    description: "Industry-recognized certification for cloud architects",
    link: "https://cloud.google.com/certification/cloud-architect",
    icon: "fa-solid fa-certificate",
    tags: ["gcp", "certification", "architect", "professional"]
  },
  {
    id: 18,
    category: "Google Cloud Engineers",
    title: "Google Cloud CLI (gcloud)",  
    description: "Command-line interface for Google Cloud Platform",
    link: "https://cloud.google.com/sdk/gcloud",
    icon: "fa-solid fa-terminal",
    tags: ["gcp", "cli", "tools", "automation"]
  },
  {
    id: 19,
    category: "Google Cloud Engineers",
    title: "Awesome Google Cloud",
    description: "Curated list of Google Cloud Platform resources and tools",
    link: "https://github.com/GoogleCloudPlatform/awesome-google-cloud",
    icon: "fa-brands fa-github",
    tags: ["gcp", "resources", "community", "tools"]
  },
  {
    id: 20,
    category: "Google Cloud Engineers",
    title: "Google Cloud Buildpacks",
    description: "Build container images from source code without Docker",
    link: "https://cloud.google.com/docs/buildpacks",
    icon: "fa-solid fa-box",
    tags: ["gcp", "buildpacks", "containers", "deployment"]
  },

  // Software Developers Resources
  {
    id: 21,
    category: "Software Developers",
    title: "GitHub Copilot",
    description: "AI-powered code completion and programming assistant",
    link: "https://github.com/features/copilot",
    icon: "fa-solid fa-robot",
    tags: ["ai", "coding", "automation", "productivity"]
  },
  {
    id: 22,
    category: "Software Developers",
    title: "Cursor IDE",
    description: "VS Code replacement with built-in AI for code generation",
    link: "https://cursor.sh/",
    icon: "fa-solid fa-code",
    tags: ["ide", "ai", "development", "productivity"]
  },
  {
    id: 23,
    category: "Software Developers",
    title: "React Documentation",
    description: "Official React library documentation and learning resources",
    link: "https://react.dev/",
    icon: "fa-brands fa-react",
    tags: ["react", "frontend", "javascript", "documentation"]
  },
  {
    id: 24,
    category: "Software Developers",
    title: "Next.js",
    description: "Full-stack React framework for production applications",
    link: "https://nextjs.org/",
    icon: "fa-solid fa-forward",
    tags: ["nextjs", "react", "fullstack", "framework"]
  },
  {
    id: 25,
    category: "Software Developers",
    title: "TypeScript",
    description: "Strongly typed programming language that builds on JavaScript",
    link: "https://www.typescriptlang.org/",
    icon: "fa-solid fa-code",
    tags: ["typescript", "javascript", "programming", "types"]
  },
  {
    id: 26,
    category: "Software Developers",
    title: "Python.org",
    description: "Official Python programming language website and documentation",
    link: "https://www.python.org/",
    icon: "fa-brands fa-python",
    tags: ["python", "programming", "documentation", "language"]
  },
  {
    id: 27,
    category: "Software Developers",
    title: "Rust Programming Language",
    description: "System programming language focused on safety and performance",
    link: "https://www.rust-lang.org/",
    icon: "fa-solid fa-gear",
    tags: ["rust", "systems", "programming", "performance"]
  },
  {
    id: 28,
    category: "Software Developers",
    title: "Go Programming Language",
    description: "Open source programming language for building reliable software",
    link: "https://golang.org/",
    icon: "fa-solid fa-play",
    tags: ["go", "golang", "programming", "backend"]
  },
  {
    id: 29,
    category: "Software Developers",
    title: "System Design Primer",
    description: "Learn how to design large-scale systems with examples",
    link: "https://github.com/donnemartin/system-design-primer",
    icon: "fa-solid fa-sitemap",
    tags: ["system-design", "architecture", "scaling", "learning"]
  },
  {
    id: 30,
    category: "Software Developers",
    title: "LeetCode",
    description: "Platform for coding interview preparation and practice",
    link: "https://leetcode.com/",
    icon: "fa-solid fa-code",
    tags: ["algorithms", "interview", "practice", "coding"]
  },
  {
    id: 31,
    category: "Software Developers",
    title: "The Odin Project",
    description: "Free full-stack curriculum for web development",
    link: "https://www.theodinproject.com/",
    icon: "fa-solid fa-book",
    tags: ["fullstack", "curriculum", "free", "web-development"]
  },
  {
    id: 32,
    category: "Software Developers",
    title: "Svelte",
    description: "Cybernetically enhanced web apps with compile-time optimizations",
    link: "https://svelte.dev/",
    icon: "fa-solid fa-fire",
    tags: ["svelte", "frontend", "framework", "performance"]
  },

  // DevOps Engineers Resources  
  {
    id: 33,
    category: "DevOps Engineers",
    title: "Kubernetes Documentation",
    description: "Official Kubernetes container orchestration documentation",
    link: "https://kubernetes.io/docs/",
    icon: "fa-solid fa-dharmachakra",
    tags: ["kubernetes", "containers", "orchestration", "k8s"]
  },
  {
    id: 34,
    category: "DevOps Engineers",
    title: "Docker Documentation",
    description: "Official Docker containerization platform documentation",
    link: "https://docs.docker.com/",
    icon: "fa-brands fa-docker",
    tags: ["docker", "containers", "virtualization", "deployment"]
  },
  {
    id: 35,
    category: "DevOps Engineers",
    title: "Terraform Registry",
    description: "Infrastructure as Code providers and modules",
    link: "https://registry.terraform.io/",
    icon: "fa-solid fa-cubes",
    tags: ["terraform", "iac", "infrastructure", "automation"]
  },
  {
    id: 36,
    category: "DevOps Engineers",
    title: "Jenkins",
    description: "Open source automation server for CI/CD pipelines",
    link: "https://www.jenkins.io/",
    icon: "fa-solid fa-gear",
    tags: ["jenkins", "ci-cd", "automation", "pipeline"]
  },
  {
    id: 37,
    category: "DevOps Engineers",
    title: "GitHub Actions",
    description: "Automate workflows with GitHub's CI/CD platform",
    link: "https://github.com/features/actions",
    icon: "fa-brands fa-github",
    tags: ["github-actions", "ci-cd", "automation", "workflows"]
  },
  {
    id: 38,
    category: "DevOps Engineers",
    title: "Ansible Documentation",
    description: "Configuration management and automation platform",
    link: "https://docs.ansible.com/",
    icon: "fa-solid fa-cogs",
    tags: ["ansible", "configuration", "automation", "orchestration"]
  },
  {
    id: 39,
    category: "DevOps Engineers",
    title: "Prometheus Monitoring",
    description: "Open source monitoring and alerting toolkit",
    link: "https://prometheus.io/",
    icon: "fa-solid fa-chart-line",
    tags: ["prometheus", "monitoring", "metrics", "alerting"]
  },
  {
    id: 40,
    category: "DevOps Engineers",
    title: "Grafana",
    description: "Open source analytics and interactive visualization platform",
    link: "https://grafana.com/",
    icon: "fa-solid fa-chart-bar",
    tags: ["grafana", "visualization", "dashboards", "monitoring"]
  },
  {
    id: 41,
    category: "DevOps Engineers",
    title: "ArgoCD",
    description: "Declarative GitOps continuous delivery for Kubernetes",
    link: "https://argo-cd.readthedocs.io/",
    icon: "fa-solid fa-sync",
    tags: ["argocd", "gitops", "kubernetes", "continuous-delivery"]
  },
  {
    id: 42,
    category: "DevOps Engineers",
    title: "Helm Charts",
    description: "Package manager for Kubernetes applications",
    link: "https://helm.sh/",
    icon: "fa-solid fa-ship",
    tags: ["helm", "kubernetes", "package-manager", "deployment"]
  },
  {
    id: 43,
    category: "DevOps Engineers",
    title: "HashiCorp Vault",
    description: "Secrets management and data protection platform",
    link: "https://www.vaultproject.io/",
    icon: "fa-solid fa-lock",
    tags: ["vault", "secrets", "security", "hashicorp"]
  },
  {
    id: 44,
    category: "DevOps Engineers",
    title: "DevOps Roadmap",
    description: "Step-by-step guide to become a DevOps engineer",
    link: "https://roadmap.sh/devops",
    icon: "fa-solid fa-route",
    tags: ["roadmap", "learning", "career", "guide"]
  },

  // Cloud Security Engineers Resources
  {
    id: 45,
    category: "Cloud Security Engineers",
    title: "AWS Security Documentation",
    description: "Comprehensive security guidelines and best practices for AWS",
    link: "https://docs.aws.amazon.com/security/",
    icon: "fa-brands fa-aws",
    tags: ["aws", "security", "cloud", "documentation"]
  },
  {
    id: 46,
    category: "Cloud Security Engineers",
    title: "AWS Well-Architected Security Pillar",
    description: "Security best practices for AWS Well-Architected Framework",
    link: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/",
    icon: "fa-solid fa-shield-alt",
    tags: ["aws", "security", "architecture", "best-practices"]
  },
  {
    id: 47,
    category: "Cloud Security Engineers", 
    title: "Google Cloud Security Center",
    description: "Centralized security and risk management for Google Cloud",
    link: "https://cloud.google.com/security-command-center",
    icon: "fa-brands fa-google",
    tags: ["gcp", "security", "monitoring", "risk-management"]
  },
  {
    id: 48,
    category: "Cloud Security Engineers",
    title: "Cloud Security Alliance (CSA)",
    description: "Global organization promoting security best practices for cloud computing",
    link: "https://cloudsecurityalliance.org/",
    icon: "fa-solid fa-shield",
    tags: ["cloud-security", "standards", "best-practices", "alliance"]
  },
  {
    id: 49,
    category: "Cloud Security Engineers",
    title: "OWASP Cloud Security",
    description: "Open Web Application Security Project cloud security resources",
    link: "https://owasp.org/www-project-cloud-security/",
    icon: "fa-solid fa-bug-slash",
    tags: ["owasp", "security", "cloud", "vulnerabilities"]
  },
  {
    id: 50,
    category: "Cloud Security Engineers",
    title: "CloudSploit",
    description: "Open source cloud security posture management (CSPM) tool",
    link: "https://github.com/aquasecurity/cloudsploit",
    icon: "fa-solid fa-search",
    tags: ["security", "cspm", "scanning", "open-source"]
  },
  {
    id: 51,
    category: "Cloud Security Engineers",
    title: "Scout Suite",
    description: "Multi-cloud security auditing tool for AWS, Azure, and GCP",
    link: "https://github.com/nccgroup/ScoutSuite",
    icon: "fa-solid fa-user-secret",
    tags: ["security", "auditing", "multi-cloud", "assessment"]
  },
  {
    id: 52,
    category: "Cloud Security Engineers",
    title: "Prowler",
    description: "AWS security best practices assessment tool",
    link: "https://github.com/prowler-cloud/prowler",
    icon: "fa-solid fa-magnifying-glass",
    tags: ["aws", "security", "assessment", "compliance"]
  },
  {
    id: 53,
    category: "Cloud Security Engineers",
    title: "CIS Benchmarks",
    description: "Security configuration benchmarks for cloud platforms",
    link: "https://www.cisecurity.org/cis-benchmarks",
    icon: "fa-solid fa-check-double",
    tags: ["cis", "benchmarks", "security", "compliance"]
  },
  {
    id: 54,
    category: "Cloud Security Engineers",
    title: "NIST Cybersecurity Framework",
    description: "Framework for improving critical infrastructure cybersecurity",
    link: "https://www.nist.gov/cyberframework",
    icon: "fa-solid fa-building-columns",
    tags: ["nist", "cybersecurity", "framework", "standards"]
  },
  {
    id: 55,
    category: "Cloud Security Engineers",
    title: "Zero Trust Architecture Guide",
    description: "NIST Special Publication on Zero Trust Architecture",
    link: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    icon: "fa-solid fa-ban",
    tags: ["zero-trust", "architecture", "security", "nist"]
  },
  {
    id: 56,
    category: "Cloud Security Engineers",
    title: "AWS IAM Policy Simulator",
    description: "Test and troubleshoot IAM policies in AWS",
    link: "https://policysim.aws.amazon.com/",
    icon: "fa-solid fa-flask",
    tags: ["aws", "iam", "policies", "testing"]
  }
];

export const resourceCategories = [
  "All",
  "Development Tools",
  "Learning Resources", 
  "Design",
  "Google Cloud Engineers",
  "Software Developers",
  "DevOps Engineers", 
  "Cloud Security Engineers"
]; 