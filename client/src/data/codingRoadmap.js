// ==========================================================
// AI Interview Preparation Platform - Coding Practice Data
// Author: Raman Agnihotri
// ==========================================================

// ---------------------- Coding Statistics ----------------------

export const codingStats = {
  totalProblems: 87,
  solvedProblems: 0,

  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,

  currentStreak: 0,
  longestStreak: 0,

  targetDays: 60,
  completedDays: 1,

  completedPhases: 0,
  currentPhase: 1,

  totalEasy: 44,
  totalMedium: 36,
  totalHard: 7,

  completionPercentage: 0,
};

// ---------------------- Daily Challenge ----------------------

export const dailyChallenge = {
  id: 1,

  title: "Two Sum",

  difficulty: "Easy",

  topic: "Array + HashMap",

  company: ["HCLTech", "TCS", "Infosys"],

  leetcodeId: 1,

  description:
    "Find two numbers whose sum equals the target using HashMap.",

  estimatedTime: "20 Minutes",

  points: 10,

  status: "pending",

  solved: false,

  link: "https://leetcode.com/problems/two-sum/",
};

// ---------------------- HCLTech Priority Topics ----------------------

export const priorityTopics = [
  { topic: "Arrays", priority: 5, color: "green" },
  { topic: "Strings", priority: 5, color: "green" },
  { topic: "HashMap / HashSet", priority: 5, color: "green" },
  { topic: "Sliding Window", priority: 5, color: "green" },
  { topic: "Prefix Sum", priority: 4, color: "blue" },
  { topic: "Binary Search", priority: 4, color: "blue" },
  { topic: "Stack & Queue", priority: 4, color: "blue" },
  { topic: "Linked List", priority: 3, color: "yellow" },
  { topic: "Trees", priority: 3, color: "yellow" },
  { topic: "Dynamic Programming", priority: 3, color: "orange" },
];

// ---------------------- 60 Day Plan ----------------------

export const sixtyDayPlan = [
  { week: "Day 1-7", focus: "Arrays + Strings + Pattern Problems" },
  { week: "Day 8-14", focus: "Two Pointer + HashMap + HashSet" },
  { week: "Day 15-21", focus: "Sliding Window + Prefix Sum" },
  { week: "Day 22-28", focus: "Binary Search + Sorting" },
  { week: "Day 29-35", focus: "Stack + Queue + Linked List" },
  { week: "Day 36-42", focus: "Trees + Heap / Priority Queue" },
  { week: "Day 43-50", focus: "Graphs + BFS + DFS" },
  { week: "Day 51-60", focus: "DP + Greedy + Backtracking + Mock Tests" },
];

// ---------------------- Day Wise Roadmap ----------------------

export const dayWiseRoadmap = [
  {
    day: 1,
    title: "Arrays Fundamentals",
    completed: true,
    topics: [
      "Time Complexity",
      "Space Complexity",
      "Big O",
      "Array Basics",
      "Patterns",
    ],
    problems: ["Two Sum", "Running Sum", "Contains Duplicate"],
  },

  {
    day: 2,
    title: "Strings Mastery",
    completed: false,
    topics: [
      "String Traversal",
      "Palindrome",
      "HashMap on Strings",
      "Frequency Array",
    ],
    problems: [
      "Valid Anagram",
      "Valid Palindrome",
      "Length of Last Word",
      "Reverse Words in String III",
      "Roman to Integer",
    ],
  },

  {
    day: 3,
    title: "Two Pointer Pattern",
    completed: false,
    topics: [
      "Left Pointer",
      "Right Pointer",
      "Reverse String",
      "Move Zeroes",
    ],
    problems: [
      "Reverse String",
      "Move Zeroes",
      "Merge Sorted Array",
      "Remove Duplicates",
    ],
  },

  {
    day: 4,
    title: "HashMap + HashSet",
    completed: false,
    topics: ["HashMap Basics", "HashSet Basics", "Frequency Map"],
    problems: [
      "Contains Duplicate",
      "Group Anagrams",
      "First Unique Character",
    ],
  },

  {
    day: 5,
    title: "Sliding Window Basics",
    completed: false,
    topics: [
      "Fixed Window",
      "Variable Window",
      "Expand & Shrink Window",
    ],
    problems: [
      "Maximum Average Subarray I",
      "Maximum Vowels",
      "Minimum Size Subarray Sum",
    ],
  },
];

