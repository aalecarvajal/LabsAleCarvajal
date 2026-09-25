export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      this.experiencePoints = 0;
    }

    gainExperience(amount){
      this.experiencePoints = (amount + this.experiencePoints)
      while (this.experiencePoints >= 30) {
        this.level++;
        this.experiencePoints -= 30;
      
      }      
    }

    info() {
      return this.name + " has reached Level " + this.level + "!"
    }
    
          
}
  
  