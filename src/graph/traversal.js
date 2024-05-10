// DFS traversal

const dfs = (graph, visited, curr) => {

  visited[curr] = true;
  console.log(curr);

  for (let neigh of graph[curr]) {
    if (!visited[neigh]) {
      dfs(graph, visited, neigh);
    }
  }
}

const dfsTraversal = () => {

  const addEdge = (adjList, u, v, direction) => {

    adjList[u].push(v);
  
    if (direction) {
      adjList[v].push(u);
    }
  }

  const edges = [[0,1], [0,4], [1,2], [1,3], [1,4], [2,3], [3,4]];
  const N = 4;

  const adjList = {};

  for (let i = 0; i <= N; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    addEdge(adjList, edges[i][0], edges[i][1], true);
  }

  const visited = {};

  dfs(adjList, visited, 0);
}

// dfsTraversal();


// BFS traversal

const bfs = (graph, visited, curr) => {

  const queue = [curr];
  visited[curr] = true;

  while (queue.length) {

    const temp = queue.shift();
    console.log(temp);

    for (let neigh of graph[temp]) {
      if (!visited[neigh]) {
        visited[neigh] = true;
        queue.push(neigh);
      }
    }
  }
}

const bfsTraversal = () => {
  const addEdge = (adjList, u, v, direction) => {

    adjList[u].push(v);
  
    if (direction) {
      adjList[v].push(u);
    }
  }

  const edges = [[0,1], [0,4], [1,2], [1,3], [1,4], [2,3], [3,4]];
  const N = 4;

  const adjList = {};

  for (let i = 0; i <= N; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    addEdge(adjList, edges[i][0], edges[i][1], true);
  }

  const visited = {};

  bfs(adjList, visited, 0);
}

// bfsTraversal();

