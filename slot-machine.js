var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coin = 0;
    }
    SlotMachine.prototype.flip = function () {
        return (Math.random() < 0.5);
    };
    SlotMachine.prototype.play = function () {
        this.coin++;
        if (this.flip(), this.flip(), this.flip()) {
            console.log("Congratulations!!! You won " + this.coin + " coins!!.");
            this.coin = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
