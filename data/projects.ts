import { ProjectItem } from "@/types";

// TODO: replace with my info
export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Algorithm Visualizer",
    description: "An interactive web application designed to help students and developers visualize sorting, pathfinding, and graph traversal algorithms step-by-step with adjustable execution speed.",
    technologies: ["React", "TypeScript", "Canvas API", "Tailwind CSS"],
    year: "2024",
    githubUrl: "https://github.com/example-handle/algorithm-visualizer",
    liveUrl: "https://algorithm-visualizer.example.com",
    featured: true
  },
  {
    id: "proj-2",
    title: "Lightweight Key-Value Store",
    description: "An embeddable, append-only LSM-tree storage engine written in Go with write-ahead logging (WAL), SSTable compaction, and bloom filter lookups.",
    technologies: ["Go", "LSM Tree", "Bloom Filters", "Concurrency"],
    year: "2023",
    githubUrl: "https://github.com/example-handle/lsm-kv-store",
    liveUrl: undefined,
    featured: true
  },
  {
    id: "proj-3",
    title: "C Subset Compiler",
    description: "A multi-pass compiler translating a C-like procedural programming language into optimized assembly code. Implemented lexical analysis, abstract syntax tree (AST) construction, and semantic verification.",
    technologies: ["C++", "Flex", "Bison", "x86-64 Assembly"],
    year: "2023",
    githubUrl: "https://github.com/example-handle/c-subset-compiler",
    liveUrl: undefined,
    featured: false
  }
];
