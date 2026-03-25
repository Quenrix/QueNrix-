export const trainingToolCategories = [
  {
    id: "cloud",
    title: "Cloud",
    subtitle: "Platform architecture, deployment, and cloud operations",
    tools: [
      { name: "AWS", info: "Core cloud services, IAM, networking, and production deployment practices." },
      { name: "GCP", info: "Cloud-native app deployment, managed services, and analytics workflows." },
      { name: "Azure", info: "Enterprise cloud setup, identity integration, and secure application hosting." },
      { name: "CloudFront", info: "Global content delivery and edge caching for high-performance web apps." },
      { name: "Cloudflare", info: "Security, DNS, edge performance, and traffic protection for internet apps." },
      { name: "EKS / GKE / AKS", info: "Managed Kubernetes services for scalable container orchestration on cloud." },
    ],
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Full-stack engineering with modern frameworks and languages",
    tools: [
      { name: "Python", info: "API development, automation scripts, and backend problem solving." },
      { name: "TypeScript / JavaScript", info: "Scalable frontend and backend development with strong coding standards." },
      { name: "Go", info: "High-performance backend services and concurrent system design." },
      { name: ".NET", info: "Enterprise-grade application development with robust architecture patterns." },
      { name: "Java", info: "Object-oriented backend systems and production-ready API design." },
      { name: "React", info: "Component-driven UI development and state management best practices." },
      { name: "Next.js", info: "Production-grade React framework with SSR, routing, and performance optimization." },
      { name: "Node.js", info: "JavaScript runtime for backend APIs, services, and event-driven applications." },
      { name: "Flutter", info: "Cross-platform mobile app development with a single codebase." },
      { name: "Angular", info: "Structured enterprise frontend development with modular architecture." },
      { name: "Django", info: "Rapid backend development with ORM, admin, and secure defaults." },
      { name: "FastAPI", info: "High-speed Python API development with async support and type validation." },
      { name: "Express.js", info: "Minimal Node.js backend framework for REST and service integration." },
      { name: "Spring Boot", info: "Java-based backend framework for enterprise microservices and APIs." },
      { name: "React Native", info: "Cross-platform mobile app development using React and JavaScript/TypeScript." },
    ],
  },
  {
    id: "data-ai",
    title: "Data Science + Gen AI + Agentic AI",
    subtitle: "Analytics, machine learning, LLM engineering, and agent workflows",
    tools: [
      { name: "ML", info: "Supervised and unsupervised learning workflows from data to deployment." },
      { name: "DL", info: "Deep learning fundamentals for vision, NLP, and predictive systems." },
      { name: "Pandas", info: "Data cleaning, transformation, and analysis for real-world datasets." },
      { name: "NumPy", info: "Efficient numerical computing and array operations for ML and analytics." },
      { name: "Matplotlib", info: "Data visualization and storytelling using analytical charts." },
      { name: "Seaborn", info: "Statistical data visualization for clear and insightful charting." },
      { name: "Scikit-learn", info: "Classical machine learning pipelines and model evaluation." },
      { name: "PyTorch", info: "Neural network development, training, and experimentation workflows." },
      { name: "TensorFlow", info: "Production ML model building and scalable deep learning execution." },
      { name: "Hugging Face", info: "Using pretrained models and transformers for Gen AI applications." },
      { name: "OpenAI", info: "LLM API integration, prompt engineering, and AI product patterns." },
      { name: "Groq", info: "Low-latency inference workflows for real-time Gen AI experiences." },
      { name: "Databricks", info: "Unified data platform usage for analytics, ML, and data engineering." },
      { name: "Redshift", info: "Cloud data warehousing and high-performance analytical querying." },
      { name: "Data Lake", info: "Centralized large-scale storage architecture for analytics and AI." },
      { name: "Airflow", info: "Pipeline orchestration and scheduling for batch and ETL processes." },
      { name: "Spark", info: "Distributed data processing for large-scale transformation workloads." },
      { name: "ADLS", info: "Azure data lake storage architecture and secure data organization." },
      { name: "Azure Data Factory", info: "No-code/low-code data pipeline integration and movement." },
      { name: "Power BI", info: "Dashboard building and business reporting with interactive analytics." },
      { name: "Tableau", info: "Visual analytics and executive reporting with dynamic dashboards." },
      { name: "LangChain", info: "LLM workflow composition for RAG and tool-augmented assistants." },
      { name: "LangGraph", info: "State-driven agent orchestration for complex AI execution flows." },
      { name: "LangSmith", info: "Tracing, testing, and observability for LLM and agent applications." },
      { name: "LlamaIndex", info: "Data framework for building RAG applications over private knowledge sources." },
      { name: "Pinecone", info: "Vector database support for semantic search and retrieval systems." },
      { name: "ChromaDB", info: "Open-source vector database for local and production semantic retrieval workflows." },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Automation, delivery pipelines, observability, and reliability",
    tools: [
      { name: "Git & GitHub", info: "Version control strategy, branching, reviews, and CI integration." },
      { name: "Bitbucket", info: "Repository management and team-based code collaboration workflows." },
      { name: "Ansible", info: "Configuration management and repeatable server automation." },
      { name: "Docker", info: "Containerization fundamentals for consistent dev and production environments." },
      { name: "Docker Compose", info: "Multi-container local and staging environments for modern apps." },
      { name: "Jenkins", info: "Pipeline automation for build, test, and deployment operations." },
      { name: "AWS CI/CD Pipeline", info: "Continuous integration and delivery using AWS pipeline services." },
      { name: "CodeBuild", info: "Managed build automation for cloud-native release flows." },
      { name: "CodeTest", info: "Automated testing stage design in CI/CD workflows." },
      { name: "CodeDeploy", info: "Automated deployment service for reliable release management." },
      { name: "Terraform", info: "Infrastructure as Code for repeatable and versioned cloud provisioning." },
      { name: "Kubernetes", info: "Container orchestration, scaling, and production workload management." },
      { name: "Helm", info: "Kubernetes package management for repeatable and versioned deployments." },
      { name: "Argo CD", info: "GitOps-based continuous delivery for Kubernetes-native applications." },
      { name: "Prometheus", info: "Metrics collection and monitoring for service health visibility." },
      { name: "Grafana", info: "Observability dashboards and alert-driven performance monitoring." },
      { name: "SonarQube", info: "Code quality and security scanning integrated into CI pipelines." },
      { name: "ELK Stack", info: "Centralized logging and analysis using Elasticsearch, Logstash, and Kibana." },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Relational and NoSQL systems for transactional and analytical needs",
    tools: [
      { name: "PostgreSQL", info: "Advanced relational database design, indexing, and query optimization." },
      { name: "MS SQL", info: "Enterprise data management, procedures, and reporting integrations." },
      { name: "MongoDB", info: "Document database modeling for flexible schema applications." },
      { name: "MySQL", info: "Widely used relational database for web applications and transactional systems." },
      { name: "DynamoDB", info: "Serverless NoSQL design for highly scalable key-value workloads." },
      { name: "Redis", info: "In-memory data store for caching, sessions, and real-time performance." },
      { name: "AWS Aurora", info: "Managed relational database performance with high availability." },
      { name: "AWS RDS", info: "Managed database provisioning, backups, and production operations." },
      { name: "Oracle Database", info: "Enterprise relational database capabilities for large-scale mission-critical systems." },
    ],
  },
];

export const slugifyToolName = (name) =>
  name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const findToolBySlug = (slug) => {
  for (const category of trainingToolCategories) {
    for (const tool of category.tools) {
      if (slugifyToolName(tool.name) === slug) {
        return { category, tool };
      }
    }
  }
  return null;
};
