
// Shortest Path in weighted Directed Acyclic Graph (Topo Sort and BFS)
// https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/


const prepareList = (graph, edges) => {
  
  for (const [source, dest, weight] of edges) {

    if (!graph[source]) {
      graph[source] = [];
    }
    
    graph[source].push({ dest, weight } );
    
    if (!graph[dest]) {
      graph[dest] = [];
    }
  }
  
};

const topoSort = (graph, node, visited, stack) => {

  visited[node] = true;

  for (let { dest } of graph[node]) {
    if (!visited[dest]) {
      topoSort(graph, dest, visited, stack)
    }
  }

  stack.push(node)
}

const bfs = (graph, stack, dist, src) => {
  
  dist[src] = 0;

  while (stack.length) {
    
    const top = stack.pop();

    if (dist[top] !== Number.MIN_VALUE) {

      for (let { dest, weight } of graph[top]) {

        if (dist[top] + weight > dist[dest]) {
          dist[dest] = dist[top] + weight;
        }
      }
    }
  }
}

const longestPath = () => {

  const edges = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 3, 6],
    [1, 2, 2],
    [2, 4, 4],
    [2, 5, 2],
    [2, 3, 7],
    [3, 5, 1],
    [3, 4, -1],
    [4, 5, -2]
  ];

  const stack = [];
  const visited = {};
  const graph = {};
  const dist = {};

  prepareList(graph, edges);

  for (let node in graph) {
    if (!visited[node]) {
      topoSort(graph, node, visited, stack);
    }
    dist[node] = Number.MIN_VALUE;
  }

  bfs(graph, stack, dist, 1);

  console.log(dist);
}

// longestPath();