// ---------------------- Coding Phases ----------------------

export const codingPhases = [
  {
  id: 1,
  title: "Phase 1 — Arrays & Basics",
  description: "Variables, Arrays, Strings, Two Pointer Basics",
  progress: 0,
  totalProblems: 10,
  difficulty: { easy: 10, medium: 0, hard: 0 },

  problems: [
    {
      id: 1,
      name: "Two Sum",
      difficulty: "Easy",
      topic: "HashMap",
      status: "pending",
      link: "https://leetcode.com/problems/two-sum/",
    },

    {
      id: 1480,
      name: "Running Sum of 1D Array",
      difficulty: "Easy",
      topic: "Prefix Sum",
      status: "pending",
      link: "https://leetcode.com/problems/two-sum/",
    },

    {
      id: 217,
      name: "Contains Duplicate",
      difficulty: "Easy",
      topic: "HashSet",
      status: "pending",
      link: "https://leetcode.com/problems/contains-duplicate/",
    },

    {
      id: 88,
      name: "Merge Sorted Array",
      difficulty: "Easy",
      topic: "Two Pointer",
      status: "pending",
      link: "https://leetcode.com/problems/merge-sorted-array/",
    },

    {
      id: 121,
      name: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      topic: "Array",
      status: "pending",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },

    {
      id: 283,
      name: "Move Zeroes",
      difficulty: "Easy",
      topic: "Two Pointer",
      status: "pending",
      link: "https://leetcode.com/problems/move-zeroes/",
    },

    {
      id: 344,
      name: "Reverse String",
      difficulty: "Easy",
      topic: "Two Pointer",
      status: "pending",
      link: "https://leetcode.com/problems/reverse-string/",
    },

    {
      id: 27,
      name: "Remove Element",
      difficulty: "Easy",
      topic: "Array",
      status: "pending",
      link: "https://leetcode.com/problems/remove-element/",
    },

    {
      id: 26,
      name: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      topic: "Array",
      status: "pending",
      link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    },

    {
      id: 1920,
      name: "Build Array from Permutation",
      difficulty: "Easy",
      topic: "Array",
      status: "pending",
      link: "https://leetcode.com/problems/build-array-from-permutation/",
    },
  ],
},
  {
    id: 2,
    title: "Phase 2 — Strings",
    description: "String Traversal, Frequency Array, Mapping",
    progress: 0,
    totalProblems: 10,
    difficulty: { easy: 8, medium: 2, hard: 0 },
    problems: [
      { id: 242, name: "Valid Anagram", difficulty: "Easy", topic: "HashMap", status: "pending" },
      { id: 125, name: "Valid Palindrome", difficulty: "Easy", topic: "Two Pointer", status: "pending" },
      { id: 557, name: "Reverse Words in a String III", difficulty: "Easy", topic: "String", status: "pending" },
      { id: 58, name: "Length of Last Word", difficulty: "Easy", topic: "String", status: "pending" },
      { id: 13, name: "Roman to Integer", difficulty: "Easy", topic: "HashMap", status: "pending" },
      { id: 14, name: "Longest Common Prefix", difficulty: "Easy", topic: "String", status: "pending" },
      { id: 3498, name: "Reverse Degree of a String", difficulty: "Easy", topic: "ASCII", status: "pending" },
      { id: 205, name: "Isomorphic Strings", difficulty: "Easy", topic: "Mapping", status: "pending" },
      { id: 387, name: "First Unique Character in a String", difficulty: "Easy", topic: "Frequency Array", status: "pending" },
      { id: 49, name: "Group Anagrams", difficulty: "Medium", topic: "HashMap", status: "pending" },
    ],
  },

  {
    id: 3,
    title: "Phase 3 — Sliding Window ⭐",
    description: "Most Important Placement Topic",
    progress: 0,
    totalProblems: 10,
    difficulty: { easy: 2, medium: 8, hard: 0 },
    problems: [
      { id: 643, name: "Maximum Average Subarray I", difficulty: "Easy", topic: "Sliding Window", status: "pending" },
      { id: 1456, name: "Maximum Number of Vowels in a Substring", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 3, name: "Longest Substring Without Repeating Characters", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 567, name: "Permutation in String", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 904, name: "Fruit Into Baskets", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 1658, name: "Minimum Operations to Reduce X to Zero", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 209, name: "Minimum Size Subarray Sum", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 424, name: "Longest Repeating Character Replacement", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 930, name: "Binary Subarrays With Sum", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
      { id: 1004, name: "Max Consecutive Ones III", difficulty: "Medium", topic: "Sliding Window", status: "pending" },
    ],
  },

  {
    id: 4,
    title: "Phase 4 — Prefix Sum",
    description: "Prefix Sum + HashMap Pattern",
    progress: 0,
    totalProblems: 5,
    difficulty: { easy: 2, medium: 3, hard: 0 },
    problems: [
      { id: 1480, name: "Running Sum of 1D Array", difficulty: "Easy", topic: "Prefix Sum", status: "pending" },
      { id: 724, name: "Find Pivot Index", difficulty: "Easy", topic: "Prefix Sum", status: "pending" },
      { id: 560, name: "Subarray Sum Equals K", difficulty: "Medium", topic: "Prefix + HashMap", status: "pending" },
      { id: 523, name: "Continuous Subarray Sum", difficulty: "Medium", topic: "Modulo Prefix Sum", status: "pending" },
      { id: 303, name: "Range Sum Query", difficulty: "Easy", topic: "Prefix Array", status: "pending" },
    ],
  },

  {
    id: 5,
    title: "Phase 5 — Binary Search",
    description: "Searching Pattern",
    progress: 0,
    totalProblems: 6,
    difficulty: { easy: 3, medium: 3, hard: 0 },
    problems: [
      { id: 704, name: "Binary Search", difficulty: "Easy", topic: "Binary Search", status: "pending" },
      { id: 35, name: "Search Insert Position", difficulty: "Easy", topic: "Lower Bound", status: "pending" },
      { id: 278, name: "First Bad Version", difficulty: "Easy", topic: "Binary Search", status: "pending" },
      { id: 852, name: "Peak Index in Mountain Array", difficulty: "Easy", topic: "Binary Search", status: "pending" },
      { id: 33, name: "Search in Rotated Sorted Array", difficulty: "Medium", topic: "Binary Search", status: "pending" },
      { id: 153, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", topic: "Binary Search", status: "pending" },
    ],
  },

  {
    id: 6,
    title: "Phase 6 — Stack & Queue",
    description: "Monotonic Stack + Queue Design",
    progress: 0,
    totalProblems: 6,
    difficulty: { easy: 2, medium: 4, hard: 0 },
    problems: [
      { id: 20, name: "Valid Parentheses", difficulty: "Easy", topic: "Stack", status: "pending" },
      { id: 155, name: "Min Stack", difficulty: "Medium", topic: "Stack", status: "pending" },
      { id: 496, name: "Next Greater Element I", difficulty: "Easy", topic: "Monotonic Stack", status: "pending" },
      { id: 739, name: "Daily Temperatures", difficulty: "Medium", topic: "Monotonic Stack", status: "pending" },
      { id: 232, name: "Implement Queue using Stacks", difficulty: "Easy", topic: "Queue", status: "pending" },
      { id: 239, name: "Sliding Window Maximum", difficulty: "Hard", topic: "Deque", status: "pending" },
    ],
  },

  {
    id: 7,
    title: "Phase 7 — Linked List",
    description: "Fast Slow Pointer Pattern",
    progress: 0,
    totalProblems: 6,
    difficulty: { easy: 3, medium: 3, hard: 0 },
    problems: [
      { id: 206, name: "Reverse Linked List", difficulty: "Easy", topic: "Linked List", status: "pending" },
      { id: 876, name: "Middle of Linked List", difficulty: "Easy", topic: "Fast Slow Pointer", status: "pending" },
      { id: 141, name: "Linked List Cycle", difficulty: "Easy", topic: "Floyd Cycle", status: "pending" },
      { id: 21, name: "Merge Two Sorted Lists", difficulty: "Easy", topic: "Merge", status: "pending" },
      { id: 19, name: "Remove Nth Node From End", difficulty: "Medium", topic: "Two Pointer", status: "pending" },
      { id: 234, name: "Palindrome Linked List", difficulty: "Easy", topic: "Reverse Half", status: "pending" },
    ],
  },

  {
    id: 8,
    title: "Phase 8 — Trees & BST",
    description: "DFS + BFS Traversals",
    progress: 0,
    totalProblems: 6,
    difficulty: { easy: 4, medium: 2, hard: 0 },
    problems: [
      { id: 104, name: "Maximum Depth of Binary Tree", difficulty: "Easy", topic: "DFS", status: "pending" },
      { id: 100, name: "Same Tree", difficulty: "Easy", topic: "Recursion", status: "pending" },
      { id: 226, name: "Invert Binary Tree", difficulty: "Easy", topic: "DFS", status: "pending" },
      { id: 102, name: "Binary Tree Level Order Traversal", difficulty: "Medium", topic: "BFS", status: "pending" },
      { id: 543, name: "Diameter of Binary Tree", difficulty: "Easy", topic: "DFS", status: "pending" },
      { id: 236, name: "Lowest Common Ancestor", difficulty: "Medium", topic: "Tree", status: "pending" },
    ],
  },

  {
    id: 9,
    title: "Phase 9 — Heap / Priority Queue",
    description: "Heap + HashMap",
    progress: 0,
    totalProblems: 4,
    difficulty: { easy: 1, medium: 3, hard: 0 },
    problems: [
      { id: 215, name: "Kth Largest Element in Array", difficulty: "Medium", topic: "Heap", status: "pending" },
      { id: 347, name: "Top K Frequent Elements", difficulty: "Medium", topic: "Heap + HashMap", status: "pending" },
      { id: 1046, name: "Last Stone Weight", difficulty: "Easy", topic: "Max Heap", status: "pending" },
      { id: 23, name: "Merge K Sorted Lists", difficulty: "Hard", topic: "Priority Queue", status: "pending" },
    ],
  },

  {
    id: 10,
    title: "Phase 10 — Graphs",
    description: "BFS + DFS + Topological Sort",
    progress: 0,
    totalProblems: 6,
    difficulty: { easy: 2, medium: 4, hard: 0 },
    problems: [
      { id: 1971, name: "Find if Path Exists in Graph", difficulty: "Easy", topic: "BFS", status: "pending" },
      { id: 200, name: "Number of Islands", difficulty: "Medium", topic: "DFS", status: "pending" },
      { id: 733, name: "Flood Fill", difficulty: "Easy", topic: "DFS/BFS", status: "pending" },
      { id: 994, name: "Rotting Oranges", difficulty: "Medium", topic: "Multi-source BFS", status: "pending" },
      { id: 133, name: "Clone Graph", difficulty: "Medium", topic: "DFS + HashMap", status: "pending" },
      { id: 207, name: "Course Schedule", difficulty: "Medium", topic: "Topological Sort", status: "pending" },
    ],
  },

  {
    id: 11,
    title: "Phase 11 — Greedy",
    description: "Greedy Interview Problems",
    progress: 0,
    totalProblems: 5,
    difficulty: { easy: 2, medium: 3, hard: 0 },
    problems: [
      { id: 455, name: "Assign Cookies", difficulty: "Easy", topic: "Greedy", status: "pending" },
      { id: 55, name: "Jump Game", difficulty: "Medium", topic: "Greedy", status: "pending" },
      { id: 134, name: "Gas Station", difficulty: "Medium", topic: "Greedy", status: "pending" },
      { id: 763, name: "Partition Labels", difficulty: "Medium", topic: "Greedy", status: "pending" },
      { id: 1520, name: "Maximum Number of Non-overlapping Substrings", difficulty: "Hard", topic: "Greedy + Interval", status: "pending" },
    ],
  },

  {
    id: 12,
    title: "Phase 12 — Dynamic Programming ⭐",
    description: "Most Important Placement Topic",
    progress: 0,
    totalProblems: 8,
    difficulty: { easy: 2, medium: 4, hard: 2 },
    problems: [
      { id: 70, name: "Climbing Stairs", difficulty: "Easy", topic: "DP", status: "pending" },
      { id: 198, name: "House Robber", difficulty: "Medium", topic: "1D DP", status: "pending" },
      { id: 322, name: "Coin Change", difficulty: "Medium", topic: "DP", status: "pending" },
      { id: 300, name: "Longest Increasing Subsequence", difficulty: "Medium", topic: "DP", status: "pending" },
      { id: 1143, name: "Longest Common Subsequence", difficulty: "Medium", topic: "2D DP", status: "pending" },
      { id: 115, name: "Distinct Subsequences", difficulty: "Hard", topic: "2D DP", status: "pending" },
      { id: 2472, name: "Maximum Number of Non-overlapping Palindrome Substrings", difficulty: "Hard", topic: "DP + Greedy", status: "pending" },
      { id: 132, name: "Palindrome Partitioning II", difficulty: "Hard", topic: "Palindrome DP", status: "pending" },
    ],
  },

  {
    id: 13,
    title: "Phase 13 — Backtracking",
    description: "Recursion + Search",
    progress: 0,
    totalProblems: 5,
    difficulty: { easy: 0, medium: 4, hard: 1 },
    problems: [
      { id: 78, name: "Subsets", difficulty: "Medium", topic: "Backtracking", status: "pending" },
      { id: 46, name: "Permutations", difficulty: "Medium", topic: "Backtracking", status: "pending" },
      { id: 39, name: "Combination Sum", difficulty: "Medium", topic: "Backtracking", status: "pending" },
      { id: 51, name: "N Queens", difficulty: "Hard", topic: "Backtracking", status: "pending" },
      { id: 79, name: "Word Search", difficulty: "Medium", topic: "Grid DFS", status: "pending" },
    ],
  },
];

// ---------------------- Complete DSA Topics ----------------------

export const dsaTopics = [
  "Arrays",
  "Strings",
  "Pattern Problems",
  "Two Pointers",
  "Sliding Window",
  "Prefix Sum",
  "HashMap",
  "HashSet",
  "Binary Search",
  "Sorting",
  "Stack",
  "Queue",
  "Linked List",
  "Trees",
  "BST",
  "Heap",
  "Priority Queue",
  "Graphs",
  "BFS",
  "DFS",
  "Topological Sort",
  "Greedy",
  "Dynamic Programming",
  "Backtracking",
];

// ---------------------- Placement Companies ----------------------

export const placementCompanies = [
  "HCLTech",
  "Josh Technology",
  "Accenture",
  "Infosys",
  "TCS",
  "Wipro",
  "Capgemini",
  "Cognizant",
  "Deloitte",
  "Amazon",
  "Microsoft",
  "Google",
];

// ==========================================================
// Helper Functions (Day 2)
// ==========================================================

// Total problems in roadmap
export const totalRoadmapProblems = codingPhases.reduce(
  (total, phase) => total + phase.problems.length,
  0
);

// All problems in one array
export const allProblems = codingPhases.flatMap((phase) =>
  phase.problems.map((problem) => ({
    ...problem,
    phaseId: phase.id,
    phaseTitle: phase.title,
  }))
);

// Difficulty counter
export const difficultyCount = {
  easy: allProblems.filter((p) => p.difficulty === "Easy").length,
  medium: allProblems.filter((p) => p.difficulty === "Medium").length,
  hard: allProblems.filter((p) => p.difficulty === "Hard").length,
};

// Achievement badges
export const achievementBadges = [
  {
    title: "Day 1 Completed",
    icon: "🏅",
    unlocked: true,
  },

  {
    title: "Day 2 Completed",
    icon: "🔥",
    unlocked: false,
  },

  {
    title: "7 Day Streak",
    icon: "⚡",
    unlocked: false,
  },

  {
    title: "50 Problems Solved",
    icon: "💻",
    unlocked: false,
  },

  {
    title: "HCLTech Ready",
    icon: "🚀",
    unlocked: false,
  },
]; 