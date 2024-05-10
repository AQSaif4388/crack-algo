// Cycle Detection in a Undirected Graph using BFS(visited, !parent)

const bfsUD = (graph, visited, curr) => {

  const queue = [curr];
  const parent = {};
  parent[curr] = -1;
  visited[curr] = true;

  while (queue.length) {

    let temp = queue.shift();

    for (let neigh of graph[temp]) {

      if (visited[neigh] && parent[temp] !== neigh) {
        return true;
      }

      else if (!visited[neigh]) {
        visited[neigh] = true;
        parent[neigh] = temp;
        queue.push(neigh);
      }
    }
  }

  return false;
}

const cycle_bfs_UD = () => {

  const adj = {
      4: [5],
      5: [4, 6, 7],
      6: [5, 8],
      7: [5, 8],
      8: [7, 9],
      9: [8]
  }

  const visited = {};

  let ans = bfsUD(adj, visited, 4);
  console.log(ans);
};

// cycle_bfs_UD();


// Cycle Detection in a Undirected Graph using DFS(visited, !parent)


const cycle_dfs_UD = () => {

  const visited = {};
  const parent = {};

  const dfsUD = (graph, curr) => {

    visited[curr] = true;

    for (let neigh of graph[curr]) {

      if (visited[neigh] && parent[curr] !== neigh) {
        return true;
      }

      else if (!visited[neigh]) {
        parent[neigh] = curr;

        if (dfsUD(graph, neigh)) {
          return true;
        }
      }
    }

    return false;
  }

  const adj = {
      4: [5],
      5: [4, 6, 7],
      6: [5, 8],
      7: [5, 8],
      8: [7, 9],
      9: [8]
  }

  const start = 4;
  parent[start] = -1

  let ans = dfsUD(adj, start);
  console.log(ans);
};

// cycle_dfs_UD();


// Cycle Detection in a directed Graph using DFS(visited, dfsVisited)

const dfsD = (graph, visited, dfsVisited, curr) => {

  visited[curr] = true;
  dfsVisited[curr] = true;

  for (let neigh of graph[curr]) {

    if (visited[neigh] && dfsVisited[neigh]) {
      return true;
    }

    if (!visited[neigh]) {
      if (dfsD(graph, visited, dfsVisited, neigh)) {
        return true;
      }
    }
  }

  dfsVisited[curr] = false;
  return false;
}

const cycle_dfs_D = () => {

  const adj = {
    1: [2],
    2: [3,4],
    3: [7,8],
    4: [5],
    5: [6],
    6: [4],
    7: [],
    8: [7],
  };

  const visited = {};
  const dfsVisited = {};

  const ans = dfsD(adj, visited, dfsVisited, 1);

  console.log(ans);
};

// cycle_dfs_D();

