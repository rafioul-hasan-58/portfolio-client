import { ExperienceItem } from "@/types";

// TODO: replace with my info
export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Research Engineer",
    company: "Apex Tech Labs",
    companyUrl: "https://example.com/apex-labs",
    location: "San Francisco, CA",
    period: "July 2024 – Present",
    summary: "Conducting applied research and engineering in high-dimensional vector search, approximate nearest neighbor (ANN) indexes, and memory-efficient quantization strategies for large-scale embeddings.",
    bulletPoints: [
      "Engineered an optimized SIMD-accelerated product quantization kernel, lowering search latency by 32% on million-scale vectors.",
      "Collaborated with cross-functional teams to integrate real-time storage compaction for high-throughput streaming workloads.",
      "Benchmarked memory-mapped storage backends to achieve sub-5ms retrieval p99 latencies."
    ],
    skills: ["C++", "Python", "Vector Databases", "Distributed Storage", "SIMD"]
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "CloudScale Systems",
    companyUrl: "https://example.com/cloudscale",
    location: "Remote",
    period: "Jan 2023 – June 2024",
    summary: "Worked on core event-driven backend microservices and developer APIs supporting high-throughput SaaS integrations across multiple regions.",
    bulletPoints: [
      "Architected a pub/sub event pipeline using Kafka and Go that handled over 40M daily webhook dispatches.",
      "Redesigned the role-based access control (RBAC) security layer, reducing authentication overhead by 45%.",
      "Created automated integration testing pipelines with Testcontainers, improving CI reliability."
    ],
    skills: ["Go", "Node.js", "PostgreSQL", "Kafka", "Docker", "Kubernetes"]
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern",
    company: "DataPulse Solutions",
    companyUrl: "https://example.com/datapulse",
    location: "City, Country",
    period: "June 2022 – Dec 2022",
    summary: "Assisted the core infrastructure team in migrating on-premise monolithic batch jobs to containerized serverless tasks on AWS.",
    bulletPoints: [
      "Refactored legacy SQL batch reporting queries, cutting execution runtime from 45 minutes to 8 minutes.",
      "Built internal observability dashboards in Grafana and Prometheus monitoring endpoint health and error rates."
    ],
    skills: ["Python", "SQL", "AWS", "Docker", "Prometheus"]
  }
];
