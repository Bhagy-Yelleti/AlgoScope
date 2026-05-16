export const shortestPathSources = {
  dijkstra: {
    javascript: {
      code: `function dijkstra(graph, startNode) {
  const distances = {};
  const visited = new Set();
  const pq = [{ node: startNode, distance: 0 }];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  while (pq.length > 0) {
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
      code: `#include <vector>
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
}`,
    },
    java: {
      code: `import java.util.*;

public class Dijkstra {
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
    
    public Map<Integer, Integer> dijkstra(Map<Integer, List<Edge>> graph, int startNode) {
        Map<Integer, Integer> distances = new HashMap<>();
        PriorityQueue<Node> pq = new PriorityQueue<>();
        
        for (int node : graph.keySet()) distances.put(node, Integer.MAX_VALUE);
        distances.put(startNode, 0);
        pq.add(new Node(startNode, 0));
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            if (current.distance > distances.get(current.id)) continue;
            
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
    c: {
      code: `#include <stdio.h>
#include <limits.h>

#define V 9

int minDistance(int dist[], bool visited[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (!visited[v] && dist[v] <= min)
            min = dist[v], min_index = v;
    return min_index;
}

void dijkstra(int graph[V][V], int src) {
    int dist[V];
    bool visited[V] = {false};
    for (int i = 0; i < V; i++) dist[i] = INT_MAX;
    dist[src] = 0;

    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = true;
        for (int v = 0; v < V; v++)
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX 
                && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
}`,
    },
    rust: {
      code: `use std::collections::BinaryHeap;
use std::cmp::Ordering;

#[derive(Copy, Clone, Eq, PartialEq)]
struct State { distance: usize, position: usize }

impl Ord for State {
    fn cmp(&self, other: &Self) -> Ordering {
        other.distance.cmp(&self.distance)
    }
}

impl PartialOrd for State {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

fn dijkstra(adj: &Vec<Vec<(usize, usize)>>, start: usize) -> Vec<usize> {
    let mut dists: Vec<_> = (0..adj.len()).map(|_| usize::MAX).collect();
    let mut pq = BinaryHeap::new();

    dists[start] = 0;
    pq.push(State { distance: 0, position: start });

    while let Some(State { distance, position }) = pq.pop() {
        if distance > dists[position] { continue; }
        for edge in &adj[position] {
            let next = State { distance: distance + edge.1, position: edge.0 };
            if next.distance < dists[next.position] {
                dists[next.position] = next.distance;
                pq.push(next);
            }
        }
    }
    dists
}`,
    },
    go: {
      code: `import "container/heap"

func dijkstra(graph map[int][]Edge, start int) map[int]int {
    dist := make(map[int]int)
    for node := range graph { dist[node] = 2147483647 }
    dist[start] = 0
    pq := &PriorityQueue{{node: start, distance: 0}}
    heap.Init(pq)

    for pq.Len() > 0 {
        curr := heap.Pop(pq).(*Item)
        if curr.distance > dist[curr.node] { continue }

        for _, edge := range graph[curr.node] {
            if d := dist[curr.node] + edge.weight; d < dist[edge.to] {
                dist[edge.to] = d
                heap.Push(pq, &Item{node: edge.to, distance: d})
            }
        }
    }
    return dist
}`,
    },
  },
  bellmanford: {
    javascript: {
      code: `function bellmanFord(edges, numVertices, startNode) {
  const distances = {};
  for (let i = 1; i <= numVertices; i++) distances[i] = Infinity;
  distances[startNode] = 0;

  for (let i = 0; i < numVertices - 1; i++) {
    for (const edge of edges) {
      if (distances[edge.from] + edge.weight < distances[edge.to]) {
        distances[edge.to] = distances[edge.from] + edge.weight;
      }
    }
  }

  for (const edge of edges) {
    if (distances[edge.from] + edge.weight < distances[edge.to]) {
      return null; // Negative cycle
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
            if distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    for u, v, w in edges:
        if distances[u] + w < distances[v]:
            return None # Negative Cycle
            
    return distances`,
    },
    cpp: {
      code: `void bellmanFord(const vector<Edge>& edges, int V, int src) {
    vector<int> dist(V + 1, numeric_limits<int>::max());
    dist[src] = 0;

    for (int i = 0; i < V - 1; i++) {
        for (const auto& e : edges) {
            if (dist[e.from] != INT_MAX && dist[e.from] + e.weight < dist[e.to])
                dist[e.to] = dist[e.from] + e.weight;
        }
    }
}`,
    },
    java: {
      code: `public Map<Integer, Integer> bellmanFord(List<Edge> edges, int V, int src) {
    Map<Integer, Integer> dist = new HashMap<>();
    for (int i = 1; i <= V; i++) dist.put(i, Integer.MAX_VALUE);
    dist.put(src, 0);

    for (int i = 0; i < V - 1; i++) {
        for (Edge e : edges) {
            if (dist.get(e.from) != Integer.MAX_VALUE && 
                dist.get(e.from) + e.weight < dist.get(e.to)) {
                dist.put(e.to, dist.get(e.from) + e.weight);
            }
        }
    }
    return dist;
}`,
    },
    c: {
      code: `void bellmanFord(struct Edge edges[], int V, int E, int src) {
    int dist[V];
    for (int i = 0; i < V; i++) dist[i] = INT_MAX;
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = edges[j].from;
            int v = edges[j].to;
            int weight = edges[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }
}`,
    },
    rust: {
      code: `fn bellman_ford(edges: &[Edge], v: usize, src: usize) -> Option<Vec<i32>> {
    let mut dist = vec![i32::MAX; v];
    dist[src] = 0;

    for _ in 0..v-1 {
        for e in edges {
            if dist[e.from] != i32::MAX && dist[e.from] + e.weight < dist[e.to] {
                dist[e.to] = dist[e.from] + e.weight;
            }
        }
    }
    Some(dist)
}`,
    },
    go: {
      code: `func bellmanFord(edges []Edge, vCount int, src int) []int {
    dist := make([]int, vCount)
    for i := range dist { dist[i] = 2147483647 }
    dist[src] = 0

    for i := 0; i < vCount-1; i++ {
        for _, e := range edges {
            if dist[e.from] != 2147483647 && dist[e.from]+e.weight < dist[e.to] {
                dist[e.to] = dist[e.from] + e.weight
            }
        }
    }
    return dist
}`,
    },
  },
  floydwarshall: {
    javascript: {
      code: `function floydWarshall(numVertices, dist) {
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
      code: `def floyd_warshall(V, dist):
    for k in range(V):
        for i in range(V):
            for j in range(V):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    return dist`,
    },
    cpp: {
      code: `void floydWarshall(int V, vector<vector<int>>& dist) {
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
}`,
    },
    java: {
      code: `public void floydWarshall(int V, int[][] dist) {
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
}`,
    },
    c: {
      code: `void floydWarshall(int V, int dist[V][V]) {
    for (int k = 0; k < V; k++)
        for (int i = 0; i < V; i++)
            for (int j = 0; j < V; j++)
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
}`,
    },
    rust: {
      code: `fn floyd_warshall(v: usize, dist: &mut Vec<Vec<i32>>) {
    for k in 0..v {
        for i in 0..v {
            for j in 0..v {
                let sum = dist[i][k].saturating_add(dist[k][j]);
                if sum < dist[i][j] { dist[i][j] = sum; }
            }
        }
    }
}`,
    },
    go: {
      code: `func floydWarshall(v int, dist [][]int) {
    for k := 0; k < v; k++ {
        for i := 0; i < v; i++ {
            for j := 0; j < v; j++ {
                if dist[i][k] + dist[k][j] < dist[i][j] {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
}`,
    },
  },
}

export const getSource = (algorithm, language) => {
  return shortestPathSources[algorithm]?.[language]?.code || ''
}