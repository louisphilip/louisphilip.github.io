export const resourcesData = [
  // Google Cloud Resources
  {
    id: 1,
    category: "Google Cloud",
    title: "Google Cloud Documentation",
    description: "Official comprehensive documentation for all Google Cloud services",
    link: "https://cloud.google.com/docs",
    icon: "fa-brands fa-google",
    tags: ["gcp", "documentation", "cloud", "official"]
  },
  {
    id: 2,
    category: "Google Cloud",
    title: "Google Cloud Skills Boost",
    description: "Hands-on labs and learning paths for Google Cloud certification",
    link: "https://www.cloudskillsboost.google/",
    icon: "fa-solid fa-graduation-cap",
    tags: ["gcp", "certification", "labs", "training"]
  },
  {
    id: 3,
    category: "Google Cloud", 
    title: "Google Cloud Architecture Center",
    description: "Reference architectures, best practices, and guidance for cloud solutions",
    link: "https://cloud.google.com/architecture",
    icon: "fa-solid fa-building",
    tags: ["gcp", "architecture", "best-practices", "solutions"]
  },
  {
    id: 4,
    category: "Google Cloud",
    title: "Terraform Google Cloud Provider",
    description: "Infrastructure as Code for Google Cloud using Terraform",
    link: "https://registry.terraform.io/providers/hashicorp/google/latest",
    icon: "fa-solid fa-code-branch",
    tags: ["gcp", "terraform", "iac", "automation"]
  },
  {
    id: 5,
    category: "Google Cloud",
    title: "GCP Professional Cloud Architect Certification",
    description: "Industry-recognized certification for cloud architects",
    link: "https://cloud.google.com/certification/cloud-architect",
    icon: "fa-solid fa-certificate",
    tags: ["gcp", "certification", "architect", "professional"]
  },
  {
    id: 6,
    category: "Google Cloud",
    title: "Google Cloud CLI (gcloud)",  
    description: "Command-line interface for Google Cloud Platform",
    link: "https://cloud.google.com/sdk/gcloud",
    icon: "fa-solid fa-terminal",
    tags: ["gcp", "cli", "tools", "automation"]
  },
  {
    id: 7,
    category: "Google Cloud",
    title: "Awesome Google Cloud",
    description: "Curated list of Google Cloud Platform resources and tools",
    link: "https://github.com/GoogleCloudPlatform/awesome-google-cloud",
    icon: "fa-brands fa-github",
    tags: ["gcp", "resources", "community", "tools"]
  },
  {
    id: 8,
    category: "Google Cloud",
    title: "Google Cloud Buildpacks",
    description: "Build container images from source code without Docker",
    link: "https://cloud.google.com/docs/buildpacks",
    icon: "fa-solid fa-box",
    tags: ["gcp", "buildpacks", "containers", "deployment"]
  },
  {
    id: 9,
    category: "Google Cloud",
    title: "Google Cloud Security Command Center",
    description: "Centralized security and risk management for Google Cloud",
    link: "https://cloud.google.com/security-command-center",
    icon: "fa-solid fa-shield-alt",
    tags: ["gcp", "security", "monitoring", "risk-management"]
  },
  {
    id: 10,
    category: "Google Cloud",
    title: "Cloud Run Documentation",
    description: "Fully managed serverless platform for containerized applications",
    link: "https://cloud.google.com/run/docs",
    icon: "fa-solid fa-play",
    tags: ["gcp", "serverless", "containers", "cloud-run"]
  },
  {
    id: 11,
    category: "Google Cloud",
    title: "Google Kubernetes Engine (GKE)",
    description: "Managed Kubernetes service with enterprise-grade security",
    link: "https://cloud.google.com/kubernetes-engine",
    icon: "fa-solid fa-dharmachakra",
    tags: ["gcp", "kubernetes", "containers", "gke"]
  },
  {
    id: 12,
    category: "Google Cloud",
    title: "BigQuery Documentation",
    description: "Serverless, highly scalable data warehouse and analytics platform",
    link: "https://cloud.google.com/bigquery/docs",
    icon: "fa-solid fa-database",
    tags: ["gcp", "bigquery", "analytics", "data-warehouse"]
  },

  // DevOps Resources  
  {
    id: 13,
    category: "DevOps",
    title: "Kubernetes Documentation",
    description: "Official Kubernetes container orchestration documentation",
    link: "https://kubernetes.io/docs/",
    icon: "fa-solid fa-dharmachakra",
    tags: ["kubernetes", "containers", "orchestration", "k8s"]
  },
  {
    id: 14,
    category: "DevOps",
    title: "Docker Documentation",
    description: "Official Docker containerization platform documentation",
    link: "https://docs.docker.com/",
    icon: "fa-brands fa-docker",
    tags: ["docker", "containers", "virtualization", "deployment"]
  },
  {
    id: 15,
    category: "DevOps",
    title: "Terraform Registry",
    description: "Infrastructure as Code providers and modules",
    link: "https://registry.terraform.io/",
    icon: "fa-solid fa-cubes",
    tags: ["terraform", "iac", "infrastructure", "automation"]
  },
  {
    id: 16,
    category: "DevOps",
    title: "Jenkins",
    description: "Open source automation server for CI/CD pipelines",
    link: "https://www.jenkins.io/",
    icon: "fa-solid fa-gear",
    tags: ["jenkins", "ci-cd", "automation", "pipeline"]
  },
  {
    id: 17,
    category: "DevOps",
    title: "GitHub Actions",
    description: "Automate workflows with GitHub's CI/CD platform",
    link: "https://github.com/features/actions",
    icon: "fa-brands fa-github",
    tags: ["github-actions", "ci-cd", "automation", "workflows"]
  },
  {
    id: 18,
    category: "DevOps",
    title: "Ansible Documentation",
    description: "Configuration management and automation platform",
    link: "https://docs.ansible.com/",
    icon: "fa-solid fa-cogs",
    tags: ["ansible", "configuration", "automation", "orchestration"]
  },
  {
    id: 19,
    category: "DevOps",
    title: "Prometheus Monitoring",
    description: "Open source monitoring and alerting toolkit",
    link: "https://prometheus.io/",
    icon: "fa-solid fa-chart-line",
    tags: ["prometheus", "monitoring", "metrics", "alerting"]
  },
  {
    id: 20,
    category: "DevOps",
    title: "Grafana",
    description: "Open source analytics and interactive visualization platform",
    link: "https://grafana.com/",
    icon: "fa-solid fa-chart-bar",
    tags: ["grafana", "visualization", "dashboards", "monitoring"]
  },
  {
    id: 21,
    category: "DevOps",
    title: "ArgoCD",
    description: "Declarative GitOps continuous delivery for Kubernetes",
    link: "https://argo-cd.readthedocs.io/",
    icon: "fa-solid fa-sync",
    tags: ["argocd", "gitops", "kubernetes", "continuous-delivery"]
  },
  {
    id: 22,
    category: "DevOps",
    title: "Helm Charts",
    description: "Package manager for Kubernetes applications",
    link: "https://helm.sh/",
    icon: "fa-solid fa-ship",
    tags: ["helm", "kubernetes", "package-manager", "deployment"]
  },
  {
    id: 23,
    category: "DevOps",
    title: "HashiCorp Vault",
    description: "Secrets management and data protection platform",
    link: "https://www.vaultproject.io/",
    icon: "fa-solid fa-lock",
    tags: ["vault", "secrets", "security", "hashicorp"]
  },
  {
    id: 24,
    category: "DevOps",
    title: "DevOps Roadmap",
    description: "Step-by-step guide to become a DevOps engineer",
    link: "https://roadmap.sh/devops",
    icon: "fa-solid fa-route",
    tags: ["roadmap", "learning", "career", "guide"]
  },
  {
    id: 25,
    category: "DevOps",
    title: "GitLab CI/CD",
    description: "Complete DevOps platform with built-in CI/CD",
    link: "https://docs.gitlab.com/ee/ci/",
    icon: "fa-brands fa-gitlab",
    tags: ["gitlab", "ci-cd", "devops", "automation"]
  },
  {
    id: 26,
    category: "DevOps",
    title: "Istio Service Mesh",
    description: "Connect, secure, control, and observe services",
    link: "https://istio.io/",
    icon: "fa-solid fa-network-wired",
    tags: ["istio", "service-mesh", "microservices", "security"]
  },

  // Cloud Security Resources
  {
    id: 27,
    category: "Cloud Security",
    title: "Cloud Security Alliance (CSA)",
    description: "Global organization promoting security best practices for cloud computing",
    link: "https://cloudsecurityalliance.org/",
    icon: "fa-solid fa-shield",
    tags: ["cloud-security", "standards", "best-practices", "alliance"]
  },
  {
    id: 28,
    category: "Cloud Security",
    title: "OWASP Cloud Security",
    description: "Open Web Application Security Project cloud security resources",
    link: "https://owasp.org/www-project-cloud-security/",
    icon: "fa-solid fa-bug-slash",
    tags: ["owasp", "security", "cloud", "vulnerabilities"]
  },
  {
    id: 29,
    category: "Cloud Security",
    title: "CloudSploit",
    description: "Open source cloud security posture management (CSPM) tool",
    link: "https://github.com/aquasecurity/cloudsploit",
    icon: "fa-solid fa-search",
    tags: ["security", "cspm", "scanning", "open-source"]
  },
  {
    id: 30,
    category: "Cloud Security",
    title: "Scout Suite",
    description: "Multi-cloud security auditing tool for AWS, Azure, and GCP",
    link: "https://github.com/nccgroup/ScoutSuite",
    icon: "fa-solid fa-user-secret",
    tags: ["security", "auditing", "multi-cloud", "assessment"]
  },
  {
    id: 31,
    category: "Cloud Security",
    title: "Prowler",
    description: "AWS and multi-cloud security best practices assessment tool",
    link: "https://github.com/prowler-cloud/prowler",
    icon: "fa-solid fa-magnifying-glass",
    tags: ["aws", "security", "assessment", "compliance"]
  },
  {
    id: 32,
    category: "Cloud Security",
    title: "CIS Benchmarks",
    description: "Security configuration benchmarks for cloud platforms",
    link: "https://www.cisecurity.org/cis-benchmarks",
    icon: "fa-solid fa-check-double",
    tags: ["cis", "benchmarks", "security", "compliance"]
  },
  {
    id: 33,
    category: "Cloud Security",
    title: "NIST Cybersecurity Framework",
    description: "Framework for improving critical infrastructure cybersecurity",
    link: "https://www.nist.gov/cyberframework",
    icon: "fa-solid fa-building-columns",
    tags: ["nist", "cybersecurity", "framework", "standards"]
  },
  {
    id: 34,
    category: "Cloud Security",
    title: "Zero Trust Architecture Guide",
    description: "NIST Special Publication on Zero Trust Architecture",
    link: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    icon: "fa-solid fa-ban",
    tags: ["zero-trust", "architecture", "security", "nist"]
  },
  {
    id: 35,
    category: "Cloud Security",
    title: "Falco Runtime Security",
    description: "Cloud-native runtime security for threat detection",
    link: "https://falco.org/",
    icon: "fa-solid fa-eye",
    tags: ["falco", "runtime-security", "threat-detection", "kubernetes"]
  },
  {
    id: 36,
    category: "Cloud Security",
    title: "Open Policy Agent (OPA)",
    description: "Policy-based control for cloud native environments",
    link: "https://www.openpolicyagent.org/",
    icon: "fa-solid fa-gavel",
    tags: ["opa", "policy", "security", "compliance"]
  },
  {
    id: 37,
    category: "Cloud Security",
    title: "Checkov Static Code Analysis",
    description: "Static code analysis tool for infrastructure as code security",
    link: "https://www.checkov.io/",
    icon: "fa-solid fa-code",
    tags: ["checkov", "static-analysis", "iac", "security"]
  },
  {
    id: 38,
    category: "Cloud Security",
    title: "Trivy Vulnerability Scanner",
    description: "Comprehensive vulnerability scanner for containers and infrastructure",
    link: "https://trivy.dev/",
    icon: "fa-solid fa-scanner",
    tags: ["trivy", "vulnerability", "scanner", "containers"]
  },

  // Flutter Mobile Development Resources
  {
    id: 39,
    category: "Flutter Mobile Development",
    title: "Flutter Official Documentation",
    description: "Complete guide to building apps with Google's UI toolkit",
    link: "https://flutter.dev/docs",
    icon: "fa-solid fa-mobile-alt",
    tags: ["flutter", "mobile", "documentation", "ui"]
  },
  {
    id: 40,
    category: "Flutter Mobile Development",
    title: "Dart Programming Language",
    description: "Official Dart language documentation and resources",
    link: "https://dart.dev/",
    icon: "fa-solid fa-code",
    tags: ["dart", "programming", "language", "flutter"]
  },
  {
    id: 41,
    category: "Flutter Mobile Development",
    title: "Pub.dev - Flutter Packages",
    description: "Official package repository for Dart and Flutter",
    link: "https://pub.dev/",
    icon: "fa-solid fa-cube",
    tags: ["packages", "pub", "flutter", "dart"]
  },
  {
    id: 42,
    category: "Flutter Mobile Development",
    title: "Flutter Widget Catalog",
    description: "Comprehensive catalog of Flutter widgets and examples",
    link: "https://flutter.dev/docs/development/ui/widgets",
    icon: "fa-solid fa-th-large",
    tags: ["widgets", "ui", "components", "flutter"]
  },
  {
    id: 43,
    category: "Flutter Mobile Development",
    title: "Flutter Cookbook",
    description: "Solutions to common Flutter development problems",
    link: "https://flutter.dev/docs/cookbook",
    icon: "fa-solid fa-book",
    tags: ["cookbook", "examples", "solutions", "flutter"]
  },
  {
    id: 44,
    category: "Flutter Mobile Development",
    title: "Firebase for Flutter",
    description: "Google's mobile platform integration with Flutter",
    link: "https://firebase.flutter.dev/",
    icon: "fa-solid fa-fire",
    tags: ["firebase", "backend", "flutter", "google"]
  },
  {
    id: 45,
    category: "Flutter Mobile Development",
    title: "Flutter State Management",
    description: "Guide to state management patterns in Flutter",
    link: "https://flutter.dev/docs/development/data-and-backend/state-mgmt",
    icon: "fa-solid fa-sitemap",
    tags: ["state-management", "architecture", "flutter", "patterns"]
  },
  {
    id: 46,
    category: "Flutter Mobile Development",
    title: "Flutter Performance Best Practices",
    description: "Optimization techniques for Flutter applications",
    link: "https://flutter.dev/docs/perf/best-practices",
    icon: "fa-solid fa-tachometer-alt",
    tags: ["performance", "optimization", "best-practices", "flutter"]
  },
  {
    id: 47,
    category: "Flutter Mobile Development",
    title: "GetX Flutter Package",
    description: "High-performance state management and dependency injection",
    link: "https://pub.dev/packages/get",
    icon: "fa-solid fa-rocket",
    tags: ["getx", "state-management", "navigation", "flutter"]
  },
  {
    id: 48,
    category: "Flutter Mobile Development",
    title: "Provider State Management",
    description: "Recommended state management solution for Flutter",
    link: "https://pub.dev/packages/provider",
    icon: "fa-solid fa-share-alt",
    tags: ["provider", "state-management", "flutter", "recommended"]
  },
  {
    id: 49,
    category: "Flutter Mobile Development",
    title: "Flutter Testing Guide",
    description: "Complete guide to testing Flutter applications",
    link: "https://flutter.dev/docs/testing",
    icon: "fa-solid fa-vial",
    tags: ["testing", "unit-tests", "integration", "flutter"]
  },
  {
    id: 50,
    category: "Flutter Mobile Development",
    title: "Awesome Flutter",
    description: "Curated list of Flutter resources, plugins, and examples",
    link: "https://github.com/Solido/awesome-flutter",
    icon: "fa-brands fa-github",
    tags: ["awesome", "resources", "community", "flutter"]
  },
  {
    id: 51,
    category: "Flutter Mobile Development",
    title: "Flutter DevTools",
    description: "Suite of debugging and performance tools for Flutter",
    link: "https://flutter.dev/docs/development/tools/devtools",
    icon: "fa-solid fa-tools",
    tags: ["devtools", "debugging", "performance", "flutter"]
  },
  {
    id: 52,
    category: "Flutter Mobile Development",
    title: "Flutter Animation Guide",
    description: "Comprehensive guide to animations in Flutter",
    link: "https://flutter.dev/docs/development/ui/animations",
    icon: "fa-solid fa-play-circle",
    tags: ["animations", "ui", "effects", "flutter"]
  },
  {
    id: 53,
    category: "Flutter Mobile Development",
    title: "Flutter Web Support",
    description: "Build web applications with Flutter framework",
    link: "https://flutter.dev/web",
    icon: "fa-solid fa-globe",
    tags: ["web", "cross-platform", "flutter", "responsive"]
  },
  {
    id: 54,
    category: "Flutter Mobile Development",
    title: "Flutter Desktop Support",
    description: "Build desktop applications with Flutter",
    link: "https://flutter.dev/desktop",
    icon: "fa-solid fa-desktop",
    tags: ["desktop", "cross-platform", "flutter", "native"]
  }
];

export const resourceCategories = [
  "All",
  "Google Cloud",
  "DevOps", 
  "Cloud Security",
  "Flutter Mobile Development"
]; 