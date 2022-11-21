export class DnDCharacter {
  public hitpoints:number;
  public strength:number;
  public dexterity:number;
  public constitution:number;
  public intelligence:number;
  public wisdom:number;
  public charisma:number;  

  public constructor(){
    this.constitution = DnDCharacter.generateAbilityScore();
    this.hitpoints = Math.round(10 + DnDCharacter.getModifierFor(this.constitution));
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  public static generateAbilityScore = (): number => [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10].sort().slice(0,2).reduce((before, current) => before + current);

  public static getModifierFor = (abilityValue: number): number => Math.floor((abilityValue - 10) / 2);
}
