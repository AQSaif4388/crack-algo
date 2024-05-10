
// create adjList for directed and undirected graph

const addEdge = (adjList, u, v, direction) => {

  adjList[u].push(v);

  if (direction) {
    adjList[v].push(u);
  }
}

const undirectedAdjList = () => {

  const edges = [[0,1], [0,4], [1,2], [1,3], [1,4], [2,3], [3,4]];
  const N = 4;

  const adjList = {};

  for (let i = 0; i <= N; i++) {
    adjList[i] = [];
  }

  // for (let i = 0; i < edges.length; i++) {
  //   addEdge(adjList, edges[i][0], edges[i][1], true);
  // }

  for (let [u,v] of edges) {
    addEdge(adjList, u, v, true);
  }

  console.log(adjList);
}

// undirectedAdjList();


const directedAdjList = () => {

  const edges = [[0,1], [0,4], [1,2], [1,3], [1,4], [2,3], [3,4]];
  const N = 4;

  const adjList = {};

  for (let i = 0; i <= N; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    addEdge(adjList, edges[i][0], edges[i][1], false);
  }

  console.log(adjList);
}

// directedAdjList();

