export class Matrix {
  private matrix: number[][];
  private rowsMatrix: number[][];
  constructor(matrix:string) {
    this.matrix = matrix                                     //gets an array-like string, ex.: 1, 2, 3\n4, 5, 6\n7, 8, 9
                      .split('\n')                                 //split it so we actually have an array of strings
                      .map(                                        //map each row
                        item => item
                                .split(' ')                        //split each row separated by white-space
                                .map(n => parseInt(n)));          //parse the numerical ones
    this.rowsMatrix = new Array(this.matrix.length)
                              .fill(0)
                              .map(() =>  new Array(this.matrix[0].length).fill(0));

    let i = 0;
    for (const row of this.matrix) {
      let j = 0;
      for (const _ of row) {
        this.rowsMatrix[j][i] = _;
        j += 1;
      }
      i += 1; 
    }
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.rowsMatrix;
  }
}
