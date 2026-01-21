import { Ticket } from "../entities/ticket";
import { ticketStatus } from "./ticket-status.mock";
import { userList } from "./user.mock";

export const ticketList: Ticket[] = [
  // ------- EPIC 1 -------
  {
    id: 1,
    title: "Improve authentication module ",
    description: "Epic: Modernize authentication flow and increase security.",
    status: ticketStatus[0],
    createdBy: userList[1].id,
    createdIn: new Date(),
    childTickets: [2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Add JWT token refresh endpoint",
    description: "Implement refresh-token API with expiration validation.",
    status: ticketStatus[0],
    createdBy: userList[9].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 3,
    title: "Refactor login controller",
    description: "Clean up legacy login flow and remove unused logic.",
    status: ticketStatus[1],
    createdBy: userList[10].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 4,
    title: "Implement failed login rate-limiting",
    description: "Add per-user and per-IP rate limiting rules.",
    status: ticketStatus[0],
    createdBy: userList[11].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 5,
    title: "Create unit tests for authentication service.",
    description: "Increase coverage for authentication utils and services.",
    status: ticketStatus[1],
    createdBy: userList[0].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- EPIC 2 -------
  {
    id: 6,
    title: "Frontend UI redesign",
    description: "Epic: Update layout following new design guidelines.",
    status: ticketStatus[1],
    createdBy: userList[4].id,
    createdIn: new Date(),
    childTickets: [7, 8, 9, 10]
  },
  {
    id: 7,
    title: "Update navigation sidebar layout",
    description: "Implement new spacing and icons as per Figma design.",
    status: ticketStatus[0],
    createdBy: userList[5].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 8,
    title: "Refactor dashboard components",
    description: "Break down container components into smaller units.",
    status: ticketStatus[1],
    createdBy: userList[0].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 9,
    title: "Improve form validation UX",
    description: "Add inline validation messages and highlight invalid fields.",
    status: ticketStatus[0],
    createdBy: userList[7].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 10,
    title: "Replace deprecated CSS utilities",
    description: "Remove old variables and adopt new global theme tokens.",
    status: ticketStatus[6],
    createdBy: userList[8].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- EPIC 3 -------
  {
    id: 11,
    title: "CI/CD pipeline improvements",
    description: "Epic: Reduce build time and increase deployment reliability.",
    status: ticketStatus[1],
    createdBy: userList[17].id,
    createdIn: new Date(),
    childTickets: [12, 13, 14, 15]
  },
  {
    id: 12,
    title: "Cache npm dependencies in pipeline",
    description: "Speed up installation using dependency caching.",
    status: ticketStatus[0],
    createdBy: userList[18].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 13,
    title: "Add integration tests step",
    description: "Ensure API and frontend endpoints work after build.",
    status: ticketStatus[1],
    createdBy: userList[19].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 14,
    title: "Create rollback task for production",
    description: "Enable fast rollback with image tagging strategy.",
    status: ticketStatus[0],
    createdBy: userList[16].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 15,
    title: "Parallelize lint and unit tests",
    description: "Reduce execution time by splitting tasks.",
    status: ticketStatus[6],
    createdBy: userList[13].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- EPIC 4 -------
  {
    id: 16,
    title: "API performance optimization",
    description: "Epic: Improve overall response times for critical endpoints.",
    status: ticketStatus[0],
    createdBy: userList[9].id,
    createdIn: new Date(),
    childTickets: [17, 18, 19, 20]
  },
  {
    id: 17,
    title: "Add Redis caching for product service",
    description: "Cache heavy product queries to reduce DB load.",
    status: ticketStatus[1],
    createdBy: userList[3].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 18,
    title: "Optimize SQL queries in reporting endpoint",
    description: "Remove unnecessary joins and add indexes.",
    status: ticketStatus[0],
    createdBy: userList[2].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 19,
    title: "Benchmark API under load",
    description: "Compare performance before and after optimizations.",
    status: ticketStatus[0],
    createdBy: userList[1].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 20,
    title: "Refactor pagination logic",
    description: "Fix inconsistent results on multi-page responses.",
    status: ticketStatus[6],
    createdBy: userList[12].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- EPIC 5 -------
  {
    id: 21,
    title: "QA automation suite expansion",
    description: "Epic: Increase test automation coverage.",
    status: ticketStatus[1],
    createdBy: userList[14].id,
    createdIn: new Date(),
    childTickets: [22, 23, 24, 25]
  },
  {
    id: 22,
    title: "Add automated login tests",
    description: "Cover positive and negative login flows.",
    status: ticketStatus[0],
    createdBy: userList[13].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 23,
    title: "Write UI tests for checkout",
    description: "Verify cart, payment and confirmation screens.",
    status: ticketStatus[1],
    createdBy: userList[15].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 24,
    title: "Mock API layer for test isolation",
    description: "Use mock services to stabilize test runs.",
    status: ticketStatus[0],
    createdBy: userList[16].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 25,
    title: "Measure automation test flakiness",
    description: "Collect metrics to identify unstable tests.",
    status: ticketStatus[6],
    createdBy: userList[14].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- EPIC 6 -------
  {
    id: 26,
    title: "Payment gateway migration",
    description: "Epic: Replace legacy payment provider.",
    status: ticketStatus[1],
    createdBy: userList[11].id,
    createdIn: new Date(),
    childTickets: [27, 28, 29, 30]
  },
  {
    id: 27,
    title: "Integrate new payment API",
    description: "Add endpoints for card and boleto transactions.",
    status: ticketStatus[0],
    createdBy: userList[10].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 28,
    title: "Implement webhook processing",
    description: "Process async payment confirmations and failures.",
    status: ticketStatus[1],
    createdBy: userList[0].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 29,
    title: "Migrate card tokenization flow",
    description: "Move from legacy tokens to encrypted tokens.",
    status: ticketStatus[0],
    createdBy: userList[9].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 30,
    title: "Add payment retry mechanism",
    description: "Retry failed payments respecting idempotency rules.",
    status: ticketStatus[6],
    createdBy: userList[5].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- Extra tickets: bugs + tasks (10 itens) -------
  {
    id: 31,
    title: "Fix memory leak in WebSocket service",
    description: "Investigate event listeners not being unsubscribed.",
    status: ticketStatus[1],
    createdBy: userList[7].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 32,
    title: "Bug: Incorrect total price on checkout",
    description: "Discount rules not being applied correctly.",
    status: ticketStatus[0],
    createdBy: userList[8].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 33,
    title: "Add feature toggle for new dashboard",
    description: "Enable gradual rollout of redesigned dashboard.",
    status: ticketStatus[0],
    createdBy: userList[9].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 34,
    title: "Implement dark mode theme",
    description: "Add toggle and adjust layout for dark mode colors.",
    status: ticketStatus[6],
    createdBy: userList[3].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 35,
    title: "Fix file upload validation error",
    description: "Large files incorrectly trigger 'invalid format'.",
    status: ticketStatus[5],
    createdBy: userList[1].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 36,
    title: "Refactor email notification service",
    description: "Improve delivery reliability and retry logic.",
    status: ticketStatus[1],
    createdBy: userList[4].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 37,
    title: "Improve search relevance algorithm",
    description: "Tune ranking model for more accurate results.",
    status: ticketStatus[0],
    createdBy: userList[6].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 38,
    title: "Log cleanup task",
    description: "Purge old logs and reduce disk usage.",
    status: ticketStatus[6],
    createdBy: userList[19].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 39,
    title: "Fix 500 error in analytics endpoint",
    description: "Null reference in mapping layer.",
    status: ticketStatus[0],
    createdBy: userList[17].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 40,
    title: "Update dependencies to latest versions",
    description: "Upgrade Angular, NestJS, and shared packages.",
    status: ticketStatus[6],
    createdBy: userList[18].id,
    createdIn: new Date(),
    childTickets: []
  },

  // ------- Últimos 10 para completar 50 -------
  {
    id: 41,
    title: "Fix inconsistent timezone handling",
    description: "Normalize timezone conversion in backend.",
    status: ticketStatus[1],
    createdBy: userList[2].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 42,
    title: "Create audit log dashboard",
    description: "Display user activity logs for admins.",
    status: ticketStatus[0],
    createdBy: userList[5].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 43,
    title: "Add multi-language support",
    description: "Start with English and Spanish translations.",
    status: ticketStatus[0],
    createdBy: userList[7].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 44,
    title: "Investigate slow DB queries",
    description: "Identify heavy queries and propose optimizations.",
    status: ticketStatus[1],
    createdBy: userList[8].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 45,
    title: "Create internal API documentation",
    description: "Auto-generate docs using Swagger.",
    status: ticketStatus[6],
    createdBy: userList[10].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 46,
    title: "Fix logout redirect issue",
    description: "User session is cleared but redirect fails.",
    status: ticketStatus[0],
    createdBy: userList[11].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 47,
    title: "Enhance logging middleware",
    description: "Add latency measurement and user ID tracing.",
    status: ticketStatus[1],
    createdBy: userList[13].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 48,
    title: "Refactor date formatting utils",
    description: "Standardize date outputs across the app.",
    status: ticketStatus[6],
    createdBy: userList[14].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 49,
    title: "Bug: Chart legends not updating",
    description: "Legends remain outdated after filter changes.",
    status: ticketStatus[0],
    createdBy: userList[0].id,
    createdIn: new Date(),
    childTickets: []
  },
  {
    id: 50,
    title: "Improve accessibility support",
    description: "Add ARIA labels and keyboard navigation.",
    status: ticketStatus[1],
    createdBy: userList[16].id,
    createdIn: new Date(),
    childTickets: []
  }
];