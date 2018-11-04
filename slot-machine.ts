class SlotMachine {
  coin: number;

  constructor() {
    this.coin = 0;
  }

  flip(): boolean {
    return (Math.random() < 0.5);
  }

  play(): void {
    this.coin++;
    if (this.flip(), this.flip(), this.flip()) {
      console.log(`Congratulations!!! You won ${this.coin} coins!!.`);
      this.coin = 0;
    }
    else {
      console.log(`Good luck next time!!`);
    }
  }
}

const machine1: SlotMachine = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
