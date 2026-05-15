export const shortestPathSources = {
  dijkstra: {
    javascript: {
      code: `function dijkstra(graph, startNode) {
  const distances = {};
  const visited = new Set();
  const pq = [{ node: startNode, distance: 0 }];

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  while (pq.length > 0) {
    // Simple priority queue (for demo)
    pq.sort((a, b) => a.distance - b.distance);
    const { node, distance } = pq.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    for (const neighbor of graph[node]) {
      const newDist = distance + neighbor.weight;
      if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        pq.push({ node: neighbor.node, distance: newDist });
      }
    }
  }
  return distances;
}`,
    },
    python: {
      code: `import heapq

def dijkstra(graph, start_node):
    distances = {node: float('infinity') for node in graph}
    distances[start_node] = 0
    pq = [(0, start_node)]

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
    },
    cpp: {
      code: `#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

void dijkstra(const vector<vector<pair<int, int>>>& adj, int startNode) {
    int n = adj.size();
    vector<int> dist(n, numeric_limits<int>::max());
    dist[startNode] = 0;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, startNode});

    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (d > dist[u]) continue;

        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    // 'dist' vector now holds the shortest distances
}`,
    },
    java: {
      code: `import java.util.*;

public class Dijkstra {
    static class Edge {
        int node, weight;
        Edge(int node, int weight) {
            this.node = node;
            this.weight = weight;
        }
    }
    
    static class Node implements Comparable<Node> {
        int id, distance;
        Node(int id, int distance) {
            this.id = id;
            this.distance = distance;
        }
        
        public int compareTo(Node other) {
            return Integer.compare(this.distance, other.distance);
        }
    }
    
    public static Map<Integer, Integer> dijkstra(
            Map<Integer, List<Edge>> graph, int startNode) {
        Map<Integer, Integer> distances = new HashMap<>();
        Set<Integer> visited = new HashSet<>();
        PriorityQueue<Node> pq = new PriorityQueue<>();
        
        // Initialize distances
        for (int node : graph.keySet()) {
            distances.put(node, Integer.MAX_VALUE);
        }
        distances.put(startNode, 0);
        pq.add(new Node(startNode, 0));
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            
            if (visited.contains(current.id)) continue;
            visited.add(current.id);
            
            for (Edge edge : graph.getOrDefault(current.id, new ArrayList<>())) {
                int newDist = distances.get(current.id) + edge.weight;
                if (newDist < distances.get(edge.node)) {
                    distances.put(edge.node, newDist);
                    pq.add(new Node(edge.node, newDist));
                }
            }
        }
        return distances;
    }
}`,
    },
  },
  bellmanford: {
    javascript: {
      code: `function bellmanFord(edges, numVertices, startNode) {
  const distances = {};
  for (let i = 1; i <= numVertices; i++) {
    distances[i] = Infinity;
  }
  distances[startNode] = 0;

  for (let i = 0; i < numVertices - 1; i++) {
    for (const edge of edges) {
      if (distances[edge.from] + edge.weight < distances[edge.to]) {
        distances[edge.to] = distances[edge.from] + edge.weight;
      }
    }
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    if (distances[edge.from] + edge.weight < distances[edge.to]) {
      console.error("Graph contains a negative weight cycle");
      return null;
    }
  }

  return distances;
}`,
    },
    python: {
      code: `def bellman_ford(edges, num_vertices, start_node):
    distances = {i: float('inf') for i in range(1, num_vertices + 1)}
    distances[start_node] = 0

    for _ in range(num_vertices - 1):
        for u, v, w in edges:
            if distances[u] != float('inf') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    # Check for negative weight cycles
    for u, v, w in edges:
        if distances[u] != float('inf') and distances[u] + w < distances[v]:
            print("Graph contains a negative weight cycle")
            return None
            
    return distances`,
    },
    cpp: {
      code: `#include <iostream>
#include <vector>
#include <limits>

struct Edge { int from, to, weight; };

void bellmanFord(const std::vector<Edge>& edges, int numVertices, int startNode) {
    std::vector<int> dist(numVertices + 1, std::numeric_limits<int>::max());
    dist[startNode] = 0;

    for (int i = 0; i < numVertices - 1; ++i) {
        for (const auto& edge : edges) {
            if (dist[edge.from] != std::numeric_limits<int>::max() && dist[edge.from] + edge.weight < dist[edge.to]) {
                dist[edge.to] = dist[edge.from] + edge.weight;
            }
        }
    }

    // Check for negative cycles
    for (const auto& edge : edges) {
        if (dist[edge.from] != std::numeric_limits<int>::max() && dist[edge.from] + edge.weight < dist[edge.to]) {
            std::cerr << "Graph contains a negative weight cycle!" << std::endl;
            return;
        }
    }
    // 'dist' vector holds the shortest distances
}`,
    },
    java: {
      code: `import java.util.*;

public class BellmanFord {
    static class Edge {
        int from, to, weight;
        Edge(int from, int to, int weight) {
            this.from = from;
            this.to = to;
            this.weight = weight;
        }
    }
    
