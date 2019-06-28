// shortest path in a 2D GRID using BFS
{
    function main(){
        // 4 way traversal (NEWS)
      let pathRow = [-1, +1, 0, 0];
      let pathCol = [0, 0, +1, -1];

       let maze = [
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,1,1,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,1,1,1,0,1,1],
     ];
     let visited = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
     ];

     let prev = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
     ];
        
      let rowSize = 7, colSize = 7, move = 1, queue = [];
      let startRow = 0, startCol = 0, endRow = 3, endCol = 3;
     

      // initialize queue with start cell
      queue.unshift({row : startRow, col : startCol});
      // mark start cell as visited
      visited[startRow][startCol] = 1;

      function BFSShortestPath(){
         while(queue.length){
            // pop out top element
            let cell = queue.pop();
            // endpoint reached
            if(cell.row === endRow && cell.col === endCol){
                return this.bactTrackPath(prev,endRow, endCol, startRow, startCol)
            }
            // traverse all neighbours
            for(let i = 0; i < pathRow.length; i++){
                let newRow = cell.row + pathRow[i];
                let newCol = cell.col + pathCol[i];
                if(isValidMove(newRow, newCol)){
                    visited[newRow][newCol] = 1;
                    prev[newRow][newCol] = cell;
                    queue.unshift({row : newRow, col : newCol});
                }
            }
        }
        return null;
      }
       // helper function to check next move
      function isValidMove(newRow, newCol){
        return newRow >= 0 && newCol >= 0 && 
               newRow < rowSize && newCol < colSize &&
                visited[newRow][newCol] == 0 && maze[newRow][newCol] == 1;
    }
     return BFSShortestPath();
    }

    // helper function to back track shortest path
    function bactTrackPath(previousMatrix, desRow, desCol, startRow, startCol){
        let lastNode = previousMatrix[desRow][desCol];
        previousMatrix[desRow][desCol] = 1;
        while(lastNode !== 0){
            let temp =  previousMatrix[lastNode.row][lastNode.col];
            previousMatrix[lastNode.row][lastNode.col] = 1;
            lastNode = temp;
        }
        // starting node
        previousMatrix[startRow][startCol] = 1;
        return previousMatrix;
    }

    // in result 2D array, cells with value 1 are shortest path
    main();
}
