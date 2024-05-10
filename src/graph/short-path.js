// Print all shortest distance from source to each node

const bfsDistances = (graph, visited, dist, curr) => {

  visited[curr] = true;
  dist[curr] = 0;

  const queue = [curr];

  while (queue.length) {

    let temp = queue.shift();

    for (let neigh of graph[temp]) {

      if (!visited[neigh]) {
        visited[neigh] = true;
        dist[neigh] = dist[temp] + 1;
        queue.push(neigh);
      }
    }
  }
}

const shortestDistances = () => {
  // const adj = {
  //     1: [2,3,4],
  //     2: [1,5],
  //     3: [1,8],
  //     4: [1,6],
  //     5: [2,8],
  //     6: [4,7],
  //     7: [6,8],
  //     8: [3,5,7],
  // }

  const adj = {
    0: [1, 2],
    1: [3, 2],
    2: [3, 4, 5],
    3: [4],
    4: [5],
    5: [],
  }

  const visited = {};
  const dist = {};

  bfsDistances(adj, visited, dist, 1);
  console.log(dist);
}

// shortestDistances();


// Shortest Path Distance in a graph from src to dest

const bfsDistance = (graph, visited, src, dest) => {
  visited[src] = true;

  const queue = [{ node: src, dist: 0 }];

  while (queue.length) {

    let temp = queue.shift();

    if (temp.node === dest) {
      return temp.dist;
    }

    for (let neigh of graph[temp.node]) {

      if (!visited[neigh]) {
        visited[neigh] = true;
        queue.push({ node: neigh, dist: temp.dist + 1 })
      }
    }
  }
}

const shortestDist = () => {
  // const adj = {
  //     1: [2,3,4],
  //     2: [1,5],
  //     3: [1,8],
  //     4: [1,6],
  //     5: [2,8],
  //     6: [4,7],
  //     7: [6,8],
  //     8: [3,5,7],
  // }

  const adj = {
    0: [1, 2],
    1: [3, 2],
    2: [3, 4, 5],
    3: [4],
    4: [5],
    5: [],
  }

  const visited = {};

  let ans = bfsDistance(adj, visited, 1, 5);

  console.log(ans);
}

// shortestDist();


// Shortest Path in an unweighted graph from src to dest

const bfsPath = (graph, visited, parent, src, dest) => {

  visited[src] = true;
  parent[src] = -1;

  const queue = [src];

  while (queue.length) {

    let temp = queue.shift();

    for (let neigh of graph[temp]) {

      if (!visited[neigh]) {
        visited[neigh] = true;
        queue.push(neigh);
        parent[neigh] = temp;
      }
    }
  }

  const res = [dest];
  let node = dest;

  while (node !== src) {
    node = parent[node];
    res.push(node);
  }

  return res.reverse();
}

const shortestPath = () => {
  // const adj = {
  //     1: [2,3,4],
  //     2: [1,5],
  //     3: [1,8],
  //     4: [1,6],
  //     5: [2,8],
  //     6: [4,7],
  //     7: [6,8],
  //     8: [3,5,7],
  // }

  const adj = {
    0: [1, 2],
    1: [3, 2],
    2: [3, 4, 5],
    3: [4],
    4: [5],
    5: [],
  }

  const visited = {};
  const parent = {};

  let ans = bfsPath(adj, visited, parent, 1, 5);

  console.log(ans);
}

// shortestPath();


// Print All Paths from src to target in a Directed Graph

const allPaths = () => {

  const res = [];

  const dfsPath = (graph, src, dest, temp) => {
    temp.push(src);

    if (src === dest) {
      res.push([...temp]);
      temp.pop();
      return;
    }

    for (let neigh of graph[src]) {
      dfsPath(graph, neigh, dest, temp);
    }

    temp.pop();
  }


  const adj = {
    1: [2, 3, 4],
    2: [5],
    3: [8],
    4: [6],
    5: [],
    6: [7],
    7: [8],
    8: [5],
  }

  dfsPath(adj, 1, 5, []);

  console.log(res);
}

// allPaths();

