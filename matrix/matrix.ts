export class Matrix {
  private matrix: number[][];
  private rowsMatrix: number[][];
  
  constructor(matrix:string) {
    this.matrix = matrix.split('\n').map(item => item.split(' ').map(Number));
    this.rowsMatrix = this.matrix.map((_, i) => this.matrix.map(row => row[i]));
  }

  get rows() { return this.matrix; }

  get columns(){ return this.rowsMatrix; }
}
