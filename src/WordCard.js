import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const[state, setState] = useState(prepareStateFromWord(props.value))
    const reset = () => window.location.reload();

    const activationHandler = c => { 

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length === state.word.length){
            if(guess === state.word){
                alert('Yeah! The correct word is ' + state.word + '.');
                setState({...state, guess: '', completed: true ,attempt: 1})
            }else{
                alert('Try again.');
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }
    return (
        <div>
            <div>
                { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
                }
            </div>
            <div class="show">
                <h3>Your word is</h3>
                <p>{state.guess}</p>
                <p>attempt : {state.attempt}</p>
                <button class="reset" onClick={reset}><span> Reset  </span></button>
            </div>
        </div>
    );
}
