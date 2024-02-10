import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SpeechClient } from '@google-cloud/speech';

// import * as speechCommands from '@tensorflow-models/speech-commands';



@Component({
  selector: 'app-listner',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],
  templateUrl: './listner.component.html',
  styleUrl: './listner.component.scss'
})
export class ListnerComponent {
  listening = false;
  private recognition: any;
  transcription = '';
  listnerSubject = new BehaviorSubject<any>(null);
  @Output()
  recognizedText:EventEmitter<any> = new EventEmitter();
  // recognizer: speechCommands.SpeechCommandRecognizer;
  text: string = '';


  constructor(){
    // this.recognizer = speechCommands.create('BROWSER_FFT');
  }

  // ngOnInit() {




  //   this.recognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

  //   if (!this.recognition) {
  //     console.error('SpeechRecognition API not supported in this browser');
  //     return;
  //   }

  //   this.recognition = new this.recognition();

  //   this.recognition.continuous = true;
  //   this.recognition.lang = 'en-US';
  //   this.recognition.interimResults = false;

  //   this.recognition.onstart = () => {
  //     console.log('Speech recognition started');
  //   };

  //   this.recognition.onresult = (event:any) => {
  //     console.log("result here",event)
  //     const transcript = event.results[event.results.length - 1][0].transcript;
  //     this.transcription = transcript;
  //     console.log(this.transcription);
  //     this.recognizedText.emit(this.transcription);
  //     // this.listnerSubject.next(this.transcription);
  //   };

  //   this.recognition.onend = () => {
  //     console.log('Speech recognition ended');
  //   };
  //   this.recognition.onspeechend = () => {
  //     this.recognition.stop();
  //   };
  // }





  async toggleListening() {
    if (this.listening) {
      this.recognition.stop();
      this.listening = false;
    } else {
      this.recognition.start();
      this.listening = true;
    }
  }


  async startRecognition() {
    try{
      // const client = new SpeechClient();

    }catch (e){
      console.log(e)
    }
  //   const audio = {
  //     content: 'audio-content-in-base64' // Replace with actual audio data in base64 format
  //   };
  //   const config = {
  //     encoding: 'LINEAR16' as const, // Ensure encoding is one of the valid enumerated values
  //     sampleRateHertz: 16000,
  //     languageCode: 'en-US'
  //   };
  //   const request = {
  //     audio: audio,
  //     config: config
  //   };

  //   const [response] = await client.recognize(request);

  //   // Check if response.results is not null or undefined before accessing it
  //   if (response && response.results) {
  //     const transcription = response.results.map(result => {
  //       if (result && result.alternatives) {
  //         return result.alternatives[0].transcript;
  //       } else {
  //         console.error('No alternatives found for result:', result);
  //         return '';
  //       }
  //     }).join('\n');
  //     this.transcription = transcription;
  //   } else {
  //     console.error('No recognition results found.');
  //   }
   }

}


/*tensor flow voice commands
try{
  this.recognizer = speechCommands.create('BROWSER_FFT');
}catch (e) {
  console.log(e)
}

console.log("calling method")
await this.recognizer.ensureModelLoaded().then(model => {
  console.log('Model loaded:', model);
}).catch(error => {
  console.error('Error loading model:', error);
});
this.recognizer.listen(async (result) => {
if (typeof result.scores === 'number') {
  console.error('Scores should be a Float32Array but got a number:', result.scores);
  return;
}

const scoresArray = result.scores as Float32Array; // Cast to Float32Array
const wordIndex = scoresArray.indexOf(Math.max(...scoresArray)); // Get the index of the word with the highest score
const word = this.recognizer.wordLabels()[wordIndex]; // Get the word corresponding to the index from the model's vocabulary
this.transcription += word + ' ';
console.log(this.transcription)
}, { probabilityThreshold: 0.75 });

*/
