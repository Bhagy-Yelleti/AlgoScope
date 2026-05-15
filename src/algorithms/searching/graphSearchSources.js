export const graphSearchSources = {
  bfs: {
    javascript: {
      code: `// Graph represented as an adjacency list
const graph = {
  1: [2, 5, 6], 2: [1, 3, 7], 3: [2, 4, 6],
  4: [3, 5, 6], 5: [1, 4, 6, 9], 6: [1, 3, 4, 5],
  7: [2, 8, 9], 8: [7, 9], 9: [5, 7, 8]
};

function bfs(startNode) {
  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node); // Process the current node

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
    },
    python: {
      code: `from collections import deque

# Graph represented as an adjacency list
graph = {
    1: [2, 5, 6], 2: [1, 3, 7], 3: [2, 4, 6],
    4: [3, 5, 6], 5: [1, 4, 6, 9], 6: [1, 3, 4, 5],
    7: [2, 8, 9], 8: [7, 9], 9: [5, 7, 8]
}

def bfs(start_node):
    visited = set()
    queue = deque([start_node])
    visited.add(start_node)

    while queue:
        node = queue.popleft()
        print(node)  # Process the current node

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
    },
    cpp: {
      code: `#include <iostream>
#include <vector>
#include <queue>
#include <map>
#include <set>

void bfs(const std::map<int, std::vector<int>>& graph, int startNode) {
    std::set<int> visited;
    std::queue<int> q;

    visited.insert(startNode);
    q.push(startNode);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        std::cout << node << " "; // Process the current node

        if (graph.count(node)) {
            for (int neighbor : graph.at(node)) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
    }
}`,
    },
    java: {
      code: `import java.util.*;

public class BFS {
    static Map<Integer, List<Integer>> graph = new HashMap<>();
    
    static {
        graph.put(1, Arrays.asList(2, 5, 6));
        graph.put(2, Arrays.asList(1, 3, 7));
        graph.put(3, Arrays.asList(2, 4, 6));
        graph.put(4, Arrays.asList(3, 5, 6));
        graph.put(5, Arrays.asList(1, 4, 6, 9));
        graph.put(6, Arrays.asList(1, 3, 4, 5));
        graph.put(7, Arrays.asList(2, 8, 9));
        graph.put(8, Arrays.asList(7, 9));
        graph.put(9, Arrays.asList(5, 7, 8));
    }
    
    public static void bfs(int startNode) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        
        visited.add(startNode);
        queue.add(startNode);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " "); // Process current node
            
            for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }
    }
}`,
    },
  },
  dfs: {
    javascript: {
      code: `// Graph represented as an adjacency list
const graph = {
  1: [2, 5, 6], 2: [1, 3, 7], 3: [2, 4, 6],
  4: [3, 5, 6], 5: [1, 4, 6, 9], 6: [1, 3, 4, 5],
  7: [2, 8, 9], 8: [7, 9], 9: [5, 7, 8]
};

function dfs(startNode) {
    const visited = new Set();

    function traverse(node) {
        if (visited.has(node)) return;
        visited.add(node);
        console.log(node); // Process the current node

        for (const neighbor of graph[node] || []) {
            traverse(neighbor);
        }
    }

    traverse(startNode);
}`,
    },
    python: {
      code: `# Graph represented as an adjacency list
graph = {
    1: [2, 5, 6], 2: [1, 3, 7], 3: [2, 4, 6],
    4: [3, 5, 6], 5: [1, 4, 6, 9], 6: [1, 3, 4, 5],
    7: [2, 8, 9], 8: [7, 9], 9: [5, 7, 8]
}

def dfs(start_node):
    visited = set()

    def traverse(node):
        if node in visited:
            return
        visited.add(node)
        print(node) # Process the current node

        for neighbor in graph.get(node, []):
            traverse(neighbor)
    
    traverse(start_node)`,
    },
    cpp: {
      code: `#include <iostream>
#include <vector>
#include <map>
#include <set>

void dfs_recursive(const std::map<int, std::vector<int>>& graph, int node, std::set<int>& visited) {
    if (visited.count(node)) {
        return;
    }
    visited.insert(node);
    std::cout << node << " "; // Process the current node

    if (graph.count(node)) {
        for (int neighbor : graph.at(node)) {
            dfs_recursive(graph, neighbor, visited);
        }
    }
}

void dfs(const std::map<int, std::vector<int>>& graph, int startNode) {
    std::set<int> visited;
    dfs_recursive(graph, startNode, visited);
}`,
    },
    java: {
      code: `import java.util.*;

public class DFS {
    static Map<Integer, List<Integer>> graph = new HashMap<>();
    static Set<Integer> visited = new HashSet<>();
    
    static {
        graph.put(1, Arrays.asList(2, 5, 6));
        graph.put(2, Arrays.asList(1, 3, 7));
        graph.put(3, Arrays.asList(2, 4, 6));
        graph.put(4, Arrays.asList(3, 5, 6));
        graph.put(5, Arrays.asList(1, 4, 6, 9));
        graph.put(6, Arrays.asList(1, 3, 4, 5));
        graph.put(7, Arrays.asList(2, 8, 9));
        graph.put(8, Arrays.asList(7, 9));
        graph.put(9, Arrays.asList(5, 7, 8));
    }
    
    public static void dfs(int startNode) {
        traverse(startNode);
    }
    
    private static void traverse(int node) {
        if (visited.contains(node)) {
            return;
        }
        visited.add(node);
        System.out.print(node + " "); // Process current node
        
        for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            traverse(neighbor);
        }
    }
}`,
    },
  },
}

/**
 * Get the source code for a specific graph search algorithm and language.
 * @param {string} algorithm - The algorithm name (e.g., 'bfs', 'dfs').
 * @param {string} language - The programming language (e.g., 'javascript', 'python', 'cpp').
 * @returns {string} The source code.
 */
export const getSource = (algorithm, language) => {
  return graphSearchSources[algorithm]?.[language]?.code || ''
}
