import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { findToolBySlug, slugifyToolName, trainingToolCategories } from "@/data/trainingTools.js";

const detailByCategory = {
  cloud: {
    outcomes: [
      "Understand service selection for compute, storage, networking, and security.",
      "Design scalable and resilient cloud architecture for production workloads.",
      "Apply cost optimization and monitoring practices for cloud operations.",
    ],
    projects: [
      "Deploy a production-ready application on cloud infrastructure.",
      "Implement IAM, monitoring, backups, and environment isolation.",
      "Create deployment checklists and operational runbooks.",
    ],
  },
  development: {
    outcomes: [
      "Build clean, maintainable applications with modern engineering practices.",
      "Develop robust APIs, frontend UIs, and integrated full-stack systems.",
      "Apply testing, debugging, and performance optimization workflows.",
    ],
    projects: [
      "Create a full-stack feature from UI to database.",
      "Design reusable components and scalable backend modules.",
      "Implement secure authentication and deployment pipelines.",
    ],
  },
  "data-ai": {
    outcomes: [
      "Build data and AI workflows from dataset preparation to model evaluation.",
      "Design Gen AI and agentic AI pipelines with reliability and observability.",
      "Work with analytics and BI tools for decision-ready reporting.",
    ],
    projects: [
      "Implement a mini end-to-end ML or Gen AI use case.",
      "Create RAG-ready data processing and evaluation steps.",
      "Publish dashboards and explain model outcomes for stakeholders.",
    ],
  },
  devops: {
    outcomes: [
      "Automate build, test, release, and infrastructure workflows.",
      "Implement monitoring, alerting, and reliability best practices.",
      "Improve delivery speed while maintaining stability and control.",
    ],
    projects: [
      "Build a CI/CD pipeline for a real application.",
      "Create IaC templates and environment provisioning workflows.",
      "Set up observability dashboards and actionable alerts.",
    ],
  },
  databases: {
    outcomes: [
      "Design schemas and query patterns for performance and scale.",
      "Choose the right relational or NoSQL database for each use case.",
      "Implement backup, indexing, and reliability practices.",
    ],
    projects: [
      "Model and optimize data for transactional and analytical workloads.",
      "Build database-backed APIs with strong validation and security.",
      "Configure backup and recovery processes for production systems.",
    ],
  },
};

const TrainingToolDetail = () => {
  const { slug } = useParams();
  const matched = findToolBySlug(slug || "");

  if (!matched) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-slate-600 text-lg">Tool information not found.</p>
        <Link to="/training" className="text-primary underline">Back to Training</Link>
      </div>
    );
  }

  const { category, tool } = matched;
  const categoryDetail = detailByCategory[category.id] || detailByCategory.development;

  const allTools = trainingToolCategories.flatMap((cat) =>
    cat.tools.map((t) => ({
      categoryId: cat.id,
      categoryTitle: cat.title,
      name: t.name,
      info: t.info,
      slug: slugifyToolName(t.name),
    }))
  );

  const currentIndex = allTools.findIndex((t) => t.slug === slug);
  const prevTool = currentIndex > 0 ? allTools[currentIndex - 1] : null;
  const nextTool = currentIndex < allTools.length - 1 ? allTools[currentIndex + 1] : null;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <Link
            to={`/training#${category.id}`}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to {category.title}
          </Link>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{category.title}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{tool.name}</h1>
            <p className="text-slate-600 text-base leading-relaxed">{tool.info}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-300 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">What You Will Learn</h2>
              <div className="space-y-3">
                {categoryDetail.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-300 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Hands-On Coverage</h2>
              <div className="space-y-3">
                {categoryDetail.projects.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-300 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Category</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">{category.subtitle}</p>
              <Link to={`/training#${category.id}`} className="text-primary text-sm font-medium hover:underline">
                View all tools in {category.title}
              </Link>
            </div>

            <div className="bg-white border border-slate-300 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Apply This Skill</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                This tool is taught with practical use cases, guided implementation, and project-oriented learning.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all"
                style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
              >
                Enquire Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
          {prevTool ? (
            <Link
              to={`/training/tools/${prevTool.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>{prevTool.name}</span>
            </Link>
          ) : <div />}

          {nextTool ? (
            <Link
              to={`/training/tools/${nextTool.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <span>{nextTool.name}</span>
              <ArrowRight size={16} />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};

export default TrainingToolDetail;
