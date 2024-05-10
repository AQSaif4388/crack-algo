// Connected components

const dfs = (graph, visited, curr) => {

  visited[curr] = true;

  for (let neigh of graph[curr]) {
    if (!visited[neigh]) {
      dfs(graph, visited, neigh);
    }
  }
}



const connectedComps = () => {
  const adj = {
      3: [],
      4: [6],
      6: [4,5,7,8],
      8: [6],
      7: [6],
      5: [6],
      1: [2],
      2: [1],
  }

  const visited = {};

  let count = 0;

  for (let key in adj) {
      if (!visited[key]) {
          count++;
          dfs(adj, visited, key);
      }
  }

  console.log(count);
};

// connectedComps();


// Largest component

const largestComp = () => {
  
  let length = 0;

  const dfsTraverse = (graph, visited, curr) => {

    visited[curr] = true;
    length++;
  
    for (let neigh of graph[curr]) {
      if (!visited[neigh]) {
        dfsTraverse(graph, visited, neigh);
      }
    }
  }

  const adj = {
      0: [8,1,5],
      1: [0],
      5: [0,8],
      8: [0,5],
      2: [3,4],
      3: [2,4],
      4: [2,3],
  }

  const visited = {};

  let max = 0;

  for (let key in adj) {

      if (!visited[key]) {
          dfsTraverse(adj, visited, key);
          max = Math.max(max, length);
          length = 0;
      }
  }

  console.log(max);
};

// largestComp();

