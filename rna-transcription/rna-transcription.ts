interface Dictionary {
  [key: string]: string;
}

const rna:Dictionary = {
  'C': 'G',
  'A': 'U',
  'G': 'C',
  'T': 'A',
}

export const toRna = (dna: string) => {
  return dna.split('').map(dna => { 
    if(!['C','G','A','T'].includes(dna)) throw new Error('Invalid input DNA.'); 
    return rna[dna] 
  }).join('');
}
