import { TicketStatusEnums } from "../enums/ticket-status";
import { Ticket } from "../entities/ticket";
import { userList } from "./user.mock";

export const tickets: Ticket[] = [
  // ------- EPIC 1 -------
  {
    id: 1,
    title: "Improve authentication module",
    description: "Epic: Modernize authentication flow and increase security.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[1],
    createdIn: new Date(),
    childTicketsId: [2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Add JWT token refresh endpoint",
    description: "Implement refresh-token API with expiration validation.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[9],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 3,
    title: "Refactor login controller",
    description: "Clean up legacy login flow and remove unused logic.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[10],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 4,
    title: "Implement failed login rate-limiting",
    description: "Add per-user and per-IP rate limiting rules.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[11],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 5,
    title: "Create unit tests for authentication service",
    description: "Increase coverage for authentication utils and services.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[12],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- EPIC 2 -------
  {
    id: 6,
    title: "Frontend UI redesign",
    description: "Epic: Update layout following new design guidelines.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[4],
    createdIn: new Date(),
    childTicketsId: [7, 8, 9, 10]
  },
  {
    id: 7,
    title: "Update navigation sidebar layout",
    description: "Implement new spacing and icons as per Figma design.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[5],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 8,
    title: "Refactor dashboard components",
    description: "Break down container components into smaller units.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 9,
    title: "Improve form validation UX",
    description: "Add inline validation messages and highlight invalid fields.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[7],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 10,
    title: "Replace deprecated CSS utilities",
    description: "Remove old variables and adopt new global theme tokens.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[8],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- EPIC 3 -------
  {
    id: 11,
    title: "CI/CD pipeline improvements",
    description: "Epic: Reduce build time and increase deployment reliability.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[17],
    createdIn: new Date(),
    childTicketsId: [12, 13, 14, 15]
  },
  {
    id: 12,
    title: "Cache npm dependencies in pipeline",
    description: "Speed up installation using dependency caching.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[18],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 13,
    title: "Add integration tests step",
    description: "Ensure API and frontend endpoints work after build.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[19],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 14,
    title: "Create rollback task for production",
    description: "Enable fast rollback with image tagging strategy.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[16],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 15,
    title: "Parallelize lint and unit tests",
    description: "Reduce execution time by splitting tasks.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[13],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- EPIC 4 -------
  {
    id: 16,
    title: "API performance optimization",
    description: "Epic: Improve overall response times for critical endpoints.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[9],
    createdIn: new Date(),
    childTicketsId: [17, 18, 19, 20]
  },
  {
    id: 17,
    title: "Add Redis caching for product service",
    description: "Cache heavy product queries to reduce DB load.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[3],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 18,
    title: "Optimize SQL queries in reporting endpoint",
    description: "Remove unnecessary joins and add indexes.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[2],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 19,
    title: "Benchmark API under load",
    description: "Compare performance before and after optimizations.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[1],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 20,
    title: "Refactor pagination logic",
    description: "Fix inconsistent results on multi-page responses.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[12],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- EPIC 5 -------
  {
    id: 21,
    title: "QA automation suite expansion",
    description: "Epic: Increase test automation coverage.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[14],
    createdIn: new Date(),
    childTicketsId: [22, 23, 24, 25]
  },
  {
    id: 22,
    title: "Add automated login tests",
    description: "Cover positive and negative login flows.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[13],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 23,
    title: "Write UI tests for checkout",
    description: "Verify cart, payment and confirmation screens.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[15],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 24,
    title: "Mock API layer for test isolation",
    description: "Use mock services to stabilize test runs.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[16],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 25,
    title: "Measure automation test flakiness",
    description: "Collect metrics to identify unstable tests.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[14],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- EPIC 6 -------
  {
    id: 26,
    title: "Payment gateway migration",
    description: "Epic: Replace legacy payment provider.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[11],
    createdIn: new Date(),
    childTicketsId: [27, 28, 29, 30]
  },
  {
    id: 27,
    title: "Integrate new payment API",
    description: "Add endpoints for card and boleto transactions.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[10],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 28,
    title: "Implement webhook processing",
    description: "Process async payment confirmations and failures.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 29,
    title: "Migrate card tokenization flow",
    description: "Move from legacy tokens to encrypted tokens.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[9],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 30,
    title: "Add payment retry mechanism",
    description: "Retry failed payments respecting idempotency rules.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[5],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- Extra tickets: bugs + tasks (10 itens) -------
  {
    id: 31,
    title: "Fix memory leak in WebSocket service",
    description: "Investigate event listeners not being unsubscribed.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[7],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 32,
    title: "Bug: Incorrect total price on checkout",
    description: "Discount rules not being applied correctly.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[8],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 33,
    title: "Add feature toggle for new dashboard",
    description: "Enable gradual rollout of redesigned dashboard.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[9],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 34,
    title: "Implement dark mode theme",
    description: "Add toggle and adjust layout for dark mode colors.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[3],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 35,
    title: "Fix file upload validation error",
    description: "Large files incorrectly trigger 'invalid format'.",
    status: TicketStatusEnums.CANCELED,
    createdBy: userList[1],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 36,
    title: "Refactor email notification service",
    description: "Improve delivery reliability and retry logic.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[4],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 37,
    title: "Improve search relevance algorithm",
    description: "Tune ranking model for more accurate results.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[6],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 38,
    title: "Log cleanup task",
    description: "Purge old logs and reduce disk usage.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[19],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 39,
    title: "Fix 500 error in analytics endpoint",
    description: "Null reference in mapping layer.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[17],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 40,
    title: "Update dependencies to latest versions",
    description: "Upgrade Angular, NestJS, and shared packages.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[18],
    createdIn: new Date(),
    childTicketsId: []
  },

  // ------- Últimos 10 para completar 50 -------
  {
    id: 41,
    title: "Fix inconsistent timezone handling",
    description: "Normalize timezone conversion in backend.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[2],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 42,
    title: "Create audit log dashboard",
    description: "Display user activity logs for admins.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[5],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 43,
    title: "Add multi-language support",
    description: "Start with English and Spanish translations.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[7],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 44,
    title: "Investigate slow DB queries",
    description: "Identify heavy queries and propose optimizations.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[8],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 45,
    title: "Create internal API documentation",
    description: "Auto-generate docs using Swagger.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[10],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 46,
    title: "Fix logout redirect issue",
    description: "User session is cleared but redirect fails.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[11],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 47,
    title: "Enhance logging middleware",
    description: "Add latency measurement and user ID tracing.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[13],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 48,
    title: "Refactor date formatting utils",
    description: "Standardize date outputs across the app.",
    status: TicketStatusEnums.DONE,
    createdBy: userList[14],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 49,
    title: "Bug: Chart legends not updating",
    description: "Legends remain outdated after filter changes.",
    status: TicketStatusEnums.OPEN,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: []
  },
  {
    id: 50,
    title: "Improve accessibility support",
    description: "Add ARIA labels and keyboard navigation.",
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[16],
    createdIn: new Date(),
    childTicketsId: []
  }
];