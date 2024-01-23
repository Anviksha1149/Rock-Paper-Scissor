let computermove = ' ';
            let score = JSON.parse(localStorage.getItem('score')) || {
                win : 0,
                loss : 0,
                tie : 0
            };
            updatescore();
           /* if(score === null){
                score ={
                win : 0,
                loss : 0,
                tie : 0
            };
        }*/
             function playGame(playerMove){
                    pickcomputermove();
                    let result = ' ';
                    if(playerMove === 'Rock'){
                    if(computermove === 'Rock'){
                        result = 'tie';
                    }
                    else if(computermove === 'Paper'){
                        result = 'You loose';
                    }
                    else if(computermove === 'Scissor'){
                        result = 'You winn';
                    }
                }
                     if(playerMove === 'Paper'){
                        if(computermove === 'Paper'){
                            result = 'tie';
                        }
                        else if(computermove === 'Scissor'){
                            result = 'You loose';
                        }
                        else if(computermove === 'Rock'){
                            result = 'You winn';
                        }
                }
                if(result === 'You winn'){
                    score.win +=1;
                }
                else if(result ==='You loose'){
                    score.loss +=1;
                }
                else if(result === 'tie'){
                    score.tie +=1;
                }
                localStorage.setItem('score',JSON.stringify(score));//storing the scores in a local storage 
                    updatescore();
                    document.querySelector('.js-result').innerHTML=result;
                    document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png " class="move-icon">
            <img src="images/${computermove}-emoji.png" class="move-icon">
            Computer`;
                }
                function updatescore(){
                    document.querySelector('.js-score').innerHTML=`Win : ${score.win} , loss: ${score.loss} , Tie: ${score.tie}`;

                }

                function pickcomputermove(){
                    let randomnumber = Math.random();
                        if(randomnumber >=0 && randomnumber < 1/3){
                            computermove = 'Rock';
                        }
                        else if(randomnumber > 1/3 && randomnumber < 2/3){
                            computermove = 'Paper';

                        }
                        else if(randomnumber >2/3 && computeermove<1){
                            computermove = 'Scissor';
                        }
                        return ;
                    }