import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// const fs = require("fs");
// const path = require("path");
import * as OpenAI from 'openai';
import { ListnerComponent } from '../listner/listner.component';


@Component({
  selector: 'app-group-of-words',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ListnerComponent],
  templateUrl: './group-of-words.component.html',
  styleUrl: './group-of-words.component.scss'
})
export class GroupOfWordsComponent {
  title = 'demo-app';
  openai = new OpenAI.OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser:true
  });
  private audioContext: AudioContext;
  private source: AudioBufferSourceNode;
  words:string[] = "happy puppy max loves playing with butterflies in the sunshine".split(" ");
  buffermap:any = {};

  //



  selectedWord: any;
  spokenWords:any[] = [];






  //

  constructor(private readonly changeDetector: ChangeDetectorRef,){

    this.audioContext = new AudioContext();
    this.source = this.audioContext.createBufferSource();
    // this.words.forEach(word => this.run(word)) //need this to create audio buffers
    // if ('speechSynthesis' in window) {
    //   const synth = window.speechSynthesis;
    //   const utterance = new SpeechSynthesisUtterance("hi how are you doaing?");
    //   synth.speak(utterance);
    // } else {
    //   console.error('Speech synthesis is not supported in this browser.');
    // }
  }

  async run(word:any){

    let mp3 = await this.openai.audio.speech.create({
      model: "tts-1",
      voice: "echo",
      input: word,
    });
    // const buffer = Buffer.from(await mp3.arrayBuffer());
     mp3.arrayBuffer().then(buf =>{
      console.log("got buffer");
      let context = new (window.AudioContext)();
      console.log(context);
      context.decodeAudioData(buf, (decodedData) => {
        // The decodedData variable now contains the AudioBuffer
        console.log("AudioBuffer:", decodedData);
        this.buffermap[word]=decodedData;

        // You can now use the decoded AudioBuffer for various audio processing tasks
      }, (error) => {
        console.error("Error decoding audio data:", error);
      });
    })

  }

  speak(word:any){
    // this.run(word);
    this.selectedWord = word;
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.buffermap[word];
    this.source.connect(this.audioContext.destination);
    this.source.start(0);
  }

  spoke(word:string){
    console.log(word);
    word = word.trim().toLowerCase();
    if(this.containsIgnoreCase(this.words,word)){
      // this.selectedWord = word;
      this.spokenWords.push(word);
    }
    console.log(this.spokenWords)
    this.changeDetector.detectChanges();
  }
  isSpoken(word:string){
    return this.spokenWords.includes(word.toLowerCase());
  }

   containsIgnoreCase(array:any[], searchString:string) {
    console.log(array,searchString,array.find(item => item == searchString))
    return array.find(item => item == searchString) != null;
  }
}
