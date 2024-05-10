// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

const { ExtMinHeap }  = require('../heap/comp-min');


const prepareList = (graph, edges) => {

  for (const [src, dest, weight] of edges) {
    if (!graph[src]) {
      graph[src] = []
    }
  
    if (!graph[dest]) {
      graph[dest] = []
    }
  
    graph[src].push({ dest, weight});
  
    graph[dest].push({ dest: src, weight});
  }
}

const shortestPath = (graph, src, dist) => {
  
  const compare = ((a,b) => {
    if (a === b) {
        return a.value - b.value;
    } else {
        return a.key - b.key;
    }
  });

  let pq = new ExtMinHeap(compare);

  dist[src] = 0;
  pq.add({ key: 0, value: src });

  while (pq.heap.length) {

    const { value: curr } = pq.remove();

    for (let { dest, weight } of graph[curr]) {

      if (dist[curr] + weight < dist[dest]) {

        dist[dest] = dist[curr] + weight;
        pq.add({ key: dist[dest], value: dest });
      }
    }
  }

  console.log(dist);

}

const dijkstra = () => {

  const graph = {};
  const dist = {};

  const edges = [
      [0, 1, 4],
      [0, 7, 8],
      [1, 2, 8],
      [1, 7, 11],
      [2, 3, 7],
      [2, 8, 2],
      [2, 5, 4],
      [3, 4, 9],
      [3, 5, 14],
      [4, 5, 10],
      [5, 6, 2],
      [6, 7, 1],
      [6, 8, 6],
      [7, 8, 7]
  ];

  prepareList(graph, edges);

  for (let node in graph) {
    dist[node] = Number.MAX_VALUE;
  }

  shortestPath(graph, 0, dist);
}

// dijkstra();

