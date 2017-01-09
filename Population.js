function Population() {
    this.rockets = [];
    this.matingpool = [];
    this.noOfRockets = populationSize;
    for (var i = 0; i < this.noOfRockets; i++) {
        this.rockets[i] = new Rocket();
    }

    this.create = function () {
        for (var i = 0; i < this.noOfRockets; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }

    }

    this.evalPopulation = function () {
        var maximumFitness = 0;
        var  averageFitness=0;
//Calculate Maximum Fitness and also calculate fitness for each rocket
        for (var i = 0; i < this.noOfRockets; i++) {
            this.rockets[i].calcFitness();
            averageFitness=averageFitness+this.rockets[i].fitness;
            if (this.rockets[i].fitness > maximumFitness) {
                maximumFitness = this.rockets[i].fitness;
            }
        }
        averageFitness=averageFitness/this.noOfRockets
            bestP.html("max-fitness:"+maximumFitness);
        averageP.html("averageFitness :"+averageFitness);
//Normalize fitness
        for (var i = 0; i < this.noOfRockets; i++) {
            if (maximumFitness != 0) {
                this.rockets[i].fitness = this.rockets[i].fitness / maximumFitness;
            }
        }

//Create Mating pool based on fitness score        
        this.matingpool = [];
        for (var i = 0; i < this.noOfRockets; i++) {
            var n = this.rockets[i].fitness * 100;
            for (var j = 0; j < n; j++) {
                this.matingpool.push(this.rockets[i]);
            }

        }
    }

//Do reproduction from objects in mating pool and create next generation of Rockets
    this.selection = function () {
        var newPopulation = [];
        for (var i = 0; i < populationSize; i++) {
            var parentOne = random(this.matingpool).dna;//Random element from matingpool
            var parentTwo = random(this.matingpool).dna;
            var child = parentOne.crossOver(parentTwo);
            child.mutation();
            newPopulation[i]=new Rocket(child);
        }
        this.rockets=newPopulation;
    }

}