    public static Map<Integer, Integer> bellmanFord(
            List<Edge> edges, int numVertices, int startNode) {
        Map<Integer, Integer> distances = new HashMap<>();
        
        // Initialize distances
        for (int i = 1; i <= numVertices; i++) {
            distances.put(i, Integer.MAX_VALUE);
        }
        distances.put(startNode, 0);
        
        // Relax edges numVertices - 1 times
        for (int i = 0; i < numVertices - 1; i++) {
            for (Edge edge : edges) {
                int fromDist = distances.get(edge.from);
                if (fromDist != Integer.MAX_VALUE && 
                    fromDist + edge.weight < distances.get(edge.to)) {
                    distances.put(edge.to, fromDist + edge.weight);
                }
            }
        }
        
        // Check for negative weight cycles
        for (Edge edge : edges) {
            int fromDist = distances.get(edge.from);
            if (fromDist != Integer.MAX_VALUE && 
                fromDist + edge.weight < distances.get(edge.to)) {
                System.err.println("Graph contains negative weight cycle");
                return null;
            }
        }
        
        return distances;
    }
}`,
    },
  },
  floydwarshall: {
    javascript: {
      code: `function floydWarshall(graph, numVertices) {
  const dist = Array(numVertices + 1).fill(null).map(() => Array(numVertices + 1).fill(Infinity));

  for (let i = 1; i <= numVertices; i++) {
    dist[i][i] = 0;
  }

  for (const u in graph) {
    for (const edge of graph[u]) {
      dist[u][edge.node] = edge.weight;
    }
  }

  for (let k = 1; k <= numVertices; k++) {
    for (let i = 1; i <= numVertices; i++) {
      for (let j = 1; j <= numVertices; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}`,
    },
    python: {
      code: `def floyd_warshall(graph, num_vertices):
    V = num_vertices
    dist = [[float('inf')] * (V + 1) for _ in range(V + 1)]

    for i in range(1, V + 1):
        dist[i][i] = 0

    for u in graph:
        for v, weight in graph[u].items():
            dist[u][v] = weight

    for k in range(1, V + 1):
        for i in range(1, V + 1):
            for j in range(1, V + 1):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist`,
    },
    cpp: {
      code: `#include <iostream>
#include <vector>
#include <algorithm>

const int INF = 1e9;

std::vector<std::vector<int>> floydWarshall(const std::vector<std::vector<std::pair<int, int>>>& adj, int numVertices) {
    std::vector<std::vector<int>> dist(numVertices, std::vector<int>(numVertices, INF));

    for (int i = 0; i < numVertices; ++i) {
        dist[i][i] = 0;
    }

    for (int u = 0; u < numVertices; ++u) {
        for (const auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            dist[u][v] = weight;
        }
    }

    for (int k = 0; k < numVertices; ++k) {
        for (int i = 0; i < numVertices; ++i) {
            for (int j = 0; j < numVertices; ++j) {
                if (dist[i][k] != INF && dist[k][j] != INF) {
                    dist[i][j] = std::min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    return dist;
}`,
    },
    java: {
      code: `public class FloydWarshall {
    static final int INF = (int) 1e9;
    
    public static int[][] floydWarshall(int numVertices) {
        int[][] dist = new int[numVertices + 1][numVertices + 1];
        
        // Initialize distances
        for (int i = 0; i <= numVertices; i++) {
            for (int j = 0; j <= numVertices; j++) {
                if (i == j) {
                    dist[i][j] = 0;
                } else {
                    dist[i][j] = INF;
                }
            }
        }
        
        // Add edges to distance matrix
        // Example: dist[1][2] = 5; dist[2][3] = 3; etc.
        
        // Floyd-Warshall algorithm
        for (int k = 1; k <= numVertices; k++) {
            for (int i = 1; i <= numVertices; i++) {
                for (int j = 1; j <= numVertices; j++) {
                    if (dist[i][k] != INF && dist[k][j] != INF) {
                        dist[i][j] = Math.min(dist[i][j], 
                                            dist[i][k] + dist[k][j]);
                    }
                }
            }
        }
        
        return dist;
    }
    
    public static void main(String[] args) {
        int n = 5;
        int[][] result = floydWarshall(n);
        
        System.out.println("Shortest distances between all pairs:");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (result[i][j] == INF) {
                    System.out.print("INF ");
                } else {
                    System.out.print(result[i][j] + " ");
                }
            }
            System.out.println();
        }
    }
}`,
    },
  },
}

/**
 * Get the source code for a specific shortest path algorithm and language.
 * @param {string} algorithm - The algorithm name (e.g., 'dijkstra', 'bellmanford', 'floydwarshall').
 * @param {string} language - The programming language (e.g., 'javascript', 'python', 'cpp').
 * @returns {string} The source code.
 */
export const getSource = (algorithm, language) => {
  return shortestPathSources[algorithm]?.[language]?.code || ''
}
